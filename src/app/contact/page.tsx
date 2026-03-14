import { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Pinnacle Legal Group for a consultation.",
};

export default function ContactPage() {
  return <ContactSection />;
}