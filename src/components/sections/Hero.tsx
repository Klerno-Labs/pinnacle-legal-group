"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import images from "@/config/images";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Award, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-10">
        
        {/* Content Left */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <div className="flex items-center gap-2 mb-6 text-accent font-accent font-bold text-sm uppercase tracking-widest">
             <Award size={18} />
             <span>Top Rated Legal Counsel</span>
          </div>
          
          <h1 className="font-heading text-5xl lg:text-[64px] font-bold leading-[1.1] text-primary mb-6">
            Protecting Your <br />
            <span className="text-accent italic font-normal">Future.</span>
          </h1>
          
          <p className="font-body text-lg text-secondary mb-8 max-w-lg leading-relaxed">
            We provide aggressive representation and strategic counsel for complex business, real estate, and personal legal matters in Texas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button href="/contact" variant="primary" size="lg">
              Free Consultation
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              View Practice Areas
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 text-sm text-secondary border-t border-slate-200 pt-8">
             <div className="flex items-center gap-2">
               <ShieldCheck className="text-primary" size={20} />
               <span>Confidential</span>
             </div>
             <div className="flex items-center gap-2">
               <Users className="text-primary" size={20} />
               <span>Client Focused</span>
             </div>
          </div>
        </motion.div>

        {/* Visual Right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative hidden lg:block h-[600px] w-full"
        >
          <div className="absolute inset-0 bg-slate-100 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={images["hero"].src}
              alt={images["hero"].alt} style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          </div>
          
          {/* Floating Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-accent"
          >
            <div className="flex items-center gap-4 mb-2">
               <div className="flex -space-x-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                  ))}
               </div>
               <span className="text-xs font-accent font-bold uppercase text-primary">Trusted by 500+ Clients</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}