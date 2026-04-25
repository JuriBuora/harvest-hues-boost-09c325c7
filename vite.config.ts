import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { sitePages } from "./scripts/site-pages.mjs";

// https://vitejs.dev/config/
export default defineConfig(() => ({
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
      input: Object.fromEntries(
        sitePages.map((page) => [page.entryName, path.resolve(__dirname, page.htmlFile)]),
      ),
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
