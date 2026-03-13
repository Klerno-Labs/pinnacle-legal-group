import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">Pinnacle Legal Group</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Providing trusted legal counsel in business, real estate, and personal matters. Dedicated to achieving the best outcomes for our clients in Houston and beyond.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-bold mb-4 text-accent uppercase tracking-wider text-sm">Practice Areas</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/services#business" className="hover:text-white transition-colors">Business Law</Link></li>
              <li><Link href="/services#real-estate" className="hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link href="/services#litigation" className="hover:text-white transition-colors">Civil Litigation</Link></li>
              <li><Link href="/services#estate" className="hover:text-white transition-colors">Estate Planning</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-accent uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours & Social */}
          <div>
            <h4 className="font-bold mb-4 text-accent uppercase tracking-wider text-sm">Office Hours</h4>
            <p className="text-sm text-slate-300 mb-6">{siteConfig.contact.hours}</p>
            <div className="flex gap-4">
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className="text-slate-300 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page" className="text-slate-300 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="text-slate-300 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}