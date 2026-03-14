import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ValueProp } from "@/components/sections/ValueProp";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { SocialProof } from "@/components/sections/SocialProof";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Home",
  description: "Pinnacle Legal Group provides experienced legal counsel for business, real estate, and personal matters. Protecting your future with result-oriented representation.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ValueProp />
      <PracticeAreas />
      <SocialProof />
      <Testimonials />
      <CTA />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Pinnacle Legal Group",
            "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
            "description": "Experienced law firm providing trusted legal counsel in business, real estate, and personal matters.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4521 Westheimer Rd, Suite 200",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": "77027",
              "addressCountry": "US",
            },
            "priceRange": "$$",
            "telephone": "(713) 555-0198",
            "openingHours": ["Mo-Fr 08:00-18:00"],
          }),
        }}
      />
    </>
  );
}