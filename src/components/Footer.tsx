import Link from "next/link";
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-serif font-bold text-white hover:text-[#C5A059] transition-colors">
              Pinnacle Legal
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Providing exceptional legal counsel with integrity and dedication. 
              We fight for the justice you deserve.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href={siteConfig.links.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="text-slate-400 hover:text-[#C5A059] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={siteConfig.links.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
                className="text-slate-400 hover:text-[#C5A059] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href={siteConfig.links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="text-slate-400 hover:text-[#C5A059] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
              Practice Areas
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services#business" className="hover:text-[#C5A059] transition-colors">Business Law</Link></li>
              <li><Link href="/services#real-estate" className="hover:text-[#C5A059] transition-colors">Real Estate</Link></li>
              <li><Link href="/services#estate-planning" className="hover:text-[#C5A059] transition-colors">Estate Planning</Link></li>
              <li><Link href="/services#litigation" className="hover:text-[#C5A059] transition-colors">Civil Litigation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
              Office Hours
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white">9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#C5A059] transition-colors focus:outline-none"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}