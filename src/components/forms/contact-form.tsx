"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Please tell us more about your situation"),
  gotcha: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (data.gotcha) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ ...data, source: "Contact Page" }),
      });
      if (res.ok) setIsSuccess(true);
    } catch (error) {
      console.error("Submission error", error);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-serif font-bold text-green-900 mb-2">Message Sent!</h3>
        <p className="text-green-700">Thank you for contacting Pinnacle Legal Group. A member of our team will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="contact-name" className="text-sm font-medium text-slate-700">Full Name</label>
          <Input id="contact-name" placeholder="John Doe" {...register("name")} className={errors.name && "border-red-500"} />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-email" className="text-sm font-medium text-slate-700">Email Address</label>
          <Input id="contact-email" type="email" placeholder="john@example.com" {...register("email")} className={errors.email && "border-red-500"} />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="contact-phone" className="text-sm font-medium text-slate-700">Phone Number</label>
          <Input id="contact-phone" type="tel" placeholder="(713) 555-0199" {...register("phone")} className={errors.phone && "border-red-500"} />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-subject" className="text-sm font-medium text-slate-700">Subject</label>
          <Input id="contact-subject" placeholder="Real Estate Inquiry" {...register("subject")} className={errors.subject && "border-red-500"} />
          {errors.subject && <p className="text-sm text-red-500">{errors.subject.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-slate-700">Message</label>
        <Textarea 
          id="contact-message" 
          placeholder="Please describe your situation..." 
          {...register("message")} 
          className={errors.message && "border-red-500"}
        />
        {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
      </div>

      <input type="text" {...register("gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />

      <Button type="submit" variant="default" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}