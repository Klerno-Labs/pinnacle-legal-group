"use client";

import React, { useState } from "react";
import { useForm, useState} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Loader2 } from "lucide-react";

import { z } from "zod";
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  caseType: z.string().min(1, "Please select a case type"),
  gotcha: z.string(), // Honeypot
});

type FormData = z.infer<typeof formSchema>;

export function LeadGenForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (data.gotcha) return; // Bot detected

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ ...data, source: "Lead Gen Form" }),
      });
      
      if (res.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Submission error", error);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
        <div className="text-green-600 font-bold mb-2">Request Received!</div>
        <p className="text-sm text-green-800">We will contact you shortly to discuss your case.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 lg:p-8 rounded-xl shadow-lg border border-slate-100">
      <h3 className="text-xl font-serif font-bold text-[#0F172A] mb-6">Free Case Evaluation</h3>
      
      <div className="space-y-4">
        <Input 
          placeholder="Full Name" 
          {...register("name")} 
          className={errors.name && "border-red-500"}
        />
        
        <Input 
          placeholder="Email Address" 
          type="email"
          {...register("email")} 
          className={errors.email && "border-red-500"}
        />
        
        <Input 
          placeholder="Phone Number" 
          type="tel"
          {...register("phone")} 
          className={errors.phone && "border-red-500"}
        />

        <select 
          {...register("caseType")}
          className="flex h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:border-[#C5A059] focus-visible:ring-2 focus-visible:ring-[#C5A059]/20"
        >
          <option value="" disabled selected>Practice Area</option>
          <option value="business">Business Law</option>
          <option value="real-estate">Real Estate</option>
          <option value="personal">Personal Matters</option>
          <option value="litigation">Litigation</option>
          <option value="other">Other</option>
        </select>

        {/* Honeypot */}
        <input type="text" {...register("gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />

        <Button type="submit" variant="default" className="w-full h-12 text-base font-bold" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Get My Free Evaluation"
          )}
        </Button>
      </div>
      
      <p className="text-xs text-slate-400 mt-4 text-center">
        By submitting, you agree to our privacy policy.
      </p>
    </form>
  );
}