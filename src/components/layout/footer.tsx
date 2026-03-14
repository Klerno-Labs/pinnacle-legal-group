"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-20 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-[#C5A059] rounded flex items-center justify-center text-white font-serif font-bold text-xl">
                P
              </div>
              <span className="text-xl font-serif font-bold text-white">
                Pinnacle Legal Group
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Providing exceptional legal counsel in business, real estate, and personal matters. 
              We are committed to achieving the best possible outcomes for our clients.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-6">Practice Areas</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services#business" className="hover:text-[#C5A059] transition-colors">
                  Business Law
                </Link>
              </li>
              <li>
                <Link href="/services#real-estate" className="hover:text-[#C5A059] transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/services#personal" className="hover:text-[#C5A059] transition-colors">
                  Personal Matters
                </Link>
              </li>
              <li>
                <Link href="/services#litigation" className="hover:text-[#C5A059] transition-colors">
                  Litigation & Disputes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#C5A059] shrink-0" />
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`} 
                  className="hover:text-[#C5A059] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#C5A059] shrink-0" />
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-6">Office Hours</h3>
            <p className="text-sm mb-6 text-slate-400">
              {siteConfig.contact.hours}
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="p-2 bg-slate-800 rounded-full hover:bg-[#C5A059] hover:text-white transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
                className="p-2 bg-slate-800 rounded-full hover:bg-[#C5A059] hover:text-white transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Pinnacle Legal Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
      
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-[#C5A059] text-white rounded-full shadow-lg hover:bg-[#0F172A] transition-all z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}