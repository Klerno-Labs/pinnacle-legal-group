import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact Us",
  description: "Contact Pinnacle Legal Group for a free consultation. Visit our Houston office or call us today to discuss your legal matter.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Ready to take the first step? Reach out to our team for a confidential case evaluation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <FadeIn>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h2>
                  <p className="text-slate-600 mb-8">
                    We are here to help you navigate your legal challenges. 
                    Fill out the form or use the contact information below to reach us directly.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C5A059]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#C5A059]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Office Address</h3>
                      <p className="text-slate-600">
                        {siteConfig.contact.address}
                      </p>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#C5A059] font-bold text-sm hover:underline"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C5A059]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#C5A059]">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                      <a 
                        href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} 
                        className="text-slate-600 text-lg hover:text-[#C5A059] transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C5A059]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#C5A059]">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                      <a 
                        href={`mailto:${siteConfig.contact.email}`} 
                        className="text-slate-600 hover:text-[#C5A059] transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C5A059]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#C5A059]">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Hours</h3>
                      <p className="text-slate-600">Mon-Fri: 8am - 6pm</p>
                      <p className="text-slate-600">Sat: 9am - 2pm</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.2}>
                <ContactForm />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-slate-200 relative w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.676539646446!2d-95.43655268472557!3d29.73939498198014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3644793245d%3A0x4a0246196951c260!2sWestheimer%20Rd%2C%20Houston%2C%20TX!5e0!3m2!1sen!2sus!4v1653321234567!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map of Office Location"
          aria-label="Map showing Pinnacle Legal Group office location"
        ></iframe>
      </section>
    </>
  );
}