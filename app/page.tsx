import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PricingSection } from "@/components/PricingSection";
import { ServicesSection } from "@/components/ServicesSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesSection />
      <FeaturesSection />
      <PricingSection />
      <IntegrationsSection />
      <Footer />
    </main>
  );
}
