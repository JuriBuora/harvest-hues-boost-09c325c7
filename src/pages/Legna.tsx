import React from "react";
import { Flame, Truck, Package, Phone, TreeDeciduous, Ruler, ThermometerSun } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

import legnaOriginale from "@/assets/legna-originale.jpg";
import legnaCumuli from "@/assets/legna-cumuli.jpg";
import legnaTronchi from "@/assets/legna-tronchi.jpg";
import aziendaAerea from "@/assets/azienda-aerea.jpg";
import magazzinoEsterno from "@/assets/magazzino-esterno.jpg";

const features = [
  { icon: Flame, title: "Legna Selezionata", desc: "Asciutta e stagionata, ideale per stufe, camini e forni. Combustione efficiente e lunga durata." },
  { icon: Truck, title: "Consegna a Domicilio", desc: "Consegna rapida entro 50 km dalla nostra sede di Bando di Argenta. Ordine minimo 200/250€." },
  { icon: Package, title: "Sempre Disponibile", desc: "Il nostro magazzino è sempre rifornito per soddisfare ogni richiesta, in ogni stagione." },
  { icon: TreeDeciduous, title: "Essenze Miste", desc: "Proponiamo legna di diverse essenze, selezionate per garantire il miglior rendimento calorico." },
  { icon: Ruler, title: "Taglio su Misura", desc: "Legna tagliata nelle dimensioni più adatte alle vostre esigenze: da 25 a 50 cm." },
  { icon: ThermometerSun, title: "Stagionatura Naturale", desc: "La nostra legna viene stagionata all'aria aperta per almeno 12 mesi, garantendo bassa umidità." },
];

const gallery = [
  { src: legnaOriginale, alt: "Legna da ardere tagliata e pronta all'uso" },
  { src: legnaCumuli, alt: "Cumuli di legna nel piazzale aziendale" },
  { src: legnaTronchi, alt: "Tronchi e legna da lavorare" },
  { src: aziendaAerea, alt: "Vista aerea dell'azienda agricola Farina" },
  { src: magazzinoEsterno, alt: "Magazzino e piazzale aziendale" },
];

const Legna = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="text-primary-foreground/60 font-sans text-sm tracking-[0.2em] uppercase mb-3">Servizio Invernale</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Legna da Ardere</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg mb-8">
              Legna selezionata, stagionata e pronta all'uso. Consegna a domicilio entro 50 km
              dalla nostra sede a Bando di Argenta.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="font-sans" asChild>
                <a href="tel:+393381571439">
                  <Phone className="w-4 h-4 mr-2" />
                  Ordina Ora
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-sans" asChild>
                <a href="https://wa.me/+393667701214" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Caratteristiche */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-secondary font-sans text-sm tracking-[0.2em] uppercase mb-3">Perché Sceglierci</p>
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-4">
                Qualità e Servizio Garantiti
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                La nostra esperienza nella gestione del territorio ci permette di offrire legna di prima qualità,
                con un servizio di consegna rapido e puntuale.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Info Ordini */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="rounded-xl overflow-hidden">
                <img
                  src={legnaOriginale}
                  alt="Legna da ardere - Azienda Agricola Farina"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl aspect-[4/3]"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <p className="text-secondary font-sans text-sm tracking-[0.2em] uppercase mb-3">Informazioni</p>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Come Ordinare
                </h2>
                <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                  <p>
                    Ordinare la vostra legna da ardere è semplice: <strong className="text-foreground">chiamateci</strong> o
                    inviate un <strong className="text-foreground">messaggio WhatsApp</strong> e concorderemo
                    quantità, taglio e data di consegna.
                  </p>
                  <div className="bg-card border border-border rounded-xl p-5 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Ordine minimo</span>
                      <span className="font-semibold text-foreground">200 / 250 €</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Raggio consegna</span>
                      <span className="font-semibold text-foreground">50 km</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Disponibilità</span>
                      <span className="font-semibold text-foreground">Tutto l'anno</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tagli disponibili</span>
                      <span className="font-semibold text-foreground">25 – 50 cm</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans" asChild>
                    <a href="tel:+393381571439">
                      <Phone className="w-4 h-4 mr-2" />
                      Chiama Ora
                    </a>
                  </Button>
                  <Button variant="outline" className="font-sans" asChild>
                    <Link to="/contatti">Contattaci</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Galleria */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-secondary font-sans text-sm tracking-[0.2em] uppercase mb-3">Le Nostre Immagini</p>
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground">
                Legna e Strutture
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {gallery.map((img, i) => (
              <ScrollReveal key={img.alt} delay={i * 100}>
                <div className="rounded-xl overflow-hidden aspect-[4/3]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-muted-foreground text-xs mt-2 text-center">{img.alt}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Legna;
