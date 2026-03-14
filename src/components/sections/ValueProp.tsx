"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ArrowRight, Scale, Gavel, FileText } from "lucide-react";
import images from "@/config/images";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Scale,
    title: "Strategic Counsel",
    desc: "We don't just litigate; we plan. Our approach focuses on long-term business and personal goals to minimize risk and maximize opportunity."
  },
  {
    icon: Gavel,
    title: "Aggressive Defense",
    desc: "When negotiations stall, we are prepared to fight vigorously in the courtroom to protect your rights and assets."
  },
  {
    icon: FileText,
    title: "Clear Communication",
    desc: "Legal jargon can be confusing. We translate complex legal concepts into plain English so you can make informed decisions."
  }
];

export function ValueProp() {
  return (
    <Section variant="grey">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <span className="text-accent font-accent font-bold text-sm uppercase tracking-widest mb-2 block">Why Choose Us</span>
          <h2 className="font-heading text-4xl font-bold text-primary mb-6">Result-Oriented Legal Representation</h2>
          <p className="text-lg text-secondary mb-10 leading-relaxed">
            At Pinnacle Legal Group, we understand that every legal challenge is unique. Our team takes the time to understand the specific nuances of your situation, crafting tailored strategies designed to achieve the best possible outcome.
          </p>

          <div className="space-y-8">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-accent shadow-sm">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-secondary leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
             <img
              src={images["about"].src}
              alt={images["about"].alt}
              width={images["about"].width}
              height={images["about"].height}
              className="w-full h-auto"
            />
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
          </div>
          {/* Stats Badge */}
          <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-xl max-w-[200px]">
            <span className="block text-4xl font-heading font-bold">25+</span>
            <span className="text-xs font-accent uppercase tracking-wider opacity-90">Years of Experience</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}