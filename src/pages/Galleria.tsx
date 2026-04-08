import { useState } from "react";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

import angurieOriginale from "@/assets/angurie-originale.jpg";
import anguriaPeso from "@/assets/anguria-peso.jpg";
import meloniOriginale from "@/assets/meloni-originale.jpg";
import meloniOriginale2 from "@/assets/meloni-originale2.jpg";
import meloniAngurie from "@/assets/meloni-angurie.jpg";
import zuccheOriginale from "@/assets/zucche-originale.jpg";
import zuccheOriginale2 from "@/assets/zucche-originale2.jpg";
import legnaOriginale from "@/assets/legna-originale.jpg";
import heroFarm from "@/assets/hero-farm.jpg";

const categories = ["Tutte", "Angurie", "Meloni", "Zucche", "Legna", "Azienda"] as const;
type Category = (typeof categories)[number];

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
}

const images: GalleryImage[] = [
  { src: angurieOriginale, alt: "Angurie fresche nel campo", category: "Angurie" },
  { src: anguriaPeso, alt: "Anguria sulla bilancia - controllo qualità", category: "Angurie" },
  { src: meloniAngurie, alt: "Meloni e angurie pronti per la vendita", category: "Angurie" },
  { src: meloniOriginale, alt: "Meloni lisci appena raccolti", category: "Meloni" },
  { src: meloniOriginale2, alt: "Selezione dei meloni migliori", category: "Meloni" },
  { src: zuccheOriginale, alt: "Zucche di diverse varietà", category: "Zucche" },
  { src: zuccheOriginale2, alt: "Zucche pronte per la distribuzione", category: "Zucche" },
  { src: legnaOriginale, alt: "Legna da ardere tagliata e pronta", category: "Legna" },
  { src: heroFarm, alt: "Vista dell'azienda agricola", category: "Azienda" },
];

const Galleria = () => {
  const [filter, setFilter] = useState<Category>("Tutte");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "Tutte" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Galleria</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Scopri i nostri prodotti e la nostra azienda attraverso le immagini
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border sticky top-16 z-40 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <ScrollReveal key={img.src + filter} delay={i * 80}>
                <button
                  onClick={() => setLightbox(images.indexOf(img))}
                  className="group relative w-full overflow-hidden rounded-xl aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-left">
                      <span className="text-xs font-medium text-white/80 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        {img.category}
                      </span>
                      <p className="text-white text-sm font-medium mt-1">{img.alt}</p>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            aria-label="Chiudi"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-white/80 text-sm text-center">{images[lightbox].alt}</p>
        </div>
      )}

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Galleria;
