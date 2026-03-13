import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Linkedin } from "lucide-react";
import { images } from "@/config/images";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "About Us",
  description: "Learn more about Pinnacle Legal Group, our experienced attorneys, and our commitment to providing exceptional legal counsel in Houston.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-slate-900 text-center">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src={images["hero-alt"].src} 
            alt="Law Firm Background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Our Firm
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Integrity, Experience, and Dedication to Justice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Firm Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">
              A Legacy of Excellence
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded on the principles of integrity and aggressive advocacy, Pinnacle Legal Group has served 
              the Houston community for over a decade. We believe that every client deserves access to 
              top-tier legal representation without the corporate attitude.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our team combines the resources of a large firm with the personal touch of a boutique practice. 
              Whether you are navigating a complex business merger or fighting for custody of a loved one, 
              we stand by your side every step of the way.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Meet Our Attorneys
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our legal team brings decades of combined experience across a wide range of practice areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Arthur Pendelton",
                title: "Senior Partner",
                img: "team-1",
                bio: "Arthur specializes in complex commercial litigation and corporate restructuring. He has successfully argued before the Texas Supreme Court.",
              },
              {
                name: "Sarah Vance",
                title: "Associate Attorney",
                img: "team-2",
                bio: "Sarah is dedicated to family law and estate planning. She is known for her compassionate approach to difficult legal situations.",
              },
              {
                name: "Michael Chen",
                title: "Senior Counsel",
                img: "team-3",
                bio: "Michael leads our Real Estate division. He has closed over $500M in commercial transactions across Texas.",
              },
            ].map((member, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={images[member.img as keyof typeof images].src}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-serif font-bold text-slate-900">{member.name}</h3>
                    <p className="text-sm font-bold text-[#C5A059] uppercase tracking-wide mb-4">{member.title}</p>
                    <p className="text-slate-600 text-sm mb-6 line-clamp-3">{member.bio}</p>
                    <Link href="/contact" className="inline-flex items-center text-slate-900 font-bold text-sm hover:text-[#C5A059]">
                      Read Full Bio <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-12 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-slate-100 rounded-xl">
                <div className="w-16 h-16 bg-[#C5A059]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#C5A059]">
                  <span className="text-2xl font-serif font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Integrity First</h3>
                <p className="text-slate-600">We uphold the highest ethical standards in all our dealings, ensuring trust is never broken.</p>
              </div>
              <div className="text-center p-6 border border-slate-100 rounded-xl">
                <div className="w-16 h-16 bg-[#C5A059]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#C5A059]">
                  <span className="text-2xl font-serif font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Client Focus</h3>
                <p className="text-slate-600">Your goals are our goals. We listen intently and tailor our strategy to your specific needs.</p>
              </div>
              <div className="text-center p-6 border border-slate-100 rounded-xl">
                <div className="w-16 h-16 bg-[#C5A059]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#C5A059]">
                  <span className="text-2xl font-serif font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3"> relentless Advocacy</h3>
                <p className="text-slate-600">We fight tirelessly for your rights, never backing down from a challenge.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}