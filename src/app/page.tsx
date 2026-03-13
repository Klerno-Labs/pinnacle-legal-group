import { HeroSplit } from "@/components/sections/hero-split";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServiceCard } from "@/components/sections/service-card";
import { StatCounter } from "@/components/sections/stat-counter";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { Scale, Building2, FileText, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSplit />
      
      <TrustBar />

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">Our Practice Areas</h2>
            <p className="text-lg text-muted-foreground">
              We provide comprehensive legal solutions tailored to protect your business and personal interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Business Law" 
              description="Entity formation, contract disputes, M&A, and compliance strategies for growing businesses."
              icon={Building2}
              href="/services#business"
            />
            <ServiceCard 
              title="Real Estate" 
              description="Commercial transactions, leasing negotiations, title issues, and property development."
              icon={Scale}
              href="/services#real-estate"
            />
            <ServiceCard 
              title="Civil Litigation" 
              description="Aggressive representation in breach of contract, partnership disputes, and corporate conflicts."
              icon={FileText}
              href="/services#litigation"
            />
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-6">
                Why Houston Trusts Pinnacle Legal
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We combine deep legal expertise with a practical, business-minded approach. We don't just advise you on the law; we help you achieve your strategic goals while minimizing risk.
              </p>
              <ul className="space-y-4">
                {[
                  "Client-focused strategy with transparent communication",
                  "Decades of combined experience in Texas courts",
                  "Proven track record of favorable outcomes",
                  "Personal attention from senior partners"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-8">
              <StatCounter value={50} suffix="+" label="Years Experience" />
              <StatCounter value={500} suffix="+" label="Cases Won" />
              <StatCounter value={100} suffix="%" label="Client Dedication" />
              <StatCounter value={20} suffix="+" label="Attorneys" />
            </div>
          </div>
        </Container>
      </section>

      <Testimonials />
      <CtaBanner />
    </>
  );
}