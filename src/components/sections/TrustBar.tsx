"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Generic logos for demonstration
const logos = ["Forbes", "Bloomberg", "Legal500", "SuperLawyers", "Chamber"];

export function TrustBar() {
  return (
    <section className="py-8 border-b border-gray-100 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <p className="text-center text-xs font-accent font-bold uppercase tracking-widest text-muted mb-6">
          Recognized By Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-2xl font-heading font-bold text-secondary"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}