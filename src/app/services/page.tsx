import { Metadata } from "next";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Practice Areas",
  description: "Comprehensive legal services including Business Law, Real Estate, and Personal Legal Matters. Expert representation tailored to your needs.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <span className="text-accent font-accent font-bold text-sm uppercase tracking-widest mb-2 block">Expertise</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Practice Areas</h1>
          <p className="font-body text-lg text-secondary max-w-3xl">
            We provide strategic counsel across a broad spectrum of legal needs. Whether you are navigating complex business transactions or personal challenges, our team delivers results.
          </p>
        </div>
      </div>
      
      <ServiceOverview />
      <CTA />
    </>
  );
}