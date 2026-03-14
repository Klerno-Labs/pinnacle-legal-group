"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const milestones = [
  { year: "2005", title: "Firm Founded", desc: "Pinnacle Legal Group opens its doors in downtown Houston, focusing on small business representation." },
  { year: "2010", title: "Expansion", desc: "Grew to a team of 5 attorneys and expanded practice areas to include complex real estate litigation." },
  { year: "2015", title: "Landmark Victory", desc: "Secured a $5M+ settlement for a local manufacturing client in a major breach of contract case." },
  { year: "2020", title: "New HQ", desc: "Moved to our current Main Street location to better serve our growing client base." },
  { year: "2024", title: "Innovation", desc: "Integrated advanced legal technology to improve efficiency and reduce costs for clients." },
];

export function Timeline() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-accent font-bold uppercase tracking-widest text-sm mb-2 block">
            Our History
          </span>
          <h2 className="font-heading text-4xl font-bold text-primary">
            A Legacy of Success
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center gap-8",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white -translate-x-1/2 z-10 top-0 md:top-1/2 md:-translate-y-1/2 hidden md:block shadow-sm" />
                <div className="absolute left-4 w-4 h-4 bg-accent rounded-full border-4 border-white -translate-x-1/2 z-10 top-0 md:hidden" />

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full md:w-5/12 pl-12 md:pl-0"
                >
                  <span className="text-accent font-accent font-bold uppercase tracking-widest text-sm mb-1 block">
                    {item.year}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text">{item.desc}</p>
                </motion.div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}