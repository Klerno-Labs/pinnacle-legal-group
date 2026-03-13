import { HeroOverlay } from "@/components/sections/hero-overlay";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/forms/contact-form";
import { MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact Us",
  description: "Schedule a consultation with Pinnacle Legal Group. Visit our Houston office or call us today.",
};

export default function ContactPage() {
  return (
    <>
      <HeroOverlay title="Contact Us" subtitle="We are here to help you navigate your legal challenges." />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form to request a consultation, or reach us directly using the information below. We typically respond to all inquiries within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Office Location</h3>
                      <p className="text-muted-foreground">{siteConfig.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Phone</h3>
                      <p className="text-muted-foreground">{siteConfig.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Email</h3>
                      <p className="text-muted-foreground">{siteConfig.contact.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden shadow-lg h-64 bg-slate-200 relative">
                 <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?q=4521%20Westheimer%20Rd%20Houston%20TX%2077027&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  title="Office Location Map"
                  className="filter grayscale"
                 ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}