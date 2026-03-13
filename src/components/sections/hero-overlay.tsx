"use client";

import React from "react";
import { motion } from "framer-motion";
import { images } from "@/config/images";
import { Container } from "@/components/ui/container";

export function HeroOverlay({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={images["hero-alt"].src}
          alt={images["hero-alt"].alt} style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0F172A]/80" />
      </div>
      
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}