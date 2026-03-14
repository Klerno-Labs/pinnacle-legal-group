"use client";

import { Section } from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "500+", label: "Cases Won" },
  { value: "$50M+", label: "Recovered for Clients" },
  { value: "98%", label: "Success Rate" },
  { value: "25+", label: "Years Experience" },
];

export function SocialProof() {
  return (
    <Section variant="navy" className="text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center justify-center gap-2 mb-1">
              <CheckCircle2 className="text-accent" size={24} />
              <span className="text-4xl md:text-5xl font-bold font-heading text-white">
                {stat.value}
              </span>
            </div>
            <p className="text-slate-300 font-accent font-bold uppercase tracking-wider text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}