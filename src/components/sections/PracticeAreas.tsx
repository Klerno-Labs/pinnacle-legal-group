"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Scale, Building2, FileText, Users, Gavel, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const areas = [
  {
    icon: Scale,
    title: "Business Litigation",
    desc: "Resolving disputes efficiently to protect your bottom line and reputation.",
    link: "/services#litigation",
  },
  {
    icon: Building2,
    title: "Real Estate Law",
    desc: "Navigating complex transactions, zoning issues, and property disputes.",
    link: "/services#realestate",
  },
  {
    icon: FileText,
    title: "Estate Planning",
    desc: "Securing your legacy with comprehensive wills, trusts, and probate services.",
    link: "/services#estate",
  },
  {
    icon: Users,
    title: "Family Law",
    desc: "Compassionate guidance through divorce, custody, and support matters.",
    link: "/services#family",
  },
  {
    icon: Gavel,
    title: "Civil Defense",
    desc: "Aggressive representation for individuals and businesses facing lawsuits.",
    link: "/services#defense",
  },
  {
    icon: Home,
    title: "Construction Law",
    desc: "Assisting contractors and developers with contracts, liens, and claims.",
    link: "/services#construction",
  },
];

export function PracticeAreas() {
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
            Our Expertise
          </span>
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-lg text-secondary">
            From corporate strategy to personal protection, we offer a full spectrum of legal services designed to give you peace of mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-background border border-transparent hover:border-accent/30 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 relative"
            >
              <div className="w-12 h-12 bg-primary text-accent rounded-md flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <area.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {area.title}
              </h3>
              <p className="text-text text-sm leading-relaxed mb-6">
                {area.desc}
              </p>
              <Link
                href={area.link}
                className="inline-flex items-center text-sm font-accent font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}