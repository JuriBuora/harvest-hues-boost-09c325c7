import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import PageSEO from "@/components/PageSEO";
import FacebookPageTimeline from "@/components/FacebookPageTimeline";

// Angurie

import meloniAngurie from "@/assets/meloni-angurie.jpg";
import angurieCassette from "@/assets/angurie-cassette.jpg";
import angurieMagazzino from "@/assets/angurie-magazzino.jpg";
import angurieCassone from "@/assets/angurie-cassone.jpg";
import anguriaGigante from "@/assets/anguria-gigante.jpg";
import angurieCassoneRosso from "@/assets/angurie-cassone-rosso.jpg";
import angurieStriate from "@/assets/angurie-striate.jpg";
import anguriaBilancia from "@/assets/anguria-bilancia.jpg";
import angurieNastro from "@/assets/angurie-nastro.jpg";

// Meloni
import meloniOriginale from "@/assets/meloni-originale.jpg";
import meloniRetati from "@/assets/meloni-retati.jpg";
import meloniLisciCassetta from "@/assets/meloni-lisci-cassetta.jpg";
import meloniRetatiCassetta from "@/assets/meloni-retati-cassetta.jpg";

// Zucche
import zuccheOriginale from "@/assets/zucche-originale.jpg";
import zuccheOriginale2 from "@/assets/zucche-originale2.jpg";
import zuccheButternut from "@/assets/zucche-butternut.jpg";
import zuccheTonde from "@/assets/zucche-tonde.jpg";
import zuccheViolina from "@/assets/zucche-violina.jpg";
import zuccheCassone from "@/assets/zucche-cassone.jpg";
import zuccheMantovane from "@/assets/zucche-mantovane.jpg";

import zuccheCassettaVerde from "@/assets/zucche-cassetta-verde.jpg";
import zuccheMantovaneScatola from "@/assets/zucche-mantovane-scatola.jpg";
import zuccheHalloween from "@/assets/zucche-halloween.jpg";
import zuccheHalloweenPallet from "@/assets/zucche-halloween-pallet.jpg";
import zuccheHalloweenEspositore from "@/assets/zucche-halloween-espositore.jpg";

// Legna
import legnaOriginale from "@/assets/legna-originale.jpg";

import legnaCumuli from "@/assets/legna-cumuli.jpg";
import legnaTronchi from "@/assets/legna-tronchi.jpg";

// Azienda
import premioQualita from "@/assets/premio-qualita.jpg";
import premioFiera from "@/assets/premio-fiera.jpg";
import camionFarina from "@/assets/camion-farina.jpg";
import magazzinoEsterno from "@/assets/magazzino-esterno.jpg";
import aziendaAerea from "@/assets/azienda-aerea.jpg";
import logoFarina from "@/assets/logo-farina.jpg";

const categories = ["Tutte", "Angurie", "Meloni", "Zucche", "Legna", "Azienda"] as const;
type Category = (typeof categories)[number];

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
}

