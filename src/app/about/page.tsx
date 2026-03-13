import { HeroOverlay } from "@/components/sections/hero-overlay";
import { Container } from "@/components/ui/container";
import { TeamCard } from "@/components/sections/team-card";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "About Us",
  description: "Learn about the history, values, and team at Pinnacle Legal Group.",
};

export default function AboutPage() {
  return (
    <>
      <HeroOverlay title="About Pinnacle Legal" subtitle="Houston's Trusted Legal Counsel" />

      {/* Firm Story */}
      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-serif font-bold text-primary">Our Firm</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded on the principles of integrity, excellence, and results, Pinnacle Legal Group has served the Houston community for over two decades. We started as a small practice dedicated to helping local businesses navigate complex regulations, and we have grown into a full-service firm recognized across Texas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our philosophy is simple: we treat every client's matter with the urgency and importance it deserves. Whether you are a Fortune 500 company or an individual facing a personal legal challenge, you receive the same level of dedication, strategic insight, and aggressive advocacy.
            </p>
          </div>
        </Container>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Attorneys</h2>
            <p className="text-lg text-muted-foreground">Meet the experienced legal minds behind our success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamCard 
              name="Richard Sterling" 
              title="Senior Partner" 
              imageKey="founder"
            />
            <TeamCard 
              name="Elena Rodriguez" 
              title="Real Estate Lead" 
              imageKey="team-1"
            />
            <TeamCard 
              name="David Chen" 
              title="Litigation Associate" 
              imageKey="about"
            />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}