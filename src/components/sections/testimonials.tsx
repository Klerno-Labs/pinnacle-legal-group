"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria L.",
    role: "Small Business Owner",
    text: "Pinnacle Legal Group helped me navigate a complex partnership dispute with professionalism and grit. They truly understood the stakes for my business.",
  },
  {
    name: "James T.",
    role: "Real Estate Investor",
    text: "Their attention to detail in our commercial property acquisitions was unmatched. I feel secure knowing they are reviewing every contract.",
  },
  {
    name: "Sarah W.",
    role: "Client",
    text: "During a difficult family estate matter, the team at Pinnacle was compassionate yet fierce advocates. I cannot recommend them enough.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">Client Success Stories</h2>
          <p className="text-lg text-muted-foreground">We measure our success by the results we achieve for our clients.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-card"
            >
              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <div className="font-bold text-primary">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}