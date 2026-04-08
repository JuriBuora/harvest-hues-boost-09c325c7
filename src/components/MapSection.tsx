const MapSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-secondary font-sans text-sm tracking-[0.2em] uppercase mb-3">Dove Siamo</p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
          Vieni a trovarci
        </h2>
        <p className="text-muted-foreground text-lg">Via Rangona, 54/A — 44015 Portomaggiore (FE)</p>
      </div>
      <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg">
        <iframe
          title="Posizione Azienda Agricola Farina"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.5!2d11.8069!3d44.6983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQxJzU0LjAiTiAxMcKwNDgnMjQuOCJF!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit&q=Via+Rangona+54+Portomaggiore+FE+Italy"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>
    </div>
  </section>
);

export default MapSection;
