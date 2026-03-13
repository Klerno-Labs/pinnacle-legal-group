"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  name: string;
  title: string;
  imageKey: keyof typeof images;
  className?: string;
}

export function TeamCard({ name, title, imageKey, className }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn("bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group", className)}
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={images[imageKey].src}
          alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-serif font-bold text-slate-900">{name}</h3>
        <p className="text-sm font-bold text-[#C5A059] uppercase tracking-wider mb-4">{title}</p>
        <a href="#" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-[#C5A059] hover:text-white transition-colors">
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}