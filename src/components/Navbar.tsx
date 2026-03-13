"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Practice Areas", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4 text-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className={cn("text-2xl font-serif font-bold tracking-tight", isScrolled ? "text-primary" : "text-white")}>
            Pinnacle Legal
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors relative group",
                  isScrolled ? "text-primary" : "text-white"
                )}
              >
                {link.label}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+17135550199" className={cn("flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors", isScrolled ? "text-primary" : "text-white")}>
              <Phone size={18} />
              (713) 555-0199
            </a>
            <Link href="/contact">
              <Button variant="primary" className="!py-2 !px-6 text-sm">
                Get Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={28} className={isScrolled ? "text-primary" : "text-white"} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-primary transform transition-transform duration-300 ease-in-out md:hidden flex flex-col",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <span className="text-2xl font-serif font-bold text-white">Pinnacle Legal</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-white focus:outline-none"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        
        <nav className="flex-1 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-serif text-white hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-white/10 text-center">
          <Button variant="primary" className="w-full mb-4" onClick={() => setIsMobileMenuOpen(false)}>
            <Link href="/contact">Get Consultation</Link>
          </Button>
          <a href="tel:+17135550199" className="text-accent font-bold text-lg block">
            (713) 555-0199
          </a>
        </div>
      </div>
    </>
  );
}