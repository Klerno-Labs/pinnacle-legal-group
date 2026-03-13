"use client";

import { motion } from "framer-motion";
import { images } from "@/config/images";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LeadGenForm } from "@/components/forms/lead-gen-form";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSplit() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-50 pt-20">
      <div className="absolute inset-0 z-0">
         {/* Right side image background for mobile, full coverage */}
        <img 
          src={images["hero"].src} 
          alt={images["hero"].alt}
          className="absolute inset-0 w-full h-full object-cover md:hidden opacity-20"
        />
      </div>
      
      <Container className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">
            Justice You Deserve. <br/>
            <span className="text-accent">Counsel You Trust.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Pinnacle Legal Group provides experienced representation for complex business, real estate, and personal legal matters in Houston.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
             <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Free Case Evaluation</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
              <Link href="/about">Meet The Team <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          {/* Inline Lead Form - Desktop only below, Mobile handled separately or stacked */}
          <div className="hidden lg:block mt-8">
             <LeadGenForm />
          </div>
        </motion.div>

        {/* Right Visual - Desktop Only */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block relative h-[600px] w-full rounded-xl overflow-hidden shadow-2xl"
        >
          <img 
            src={images["hero"].src} 
            alt={images["hero"].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20" />
        </motion.div>
      </Container>
      
      {/* Mobile Form Wrapper */}
      <div className="lg:hidden w-full max-w-md mx-auto px-6 pb-20 relative z-10">
         <LeadGenForm />
      </div>
    </section>
  );
}