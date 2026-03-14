"use client";

import { ContactForm } from "./ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      {/* Contact Info */}
      <div>
        <h2 className="font-heading text-3xl font-bold text-primary mb-6">Get In Touch</h2>
        <p className="text-lg text-secondary mb-10">
          Fill out the form and our team will get back to you within 24 hours. For urgent matters, please call us directly.
        </p>

        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-accent shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">Office Location</h4>
              <p className="text-secondary">{siteConfig.contact.address}</p>
              <a href="#" className="text-accent text-sm font-accent font-bold uppercase tracking-wider hover:underline mt-2 inline-block">
                Get Directions
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-accent shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">Phone</h4>
              <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} className="text-secondary hover:text-accent transition-colors">
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-accent shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">Email</h4>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-secondary hover:text-accent transition-colors">
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-accent shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">Business Hours</h4>
              <p className="text-secondary">Mon-Fri: 8am - 6pm</p>
              <p className="text-secondary">Sat-Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Static Map Placeholder */}
        <div className="mt-10 w-full h-64 bg-slate-200 rounded-xl overflow-hidden relative">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0}
              src="https://maps.google.com/maps?q=4521%20Westheimer%20Rd%2C%20Suite%20200%2C%20Houston%2C%20TX%2077027&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="Map"
            />
        </div>
      </div>

      {/* Form */}
      <div>
        <ContactForm />
      </div>
    </div>
  );
}