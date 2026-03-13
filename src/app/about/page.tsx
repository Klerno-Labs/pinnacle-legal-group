import Image from "next/image";
import Link from "next/link";
import { images } from "@/config/images";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Pinnacle Legal Group",
  description: "Learn more about Pinnacle Legal Group's history, our team of experienced attorneys, and our commitment to justice in Houston, TX.",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={images["hero-alt"].src}
            alt={images["hero-alt"].alt}
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl font-serif font-bold mb-6"
          >
            Our Firm
          </motion.h1>
          <motion.p 
             initial="hidden"
             animate="visible"
             variants={{ ...fadeInUp, transition: { delay: 0.2 } }}
             className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Dedicated to providing exceptional legal counsel with integrity and professionalism.
          </motion.p>
        </div>
      </section>

      {/* Firm Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-serif text-primary mb-8">Our Story</h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              Founded over two decades ago, Pinnacle Legal Group was built on a simple premise: that everyone deserves access to high-quality legal representation. What started as a small practice focusing on small business law has grown into a full-service firm representing clients across Texas.
            </p>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              We believe in building lasting relationships with our clients. When you walk through our doors, you aren't just a case number; you are a member of our community. We take the time to understand your unique circumstances and craft strategies that align with your personal and professional goals.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {["Client-First Approach", "Integrity & Honesty", "Aggressive Advocacy"].map((value, i) => (
                <div key={i} className="flex items-center gap-2 font-bold text-primary">
                  <CheckCircle2 className="text-accent" size={20} />
                  {value}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-primary mb-4">Meet Our Attorneys</h2>
            <p className="text-lg text-muted">Experienced. Dedicated. Ready to fight for you.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Arthur Sterling",
                title: "Founding Partner",
                image: images["team-1"],
                bio: "Specializing in complex business litigation and mergers with over 25 years of experience.",
              },
              {
                name: "Elena Rodriguez",
                title: "Senior Associate",
                image: images["team-2"],
                bio: "Expert in real estate law and commercial contracts, helping businesses grow securely.",
              },
              {
                name: "David Chen",
                title: "Of Counsel",
                image: images["team-1"], // Reusing for demo
                bio: "Focused on estate planning and probate, ensuring families are protected for generations.",
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }
                }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image.src}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-serif text-primary mb-1">{member.name}</h3>
                  <p className="text-accent font-bold uppercase text-xs tracking-wider mb-4">{member.title}</p>
                  <p className="text-muted text-sm mb-6">{member.bio}</p>
                  <Link href="/contact" className="text-primary font-bold text-sm hover:text-accent transition-colors">
                    Full Bio <ArrowRight size={14} className="inline ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
            >
              <h2 className="text-3xl font-serif text-primary mb-6">Our Core Values</h2>
              <ul className="space-y-6">
                {[
                  {
                    title: "Excellence",
                    desc: "We hold ourselves to the highest standards of legal practice and professional conduct."
                  },
                  {
                    title: "Empathy",
                    desc: "We understand the stress legal issues bring, and we treat every client with compassion."
                  },
                  {
                    title: "Results",
                    desc: "We are driven by outcomes and work tirelessly to achieve the best possible results for our clients."
                  }
                ].map((value, i) => (
                  <li key={i}>
                    <h4 className="text-xl font-bold text-primary mb-2">{value.title}</h4>
                    <p className="text-muted">{value.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={{ ...fadeInUp, transition: { delay: 0.2 } }}
            >
               <Image
                  src={images["about"].src}
                  alt={images["about"].alt}
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
               />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}