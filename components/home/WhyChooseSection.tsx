"use client";

import { motion } from "framer-motion";
import { Star, Lightbulb, Cpu } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Star,
    title: "Proven Expertise",
    description:
      "Years of experience in energy management with a track record of delivering verified savings across industrial facilities.",
  },
  {
    icon: Lightbulb,
    title: "OEM-Agnostic Solution",
    description:
      "Our platform integrates seamlessly with any equipment manufacturer, giving you freedom and flexibility.",
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    description:
      "AI-powered analytics, IoT integration, and real-time monitoring for intelligent energy decisions.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-[#0D1B3E] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #3DD68C 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Why Choose Sustainabyte"
          greenText="Sustainabyte"
          subtitle="Trusted expertise, flexible solutions, and cutting-edge technology"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center group"
            >
              {/* Circle with icon */}
              <div className="relative mx-auto mb-8 w-36 h-36">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-[#3DD68C]/50 transition-colors duration-500" />
                {/* Middle ring */}
                <div className="absolute inset-3 rounded-full border border-white/10 group-hover:border-[#3DD68C]/30 transition-colors duration-500" />
                {/* Inner circle */}
                <div className="absolute inset-6 rounded-full bg-white/5 group-hover:bg-[#3DD68C]/10 transition-all duration-500 flex items-center justify-center">
                  <reason.icon className="w-12 h-12 text-[#3DD68C] group-hover:scale-110 transition-transform duration-300" />
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#3DD68C]/5 blur-xl" />
              </div>

              <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-[#B0BEC5] text-sm leading-relaxed max-w-xs mx-auto">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
