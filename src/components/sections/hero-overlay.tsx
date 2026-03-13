"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/config/images";
import { Container } from "@/components/ui/container";

export function HeroOverlay({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={images["hero-alt"].src}
          alt={images["hero-alt"].alt}
          fill
          className="object-cover"
          priority
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