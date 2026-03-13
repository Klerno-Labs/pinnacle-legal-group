import Image from "next/image";
import Link from "next/link";
import { images } from "@/config/images";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const metadata = {
  title: "Practice Areas | Pinnacle Legal Group",
  description: "Explore our full range of legal services including Business Law, Real Estate, and Estate Planning.",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-serif text-primary mb-6">Practice Areas</h1>
          <p className="text-xl text-muted max-w-3xl">
            We provide comprehensive legal services designed to protect your interests and help you achieve your goals. From complex litigation to strategic planning, we are your partners in success.
          </p>
        </div>
      </section>

      {/* Services List (Zig-Zag) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {[
            {
              title: "Business Law",
              description: "Navigating the legal landscape of business requires foresight and precision. We assist corporations, partnerships, and LLCs with entity formation, contract negotiation, mergers and acquisitions, and corporate governance. Whether you are launching a startup or managing a mature enterprise, our attorneys provide the counsel you need to mitigate risk and seize opportunities.",
              image: images["service-1"],
              features: ["Entity Formation", "Contract Drafting", "Mergers & Acquisitions", "Corporate Governance"]
            },
            {
              title: "Real Estate Law",
              description: "Real estate transactions involve significant investments and complex regulations. Our firm represents buyers, sellers, landlords, and tenants in commercial and residential transactions. We handle lease agreements, title issues, zoning disputes, and construction litigation, ensuring your property rights are safeguarded every step of the way.",
              image: images["service-2"],
              features: ["Commercial Leasing", "Residential Transactions", "Title Disputes", "Zoning & Land Use"]
            },
            {
              title: "Estate Planning",
              description: "Securing your legacy is one of the most responsible steps you can take for your family. We offer comprehensive estate planning services, including wills, trusts, powers of attorney, and advance directives. Our goal is to provide you with peace of mind, knowing that your wishes will be honored and your loved ones provided for.",
              image: images["service-3"],
              features: ["Wills & Trusts", "Probate Administration", "Asset Protection", "Power of Attorney"]
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                  <Image
                    src={service.image.src}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl font-serif text-primary">{service.title}</h2>
                <p className="text-lg text-muted leading-relaxed">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-text font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button variant="primary" className="mt-4">Discuss Your Case</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
             className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-primary mb-4">Frequently Asked Questions</h2>
          </motion.div>
          
          <div className="space-y-4">
            {[
              {
                q: "How much does a consultation cost?",
                a: "We offer a free initial consultation for most practice areas. During this meeting, we will assess your case and provide transparent information regarding our fee structure, whether it be hourly, flat fee, or contingency-based."
              },
              {
                q: "How long will my case take?",
                a: "The timeline varies significantly depending on the complexity of the matter and whether it requires litigation. We provide realistic timelines during your consultation and keep you updated on progress throughout the process."
              },
              {
                q: "Do you handle cases outside of Houston?",
                a: "While our office is based in Houston, we represent clients throughout the state of Texas. We are also equipped to handle federal matters where applicable."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-lg p-6 cursor-pointer">
                <summary className="flex items-center justify-between font-serif text-xl font-bold text-primary list-none">
                  {faq.q}
                  <ChevronDown className="transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-muted leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}