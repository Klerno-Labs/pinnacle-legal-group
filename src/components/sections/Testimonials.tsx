"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import images from "@/config/images";

const testimonials = [
  {
    name: "Robert J.",
    role: "Small Business Owner",
    content: "Pinnacle Legal Group helped us navigate a complex merger seamlessly. Their attention to detail and strategic advice saved us countless headaches. I highly recommend their team.",
    image: "team-1"
  },
  {
    name: "Sarah L.",
    role: "Real Estate Investor",
    content: "I was stuck in a difficult property dispute that threatened my portfolio. Their litigation team stepped in and resolved the issue in my favor quickly and professionally.",
    image: "team-2"
  },
  {
    name: "Michael T.",
    role: "Executive",
    content: "Professional, knowledgeable, and compassionate. They handled my estate planning with care, ensuring my family is protected for years to come.",
    image: "team-3"
  },
];

export function Testimonials() {
  return (
    <Section variant="grey">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-accent font-accent font-bold text-sm uppercase tracking-widest mb-2 block">Testimonials</span>
        <h2 className="font-heading text-4xl font-bold text-primary mb-6">What Our Clients Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-card border border-slate-100 relative"
          >
            <Quote className="absolute top-6 right-6 text-slate-100" size={48} />
            
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            
            <p className="text-secondary mb-6 italic leading-relaxed relative z-10">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image 
                  src={images[testimonial.image as keyof typeof images].src} 
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm">{testimonial.name}</h4>
                <span className="text-xs text-accent font-accent font-bold uppercase tracking-wider">{testimonial.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}