import legnaImg from "@/assets/legna-originale.jpg";
import { Truck, Flame, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: Flame, title: "Legna Selezionata", desc: "Asciutta e stagionata, ideale per stufe e camini. Combustione efficiente e lunga durata." },
  { icon: Truck, title: "Consegna a Domicilio", desc: "Consegna rapida entro 50 km da Portomaggiore. Ordine minimo 200/250€." },
  { icon: Package, title: "Sempre Disponibile", desc: "Magazzino sempre rifornito per soddisfare le richieste in ogni stagione." },
];

const FirewoodSection = () => (
  <section id="legna" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="rounded-xl overflow-hidden">
            <img
              src={legnaImg}
              alt="Legna da ardere - Azienda Agricola Farina"
              loading="lazy"
              width={800}
              height={800}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div>
            <p className="text-secondary font-sans text-sm tracking-[0.2em] uppercase mb-3">Servizio Extra</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Legna da Ardere
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Forniamo legna da ardere stagionata e pronta all'uso, con consegna a domicilio entro 50 km da Portomaggiore. 
              Ideale per riscaldamento domestico o attività commerciali.
            </p>
            <div className="space-y-6 mb-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">{f.title}</h3>
                    <p className="text-muted-foreground text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans" asChild>
              <a href="tel:+393381571439">Ordina Ora</a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default FirewoodSection;
