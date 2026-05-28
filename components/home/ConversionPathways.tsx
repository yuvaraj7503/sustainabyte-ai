"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  TrendingUp,
  Handshake,
  MonitorSmartphone,
  Thermometer,
  ArrowRight,
} from "lucide-react";

const pathways = [
  {
    id: "facility-head",
    icon: Building2,
    persona: "For Facility Heads",
    headline: "Request a Facility Energy Review",
    description:
      "Get a structured assessment of your facility's energy systems — HVAC, utilities, and electrical — with prioritised actions and estimated savings.",
    cta: "Request Energy Review",
    href: "/contact?intent=facility-review",
    gradient: "from-[#193F70] to-[#236B8E]",
    glow: "rgba(25,63,112,0.3)",
    border: "border-[#193F70]/20",
    textAccent: "text-[#193F70]",
    btnBg: "bg-[#193F70] hover:bg-[#152f56]",
  },
  {
    id: "cxo",
    icon: TrendingUp,
    persona: "For CXOs",
    headline: "Estimate Your Energy Savings Potential",
    description:
      "Understand the financial and carbon reduction opportunity in your portfolio — backed by benchmarks from comparable facilities across your sector.",
    cta: "Calculate Savings Potential",
    href: "/contact?intent=savings-estimate",
    gradient: "from-[#0d6b4e] to-[#1a9c6e]",
    glow: "rgba(13,107,78,0.3)",
    border: "border-[#0d6b4e]/20",
    textAccent: "text-[#0d6b4e]",
    btnBg: "bg-[#0d6b4e] hover:bg-[#0a523c]",
  },
  {
    id: "consultant",
    icon: Handshake,
    persona: "For Consultants & Partners",
    headline: "Partner with Sustainabyte",
    description:
      "Expand your service offering with our AIoT platform and energy expertise. White-label options, referral programs, and co-delivery models available.",
    cta: "Explore Partnership",
    href: "/contact?intent=partner",
    gradient: "from-[#248a58] to-[#29A36A]",
    glow: "rgba(36,138,88,0.3)",
    border: "border-[#248a58]/20",
    textAccent: "text-[#248a58]",
    btnBg: "bg-[#248a58] hover:bg-[#1d7049]",
  },
  {
    id: "product-buyer",
    icon: MonitorSmartphone,
    persona: "For Product Buyers",
    headline: "Book an OptiByte Demo",
    description:
      "See our AIoT energy management platform live — real-time dashboards, equipment analytics, fault detection, and M&V reporting in a single platform.",
    cta: "Book OptiByte Demo",
    href: "/contact?intent=optibyte-demo",
    gradient: "from-[#1a7a60] to-[#27A37B]",
    glow: "rgba(26,122,96,0.3)",
    border: "border-[#1a7a60]/20",
    textAccent: "text-[#1a7a60]",
    btnBg: "bg-[#1a7a60] hover:bg-[#145f4b]",
  },
  {
    id: "chiller",
    icon: Thermometer,
    persona: "For Chiller Plant Operators",
    headline: "Assess My Chiller Plant Performance",
    description:
      "Get a kW/TR benchmarking assessment for your chiller plant. Identify sequencing inefficiencies, delta-T bleed, and AI-driven optimisation opportunities.",
    cta: "Assess Chiller Plant",
    href: "/contact?intent=chiller-assessment",
    gradient: "from-[#193F70] to-[#27A37B]",
    glow: "rgba(25,63,112,0.25)",
    border: "border-[#193F70]/20",
    textAccent: "text-[#193F70]",
    btnBg: "bg-gradient-to-r from-[#193F70] to-[#27A37B] hover:opacity-90",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ConversionPathways() {
  return (
    <section
      id="get-started"
      className="py-24 sm:py-32 bg-gradient-to-b from-[#f7fbff] to-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#193F70]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-[#27A37B] mb-4 font-[family-name:var(--font-dm-sans)]"
          >
            Take the Next Step
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#193F70] mb-5"
          >
            What Brings You Here?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-[#193F70]/60 text-lg sm:text-xl max-w-2xl mx-auto font-[family-name:var(--font-dm-sans)]"
          >
            Choose the path that matches your goal — we&apos;ll tailor our
            response to your exact need.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pathways.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.id}
                id={`pathway-${p.id}`}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
                className={`group bg-white rounded-2xl border ${p.border} flex flex-col overflow-hidden`}
                style={{ boxShadow: `0 4px 24px ${p.glow}` }}
              >
                {/* Top gradient strip */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${p.gradient}`} />

                <div className="flex flex-col flex-1 p-7">
                  {/* Icon + persona label */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center shadow-md flex-shrink-0`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${p.textAccent} font-[family-name:var(--font-dm-sans)]`}
                    >
                      {p.persona}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-[family-name:var(--font-sora)] text-lg font-bold text-[#111827] mb-3 leading-snug">
                    {p.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed font-[family-name:var(--font-dm-sans)] flex-1 mb-7">
                    {p.description}
                  </p>

                  {/* CTA button */}
                  <Link
                    href={p.href}
                    className={`inline-flex items-center justify-center gap-2 ${p.btnBg} text-white text-sm font-semibold font-[family-name:var(--font-dm-sans)] rounded-xl px-5 py-3 transition-all duration-200 group/btn whitespace-nowrap`}
                  >
                    {p.cta}
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
