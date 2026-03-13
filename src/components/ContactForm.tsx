"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "general",
    message: "",
    _gotcha: "", // Honeypot field
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData._gotcha) {
      console.log("Bot detected via honeypot.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "general", message: "", _gotcha: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
      {status === "success" ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif text-slate-900 mb-2">Message Sent</h3>
          <p className="text-slate-600">Thank you for contacting Pinnacle Legal Group. We will be in touch within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all"
                placeholder="(713) 555-0198"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
              Practice Area
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all bg-white"
            >
              <option value="general">General Inquiry</option>
              <option value="business">Business Law</option>
              <option value="real-estate">Real Estate</option>
              <option value="estate">Estate Planning</option>
              <option value="litigation">Litigation</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all resize-none"
              placeholder="Briefly describe your legal matter..."
            />
          </div>

          {/* Honeypot */}
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            value={formData._gotcha}
            onChange={handleChange}
          />

          {status === "error" && (
            <p className="text-red-600 text-sm font-medium">
              Something went wrong. Please try again or call us directly.
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Free Case Evaluation"}
          </Button>
          
          <p className="text-xs text-slate-500 text-center">
            By submitting this form, you agree to our privacy policy.
          </p>
        </form>
      )}
    </div>
  );
}