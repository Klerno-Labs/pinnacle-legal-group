"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ArrowRight, Building2, Home, UserCheck, Briefcase, FileSignature, Landmark } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Building2,
    title: "Corporate Law",
    desc: "Formation, mergers, acquisitions, and governance for businesses of all sizes.",
    link: "/services"
  },
  {
    icon: Home,
    title: "Real Estate",
    desc: "Residential and commercial transactions, leasing, and property disputes.",
    link: "/services"
  },
  {
    icon: UserCheck,
    title: "Estate Planning",
    desc: "Wills, trusts, and probate administration to secure your family's legacy.",
    link: "/services"
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    desc: "Contracts, non-competes, discrimination defense, and workplace policies.",
    link: "/services"
  },
  {
    icon: FileSignature,
    title: "Civil Litigation",
    desc: "Resolving disputes through negotiation, mediation, or aggressive courtroom trial.",
    link: "/services"
  },
  {
    icon: Landmark,
    title: "Regulatory Compliance",
    desc: "Navigating complex local, state, and federal regulations for your business.",
    link: "/services"
  },
];

export function PracticeAreas() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-accent font-accent font-bold text-sm uppercase tracking-widest mb-2 block">Our Expertise</span>
        <h2 className="font-heading text-4xl font-bold text-primary mb-6">Comprehensive Legal Services</h2>
        <p className="text-lg text-secondary">
          We offer a full suite of legal solutions designed to protect your interests and help you thrive in a complex environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white border border-slate-100 p-8 rounded-xl shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
              <service.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3 font-heading">{service.title}</h3>
            <p className="text-secondary mb-6 text-sm leading-relaxed min-h-[60px]">{service.desc}</p>
            <Link 
              href={service.link}
              className="inline-flex items-center text-sm font-accent font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors"
            >
              Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}