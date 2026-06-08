"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import Script from "next/script";

const faqs = [
  {
    q: "What is AI-powered energy management?",
    a: "AI-powered energy management uses artificial intelligence and IoT sensors to continuously monitor, analyse, and optimise energy consumption in buildings and industrial facilities. Sustainabyte's platform combines predictive intelligence, digital twins, and autonomous control to deliver verified energy savings of up to 30% without manual intervention.",
  },
  {
    q: "How much energy savings can I expect with Sustainabyte?",
    a: "Our clients typically achieve 15-30% energy savings depending on facility type and current efficiency levels. Savings are verified through IPMVP-based Measurement & Verification, providing audit-ready documentation and bankable results for stakeholders.",
  },
  {
    q: "Which industries does Sustainabyte serve?",
    a: "We support commercial buildings, industries, hospitals, retail spaces, educational campuses, and data centres. Our solutions are customised for every sector, delivering energy efficiency consulting, sustainability services, and AI-powered decarbonization solutions.",
  },
  {
    q: "Is Sustainabyte available across India?",
    a: "Yes. Headquartered in Chennai, Tamil Nadu, Sustainabyte serves clients across India, the Middle East, and is expanding globally. Our cloud-based platforms enable remote monitoring and management of facilities nationwide.",
  },
  {
    q: "How do your solutions integrate with existing systems?",
    a: "Our platforms are OEM-agnostic and connect through standard protocols such as Modbus, BACnet, MQTT, and OPC-UA. This means we work with your existing BMS, chillers, and utility infrastructure without requiring equipment replacement.",
  },
  {
    q: "Do you provide verified energy-savings reports?",
    a: "Yes, we validate savings using IPMVP-based Measurement & Verification and provide audit-ready documentation. Our AI-powered M&V tracks, attributes, and reports every kilowatt saved.",
  },
  {
    q: "Do you support government or compliance audits?",
    a: "Yes. Our audits comply with ISO 50001, ISO 50002, ISO 14064, and ASHRAE standards, ensuring complete energy and sustainability compliance for regulatory requirements.",
  },
  {
    q: "Can we start with a single facility and scale later?",
    a: "Absolutely. Our modular architecture allows clients to start with one facility and expand to multiple sites with centralised dashboards for portfolio-wide tracking and reporting.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-4 max-w-2xl mx-auto text-sm"
        >
          Find quick answers about our solutions, technology, and approach to
          energy efficiency and sustainability. These FAQs help you understand
          how Sustainabyte supports your journey toward Net Zero.
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-[family-name:var(--font-sora)] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-10 sm:mb-14"
        >
          Frequently Asked <span className="text-[#3DD68C]">Questions</span>
        </motion.h2>
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="border-b border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
              >
                <span className="font-[family-name:var(--font-sora)] font-semibold text-[#0D1B3E] text-sm md:text-base pr-4 group-hover:text-[#3DD68C] transition-colors">
                  {faq.q}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? "bg-[#3DD68C]" : "bg-gray-100"
                    }`}
                >
                  {openIndex === i ? (
                    <X className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#0D1B3E]" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
