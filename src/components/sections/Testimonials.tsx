"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "James T.",
    role: "Small Business Owner",
    text: "Pinnacle Legal Group saved my business from a predatory lawsuit. Their team was knowledgeable, responsive, and fought aggressively for a favorable settlement. I couldn't be happier with the outcome.",
  },
  {
    name: "Maria L.",
    role: "Real Estate Investor",
    text: "I've worked with several law firms in Houston, but none compare to the attention to detail I received here. They navigated a complex property dispute with ease and protected my investment significantly.",
  },
  {
    name: "Robert F.",
    role: "Estate Planning Client",
    text: "Planning for the future is stressful, but their attorneys made the estate planning process simple and clear. They explained everything in plain English and ensured my family is protected.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
           <span className="text-accent font-accent font-bold uppercase tracking-widest text-sm mb-2 block">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-secondary">
            Our success is measured by the success of our clients. Here are a few words from those we've had the privilege to represent.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-accent/20 mb-4" />
              <p className="text-text italic leading-relaxed mb-6">
                "{item.text}"
              </p>
              <div>
                <div className="font-heading font-bold text-primary">{item.name}</div>
                <div className="text-sm text-muted">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}