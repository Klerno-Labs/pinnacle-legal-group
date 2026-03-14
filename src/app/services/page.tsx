import { Metadata } from "next";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { SidebarLayout } from "@/components/sections/SidebarLayout";

export const metadata: Metadata = {
  title: "Practice Areas",
  description: "Comprehensive legal services for business, real estate, and personal matters.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <SidebarLayout>
        <ServiceOverview />
      </SidebarLayout>
    </div>
  );
}