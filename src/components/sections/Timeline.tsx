"use client";

import { Section } from "@/components/ui/Section";
import { Calendar, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const milestones = [
  {
    year: "1998",
    title: "Firm Established",
    desc: "Pinnacle Legal Group opens its doors in downtown Houston with a focus on business litigation."
  },
  {
    year: "2005",
    title: "Expansion into Real Estate",
    desc: "Recognizing the booming Texas market, we established a dedicated Real Estate division."
  },
  {
    year: "2012",
    title: "National Recognition",
    desc: "Named to the Super Lawyers list for the first time, a distinction we have maintained annually."
  },
  {
    year: "2020",
    title: "Digital Transformation",
    desc: "Adopted cutting-edge case management technology to improve client communication and efficiency."
  },
  {
    year: "2024",
    title: "Silver Anniversary",
    desc: "Celebrating 25 years of service and over $50 million recovered for our clients."
  }
];

export function Timeline() {
  return (
    <Section variant="grey">
      <div className="text-center mb-16">
        <span className="text-accent font-accent font-bold text-sm uppercase tracking-widest mb-2 block">Our History</span>
        <h2 className="font-heading text-4xl font-bold text-primary">25 Years of Success</h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2" />

        {milestones.map((milestone, idx) => (
          <div key={idx} className={cn(
            "relative mb-12 md:mb-16",
            idx % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
          )}>
            {/* Dot */}
            <div className={cn(
              "absolute left-0 md:left-1/2 w-8 h-8 bg-white border-4 border-accent rounded-full -translate-x-1/2 flex items-center justify-center z-10",
              idx % 2 === 0 ? "md:left-1/2" : "md:left-1/2"
            )}>
              <Calendar className="text-accent w-4 h-4" />
            </div>

            <div className={cn(
              "ml-12 md:ml-0 md:w-1/2",
              idx % 2 === 0 ? "md:pr-12" : "md:pl-12"
            )}>
              <span className="inline-block bg-accent/10 text-accent font-accent font-bold text-sm uppercase tracking-wider px-3 py-1 rounded mb-3">
                {milestone.year}
              </span>
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">{milestone.title}</h3>
              <p className="text-secondary">{milestone.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}