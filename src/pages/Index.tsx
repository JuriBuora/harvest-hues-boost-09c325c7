import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PageSEO from "@/components/PageSEO";
import HomeBelowFold from "@/components/HomeBelowFold";

const Index = () => (
  <>
    <PageSEO
      title="Azienda Agricola a Bando di Argenta (FE) — Farina 2.0"
      description="Angurie, meloni e zucche all'ingrosso e legna da ardere con consegna nel ferrarese. Dal 1975 a Bando di Argenta, vicino Portomaggiore."
      path="/"
    />
    <Navbar />
    <HeroSection />
    <HomeBelowFold />
  </>
);

export default Index;
