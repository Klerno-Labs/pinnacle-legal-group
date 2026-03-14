"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { images } from "@/config/images";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={images["cta"].src}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Protect Your Future?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Don't face legal challenges alone. Schedule your free, no-obligation consultation with our experienced team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
               <Link href={`tel:7135550199`}>Call (713) 555-0199</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}