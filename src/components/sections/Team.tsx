"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

const team = [
  {
    name: "Robert Sterling",
    role: "Founding Partner",
    bio: "20+ years experience in complex business litigation.",
    img: images["team-1"],
  },
  {
    name: "Elena Rodriguez",
    role: "Senior Partner, Real Estate",
    bio: "Specialist in commercial transactions and zoning law.",
    img: images["team-1"], // Using same placeholder for demo
  },
  {
    name: "James Chen",
    role: "Associate Attorney",
    bio: "Focused on civil defense and contract disputes.",
    img: images["team-1"], // Using same placeholder for demo
  },
];

export function Team() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-accent font-bold uppercase tracking-widest text-sm mb-2 block">
            The Team
          </span>
          <h2 className="font-heading text-4xl font-bold text-primary">
            Meet Your Advocates
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.img.src}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading text-xl font-bold text-primary mb-1">{member.name}</h3>
                <div className="text-accent font-accent text-xs uppercase tracking-wider font-semibold mb-4">{member.role}</div>
                <p className="text-text text-sm mb-6">{member.bio}</p>
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-slate-100 rounded-full text-secondary hover:bg-accent hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}