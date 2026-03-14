"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import images from "@/config/images";

export function CTA() {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={images["cta"].src}
          alt={images["cta"].alt} style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Protect Your Future?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Schedule a free, no-obligation consultation with one of our experienced attorneys today. We are here to help you navigate your legal challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg" className="bg-white text-primary hover:bg-slate-100">
              Schedule Consultation
            </Button>
            <Button href="tel:7135550198" variant="secondary" size="lg" className="text-white border-white hover:bg-white/10">
              Call (713) 555-0198
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}