import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { cn } from "@/lib/utils";

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
  const [openItem, setOpenItem] = useState<string | null>(null);

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
          <div className="w-full">
            {items.map((item, i) => {
              const value = `item-${i}`;
              const isOpen = openItem === value;
              const contentId = `faq-content-${i}`;
              const triggerId = `faq-trigger-${i}`;

              return (
                <div key={value} className="border-b">
                  <h3 className="flex">
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      className="flex flex-1 items-center justify-between py-4 text-left font-serif text-base md:text-lg font-medium transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      onClick={() => setOpenItem(isOpen ? null : value)}
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 shrink-0 transition-transform duration-200",
                          isOpen && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={triggerId}
                    hidden={!isOpen}
                    className="pb-4 pt-0 text-muted-foreground text-sm md:text-base leading-relaxed"
                  >
                    {item.a}
                  </div>
                </div>
              );
            })}
          </div>
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
