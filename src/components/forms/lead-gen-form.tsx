"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Phone is required"),
  caseType: z.string().min(1, "Please select a case type"),
  _gotcha: z.string().optional(),
});

type LeadData = z.infer<typeof leadSchema>;

export function LeadGenForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadData) => {
    if (data._gotcha) return;
    setIsSubmitting(true);
    // Simulating API call for static demo
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
      reset();
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
        <p className="font-bold">Request Received!</p>
        <p className="text-sm">We will call you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-xl max-w-md space-y-4">
      <h3 className="text-lg font-serif font-bold text-primary">Free Case Evaluation</h3>
      <input type="text" {...register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />
      
      <div>
        <Input {...register("name")} placeholder="Full Name" />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <Input {...register("phone")} type="tel" placeholder="Phone Number" />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <select 
          {...register("caseType")}
          className="flex h-12 w-full rounded-md border-b-2 border-slate-300 bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:border-accent"
        >
          <option value="" disabled className="text-slate-400">Select Case Type</option>
          <option value="business">Business Law</option>
          <option value="real-estate">Real Estate</option>
          <option value="litigation">Civil Litigation</option>
          <option value="estate">Estate Planning</option>
          <option value="other">Other</option>
        </select>
        {errors.caseType && <p className="text-red-500 text-xs mt-1">{errors.caseType.message}</p>}
      </div>

      <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white" disabled={isSubmitting}>
        {isSubmitting ? "Processing..." : "Get My Free Evaluation"}
      </Button>
    </form>
  );
}