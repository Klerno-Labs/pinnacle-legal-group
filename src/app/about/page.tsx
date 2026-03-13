import { Metadata } from "next";
import { HeroOverlay } from "@/components/sections/hero-overlay";
import { Container } from "@/components/ui/container";
import { TeamCard } from "@/components/sections/team-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { CheckCircle, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "About Us | Pinnacle Legal Group",
  description: "Learn more about Pinnacle Legal Group's history, our team of experienced attorneys, and our commitment to justice.",
};

export default function AboutPage() {
  return (
    <main>
      <HeroOverlay 
        title="About Pinnacle Legal Group" 
        subtitle="Houston's Trusted Legal Counsel Since 2005"
      />

      <section className="py-20 lg:py-32">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-[#0F172A] mb-6">
                Our Firm's Story
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Founded with a vision to provide accessible, high-quality legal representation, Pinnacle Legal Group has grown into a cornerstone of the Houston legal community. We understand that behind every case is a person, a family, or a business whose future is at stake.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our approach combines the aggressive advocacy of a large firm with the personalized attention of a boutique practice. We don't just process cases; we build relationships and fight tirelessly for the outcomes our clients deserve.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#C5A059]/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-[#C5A059]" />
                  </div>
                  <span className="font-medium text-slate-900">Over 18 Years of Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#C5A059]/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-[#C5A059]" />
                  </div>
                  <span className="font-medium text-slate-900">Board Certified Specialists</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
            >
              <h3 className="text-xl font-serif font-bold text-[#0F172A] mb-6 text-center">Our Core Values</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0">
                    <Target className="h-6 w-6 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Results Driven</h4>
                    <p className="text-sm text-slate-600">Every action we take is strategically calculated to achieve the best possible outcome for your case.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Client First</h4>
                    <p className="text-sm text-slate-600">We keep you informed and involved, ensuring your voice is heard at every stage of the legal process.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#0F172A] text-center mb-16">
              Meet Our Attorneys
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TeamCard 
                name="Arthur P. Mitchell"
                title="Senior Partner"
                imageKey="team-1"
              />
              <TeamCard 
                name="Elena R. Rodriguez"
                title="Litigation Lead"
                imageKey="gallery-1"
              />
              <TeamCard 
                name="James K. Sterling"
                title="Real Estate Counsel"
                imageKey="gallery-2"
              />
            </div>
          </motion.div>
        </Container>
      </section>

      <CtaBanner />
    </main>
  );
}