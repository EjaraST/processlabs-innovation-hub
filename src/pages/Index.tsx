import Navigation from "../components/ui/navigation";
import HeroSection from "../components/sections/HeroSection";
import MethodologySection from "../components/sections/MethodologySection";
import ServicesSection from "../components/sections/ServicesSection";
import CasesSection from "../components/sections/CasesSection";
import TeamSection from "../components/sections/TeamSection";
import TechnologiesSection from "../components/sections/TechnologiesSection";
import FAQSection from "../components/sections/FAQSection";
import ContactSection from "../components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <MethodologySection />
      <ServicesSection />
      <CasesSection />
      <TeamSection />
      <TechnologiesSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Index;
