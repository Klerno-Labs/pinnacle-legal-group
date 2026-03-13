"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

export function ServiceCard({ title, description, icon, link, className }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col group",
        className
      )}
    >
      <div className="mb-6 text-[#C5A059] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">
        {title}
      </h3>
      <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      <Button variant="link" className="px-0 group/link" asChild>
        <a href={link}>
          Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </Button>
    </motion.div>
  );
}