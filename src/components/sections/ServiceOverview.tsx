"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";

export function ServiceOverview() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2 className="font-heading text-3xl font-bold text-primary mb-6">Comprehensive Legal Services</h2>
      <p className="text-lg text-secondary mb-8">
        At Pinnacle Legal Group, we understand that legal issues rarely exist in a vacuum. Our attorneys are cross-trained in multiple disciplines, allowing us to see the bigger picture and anticipate how a decision in one area might impact another.
      </p>

      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1" className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
          <AccordionTrigger className="text-left font-heading font-bold text-primary text-lg hover:text-accent">
            Business Litigation
          </AccordionTrigger>
          <AccordionContent className="text-text">
            We represent businesses of all sizes in disputes involving breach of contract, partnership disputes, shareholder issues, and unfair competition. Our goal is to resolve conflicts efficiently while protecting your business interests.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
          <AccordionTrigger className="text-left font-heading font-bold text-primary text-lg hover:text-accent">
            Real Estate Law
          </AccordionTrigger>
          <AccordionContent className="text-text">
            From drafting purchase agreements to resolving title disputes, our real estate team handles transactions and litigation for residential, commercial, and industrial properties. We ensure your investments are secure.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
          <AccordionTrigger className="text-left font-heading font-bold text-primary text-lg hover:text-accent">
            Estate Planning & Probate
          </AccordionTrigger>
          <AccordionContent className="text-text">
            We help you plan for the future with customized wills, trusts, and powers of attorney. If you have lost a loved one, we guide you through the probate process with compassion and efficiency.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}