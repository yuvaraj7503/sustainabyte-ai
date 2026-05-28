"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    q: "1. Who is Sustainabyte?",
    a: "Sustainabyte is a data-driven energy and sustainability solutions company helping organizations cut emissions, improve efficiency, and progress toward Net Zero through expert consulting and digital platforms.",
  },
  {
    q: "2. Which industries do you serve?",
    a: "We support commercial buildings, industries, hospitals, retail spaces and educational campuses, delivering energy efficiency, sustainability consulting, and decarbonization solutions customized for every sector.",
  },
  {
    q: "3. How do your solutions integrate with existing systems?",
    a: "Our platforms are OEM-agnostic and connect through standard protocols such as Modbus, BACnet, and MQTT.",
  },
  {
    q: "4. Do you provide verified energy-savings reports?",
    a: "Yes, we validate savings using IPMVP-based Measurement & Verification and provide audit-ready documentation.",
  },
  {
    q: "5. Can we start with a single facility and scale later?",
    a: "Absolutely. Our modular architecture allows clients to start with one facility and expand to multiple sites with centralized dashboards for portfolio-wide tracking.",
  },
  {
    q: "6. Do you support government or compliance audits?",
    a: "Yes. Our audits comply with ISO 50001, 50002, 14064 and ASHRAE ensuring complete energy and sustainability compliance.",
  },
  {
    q: "7. Is your technology cloud-based?",
    a: "OptiByte and related platforms support both on-premises and secure cloud deployments.",
  },
  {
    q: "8. Do you offer post-project support or training?",
    a: "Yes, we provide continuous monitoring, periodic reviews, and staff training.",
  },
  {
    q: "9. What regions do you currently operate in?",
    a: "Headquartered in Chennai, serving India, Middle East and expanding globally soon.",
  },
  {
    q: "10. How can I contact your team?",
    a: "Through the form on our Contact Us page or directly at info@sustainabyte.ai",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-white">
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
