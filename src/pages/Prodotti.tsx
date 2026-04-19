import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import PageSEO from "@/components/PageSEO";
import angurieImg from "@/assets/angurie-originale.jpg";
import zuccheImg from "@/assets/zucche-originale2.jpg";
import meloniImg from "@/assets/meloni-cantalupo.jpg";
import anguriaBilanciaImg from "@/assets/anguria-bilancia.jpg";
import meloniOrigImg from "@/assets/meloni-originale2.jpg";
import meloniOriginaleImg from "@/assets/meloni-originale.jpg";
import meloniAngurieImg from "@/assets/meloni-angurie.jpg";
import angurieCassoneImg from "@/assets/angurie-cassone.jpg";
import anguriaGiganteImg from "@/assets/anguria-gigante.jpg";
import meloniRetatiImg from "@/assets/meloni-retati.jpg";
import meloniLisciImg from "@/assets/meloni-lisci-cassetta.jpg";
import meloniRetatiCassettaImg from "@/assets/meloni-retati-cassetta.jpg";
import zuccheMantovaneImg from "@/assets/zucche-mantovane.jpg";
import zuccheArancioniImg from "@/assets/zucche-arancioni.jpg";
import zuccheCassettaVerdeImg from "@/assets/zucche-cassetta-verde.jpg";
import zuccheHalloweenImg from "@/assets/zucche-halloween.jpg";
import zuccheMantovaneScatolaImg from "@/assets/zucche-mantovane-scatola.jpg";
import { Button } from "@/components/ui/button";
import { Phone, Leaf, Sun, Droplets, ThermometerSun, Scale, Truck } from "lucide-react";

const products = [
  {
    id: "angurie",
    title: "Angurie",
    subtitle: "Dolcezza e freschezza dal campo",
    img: angurieImg,
    alt: "Coltivazione angurie - Azienda Agricola Farina",
    description:
      "Le nostre angurie sono il frutto di una coltivazione attenta e appassionata, che unisce tradizione e innovazione. Cresciute nei fertili terreni di Portomaggiore, vengono raccolte al punto perfetto di maturazione per garantire dolcezza, croccantezza e succosità.",
    details: [
      { icon: Sun, label: "Stagione", value: "Giugno – Settembre" },
      { icon: Scale, label: "Peso medio", value: "8 – 15 kg" },
      { icon: Droplets, label: "Irrigazione", value: "Controllata e sostenibile" },
      { icon: Leaf, label: "Coltivazione", value: "Metodi tradizionali" },
    ],
    varieties: [
      { name: "Crimson Sweet", desc: "Classica anguria a polpa rossa, molto dolce e croccante. Buccia verde chiaro con striature scure." },
      { name: "Sugar Baby", desc: "Formato più piccolo e rotondo, ideale per famiglie. Polpa intensa e semi ridotti." },
      { name: "Dumara", desc: "Anguria allungata dalla polpa compatta e zuccherina, perfetta per la vendita all'ingrosso." },
    ],
    gallery: [anguriaBilanciaImg, meloniAngurieImg, angurieCassoneImg, anguriaGiganteImg],
  },
  {
    id: "meloni",
    title: "Meloni",
    subtitle: "Profumo e sapore della tradizione emiliana",
    img: meloniImg,
    alt: "Meloni freschi dell'Azienda Agricola Farina",
    description:
      "I nostri meloni vengono coltivati con la massima cura, seguendo il ciclo naturale delle stagioni. La raccolta avviene solo quando il frutto raggiunge la maturazione ideale, garantendo un aroma intenso e un sapore inconfondibile che richiama la tradizione della pianura ferrarese.",
    details: [
      { icon: Sun, label: "Stagione", value: "Giugno – Agosto" },
      { icon: Scale, label: "Peso medio", value: "1 – 3 kg" },
      { icon: ThermometerSun, label: "Clima", value: "Temperato-caldo ideale" },
      { icon: Leaf, label: "Terreno", value: "Fertile pianura padana" },
    ],
    varieties: [
      { name: "Retato", desc: "Il classico melone italiano con buccia reticolata e polpa arancione, dolcissimo e profumato." },
      { name: "Cantalupo", desc: "Polpa arancio intenso, molto aromatico. Perfetto da gustare fresco nelle giornate estive." },
      { name: "Liscio", desc: "Buccia liscia e polpa succosa. Varietà pregiata dal sapore delicato e raffinato." },
    ],
    gallery: [meloniOrigImg, meloniOriginaleImg, meloniLisciImg, meloniRetatiCassettaImg],
  },
  {
    id: "zucche",
    title: "Zucche",
    subtitle: "Versatilità e gusto per ogni stagione",
    img: zuccheImg,
    alt: "Zucche coltivate dall'Azienda Agricola Farina",
    description:
      "Le nostre zucche rappresentano l'eccellenza della produzione autunnale dell'azienda. Coltivate con passione nei campi di Portomaggiore, offrono polpa compatta e saporita, ideale per tortelli, risotti, vellutate e dolci della tradizione emiliana.",
    details: [
      { icon: Sun, label: "Stagione", value: "Settembre – Febbraio" },
      { icon: Scale, label: "Peso medio", value: "2 – 10 kg" },
      { icon: Truck, label: "Distribuzione", value: "Mercati ortofrutticoli" },
      { icon: Leaf, label: "Conservazione", value: "Lunga durata naturale" },
    ],
    varieties: [
      { name: "Delica", desc: "Polpa compatta arancione e sapore dolce intenso. La più amata per tortelli e risotti." },
      { name: "Mantovana", desc: "Grande e costoluta, dalla polpa farinosa e profumata. Tradizione della cucina emiliana." },
      { name: "Butternut", desc: "Forma allungata a campana, polpa burrosa e delicata. Perfetta per vellutate e al forno." },
    ],
    gallery: [zuccheMantovaneImg, zuccheArancioniImg, zuccheHalloweenImg, zuccheMantovaneScatolaImg],
  },
];

