"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import Script from "next/script";

const faqs = [
  {
    q: "What is a Net Zero roadmap?",
    a: "A Net Zero roadmap is a structured, data-backed plan that outlines the specific steps an organization must take to reduce its greenhouse gas emissions to net zero. It includes baseline emissions assessment, science-aligned reduction targets, energy efficiency measures, renewable energy integration, and real-time performance monitoring to track progress.",
  },
  {
    q: "How long does it take to achieve Net Zero?",
    a: "The timeline varies based on facility type, current emissions levels, and investment capacity. Most organizations set interim targets for 2030 with full Net Zero by 2050, aligned with Science Based Targets (SBTi). Sustainabyte helps you achieve quick wins in the first 12-18 months while building a long-term decarbonization strategy.",
  },
  {
    q: "What is M&V verification in energy savings?",
    a: "Measurement & Verification (M&V) is a systematic process based on the IPMVP protocol that quantifies and validates energy savings from efficiency projects. It compares actual post-implementation performance against a baseline to provide audit-ready, bankable proof that savings targets have been met.",
  },
  {
    q: "What standards does Sustainabyte follow for Net Zero planning?",
    a: "We align our Net Zero roadmaps with SBTi (Science Based Targets initiative), ISO 14064 for GHG accounting, ISO 50001 for energy management systems, and IPMVP for measurement and verification. Our approach is data-driven and tailored to each facility's unique operational context.",
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

export default function NetZeroFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Script
        id="netzero-faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-[family-name:var(--font-sora)] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-10 sm:mb-14">
          Net Zero Roadmap <span className="text-[#3DD68C]">FAQ</span>
        </h2>
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
              >
                <span className="font-[family-name:var(--font-sora)] font-semibold text-[#0D1B3E] text-sm md:text-base pr-4 group-hover:text-[#3DD68C] transition-colors">
                  {faq.q}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === i ? "bg-[#3DD68C]" : "bg-gray-100"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
