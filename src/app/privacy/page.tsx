import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of Pinnacle Legal Group.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="font-heading text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none">
        <p className="mb-4">At Pinnacle Legal Group, we take your privacy seriously. This document outlines how we collect, use, and protect your personal information.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Information Collection</h2>
        <p className="mb-4">We collect information that you voluntarily provide to us when you fill out contact forms, call our office, or subscribe to our newsletters. This may include your name, email address, phone number, and details regarding your legal matter.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Use of Information</h2>
        <p className="mb-4">The information we collect is used to provide you with legal services, respond to your inquiries, and improve our website. We do not sell your personal data to third parties.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
        <p className="mb-4">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
      </div>
    </div>
  );
}