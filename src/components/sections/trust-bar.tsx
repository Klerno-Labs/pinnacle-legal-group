"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, Award, Users } from "lucide-react";

const features = [
  { icon: Scale, title: "Expert Counsel", desc: "Specialized legal strategies" },
  { icon: ShieldCheck, title: "Trusted & Secure", desc: "100% confidentiality" },
  { icon: Award, title: "Proven Results", desc: "High success rate" },
  { icon: Users, title: "Client Focused", desc: "Dedicated support team" }
];

export function TrustBar() {
  return (
    <section className="bg-white border-b border-slate-100 py-12">
      <div className="w-full max-w-[1300px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="h-12 w-12 bg-slate-50 rounded-full flex items-center justify-center text-[#C5A059] mb-4 group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}