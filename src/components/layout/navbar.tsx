"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = cn(
    "fixed w-full z-50 transition-all duration-300 py-4",
    scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm text-primary" : "bg-transparent text-white"
  );

  return (
    <>
      <header className={navClasses}>
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif font-bold tracking-tight">
              PINNACLE LEGAL
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-bold uppercase tracking-wider transition-colors hover:text-accent",
                    pathname === item.href && "text-accent"
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <Button asChild size="sm" className="rounded-none border-none">
                <Link href="/contact">Get a Consultation</Link>
              </Button>
            </nav>

            {/* Mobile Menu Trigger */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-primary flex flex-col p-8">
          <div className="flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="text-white p-2"
            >
              <X className="h-8 w-8" />
            </button>
          </div>
          <nav className="flex flex-col gap-8 mt-12 items-center text-center">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-white hover:text-accent transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Button 
              asChild 
              className="mt-8 bg-accent text-white w-full max-w-xs"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/contact">Get a Consultation</Link>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}