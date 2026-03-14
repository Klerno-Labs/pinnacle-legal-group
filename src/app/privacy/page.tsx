import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of Pinnacle Legal Group",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-heading font-bold text-primary mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none text-text">
        <p>
          At Pinnacle Legal Group, we value your privacy. This policy outlines how we collect, use, and protect your information.
        </p>
        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you fill out a contact form. This may include your name, email address, phone number, and the details of your legal inquiry.</p>
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to communicate with you regarding your legal needs and to provide the services you request. We do not sell your personal information to third parties.</p>
        <h2>Security</h2>
        <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.</p>
      </div>
    </div>
  );
}