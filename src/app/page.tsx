import Image from "next/image";
import Link from "next/link";
import { images } from "@/config/images";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { CheckCircle2, Star, ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
            "name": "Pinnacle Legal Group",
            "image": "https://pinnaclelegalgroup.com/og-image.jpg",
            "@id": "https://pinnaclelegalgroup.com",
            "url": "https://pinnaclelegalgroup.com",
            "telephone": "+17135550199",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4521 Westheimer Rd, Suite 200",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": "77027",
              "addressCountry": "US"
            },
            "priceRange": "$$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            }
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images["hero"].src}
            alt={images["hero"].alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-white space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
              Justice You <span className="text-accent">Deserve.</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-lg leading-relaxed">
              Experienced attorneys providing trusted legal counsel in business, real estate, and personal matters. We fight for your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="primary" className="text-lg w-full sm:w-auto">
                  Free Case Evaluation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary" className="text-lg !bg-white/10 !border-white hover:!bg-white hover:!text-primary !text-white w-full sm:w-auto">
                  Our Practice Areas
                </Button>
              </Link>
            </div>
            
            {/* Trust Badges Mini */}
            <div className="pt-6 flex items-center gap-6 opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent" size={20} />
                <span className="text-sm font-medium">Super Lawyers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent" size={20} />
                <span className="text-sm font-medium">AV Rated</span>
              </div>
            </div>
          </motion.div>

          {/* Lead Form (Right Side on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-2xl max-w-md mx-auto lg:mx-0 w-full"
          >
            <h3 className="text-2xl font-serif text-primary mb-2">Get a Free Consultation</h3>
            <p className="text-muted mb-6">We respond within 24 hours.</p>
            <form action="/contact" method="GET" className="space-y-4">
              <div>
                <label htmlFor="hero-name" className="block text-sm font-semibold text-text mb-1">Full Name</label>
                <input type="text" id="hero-name" required className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="hero-phone" className="block text-sm font-semibold text-text mb-1">Phone Number</label>
                <input type="tel" id="hero-phone" required className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="(713) 555-0199" />
              </div>
              <div>
                <label htmlFor="hero-type" className="block text-sm font-semibold text-text mb-1">Case Type</label>
                <select id="hero-type" className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors">
                  <option>Business Law</option>
                  <option>Real Estate</option>
                  <option>Estate Planning</option>
                  <option>Civil Litigation</option>
                  <option>Other</option>
                </select>
              </div>
              <Button type="submit" variant="primary" className="w-full mt-2">
                Submit Request
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-primary mb-4">Our Practice Areas</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">Comprehensive legal solutions tailored to protect your assets and your family.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Law",
                desc: "From startups to corporations, we handle entity formation, contracts, mergers, and acquisitions.",
                link: "/services",
              },
              {
                title: "Real Estate",
                desc: "Navigating commercial and residential transactions, leases, zoning issues, and property disputes.",
                link: "/services",
              },
              {
                title: "Estate Planning",
                desc: "Securing your legacy with wills, trusts, and probate administration to protect your loved ones.",
                link: "/services",
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }
                }}
                className="bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-accent group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <ArrowRight size={24} />
                </div>
                <h3 className="text-2xl font-serif text-primary mb-3">{area.title}</h3>
                <p className="text-muted mb-6 leading-relaxed">{area.desc}</p>
                <Link href={area.link} className="text-accent font-bold hover:underline inline-flex items-center gap-1">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Stats */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src={images["about"].src}
              alt={images["about"].alt}
              width={600}
              height={800}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-accent text-white p-8 rounded-lg shadow-lg hidden md:block">
              <p className="text-4xl font-serif font-bold">20+</p>
              <p className="font-semibold">Years Experience</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-serif text-primary mb-6">Why Choose Pinnacle Legal?</h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              We understand that legal challenges can be overwhelming. Our team is dedicated to providing clear, strategic guidance to help you navigate complex situations with confidence.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Proven track record of success in complex litigation.",
                "Client-centric approach focusing on your specific goals.",
                "Transparent communication and honest assessments.",
                "Aggressive representation when you need it most.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-text font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/about">
              <Button variant="secondary">Meet The Team</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute inset-0 opacity-10">
            <Image src={images["testimonial-bg"].src} alt="" fill className="object-cover grayscale" />
         </div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               className="text-center mb-16"
            >
               <h2 className="text-4xl font-serif mb-4">What Our Clients Say</h2>
               <div className="flex justify-center gap-1 text-accent mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
               </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  {
                     text: "Pinnacle Legal handled my business merger flawlessly. Their attention to detail saved us from potential liabilities.",
                     name: "Michael R.",
                     role: "CEO, TechFlow Solutions"
                  },
                  {
                     text: "I was overwhelmed by a property dispute. The team stepped in and resolved the issue quickly and professionally.",
                     name: "Sarah L.",
                     role: "Property Owner"
                  },
                  {
                     text: "Compassionate, knowledgeable, and effective. They helped us plan our estate with complete peace of mind.",
                     name: "James & Elena T.",
                     role: "Retired Educators"
                  }
               ].map((review, i) => (
                  <motion.div 
                     key={i}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                     variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }
                     }}
                     className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/10"
                  >
                     <div className="flex gap-1 text-accent mb-4">
                        {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                     </div>
                     <p className="text-gray-200 italic mb-6 leading-relaxed">"{review.text}"</p>
                     <div>
                        <p className="font-bold text-white">{review.name}</p>
                        <p className="text-sm text-gray-400">{review.role}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Ready to Protect Your Future?</h2>
          <p className="text-xl mb-8 opacity-90">Schedule a free, no-obligation consultation with one of our experienced attorneys today.</p>
          <Link href="/contact">
             <Button variant="secondary" className="bg-white text-accent hover:bg-gray-100 !border-white text-lg">
                Contact Us Now
             </Button>
          </Link>
        </div>
      </section>
    </>
  );
}