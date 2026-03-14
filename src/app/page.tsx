import { metadata } from "./layout";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ValueProp } from "@/components/sections/ValueProp";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { SocialProof } from "@/components/sections/SocialProof";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export { metadata };

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ValueProp />
      <PracticeAreas />
      <SocialProof />
      <Testimonials />
      <CTA />
    </>
  );
}