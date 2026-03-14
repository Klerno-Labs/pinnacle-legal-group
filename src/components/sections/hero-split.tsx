"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { LeadGenForm } from "@/components/forms/lead-gen-form";
import { images } from "@/config/images";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export function HeroSplit() {
  return (
    <section className="relative pt-32 lg:pt-0 min-h-screen flex items-center bg-slate-50 overflow-hidden">
      <div className="w-full max-w-[1300px] mx-auto px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:pr-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0F172A] leading-tight">
              Justice You Deserve.<br />
              <span className="text-[#C5A059]">Results You Expect.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              At Pinnacle Legal Group, we provide trusted legal counsel in business, real estate, and personal matters. Let us fight for your future.
            </p>
            
            <div className="hidden lg:block">
              <LeadGenForm />
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={images["hero"].src}
              alt={images["hero"].alt} style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-[#C5A059]"
            >
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Trusted by over 500+ clients
              </p>
              <p className="text-slate-900 font-serif text-lg italic">
                "The most professional legal team in Houston."
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Mobile Form (Only visible on small screens) */}
        <div className="mt-12 lg:hidden">
           <LeadGenForm />
        </div>
      </div>
    </section>
  );
}