"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import siteConfig from "@/config/site";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <div className="min-h-screen bg-surface pt-12">
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-xl text-secondary">
            Schedule your free consultation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold text-primary mb-8">Get in Touch</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1">Office Location</h3>
                  <p className="text-text">{siteConfig.contact.address}</p>
                  <a href="#" className="text-accent text-sm font-bold uppercase mt-2 inline-block hover:underline">Get Directions</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1">Phone</h3>
                  <p className="text-text">{siteConfig.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1">Email</h3>
                  <p className="text-text">{siteConfig.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1">Office Hours</h3>
                  <p className="text-text">Mon-Fri: 8:00am - 6:00pm</p>
                  <p className="text-text">Sat: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Static Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 rounded-lg overflow-hidden relative">
               <img 
                src="https://maps.googleapis.com/maps/api/staticmap?center=1200+Main+St+Houston+TX&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7C1200+Main+St+Houston+TX&key=YOUR_API_KEY_HERE"
                alt="Map location"
                className="w-full h-full object-cover opacity-50"
                onError={(e) => {
                   e.currentTarget.src = "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=60"; // Fallback image
                   e.currentTarget.style.opacity = "1";
                }}
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="bg-white px-4 py-2 rounded shadow text-sm font-bold">Map View Loading...</span>
               </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm title="Send a Message" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}