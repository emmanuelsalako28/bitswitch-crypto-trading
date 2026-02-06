import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowToTradeSection from "@/components/HowToTradeSection";
import CalculatorSection from "@/components/CalculatorSection";
import MarketsSection from "@/components/MarketsSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowToTradeSection />
      <CalculatorSection />
      <MarketsSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
