import { Leaf, Heart, Award } from "lucide-react";

const features = [
  { icon: Heart, title: "Passione", desc: "Una dedizione tramandata da generazioni per la terra e i suoi frutti." },
  { icon: Leaf, title: "Sostenibilità", desc: "Metodi di coltivazione tradizionali e rispettosi dell'ambiente." },
  { icon: Award, title: "Qualità", desc: "Prodotti selezionati con cura per garantire eccellenza." },
];

const AboutSection = () => (
  <section id="chi-siamo" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-secondary font-sans text-sm tracking-[0.2em] uppercase mb-3">La Nostra Storia</p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
          Dal 1975, con passione
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          <strong className="text-foreground">Azienda Agricola Farina</strong>, con sede a Bando di Portomaggiore in provincia di Ferrara, 
          nasce a metà degli anni '70 grazie a Roberto Farina. Specializzata nella coltivazione di angurie e meloni, 
          si è evoluta nei primi anni 2000 con l'ingresso del figlio Marcello, ampliando la produzione alla zucca e 
          alla legna da ardere.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.title} className="text-center p-8 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
