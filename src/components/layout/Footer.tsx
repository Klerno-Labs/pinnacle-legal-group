"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUp, MapPin, Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";
import siteConfig from "@/config/site";
import { cn } from "@/lib/utils";

export function Footer() {
  const [emailValue, setEmailValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", emailValue);
    setEmailValue("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-surface pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent text-primary flex items-center justify-center font-heading font-bold text-xl">
                P
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Pinnacle Legal
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing exceptional legal counsel with integrity, dedication, and a track record of success.
            </p>
            <div className="flex gap-4 pt-2">
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-400 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 text-sm hover:text-accent transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                 <Link href="/privacy" className="text-slate-400 text-sm hover:text-accent transition-colors">
                    Privacy Policy
                  </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-slate-400 text-sm hover:text-accent transition-colors">
                  Business Litigation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 text-sm hover:text-accent transition-colors">
                  Real Estate Law
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 text-sm hover:text-accent transition-colors">
                  Estate Planning
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 text-sm hover:text-accent transition-colors">
                  Contract Disputes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-slate-400 text-sm hover:text-accent transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-400 text-sm hover:text-accent transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}