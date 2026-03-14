"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function StickyMobileBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 80vh (hero section usually)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-[60] p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:hidden flex items-center justify-between transition-transform duration-300",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex flex-col">
        <span className="text-xs font-accent font-bold uppercase text-secondary">
          Need immediate help?
        </span>
        <span className="text-sm font-heading text-primary">Call us anytime.</span>
      </div>
      
      <a
        href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
        className="bg-accent text-white px-5 py-2.5 rounded-sm font-accent font-bold uppercase text-xs tracking-wider hover:bg-[#b08d4b] transition-colors flex items-center gap-2 shadow-sm"
      >
        <Phone size={16} />
        Call Now
      </a>
    </div>
  );
}