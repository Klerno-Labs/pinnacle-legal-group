"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import { Label } from "@/components/ui/Label";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  caseType: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
  _gotcha: z.string().optional(), // Honeypot
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setError(null);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form.");
      }

      const result = await res.json();
      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        setError(result.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle2 className="text-green-600 w-16 h-16 mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-green-900 mb-2">Message Sent!</h3>
        <p className="text-green-700 mb-6">
          Thank you for contacting Pinnacle Legal Group. We will be in touch within 24 hours.
        </p>
        <Button
          variant="ghost"
          className="text-green-800 border-green-300 hover:bg-green-100"
          onClick={() => setIsSuccess(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-slate-100">
      <h3 className="font-heading text-2xl font-bold text-primary mb-6">Send us a Message</h3>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 flex items-start gap-3">
          <AlertCircle size={20} className="shrink-0 mt-0.5" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot */}
        <input type="text" {...register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              {...register("name")}
              className={cn(errors.name && "border-red-500")}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="(713) 555-0198"
              {...register("phone")}
              className={cn(errors.phone && "border-red-500")}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className={cn(errors.email && "border-red-500")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="caseType">Case Type (Optional)</Label>
          <select
            id="caseType"
            {...register("caseType")}
            className="flex h-12 w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
          >
            <option value="">Select a topic...</option>
            <option value="Business Law">Business Law</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Estate Planning">Estate Planning</option>
            <option value="Litigation">Litigation</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">How can we help?</Label>
          <TextArea
            id="message"
            placeholder="Please describe your legal matter..."
            {...register("message")}
            className={cn(errors.message && "border-red-500")}
          />
          {errors.message && (
            <p className="text-red-500 text-xs">{errors.message.message}</p>
          )}
        </div>

        <Button type="submit" variant="primary" className="w-full" isLoading={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}