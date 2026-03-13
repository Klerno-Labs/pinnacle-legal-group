"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";

export function AccordionSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-bold text-primary">What types of cases do you handle?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We specialize in business law, commercial real estate transactions, civil litigation, and estate planning. If your legal issue falls within these categories, we have the expertise to help.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-bold text-primary">How much does a consultation cost?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer a free initial consultation for potential new clients to discuss your case and determine if we are the right fit. Subsequent fees depend on the complexity of the matter and our engagement agreement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-bold text-primary">How long will my case take?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The timeline varies significantly based on the nature of the legal matter. Real estate closings might take 30-45 days, while complex litigation could take months or years. We provide realistic timelines during your consultation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </section>
  );
}