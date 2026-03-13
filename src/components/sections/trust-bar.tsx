"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function TrustBar() {
  const badges = [
    { name: "Super Lawyers", rating: "2024" },
    { name: "Avvo Rating", rating: "10.0 Superb" },
    { name: "Best Law Firms", rating: "Tier 1" },
    { name: "Houston Top Lawyers", rating: "2023" },
  ];

  return (
    <div className="bg-white border-b border-slate-100 py-8">
      <Container>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-xs font-bold tracking-widest uppercase text-primary">{badge.name}</span>
              <span className="text-sm font-serif text-accent">{badge.rating}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}