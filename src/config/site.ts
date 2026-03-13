import type { Metadata } from "next";

export const siteConfig = {
  name: "Pinnacle Legal Group",
  description: "Experienced law firm providing trusted legal counsel in business, real estate, and personal matters.",
  url: "https://pinnaclelegalgroup.com",
  links: {
    twitter: "https://twitter.com/pinnaclelegal",
    linkedin: "https://linkedin.com/company/pinnaclelegal",
  },
  contact: {
    phone: "(713) 555-0199",
    email: "info@pinnaclelegalgroup.com",
    address: "1001 Main St, Suite 1500, Houston, TX 77002",
    hours: "Mon-Fri: 8am-6pm, Sat: 9am-2pm, Sun: Closed"
  }
};

export type SiteConfig = typeof siteConfig;