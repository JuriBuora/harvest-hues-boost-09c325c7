import { Link } from "react-router-dom";
import angurieImg from "@/assets/angurie-originale.jpg";
import zuccheImg from "@/assets/zucche-originale.jpg";
import meloniImg from "@/assets/meloni-originale.jpg";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    title: "Angurie",
    desc: "Angurie dolci e succose, coltivate con cura seguendo metodi tradizionali e sostenibili per garantire il massimo della freschezza.",
    img: angurieImg,
    alt: "Coltivazione angurie - Azienda Agricola Farina",
    link: "/prodotti#angurie",
  },
  {
    title: "Zucche",
    desc: "Zucche selezionate di diverse varietà, perfette per la cucina tradizionale e ideali per i mercati ortofrutticoli.",
    img: zuccheImg,
    alt: "Zucche dell'Azienda Agricola Farina",
    link: "/prodotti#zucche",
  },
  {
    title: "Meloni",
    desc: "Meloni profumati e maturi al punto giusto, risultato di un'attenta lavorazione in campo e selezione accurata.",
    img: meloniImg,
    alt: "Meloni freschi dell'Azienda Agricola Farina",
    link: "/prodotti#meloni",
  },
];

const ProductsSection = () => (
  <section id="prodotti" className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-secondary font-sans text-sm tracking-[0.2em] uppercase mb-3">I Nostri Prodotti</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Freschi dal campo
          </h2>
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
            Vendita esclusivamente all'ingrosso
          </span>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 150}>
            <Link to={p.link} className="block h-full">
              <div className="group rounded-xl overflow-hidden bg-background border border-border/50 hover:shadow-xl transition-all duration-300 h-full">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
