import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/Societ%C3%A0+Agricola+Farina+2.0+s.s./@44.6531603,11.867807,17z/data=!4m8!3m7!1s0x477e14e57c623c59:0xa2bf230d792dc501!8m2!3d44.6531566!4d11.8726779!9m1!1b1!16s%2Fg%2F1vspqbn6";

const testimonials = [
  { name: "Sandro Del Vecchio", text: "Gentilissimi e prodotti buonissimi" },
  { name: "Elisabetta Milicia", text: "Ottime cocomeri" },
  { name: "Antonella Montanari", text: "Favolosi" },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-secondary font-sans text-sm tracking-[0.2em] uppercase mb-3">Testimonianze</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Dicono di noi
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 150}>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="bg-background rounded-xl p-8 border border-border/50 text-center hover:shadow-lg transition-shadow h-full block group">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground italic font-serif text-lg mb-4">"{t.text}"</p>
              <p className="text-muted-foreground text-sm font-sans font-medium">{t.name}</p>
              <p className="text-muted-foreground/60 text-xs font-sans mt-1 group-hover:text-primary transition-colors">Google Reviews ↗</p>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
