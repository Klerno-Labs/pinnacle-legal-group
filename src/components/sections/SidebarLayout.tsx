"use client";

import { ContactForm } from "./ContactForm";

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">Practice Areas</h1>
          <div className="mb-8">
            <p className="text-xl text-secondary">
              Strategic legal solutions tailored to protect your assets and future.
            </p>
          </div>
          <hr className="border-gray-200 mb-12" />
          {children}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <ContactForm title="Case Evaluation" />
          </div>
        </div>
      </div>
    </div>
  );
}