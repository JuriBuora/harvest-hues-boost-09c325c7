import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import FirewoodSection from "@/components/FirewoodSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";
import MapSection from "@/components/MapSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageSEO from "@/components/PageSEO";
import FAQSection, { FAQItem } from "@/components/FAQSection";

const homeFaq: FAQItem[] = [
  {
    q: "Dove si trova l'Azienda Agricola Farina?",
    a: "Ci trovi a Bando di Argenta (FE), in Via Rangona 54/A, a pochi minuti da Argenta, Portomaggiore e dalla città di Ferrara.",
  },
  {
    q: "Vendete angurie, meloni e zucche al dettaglio?",
    a: "I nostri prodotti ortofrutticoli (angurie, meloni, zucche) sono destinati esclusivamente alla vendita all'ingrosso per rivenditori, GDO e mercati ortofrutticoli.",
  },
  {
    q: "In che zona consegnate la legna da ardere?",
    a: "Consegniamo legna da ardere a domicilio entro 50 km da Bando di Argenta, coprendo Argenta, Portomaggiore, Ostellato, Comacchio, Ferrara città e i comuni limitrofi della provincia. Ordine minimo indicativo 200-250 €.",
  },
  {
    q: "Quali essenze di legna da ardere proponete?",
    a: "Forniamo legna stagionata di faggio, cerro e carpino, asciutta e pronta all'uso per stufe, camini e forni a legna.",
  },
];

const Index = () => (
  <>
    <PageSEO
      title="Azienda Agricola a Bando di Argenta (FE) — Farina 2.0"
      description="Angurie, meloni e zucche all'ingrosso e legna da ardere con consegna nel ferrarese. Dal 1975 a Bando di Argenta, vicino Portomaggiore."
      path="/"
    />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProductsSection />
    <FirewoodSection />
    <FAQSection items={homeFaq} withJsonLd />
    <TestimonialsSection />
    <MapSection />
    <FooterSection />
    <WhatsAppButton />
  </>
);

export default Index;
