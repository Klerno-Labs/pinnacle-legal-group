"use client";

import { metadata } from "@/app/layout"; // Import base metadata if needed
import { HeroSplit } from "@/components/sections/hero-split";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServiceCard } from "@/components/sections/service-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Testimonials } from "@/components/sections/testimonials";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Scale, HomeUser, FileText, ArrowRight } from "lucide-react";

export { metadata }; // Exports from layout

export default function Home() {
  const services = [
    {
      title: "Business Law",
      description: "Comprehensive legal support for business formation, contract negotiation, and corporate governance.",
      icon: <Scale className="h-8 w-8" />,
      link: "/services#business"
    },
    {
      title: "Real Estate",
      description: "Expert guidance through commercial transactions, property disputes, and residential closings.",
      icon: <HomeUser className="h-8 w-8" />,
      link: "/services#real-estate"
    },
    {
      title: "Personal Matters",
      description: "Dedicated counsel for estate planning, probate, and family law matters with compassion.",
      icon: <FileText className="h-8 w-8" />,
      link: "/services#personal"
    }
  ];

  return (
    <main className="w-full">
      <HeroSplit />
      <TrustBar />
      
      {/* Services Preview */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#0F172A] mb-4">
              Our Practice Areas
            </h2>
            <p className="text-slate-600 text-lg">
              We provide strategic legal solutions tailored to your unique challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
             <a href="/services" className="inline-flex items-center font-bold text-[#0F172A] hover:text-[#C5A059] transition-colors">
               View All Services <ArrowRight className="ml-2 h-5 w-5" />
             </a>
          </div>
        </Container>
      </section>

      <Testimonials />
      <CtaBanner />
    </main>
  );
}