const Prodotti = () => {
  React.useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, []);

  return (
  <>
    <PageSEO
      title="Angurie, Meloni e Zucche all'Ingrosso — Ferrara"
      description="Vendita all'ingrosso di angurie (cocomeri), meloni e zucche coltivati nel ferrarese. Forniture per rivenditori, GDO e mercati ortofrutticoli."
      path="/prodotti"
    />
    <Navbar />
    <main className="pt-16">
      {/* Hero */}
      <section className="py-16 md:py-24 text-center" style={{ background: "var(--section-gradient)" }}>
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <p className="text-secondary font-sans text-sm tracking-[0.2em] uppercase mb-3">I Nostri Prodotti</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              Angurie, Meloni e Zucche dal Ferrarese
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
              Coltiviamo angurie (cocomeri), meloni e zucche nei terreni tra Argenta e Portomaggiore,
              destinati a rivenditori, GDO e mercati ortofrutticoli.
            </p>
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full">
              Vendita esclusivamente all'ingrosso
            </span>
          </ScrollReveal>
        </div>
      </section>

      {/* Product sections */}
      {products.map((p, idx) => (
        <section key={p.id} id={p.id} className="py-20 md:py-28" style={idx % 2 === 1 ? { background: "var(--section-gradient)" } : undefined}>
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? "" : ""}`}>
              {/* Image */}
              <ScrollReveal className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full object-cover aspect-[4/3]"
                  />
                </div>
                {/* Gallery */}
                {p.gallery.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    {p.gallery.map((g, i) => (
                      <div key={i} className="rounded-lg overflow-hidden">
                        <img
                          src={g}
                          alt={`${p.title} - foto ${i + 2}`}
                          loading="lazy"
                          width={400}
                          height={300}
                          className="w-full h-40 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal delay={200} className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-secondary font-sans text-sm tracking-[0.2em] uppercase mb-2">{p.subtitle}</p>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">{p.title}</h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">{p.description}</p>

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {p.details.map((d) => (
                    <div key={d.label} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50">
                      <d.icon className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">{d.label}</p>
                        <p className="text-sm font-medium text-foreground">{d.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Varieties */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Le nostre varietà</h3>
                <div className="space-y-3">
                  {p.varieties.map((v) => (
                    <div key={v.name} className="p-4 rounded-lg bg-card border border-border/50">
                      <h4 className="font-sans font-semibold text-foreground text-sm mb-1">{v.name}</h4>
                      <p className="text-muted-foreground text-sm">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Interessato ai nostri prodotti?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Contattaci per preventivi e forniture all'ingrosso di angurie, meloni e zucche.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-sans text-base px-8" asChild>
                <a href="tel:+390532814411"><Phone className="w-4 h-4 mr-2" /> Chiama Ora</a>
              </Button>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-sans text-base px-8" asChild>
                <a href="/contatti">Contattaci</a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
    <FooterSection />
    <WhatsAppButton />
  </>
  );
};

export default Prodotti;
