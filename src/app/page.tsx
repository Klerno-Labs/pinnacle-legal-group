import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Star, ArrowRight, Scale } from "lucide-react";
import { images } from "@/config/images";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Home",
  description: "Trusted legal counsel in business, real estate, and personal matters. Get the justice you deserve with Houston's top-rated attorneys.",
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LawFirm",
            "name": siteConfig.name,
            "image": images.hero.src,
            "telephone": siteConfig.contact.phone,
            "email": siteConfig.contact.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4521 Westheimer Rd, Suite 200",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": "77027",
              "addressCountry": "US",
            },
            "url": siteConfig.url,
            "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
            "priceRange": "$$$",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center lg:py-0 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10 pt-20 lg:pt-0">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-6">
                <Scale className="w-3 h-3" />
                Top Rated in Houston
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                Justice You <br />
                <span className="text-[#C5A059]">Deserve.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Experienced legal counsel for your business, real estate, and personal matters. 
                We fight aggressively to protect your assets and future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#C5A059] text-white font-bold rounded-lg hover:bg-[#b08d4b] transition-colors shadow-lg">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-slate-900 text-slate-900 font-bold rounded-lg hover:bg-slate-900 hover:text-white transition-colors">
                  Our Practice Areas
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Form */}
          <div className="relative z-10 hidden lg:block">
            <FadeIn delay={0.2}>
              <div className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C5A059] rounded-2xl opacity-20 -z-10"></div>
                <h2 className="text-2xl font-serif font-bold mb-2">Free Case Evaluation</h2>
                <p className="text-slate-500 mb-6 text-sm">Fill out the form below and we will contact you within 24 hours.</p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block overflow-hidden -z-0">
           <div className="absolute inset-0 bg-gradient-to-l from-slate-100 to-transparent z-10"></div>
           {/* Abstract image placeholder for visual interest */}
           <div className="absolute inset-0 bg-slate-200">
             {/* Using a subtle abstract background instead of photo to keep focus on form */}
             <div className="w-full h-full opacity-30 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]"></div>
           </div>
        </div>
      </section>

      {/* Mobile Form (Below Hero on Mobile) */}
      <section className="lg:hidden py-16 bg-slate-50">
        <div className="max-w-md mx-auto px-4">
           <ContactForm />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
            Trusted By & Recognized In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text based logos for demonstration to avoid external dependencies breaking */}
             {['Super Lawyers', 'Avvo Rated', 'Top 100 Trial Lawyers', 'Houston Bar'].map((badge) => (
               <span key={badge} className="text-xl font-serif font-bold text-slate-700">
                 {badge}
               </span>
             ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                Our Practice Areas
              </h2>
              <p className="text-lg text-slate-600">
                We provide comprehensive legal services tailored to your specific needs. 
                No case is too complex for our experienced team.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Business Law",
                desc: "Formation, contracts, M&A, and compliance strategies for growing companies.",
                icon: <Scale className="w-8 h-8 text-[#C5A059]" />,
              },
              {
                title: "Real Estate",
                desc: "Residential and commercial transactions, leases, and property disputes.",
                icon: <Scale className="w-8 h-8 text-[#C5A059]" />, 
              },
              {
                title: "Estate Planning",
                desc: "Wills, trusts, and probate administration to secure your family's legacy.",
                icon: <Scale className="w-8 h-8 text-[#C5A059]" />,
              },
              {
                title: "Litigation",
                desc: "Aggressive representation in court for civil disputes and business conflicts.",
                icon: <Scale className="w-8 h-8 text-[#C5A059]" />,
              },
            ].map((service, idx) => (
              <FadeIn key={service.title} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-transparent hover:border-[#C5A059] group h-full">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <Link href="/services" className="inline-flex items-center text-[#C5A059] font-bold group-hover:underline">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Why Choose Us */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <Image
                  src={images.about.src}
                  alt={images.about.alt}
                  width={600}
                  height={800}
                  className="rounded-2xl shadow-2xl object-cover w-full"
                  priority={false}
                />
                <div className="absolute -bottom-8 -right-8 bg-[#C5A059] text-white p-8 rounded-xl shadow-xl hidden md:block">
                  <p className="text-4xl font-serif font-bold">50+</p>
                  <p className="text-sm font-semibold uppercase tracking-wider">Years Combined Experience</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                Why Choose Pinnacle Legal?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We understand that legal challenges can be overwhelming. Our approach combines 
                deep legal knowledge with compassionate client service.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Proven Track Record: Millions recovered for our clients.",
                  "Client-Centered Approach: You are our priority.",
                  "Transparent Communication: No hidden fees or surprises.",
                  "Aggressive Representation: We fight for your rights.",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="ml-4 text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <Image 
             src={images["testimonial-bg"].src} 
             alt={images["testimonial-bg"].alt} 
             fill 
             className="object-cover"
           />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Client Success Stories</h2>
            <p className="text-slate-400">Don't just take our word for it.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria L.",
                role: "Business Owner",
                text: "Pinnacle Legal handled our acquisition flawlessly. Their attention to detail saved us from a potential lawsuit. Highly recommended.",
              },
              {
                name: "James T.",
                role: "Real Estate Investor",
                text: "I've worked with many attorneys, but the team here stands out. They are responsive, knowledgeable, and truly care about the outcome.",
              },
              {
                name: "Sarah Jenkins",
                role: "Estate Client",
                text: "Setting up my trust was something I kept putting off. They made the process simple and gave me peace of mind about my family's future.",
              },
            ].map((testimonial, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                  <div className="flex mb-4 text-[#C5A059]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
           <Image 
             src={images.cta.src} 
             alt={images.cta.alt} 
             fill 
             className="object-cover"
             priority={false}
           />
           <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Ready to Protect Your Future?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Schedule your free, no-obligation consultation today.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-[#C5A059] text-white font-bold rounded-lg hover:bg-[#b08d4b] transition-colors text-lg"
            >
              Schedule Consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}