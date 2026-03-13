import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { images } from "@/config/images";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

export const metadata = {
  title: "Practice Areas",
  description: "Comprehensive legal services including Business Law, Real Estate, Estate Planning, and Litigation by Pinnacle Legal Group.",
};

export default function ServicesPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const services = [
    {
      id: "business",
      title: "Business Law",
      image: "service-1",
      desc: "Navigating the legal landscape of the corporate world requires skill and foresight. Our Business Law division provides end-to-end counsel for startups, SMBs, and large corporations.",
      details: "We handle entity formation (LLC, Corp), contract drafting and review, mergers & acquisitions, and regulatory compliance. Whether you are buying a business or selling one, we ensure your interests are protected.",
      price: "$250 - $500/hr",
    },
    {
      id: "real-estate",
      title: "Real Estate Law",
      image: "service-2",
      desc: "Property transactions are significant investments. Our attorneys mitigate risk and ensure smooth closings for residential and commercial properties.",
      details: "From title issues to lease agreements, zoning disputes to construction defects, we have the experience to handle it all. We represent both buyers and sellers, developers and landlords.",
      price: "Flat fee available for closings",
    },
    {
      id: "estate-planning",
      title: "Estate Planning",
      image: "service-3",
      desc: "Secure your legacy and protect your loved ones. Our estate planning services provide peace of mind for the future.",
      details: "We draft comprehensive Wills, Revocable Living Trusts, Powers of Attorney, and Advanced Medical Directives. We also guide families through the probate process with sensitivity and efficiency during difficult times.",
      price: "Plans start at $1,500",
    },
  ];

  const faqs = [
    {
      q: "How much does a consultation cost?",
      a: "We offer a free initial consultation for most case types. During this meeting, we will evaluate your situation and provide a transparent fee structure for our services moving forward.",
    },
    {
      q: "Do you handle cases outside of Houston?",
      a: "Yes, while our primary office is in Houston, we represent clients throughout the state of Texas. For certain complex business matters, we can assist with federal cases as well.",
    },
    {
      q: "What should I bring to my first appointment?",
      a: "Please bring any relevant documents (contracts, court notices, deeds), a list of questions, and a valid form of identification. The more information we have, the better we can serve you.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Practice Areas
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Comprehensive legal solutions tailored to protect your assets and your future.
          </p>
        </div>
      </section>

      {/* ZigZag Services List */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, idx) => (
            <FadeIn key={service.id}>
              <div className={`flex flex-col lg:flex-row gap-12 items-center mb-24 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-xl h-[400px]">
                  <Image
                    src={images[service.image as keyof typeof images].src}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <p className="text-slate-700 mb-6">
                    {service.details}
                  </p>
                  <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Investment</span>
                      <span className="text-slate-900 font-medium">{service.price}</span>
                    </div>
                    <Link href="/contact" className="text-[#C5A059] font-bold hover:underline">
                      Discuss Case &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:bg-slate-50"
                  >
                    <span className="font-bold text-slate-900 text-lg">{faq.q}</span>
                    {openAccordion === idx ? <ChevronUp className="text-[#C5A059]" /> : <ChevronDown className="text-slate-400" />}
                  </button>
                  {openAccordion === idx && (
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}