"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Placeholder logos - using text for this demo to avoid external image dependencies beyond Unsplash
const partners = [
  { name: "Forbes", type: "Media" },
  { name: "BBB A+ Rating", type: "Rating" },
  { name: "Super Lawyers", type: "Award" },
  { name: "Texas Bar", type: "Association" },
  { name: "Chamber of Commerce", type: "Organization" },
];

export function TrustBar() {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-8 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-6">
        <p className="text-sm font-accent font-bold uppercase tracking-widest text-muted">
          Recognized By Industry Leaders
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-slate-300 rounded-full" />
            <span className="font-heading font-bold text-lg text-primary">
              {partner.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}