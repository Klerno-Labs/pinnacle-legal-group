"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";
import { Button } from "@/components/ui/button";

import { useState, useEffect } from "react";
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu scrolling lock
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Practice Areas", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-white/90 backdrop-blur-lg border-slate-200 shadow-sm py-3"
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="w-full max-w-[1300px] mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 bg-[#C5A059] rounded flex items-center justify-center text-white font-serif font-bold text-xl group-hover:bg-[#0F172A] transition-colors">
              P
            </div>
            <span
              className={cn(
                "text-xl font-serif font-bold tracking-tight transition-colors",
                scrolled ? "text-[#0F172A]" : "text-[#0F172A]"
              )}
            >
              Pinnacle Legal Group
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-[#C5A059] relative",
                  pathname === link.href
                    ? "text-[#C5A059]"
                    : "text-slate-600"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute -bottom-[22px] left-0 w-full h-0.5 bg-[#C5A059]" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant={scrolled ? "default" : "secondary"}
              asChild
              className="rounded-full px-6"
            >
              <Link href="/contact">Get a Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-slate-600 hover:text-[#0F172A]"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}