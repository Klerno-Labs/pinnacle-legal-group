"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

export function CtaBanner({ 
  title = "Ready to Protect Your Future?", 
  subtitle = "Schedule your free consultation today and let us help you navigate your legal challenges."
}: { title?: string, subtitle?: string }) {
  return (
    <section className="bg-[#0F172A] py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" asChild>
              <a href="/contact">Free Case Evaluation</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-[#0F172A]" asChild>
              <a href="tel:(713) 555-0199">Call (713) 555-0199</a>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}