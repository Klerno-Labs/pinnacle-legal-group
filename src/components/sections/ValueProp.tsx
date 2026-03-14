"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export function ValueProp() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <img
              src={images["about"].src}
              alt={images["about"].alt}
              className="rounded-lg shadow-xl w-full object-cover h-[500px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-accent font-accent font-bold uppercase tracking-widest text-sm mb-2 block">
              Why Choose Us
            </span>
            <h2 className="font-heading text-4xl font-bold text-primary mb-6">
              We don't just practice law. We deliver results.
            </h2>
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              At Pinnacle Legal Group, we understand that every legal challenge is unique. Our approach combines deep industry knowledge with a fierce commitment to your goals. We prioritize clear communication and aggressive advocacy to ensure your voice is heard.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Over 20 years of combined litigation experience",
                "Client-focused strategies tailored to your needs",
                "Transparent billing with no hidden fees",
                "Proven track record in complex settlements",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-text font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="text-primary font-accent font-bold uppercase tracking-wider text-sm border-b-2 border-accent hover:text-accent transition-colors">
              Learn About Our Philosophy
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}