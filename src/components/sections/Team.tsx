"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import images from "@/config/images";

const team = [
  {
    name: "James Sterling",
    role: "Founding Partner",
    bio: "James specializes in corporate litigation and has represented Fortune 500 companies in high-stakes trials.",
    image: "team-1"
  },
  {
    name: "Elena Rodriguez",
    role: "Senior Counsel",
    bio: "Elena leads our Real Estate division, guiding clients through complex commercial transactions.",
    image: "team-2"
  },
  {
    name: "David Chen",
    role: "Associate Attorney",
    bio: "David focuses on estate planning and probate, helping families secure their legacies for the future.",
    image: "team-3"
  }
];

export function Team() {
  return (
    <Section>
      <div className="text-center mb-16">
        <span className="text-accent font-accent font-bold text-sm uppercase tracking-widest mb-2 block">Our Attorneys</span>
        <h2 className="font-heading text-4xl font-bold text-primary">Meet The Team</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-slate-100">
              <Image 
                src={images[member.image as keyof typeof images].src}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            
            <h3 className="font-heading text-xl font-bold text-primary mb-1">{member.name}</h3>
            <p className="text-accent font-accent font-bold uppercase text-xs tracking-wider mb-4">{member.role}</p>
            
            <p className="text-secondary text-sm mb-6 leading-relaxed">
              {member.bio}
            </p>
            
            <div className="flex justify-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}