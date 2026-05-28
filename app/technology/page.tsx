"use client";

import { motion } from "framer-motion";
import { Cpu, Wifi, BarChart3, Shield, Cloud, Layers } from "lucide-react";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";

const techFeatures = [
  { icon: Cpu, title: "AI Analytics Engine", description: "Machine learning algorithms that analyze energy patterns and predict optimization opportunities in real-time." },
  { icon: Wifi, title: "IoT Integration", description: "Seamless connection with sensors, meters, and building automation systems for comprehensive data collection." },
  { icon: BarChart3, title: "Smart Dashboard", description: "Intuitive real-time dashboards with drill-down analytics, custom reports, and automated alerts." },
  { icon: Shield, title: "Cybersecurity", description: "Enterprise-grade security with end-to-end encryption, role-based access, and compliance certifications." },
  { icon: Cloud, title: "Cloud Platform", description: "Scalable cloud infrastructure with edge computing capabilities for low-latency data processing." },
  { icon: Layers, title: "API Integration", description: "RESTful APIs for seamless integration with your existing ERP, BMS, and enterprise systems." },
];

export default function TechnologyPage() {
  return (
    <div>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(61,214,140,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(61,214,140,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/20 mb-4 sm:mb-6">
              <Cpu className="w-4 h-4" /> Our Technology
            </span>
            <h1 className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Powered by <span className="text-[#3DD68C]">Advanced AI</span>
            </h1>
            <p className="text-[#B0BEC5] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">Our proprietary technology stack combines AI, IoT, and cloud computing to deliver unmatched energy intelligence.</p>
            <GreenButton href="/contact">Request a Demo</GreenButton>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="font-[family-name:var(--font-sora)] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">Our <span className="text-[#3DD68C]">Products</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Two flagship products designed for comprehensive energy management</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-20">
            {[
              { name: "Optibyte", href: "/technology/optibyte", desc: "AI-powered energy optimization platform that continuously learns from your facility data to reduce consumption and costs.", features: ["Real-time optimization", "Predictive analytics", "Automated controls"] },
              { name: "Fixbyte", href: "/technology/fixbyte", desc: "Mobile-first CMMS for asset and maintenance management, enabling real-time visibility and paperless operations.", features: ["Work Order Management", "QR Code Asset Tracking", "KPI Dashboards"] },
              { name: "Inbyte", href: "/technology/inbyte", desc: "Comprehensive energy monitoring and data intelligence platform for granular visibility into your energy landscape.", features: ["Equipment-level monitoring", "Custom dashboards", "Automated reporting"] },
            ].map((p, i) => (
              <Link key={i} href={p.href}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="p-6 sm:p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full cursor-pointer">
                  <h3 className="font-[family-name:var(--font-sora)] text-2xl sm:text-3xl font-bold text-[#0D1B3E] mb-4 group-hover:text-[#3DD68C] transition-colors">{p.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#3DD68C] rounded-full" />{f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Link>
            ))}
          </div>
          <h2 className="text-center font-[family-name:var(--font-sora)] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-10 sm:mb-14">Technology <span className="text-[#3DD68C]">Stack</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {techFeatures.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-[#3DD68C]/30 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[#3DD68C]/10 flex items-center justify-center mb-6 group-hover:bg-[#3DD68C]/20 transition-colors">
                  <f.icon className="w-7 h-7 text-[#3DD68C]" />
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-[#0D1B3E] mb-3">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
