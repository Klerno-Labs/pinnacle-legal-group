"use client";

import { Link as LinkIcon, MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const practiceAreas = [
    { name: "Business Law", href: "/services" },
    { name: "Real Estate", href: "/services" },
    { name: "Estate Planning", href: "/services" },
    { name: "Civil Litigation", href: "/services" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about" },
    { name: "Case Results", href: "/" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="bg-primary text-slate-300 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
             <div className="w-10 h-10 bg-accent text-primary flex items-center justify-center font-heading font-bold text-xl rounded-sm mb-4">
              P
            </div>
            <h3 className="font-heading text-2xl font-bold text-white">
              Pinnacle<span className="text-accent">Legal</span>
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Providing trusted legal counsel with integrity and dedication. We fight for your rights and protect your future.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-accent font-bold uppercase tracking-wider mb-6 text-sm">
              Practice Areas
            </h4>
            <ul className="space-y-4 text-sm">
              {practiceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <LinkIcon size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-accent font-bold uppercase tracking-wider mb-6 text-sm">
              Company
            </h4>
            <ul className="space-y-4 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <LinkIcon size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-accent font-bold uppercase tracking-wider mb-6 text-sm">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-1" size={18} />
                <span className="leading-relaxed">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={18} />
                <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={18} />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            
            <div className="flex gap-4 mt-8">
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-400 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}