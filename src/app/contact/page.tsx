"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";

export const metadata = {
  title: "Contact Us | Pinnacle Legal Group",
  description: "Schedule a free consultation with Pinnacle Legal Group. Call us at (713) 555-0199 or visit our Houston office.",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", type: "General Inquiry", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl font-serif text-primary mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
             initial="hidden"
             animate="visible"
             variants={{ ...fadeInUp, transition: { delay: 0.2 } }}
             className="text-xl text-muted max-w-2xl mx-auto"
          >
             Ready to discuss your legal needs? Get in touch with our team today.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
             className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-serif text-primary mb-6">Get in Touch</h2>
              <p className="text-muted leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-md text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Phone</h4>
                  <a href="tel:+17135550199" className="text-muted hover:text-accent transition-colors">(713) 555-0199</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-md text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email</h4>
                  <a href="mailto:info@pinnaclelegal.com" className="text-muted hover:text-accent transition-colors">info@pinnaclelegal.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-md text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Office</h4>
                  <p className="text-muted">
                    4521 Westheimer Rd<br />
                    Suite 200<br />
                    Houston, TX 77027
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-md text-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Hours</h4>
                  <p className="text-muted">
                    Mon-Fri: 8am - 6pm<br />
                    Sat: 9am - 2pm<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={{ ...fadeInUp, transition: { delay: 0.2 } }}
             className="lg:col-span-2 bg-white p-8 md:p-12 rounded-xl shadow-lg"
          >
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-serif text-primary mb-2">Message Sent!</h3>
                <p className="text-muted">Thank you for contacting us. We will be in touch shortly.</p>
                <Button variant="primary" className="mt-6" onClick={() => setIsSuccess(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-primary mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="(713) 555-0199"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-bold text-primary mb-2">Case Type</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  >
                    <option>General Inquiry</option>
                    <option>Business Law</option>
                    <option>Real Estate</option>
                    <option>Estate Planning</option>
                    <option>Civil Litigation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Please describe your situation..."
                  />
                </div>

                {error && <p className="text-red-600 font-semibold">{error}</p>}

                <Button type="submit" variant="primary" className="w-full text-lg" disabled={isSubmitting}>
                  {isSubmitting ? <><Loader2 className="animate-spin mr-2" /> Sending...</> : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.028876375685!2d-95.4375076848952!3d29.73925898196916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf8b7c2d6a69%3A0x8c6d4e5e5e5e5e5e!2sWestheimer%20Rd%2C%20Houston%2C%20TX!5e0!3m2!1sen!2sus!4v1625680000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) contrast(1.2)" }}
          allowFullScreen
          loading="lazy"
          title="Office Location"
        />
      </section>
    </main>
  );
}