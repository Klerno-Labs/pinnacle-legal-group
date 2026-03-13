"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Practice Areas", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-slate-900 text-white px-4 py-2 rounded-md z-[100]"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3 text-slate-900"
            : "bg-transparent text-white py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <span className="font-serif text-2xl font-bold tracking-tight group-hover:text-[#C5A059] transition-colors">
                Pinnacle Legal
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium uppercase tracking-wider relative py-1 transition-colors hover:text-[#C5A059]",
                    pathname === link.href && "text-[#C5A059]",
                    !isScrolled && pathname !== link.href && "text-slate-100 hover:text-white"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300",
                      pathname === link.href && "w-full"
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="hidden lg:flex items-center gap-2 text-sm font-bold hover:text-[#C5A059] transition-colors"
              >
                <Phone size={18} />
                {siteConfig.contact.phone}
              </a>
              
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-md bg-[#C5A059] text-white font-bold text-sm hover:bg-[#b08d4b] transition-colors shadow-md"
              >
                Get a Consultation
              </Link>

              <button
                type="button"
                className="md:hidden p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-900 text-white flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-slate-800">
            <span className="font-serif text-2xl font-bold text-white">
              Pinnacle Legal
            </span>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif block hover:text-[#C5A059] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-slate-800">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 text-xl font-bold text-[#C5A059] mb-6"
              >
                <Phone size={24} />
                {siteConfig.contact.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center py-4 bg-[#C5A059] rounded-md font-bold text-lg hover:bg-[#b08d4b] transition-colors"
              >
                Get a Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}