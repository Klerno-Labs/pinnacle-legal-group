import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ServiceCard } from "@/components/sections/service-card";
import { Accordion } from "@/components/sections/accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Scale, HomeUser, FileText, Gavel, Briefcase, Building } from "lucide-react";
import Image from "next/image";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Practice Areas | Pinnacle Legal Group",
  description: "Comprehensive legal services in business law, real estate, litigation, and personal matters.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Business Law",
      description: "From startups to established corporations, we handle formation, contracts, M&A, and compliance.",
      icon: <Briefcase className="h-8 w-8" />,
      link: "#business"
    },
    {
      title: "Real Estate",
      description: "Navigating complex property transactions, zoning disputes, and commercial leasing.",
      icon: <Building className="h-8 w-8" />,
      link: "#real-estate"
    },
    {
      title: "Litigation",
      description: "Aggressive representation in court for business disputes, breach of contract, and civil matters.",
      icon: <Gavel className="h-8 w-8" />,
      link: "#litigation"
    },
    {
      title: "Estate Planning",
      description: "Protecting your legacy through wills, trusts, and comprehensive probate services.",
      icon: <FileText className="h-8 w-8" />,
      link: "#personal"
    },
  ];

  const faqs = [
    {
      question: "How much does a consultation cost?",
      answer: "We offer a free initial consultation for all new clients to discuss the specifics of your case and determine how we can best assist you."
    },
    {
      question: "Do you handle cases outside of Houston?",
      answer: "While our primary office is in Houston, we represent clients throughout the state of Texas for major business and real estate matters."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring any relevant documents, such as contracts, court notices, correspondence, or financial records related to your case."
    }
  ];

  return (
    <main className="w-full">
      {/* Minimal Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-100">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#0F172A] mb-6">Practice Areas</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Comprehensive legal solutions designed to protect your assets and your future.
          </p>
        </Container>
      </section>

      {/* Grid Preview */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} className="h-full" />
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Service Breakdown */}
      <section id="business" className="py-20 border-b border-slate-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image src={images["service-1"].src} alt="Business Meeting" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#0F172A] mb-4">Business Law</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Whether you are launching a new venture or navigating complex corporate regulations, our attorneys provide the legal foundation you need to succeed. We assist with entity formation, shareholder agreements, and regulatory compliance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-700"><div className="h-1.5 w-1.5 bg-[#C5A059] rounded-full"></div> Business Entity Formation</li>
                <li className="flex items-center gap-2 text-slate-700"><div className="h-1.5 w-1.5 bg-[#C5A059] rounded-full"></div> Contract Drafting & Review</li>
                <li className="flex items-center gap-2 text-slate-700"><div className="h-1.5 w-1.5 bg-[#C5A059] rounded-full"></div> Mergers & Acquisitions</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section id="real-estate" className="py-20 bg-slate-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-serif font-bold text-[#0F172A] mb-4">Real Estate</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Real estate transactions are significant investments. Our team mitigates risk and ensures smooth closings for commercial developers, investors, and homeowners alike.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-700"><div className="h-1.5 w-1.5 bg-[#C5A059] rounded-full"></div> Commercial Leasing</li>
                <li className="flex items-center gap-2 text-slate-700"><div className="h-1.5 w-1.5 bg-[#C5A059] rounded-full"></div> Property Dispute Resolution</li>
                <li className="flex items-center gap-2 text-slate-700"><div className="h-1.5 w-1.5 bg-[#C5A059] rounded-full"></div> Title Insurance Claims</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
              <Image src={images["service-2"].src} alt="Real Estate" fill className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-[#0F172A] mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion items={faqs} />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </main>
  );
}