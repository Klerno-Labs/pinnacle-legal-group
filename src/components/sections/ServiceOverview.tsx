"use client";

import { Check, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const categories = [
  {
    title: "Business Law",
    items: [
      "Entity Formation (LLC, Corp)",
      "Contract Drafting & Review",
      "Mergers & Acquisitions",
      "Shareholder Agreements"
    ]
  },
  {
    title: "Real Estate",
    items: [
      "Commercial Leasing",
      "Residential Closings",
      "Title Disputes",
      "Property Development"
    ]
  },
  {
    title: "Litigation",
    items: [
      "Breach of Contract",
      "Partnership Disputes",
      "Fraud Claims",
      "Debt Collection"
    ]
  }
];

export function ServiceOverview() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-8">
        <h2 className="font-heading text-3xl font-bold text-primary mb-6">Detailed Practice Areas</h2>
        <p className="text-lg text-secondary mb-8">
          Our practice is diverse, allowing us to handle multifaceted legal issues without needing to outsource to other firms.
        </p>

        <div className="space-y-4">
          {categories.map((category, idx) => (
            <div key={category.title} className="border border-slate-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenIndex(idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-heading text-xl font-bold text-primary flex items-center gap-3">
                  <span className={cn("w-2 h-8 rounded-full transition-colors", openIndex === idx ? "bg-accent" : "bg-slate-200")} />
                  {category.title}
                </span>
                <ChevronRight className={cn("text-secondary transition-transform", openIndex === idx ? "rotate-90" : "")} />
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-6 pt-0">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-secondary">
                        <Check className="text-accent w-4 h-4" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Contact CTA */}
      <div className="lg:col-span-1">
        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 sticky top-24">
          <h3 className="font-heading text-2xl font-bold text-primary mb-4">Have Questions?</h3>
          <p className="text-secondary mb-6">
            We offer a free 30-minute consultation to discuss your legal needs.
          </p>
          <Button href="/contact" variant="primary" className="w-full justify-center mb-4">
            Book Consultation
          </Button>
          <p className="text-xs text-center text-muted">
            Or call us at <br/>
            <a href="tel:7135550198" className="text-primary font-bold">(713) 555-0198</a>
          </p>
        </div>
      </div>
    </div>
  );
}