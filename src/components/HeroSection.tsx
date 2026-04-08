import heroImg from "@/assets/meloni-angurie.jpg";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Prodotti dell'Azienda Agricola Farina - meloni e angurie"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <p className="text-primary-foreground/80 font-sans text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
        Bando di Argenta · Ferrara
      </p>
      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
        Azienda Agricola Farina
      </h1>
      <p className="text-primary-foreground/90 text-lg md:text-xl font-light mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        Angurie, meloni, zucche e legna da ardere — dal 1975 coltiviamo con passione
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-sans text-base px-8" asChild>
          <a href="/prodotti">Scopri i Prodotti</a>
        </Button>
        <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-sans text-base px-8" asChild>
          <a href="tel:+390532814411">
            <Phone className="w-4 h-4 mr-2" /> Chiama Ora
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
