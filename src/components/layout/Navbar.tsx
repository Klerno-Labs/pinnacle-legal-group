"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3 border-slate-100"
            : "bg-white/95 backdrop-blur-sm py-5 border-transparent"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Pinnacle Legal Group Home"
          >
             <div className="w-8 h-8 bg-primary text-accent flex items-center justify-center font-heading font-bold text-lg rounded-sm">
              P
            </div>
            <span className="font-heading font-bold text-xl text-primary tracking-tight group-hover:text-accent transition-colors">
              PINNACLE<span className="text-accent">LEGAL</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-accent text-sm font-semibold uppercase tracking-wide transition-colors relative",
                  pathname === link.href
                    ? "text-accent"
                    : "text-secondary hover:text-primary"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/contact" variant="primary" size="sm">
              Free Consultation
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-primary"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}