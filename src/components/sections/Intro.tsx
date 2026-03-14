"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Intro() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="font-heading text-4xl font-bold text-primary mb-6">A Tradition of Excellence</h2>
          <div className="prose prose-slate text-lg text-secondary leading-relaxed">
            <p className="mb-4">
              Founded in Houston, Pinnacle Legal Group was built on a simple premise: provide high-level legal counsel with the personal touch of a boutique firm. We believe that every client deserves access to aggressive, intelligent representation regardless of the size of their legal matter.
            </p>
            <p>
              Our team brings together diverse backgrounds in corporate law, litigation, and real estate to offer a holistic approach to your problems. We are not just your lawyers; we are your strategic partners in navigating life's complexities.
            </p>
          </div>
          
          <div className="mt-8 flex gap-4">
             <Button href="/contact" variant="primary" size="sm">Meet The Team</Button>
          </div>
        </div>
        
        {/* Sidebar / Values */}
        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 h-fit">
          <h3 className="font-heading text-2xl font-bold text-primary mb-6">Our Core Values</h3>
          <ul className="space-y-4">
            {[
              "Integrity in all dealings",
              "Client-first approach",
              "Aggressive advocacy",
              "Continuous innovation",
              "Community involvement"
            ].map((value, i) => (
              <li key={i} className="flex items-start gap-3 text-secondary">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}