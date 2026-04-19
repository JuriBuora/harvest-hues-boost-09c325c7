import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  build: {
    // Multi-page build so each route has its own HTML with correct static meta tags
    // for crawlers/social scrapers that don't execute JS.
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        prodotti: path.resolve(__dirname, "prodotti/index.html"),
        "chi-siamo": path.resolve(__dirname, "chi-siamo/index.html"),
        contatti: path.resolve(__dirname, "contatti/index.html"),
        galleria: path.resolve(__dirname, "galleria/index.html"),
        legna: path.resolve(__dirname, "legna/index.html"),
        "privacy-policy": path.resolve(__dirname, "privacy-policy/index.html"),
        "cookie-policy": path.resolve(__dirname, "cookie-policy/index.html"),
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
