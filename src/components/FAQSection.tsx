import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title?: string;
  eyebrow?: string;
  items: FAQItem[];
  /** Genera JSON-LD FAQPage solo se la pagina ha un'unica FAQ principale */
  withJsonLd?: boolean;
}

const FAQSection = ({
  title = "Domande Frequenti",
  eyebrow = "FAQ",
  items,
  withJsonLd = false,
}: FAQSectionProps) => {
  const jsonLd = withJsonLd
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((it) => ({
          "@type": "Question",
          name: it.q,
          acceptedAnswer: { "@type": "Answer", text: it.a },
        })),
      }
    : null;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-secondary font-sans text-sm tracking-[0.2em] uppercase mb-3">
              {eyebrow}
            </p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground">
              {title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-serif text-base md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </div>
    </section>
  );
};

export default FAQSection;
