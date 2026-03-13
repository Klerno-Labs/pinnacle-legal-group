"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Maria L.",
    role: "Business Owner",
    content: "Pinnacle Legal Group handled our incorporation perfectly. Their attention to detail and proactive advice saved us from potential pitfalls down the road.",
    rating: 5
  },
  {
    name: "James T.",
    role: "Real Estate Investor",
    content: "I've worked with many attorneys, but the team here stands out. They secured a favorable outcome in a complex property dispute that seemed hopeless.",
    rating: 5
  },
  {
    name: "Sarah J.",
    role: "Consultant",
    content: "Professional, empathetic, and incredibly sharp. They made a difficult personal legal situation manageable and guided me through every step.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#0F172A] mb-4">
            Client Testimonials
          </h2>
          <p className="text-slate-600">
            Don't just take our word for it. Here is what our clients have to say about our legal services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-xl relative"
            >
              <Quote className="h-10 w-10 text-[#C5A059]/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#C5A059] text-[#C5A059]" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}