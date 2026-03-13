import { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Contact Us | Pinnacle Legal Group",
  description: "Get in touch with Pinnacle Legal Group. Visit our Houston office or call us for a free consultation.",
};

export default function ContactPage() {
  return (
    <main className="w-full">
      <section className="pt-32 pb-20 bg-white border-b border-slate-100">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#0F172A] mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Ready to discuss your legal needs? Reach out to our team today.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#0F172A] mb-6">Get in Touch</h2>
                <p className="text-slate-600 mb-8">
                  We are here to help you navigate your legal challenges. Fill out the form or use the contact details below to reach us directly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-[#C5A059] shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Office Address</h3>
                    <p className="text-slate-600">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-[#C5A059] shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Phone</h3>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-slate-600 hover:text-[#C5A059] transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-[#C5A059] shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-600 hover:text-[#C5A059] transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-[#C5A059] shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Office Hours</h3>
                    <p className="text-slate-600">{siteConfig.contact.hours}</p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="w-full h-64 bg-slate-200 rounded-xl overflow-hidden shadow-inner relative">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.6090925792465!2d-95.3696976845256!3d29.758938182015347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf5542933645%3A0x571f3322637293e!2s1001%20Main%20St%2C%20Houston%2C%20TX%2077002!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
                   width="100%" 
                   height="100%" 
                   style={{border:0}} 
                   allowFullScreen 
                   loading="lazy"
                   className="grayscale contrast-125 opacity-80 hover:grayscale-0 transition-all duration-500"
                 ></iframe>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 lg:p-10 rounded-xl shadow-xl border border-slate-100">
                <h2 className="text-2xl font-serif font-bold text-[#0F172A] mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}