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

const Index = () => (
  <>
    <PageSEO
      title="Angurie, Meloni, Zucche e Legna da Ardere"
      description="Società Agricola Farina 2.0 a Bando di Argenta (FE). Vendita all'ingrosso di angurie, meloni, zucche e consegna legna da ardere a domicilio. Dal 1975 coltiviamo con passione."
      path="/"
    />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProductsSection />
    <FirewoodSection />
    <TestimonialsSection />
    <MapSection />
    <FooterSection />
    <WhatsAppButton />
  </>
);

export default Index;
