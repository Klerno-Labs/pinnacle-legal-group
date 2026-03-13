import { HeroOverlay } from "@/components/sections/hero-overlay";
import { ServiceZigZag } from "@/components/sections/service-zigzag";
import { AccordionSection } from "@/components/sections/accordion";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "Practice Areas",
  description: "Comprehensive legal services in Business Law, Real Estate, and Civil Litigation.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroOverlay title="Our Practice Areas" subtitle="Specialized legal expertise for your specific needs." />

      <div className="py-16 bg-white">
        <ServiceZigZag 
          title="Business Law" 
          description="From entity formation to complex mergers and acquisitions, we provide the legal framework your business needs to thrive. We handle contract drafting, corporate governance, partnership disputes, and regulatory compliance to ensure you can focus on operations while we cover your legal bases."
          imageKey="service-1"
          link="/contact"
        />
        
        <ServiceZigZag 
          title="Real Estate & Property" 
          description="Navigating the Texas real estate market requires experience and precision. Our team represents buyers, sellers, developers, and investors in commercial and residential transactions. We manage title reviews, lease agreements, zoning issues, and construction disputes."
          imageKey="service-2"
          link="/contact"
          reversed
        />

        <ServiceZigZag 
          title="Civil Litigation" 
          description="When disputes arise, you need a fierce advocate in your corner. We have extensive trial experience representing clients in breach of contract, fraud, and business tort cases. We are skilled negotiators who aim for efficient resolutions but are fully prepared to fight for your rights in court."
          imageKey="service-3"
          link="/contact"
        />
      </div>

      <AccordionSection />
      <CtaBanner />
    </>
  );
}