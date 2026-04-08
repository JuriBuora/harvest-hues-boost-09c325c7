import { Star } from "lucide-react";

const testimonials = [
  { name: "Sandro Del Vecchio", text: "Gentilissimi e prodotti buonissimi" },
  { name: "Elisabetta Milicia", text: "Ottime cocomeri" },
  { name: "Antonella Montanari", text: "Favolosi" },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-secondary font-sans text-sm tracking-[0.2em] uppercase mb-3">Testimonianze</p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
          Dicono di noi
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-background rounded-xl p-8 border border-border/50 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-foreground italic font-serif text-lg mb-4">"{t.text}"</p>
            <p className="text-muted-foreground text-sm font-sans font-medium">{t.name}</p>
            <p className="text-muted-foreground/60 text-xs font-sans mt-1">Google Reviews</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
