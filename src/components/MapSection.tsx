import ScrollReveal from "./ScrollReveal";

const MapSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="text-secondary font-sans text-sm tracking-[0.2em] uppercase mb-3">Dove Siamo</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Vieni a trovarci
          </h2>
          <p className="text-muted-foreground text-lg">Via Rangona, 54/A — 44015 Bando di Argenta (FE)</p>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg">
          <iframe
            title="Posizione Azienda Agricola Farina"
            src="https://www.google.com/maps?q=Via+Rangona+54,+44015+Bando+di+Argenta,+FE,+Italy&z=14&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default MapSection;
