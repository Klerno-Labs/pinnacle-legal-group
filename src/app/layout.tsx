import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadataBase = new URL("https://pinnaclelegalgroup.com");

export const metadata: Metadata = {
  title: "Pinnacle Legal Group | Justice You Deserve",
  description: "Experienced law firm providing trusted legal counsel in business, real estate, and personal matters. Located in Houston, TX.",
  keywords: ["Law Firm", "Legal Counsel", "Business Law", "Real Estate Law", "Houston Attorney", "Texas Lawyer"],
  openGraph: {
    title: "Pinnacle Legal Group | Justice You Deserve",
    description: "Experienced law firm providing trusted legal counsel in business, real estate, and personal matters.",
    url: "https://pinnaclelegalgroup.com",
    siteName: "Pinnacle Legal Group",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-text`}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}