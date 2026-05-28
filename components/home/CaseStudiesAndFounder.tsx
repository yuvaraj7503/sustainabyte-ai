"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  TrendingDown, 
  Clock, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Calendar, 
  Gauge, 
  Sparkles, 
  ArrowUpRight,
  Activity,
  Award
} from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    title: "Chiller Plant Optimization",
    facility: "Centrifugal Chiller Facility",
    description: "Multi-chiller plant staging automation and dynamic condenser speed controls.",
    icon: Layers,
    stats: [
      { label: "Baseline kW/TR", value: "0.82 kW/TR", color: "text-red-400" },
      { label: "Optimized kW/TR", value: "0.58 kW/TR", color: "text-[#3DD68C]" },
      { label: "Net Savings", value: "29.2% reduction", color: "text-blue-400" },
      { label: "Payback Period", value: "14 months", color: "text-amber-400" }
    ],
    glow: "rgba(59,130,246,0.15)"
  },
  {
    title: "IoT Energy Monitoring",
    facility: "Premium 5-Star Hotel & Convention Center",
    description: "End-to-end telemetry deployed on major HVAC, pumps, and water systems.",
    icon: Cpu,
    stats: [
      { label: "Meters Monitored", value: "140+ real-time nodes", color: "text-[#3DD68C]" },
      { label: "Faults Identified", value: "48 critical alarms/yr", color: "text-red-400" },
      { label: "Energy Opportunities", value: "18% baseline drop", color: "text-blue-400" },
      { label: "Payback Period", value: "8 months", color: "text-amber-400" }
    ],
    glow: "rgba(16,185,129,0.15)"
  },
  {
    title: "Industrial Utility Energy Audit",
    facility: "Heavy Manufacturing Plant",
    description: "Comprehensive systems audit covering compressed air networks, steam boilers, and VFDs.",
    icon: Activity,
    stats: [
      { label: "Utilities Audited", value: "Air, Steam, Electrical", color: "text-amber-400" },
      { label: "Savings Identified", value: "$124,000 / year", color: "text-[#3DD68C]" },
      { label: "Initial Investment", value: "$45,000 CapEx", color: "text-blue-400" },
      { label: "Payback Period", value: "4.3 months", color: "text-[#3DD68C]" }
    ],
    glow: "rgba(245,158,11,0.15)"
  }
];

export default function CaseStudiesAndFounder() {
  return (
    <section className="bg-[#0A122B] text-white py-24 sm:py-32 relative overflow-hidden font-[family-name:var(--font-sora)]">
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[#3DD68C]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ── Case Studies Section ── */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <span className="text-[#3DD68C] font-bold tracking-[0.25em] uppercase text-sm mb-4 block">
              Proven Performance
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Verified Case Studies
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#3DD68C] to-blue-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="relative rounded-[2.5rem] border border-white/[0.06] bg-[#0F1C3F]/55 p-8 flex flex-col justify-between hover:border-blue-400/40 hover:bg-[#0F1C3F]/80 transition-all duration-300 shadow-2xl"
                  style={{ boxShadow: `0 10px 40px ${study.glow}` }}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3DD68C] flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-wider block">
                          {study.facility}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#3DD68C] transition-colors mt-0.5 leading-snug">
                          {study.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-8">
                      {study.description}
                    </p>

                    {/* Stats List */}
                    <div className="space-y-4 border-t border-white/10 pt-6 mb-8">
                      {study.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="flex justify-between items-center text-sm">
                          <span className="text-gray-400">{stat.label}</span>
                          <span className={`font-bold ${stat.color}`}>{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#3DD68C] mt-auto">
                    View Verification Profile
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Founder Credibility Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] border border-[#27A37B]/20 bg-gradient-to-br from-white to-[#F0F8F5] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl shadow-black/10 hover:border-[#27A37B]/45 hover:shadow-2xl transition-all duration-500"
        >
          {/* Subtle gold/green corner glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#27A37B]/10 to-blue-500/[0.04] rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_1.6fr] gap-12 items-center">
            
            {/* Visual Graphic Shield/Badge */}
            <div className="flex justify-center">
              <div className="relative w-44 h-44 rounded-full border-4 border-[#D4AF37]/20 flex items-center justify-center bg-gradient-to-tr from-[#193F70]/5 to-[#D4AF37]/5 p-6 shadow-2xl group hover:border-[#D4AF37]/80 transition-colors duration-500">
                <div className="absolute inset-2 rounded-full border border-dashed border-[#D4AF37]/40 animate-spin" style={{ animationDuration: '24s' }} />
                <Award className="w-20 h-20 text-[#D4AF37] transform group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#27A37B]/10 border border-[#27A37B]/25 text-[#27A37B] text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-4 h-4 text-[#27A37B]" />
                Leadership Credibility
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#193F70]">
                Led by <span className="bg-gradient-to-r from-[#27A37B] to-blue-600 bg-clip-text text-transparent">Domain Experts</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
                Our operations are governed by a <span className="text-[#193F70] font-semibold">Certified Energy Auditor</span>, <span className="text-[#193F70] font-semibold">CMVP (Certified Measurement & Verification Professional)</span>, <span className="text-[#193F70] font-semibold">ISO 50001 Lead Auditor</span>, and <span className="text-[#193F70] font-semibold">AIoT energy-management expert</span> with <span className="text-[#27A37B] font-bold">19+ years of global experience</span> delivering deep efficiencies for commercial buildings and factories.
              </p>

              {/* Badges / Certificates */}
              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  "Certified Energy Auditor",
                  "CMVP Verified Savings",
                  "ISO 50001 Lead Auditor",
                  "19+ Years Global Experience"
                ].map((badge, bIdx) => (
                  <div 
                    key={bIdx}
                    className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-200/80 text-gray-600 text-xs font-semibold hover:border-[#27A37B]/50 hover:text-[#27A37B] hover:bg-white transition-all duration-300 cursor-default"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
