"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { images } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 pt-10"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-3 py-1 mb-6 text-xs font-accent font-bold uppercase tracking-widest text-accent bg-accent/10 rounded-sm"
          >
            Trusted Legal Counsel
          </motion.span>
          
          <h1 className="font-heading text-5xl lg:text-[56px] font-bold text-primary leading-[1.1] mb-6">
            We protect your future, <span className="text-accent italic">today.</span>
          </h1>
          
          <p className="text-lg text-secondary mb-8 max-w-lg leading-relaxed">
            Pinnacle Legal Group provides strategic guidance for complex business, real estate, and personal legal matters. Result-oriented representation you can trust.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg">
              <Link href="/contact">Free Consultation</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-surface bg-slate-200 flex items-center justify-center text-xs text-slate-500">
                  JD
                </div>
              ))}
            </div>
            <p>Top-rated by Peers & Clients</p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] lg:h-[700px] w-full"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent z-10 lg:hidden" />
           <img
            src={images["hero"].src}
            alt={images["hero"].alt}
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
          {/* Decorative Element */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent z-20 hidden sm:block rounded-lg" />
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-accent/20 z-0 hidden sm:block rounded-lg" />
        </motion.div>
      </div>
    </section>
  );
}