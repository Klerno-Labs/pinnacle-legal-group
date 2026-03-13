"use client";

import { MoveUp, Linkedin, Twitter, Facebook } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div>
          <h3 className="text-2xl font-serif font-bold mb-6">Pinnacle Legal</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Providing trusted legal counsel in business, real estate, and personal matters for over 20 years.
          </p>
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className="text-gray-400 hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page" className="text-gray-400 hover:text-accent transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="text-gray-400 hover:text-accent transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-serif font-bold mb-6 text-accent">Practice Areas</h4>
          <ul className="space-y-3">
            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Business Law</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Real Estate</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Estate Planning</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Civil Litigation</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-serif font-bold mb-6 text-accent">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span className="text-gray-400">4521 Westheimer Rd<br />Suite 200, Houston, TX 77027</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-accent">•</span>
              <a href="tel:+17135550199" className="text-gray-400 hover:text-white transition-colors">(713) 555-0199</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-accent">•</span>
              <a href="mailto:info@pinnaclelegal.com" className="text-gray-400 hover:text-white transition-colors">info@pinnaclelegal.com</a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-lg font-serif font-bold mb-6 text-accent">Office Hours</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex justify-between"><span>Mon - Fri:</span> <span className="text-white">8am - 6pm</span></li>
            <li className="flex justify-between"><span>Saturday:</span> <span className="text-white">9am - 2pm</span></li>
            <li className="flex justify-between"><span>Sunday:</span> <span className="text-white">Closed</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Pinnacle Legal Group. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <Button 
            variant="ghost" 
            onClick={scrollToTop}
            className="text-gray-400 hover:text-white flex items-center gap-2"
          >
            Back to Top <MoveUp size={16} />
          </Button>
        </div>
      </div>
    </footer>
  );
}