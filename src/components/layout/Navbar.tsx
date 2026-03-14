"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import siteConfig from "@/config/site";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-3" : "bg-white/95 backdrop-blur-sm py-4"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary text-white flex items-center justify-center font-heading font-bold text-xl group-hover:bg-accent transition-colors">
              P
            </div>
            <span className="font-heading font-bold text-xl text-primary tracking-tight group-hover:text-accent transition-colors">
              Pinnacle Legal
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-accent font-semibold uppercase tracking-wider transition-colors hover:text-accent relative",
                  pathname === item.href ? "text-accent" : "text-secondary"
                )}
              >
                {item.title}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA & Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${siteConfig.contact.phone}`} className="text-sm font-body font-medium text-secondary hover:text-primary transition-colors">
              {siteConfig.contact.phone}
            </a>
            <Button asChild variant="primary" className="text-xs">
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-primary hover:bg-gray-50 rounded-md transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-primary transform transition-transform duration-300 ease-in-out md:hidden flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <span className="font-heading font-bold text-2xl text-white">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 flex flex-col p-6 gap-6 overflow-y-auto">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-3xl font-heading font-medium text-white/90 hover:text-accent transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="p-6 border-t border-white/10 bg-black/20">
          <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-3 text-white mb-4">
            <Phone className="w-5 h-5 text-accent" />
            <span className="font-medium">{siteConfig.contact.phone}</span>
          </a>
          <Button asChild variant="primary" className="w-full justify-center">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </>
  );
}