const images: GalleryImage[] = [
  // Angurie
  
  { src: anguriaBilancia, alt: "Anguria gigante sulla bilancia Berkel", category: "Angurie" },
  { src: angurieCassone, alt: "Angurie con marchio Farina nelle cassette", category: "Angurie" },
  { src: anguriaGigante, alt: "Anguria gigante - orgoglio aziendale", category: "Angurie" },
  { src: angurieCassette, alt: "Angurie nelle cassette blu", category: "Angurie" },
  { src: angurieMagazzino, alt: "Angurie in magazzino pronte per la spedizione", category: "Angurie" },
  { src: angurieCassoneRosso, alt: "Angurie nel cassone rosso Farina", category: "Angurie" },
  { src: angurieStriate, alt: "Angurie striate con etichetta Farina", category: "Angurie" },
  { src: angurieNastro, alt: "Nastro trasportatore per la selezione angurie", category: "Angurie" },
  { src: meloniAngurie, alt: "Meloni e angurie pronti per la vendita", category: "Angurie" },
  // Meloni
  { src: meloniOriginale, alt: "Meloni lisci appena raccolti", category: "Meloni" },
  { src: meloniRetati, alt: "Meloni retati pronti per la vendita", category: "Meloni" },
  { src: meloniLisciCassetta, alt: "Meloni lisci nella cassetta verde", category: "Meloni" },
  { src: meloniRetatiCassetta, alt: "Meloni retati in cassetta", category: "Meloni" },
  // Zucche
  { src: zuccheOriginale, alt: "Zucche di diverse varietà", category: "Zucche" },
  { src: zuccheOriginale2, alt: "Zucche pronte per la distribuzione", category: "Zucche" },
  
  { src: zuccheCassettaVerde, alt: "Zucche nella cassetta verde Farina", category: "Zucche" },
  { src: zuccheMantovane, alt: "Zucche mantovane con marchio Farina", category: "Zucche" },
  { src: zuccheMantovaneScatola, alt: "Zucche mantovane confezionate in scatola", category: "Zucche" },
  { src: zuccheButternut, alt: "Zucche butternut", category: "Zucche" },
  { src: zuccheTonde, alt: "Zucche tonde selezionate", category: "Zucche" },
  { src: zuccheViolina, alt: "Zucche violina", category: "Zucche" },
  { src: zuccheCassone, alt: "Zucche in cassone di legno", category: "Zucche" },
  { src: zuccheHalloween, alt: "Zucche Halloween in rete", category: "Zucche" },
  { src: zuccheHalloweenPallet, alt: "Zucche Halloween su pallet pronte per la spedizione", category: "Zucche" },
  { src: zuccheHalloweenEspositore, alt: "Espositore zucche Halloween", category: "Zucche" },
  // Legna
  { src: legnaOriginale, alt: "Legna da ardere tagliata e pronta", category: "Legna" },
  
  { src: legnaCumuli, alt: "Cumuli di legna nel piazzale aziendale", category: "Legna" },
  { src: legnaTronchi, alt: "Tronchi e legna da lavorare", category: "Legna" },
  // Azienda
  { src: aziendaAerea, alt: "Vista aerea dell'azienda agricola Farina", category: "Azienda" },
  { src: camionFarina, alt: "Camion aziendale Farina R.", category: "Azienda" },
  { src: magazzinoEsterno, alt: "Magazzino e piazzale aziendale", category: "Azienda" },
  { src: logoFarina, alt: "Logo ufficiale Az. Agricola Farina R.", category: "Azienda" },
  { src: premioQualita, alt: "Premio qualità ricevuto dall'azienda", category: "Azienda" },
  { src: premioFiera, alt: "Riconoscimento in fiera", category: "Azienda" },
];

const Galleria = () => {
  const [filter, setFilter] = useState<Category>("Tutte");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "Tutte" ? images : images.filter((img) => img.category === filter);

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightbox !== null) setLightbox((lightbox + 1) % images.length);
  };
  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightbox !== null) setLightbox((lightbox - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Galleria — Le Nostre Coltivazioni nel Ferrarese"
        description="Galleria fotografica originale della Società Agricola Farina 2.0: campi, raccolto e prodotti tra Argenta e Portomaggiore (FE)."
        path="/galleria"
      />
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

      {/* Grid + Facebook */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-[1fr_360px] lg:gap-8">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((img, i) => (
                  <ScrollReveal key={img.src + filter} delay={i * 60}>
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

            <aside className="mt-10 lg:mt-0">
              <div className="lg:sticky lg:top-24">
                <FacebookPageTimeline
                  pageUrl="https://www.facebook.com/Azienda-Agricola-Farina-Roberto-100057542707078"
                  pageName="Societa Agricola Farina 2.0"
                />
              </div>
            </aside>
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
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
            aria-label="Precedente"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
            aria-label="Successiva"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-white/80 text-sm text-center">
            {images[lightbox].alt} — {lightbox + 1}/{images.length}
          </p>
        </div>
      )}

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Galleria;
