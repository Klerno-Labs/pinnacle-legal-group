"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <span className="font-heading font-bold text-xl text-primary">Menu</span>
          <button
            onClick={onClose}
            className="p-2 text-secondary hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col p-6 gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-heading font-semibold text-primary hover:text-accent transition-colors"
              onClick={onClose}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="p-6 bg-slate-50 border-t border-slate-100">
          <Button href="/contact" variant="primary" className="w-full justify-center" onClick={onClose}>
            Free Consultation
          </Button>
          <p className="text-center text-sm text-muted mt-4">
            Or call us at{" "}
            <a href="tel:7135550198" className="text-primary font-bold hover:text-accent">
              (713) 555-0198
            </a>
          </p>
        </div>
      </div>
    </>
  );
}