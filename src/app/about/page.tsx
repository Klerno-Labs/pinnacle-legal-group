import { Metadata } from "next";
import { Intro } from "@/components/sections/Intro";
import { Timeline } from "@/components/sections/Timeline";
import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the history, values, and team at Pinnacle Legal Group.",
};

export default function AboutPage() {
  return (
    <>
      <Intro />
      <Timeline />
      <Team />
      <CTA />
    </>
  );
}