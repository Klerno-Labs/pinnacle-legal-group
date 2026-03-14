import { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Pinnacle Legal Group. Schedule a free consultation to discuss your legal matters with our experienced attorneys.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200 py-20 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Contact Us</h1>
          <p className="font-body text-lg text-secondary max-w-2xl mx-auto">
            Ready to discuss your case? Fill out the form below or call our office directly.
          </p>
        </div>
      </div>
      
      <ContactSection />
    </>
  );
}