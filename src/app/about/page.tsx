import { Metadata } from "next";
import { Intro } from "@/components/sections/Intro";
import { Timeline } from "@/components/sections/Timeline";
import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the history, values, and experienced legal team at Pinnacle Legal Group. We are dedicated to protecting your future.",
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Firm</h1>
          <p className="font-body text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            A legacy of excellence and a commitment to justice.
          </p>
        </div>
      </div>
      
      <Intro />
      <Timeline />
      <Team />
      <CTA />
    </>
  );
}