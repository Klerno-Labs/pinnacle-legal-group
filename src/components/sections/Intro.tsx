"use client";

import { motion } from "framer-motion";
import { images } from "@/config/images";

export function Intro() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <img
              src={images["hero-alt"].src}
              alt={images["hero-alt"].alt}
              className="rounded-lg shadow-xl w-full object-cover h-[500px]"
            />
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-accent font-accent font-bold uppercase tracking-widest text-sm mb-2 block">
              Who We Are
            </span>
            <h2 className="font-heading text-4xl font-bold text-primary mb-6">
              Houston's Trusted Legal Partners
            </h2>
            <div className="prose prose-slate text-text">
              <p className="mb-4">
                Founded on the principles of integrity and fierce advocacy, Pinnacle Legal Group has grown into one of the region's most respected boutique firms. We believe that every client deserves personalized attention, regardless of the size of their case.
              </p>
              <p className="mb-4">
                Our team brings together diverse backgrounds in corporate law, real estate, and civil litigation to provide a holistic approach to problem-solving. We don't just know the law; we understand how it applies to your business and your life.
              </p>
              <p>
                When you walk through our doors, you aren't just hiring a lawyer—you are gaining a partner dedicated to securing the best possible outcome for your future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}