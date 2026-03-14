"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number is required."),
  message: z.string().min(10, "Please tell us more about your case."),
  _gotcha: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm({ title }: { title?: string }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSuccess(false);
    setIsError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-primary mb-2">Message Sent!</h3>
        <p className="text-text">Thank you for contacting Pinnacle Legal Group. We will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      {title && <h2 className="font-heading text-2xl font-bold text-primary mb-6">{title}</h2>}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">Full Name</label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">Email Address</label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div className="relative">
            <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">Phone Number</label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              placeholder="(713) 555-0199"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="relative">
          <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">How can we help?</label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
            placeholder="Briefly describe your legal situation..."
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        {/* Honeypot */}
        <input type="text" {...register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />

        {isError && (
          <p className="text-red-500 text-sm text-center">
            Something went wrong. Please try again or call us directly.
          </p>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>

        <p className="text-xs text-center text-muted">
          By submitting this form, you agree to our privacy policy.
        </p>
      </form>
    </div>
  );
}