"use client";

import { motion } from "framer-motion";
import { 
  Droplets, 
  Search, 
  Zap, 
  Shield, 
  ArrowUpRight, 
  Map, 
  BarChart3, 
  CheckCircle2, 
  Waves,
  Pipette,
  ClipboardCheck,
  LineChart,
  Layers,
  Settings2,
  FileSpreadsheet
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";

const objectives = [
  { icon: Map, title: "Map Water Flow", desc: "From source to discharge" },
  { icon: Search, title: "Identify Issues", desc: "Detect leaks and overuse patterns" },
  { icon: Zap, title: "Data-Backed Savings", desc: "Measures recommendation" },
  { icon: Shield, title: "Sustainability Goals", desc: "Support compliance and long term" }
];

const strategies = [
  {
    title: "Reduce",
    items: ["Advanced Aerators", "Low flow Technology", "Smart Pumping System"]
  },
  {
    title: "Reuse",
    items: ["RO Reject Recovery", "Greywater Systems"]
  },
  {
    title: "Recharge",
    items: ["Rainwater Harvesting", "Feasibility Studies", "ROI Analysis"]
  }
];

const timeline = [
  {
    phase: "Phase 1",
    title: "Audit Planning & Scope Definition",
    points: [
      "Assess water usage needs and existing system layouts",
      "Establish audit boundaries: supply, process, discharge, losses"
    ],
    icon: ClipboardCheck
  },
  {
    phase: "Phase 2",
    title: "Water Mapping & Distribution Analysis",
    points: [
      "Trace water from source to end use",
      "Document distribution system and infrastructure gaps",
      "Highlight leak proof zones"
    ],
    icon: Map
  },
  {
    phase: "Phase 3",
    title: "Data-Driven Comparison",
    points: [
      "Analyse daily/monthly water consumption trends",
      "Match actual usage with billed data to identify discrepancies",
      "Visual patterns to target high-usage points"
    ],
    icon: LineChart
  },
  {
    phase: "Phase 4",
    title: "Water Balance & Loss Quantification",
    points: [
      "Create a comprehensive water balance sheet",
      "Measure system losses and pinpoint areas of intervention"
    ],
    icon: Droplets
  },
  {
    phase: "Phase 5",
    title: "Fixture-Level Analysis & Best Practices",
    points: [
      "Evaluate taps, toilets, urinals, tank for retrofit potential",
      "Recommend sub-metering and leak detection protocols",
      "Suggest monitoring routines to ensure long-term impact"
    ],
    icon: Settings2
  },
  {
    phase: "Phase 6",
    title: "Implementation Roadmap",
    points: [
      "Propose maintenance upgrades and capability-building steps",
      "Share vendor options and cost-benefit assessments",
      "Deliver a prioritized action plan with measurable outcomes"
    ],
    icon: FileSpreadsheet
  }
];

export default function WaterManagementPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden pt-48">
        <Image 
          src="/sustanaibility/Optimize waterbg.webp" 
          alt="Water Management Hero" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E]/95 via-[#0D1B3E]/40 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >
            <h1 className="text-4xl md:text-[4.5rem] font-black text-white mb-8 leading-[1.2] font-[family-name:var(--font-sora)]">
              Optimize <span className="text-[#4DB846]">water usage</span><br />
              Eliminate <span className="text-[#4DB846]">waste</span>. Ensure<br />
              <span className="text-[#4DB846]">sustainability</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-medium max-w-2xl">
              We deliver in-depth water audits to help organizations understand, manage, and reduce water consumption across their facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Key Objectives Section */}
      <section id="objectives" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-[#0D1B3E] mb-2 font-[family-name:var(--font-sora)]">Key Objectives</h2>
            <div className="w-24 h-1 bg-[#4DB846] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {objectives.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 rounded-full border-2 border-gray-200 flex items-center justify-center mb-6 group-hover:border-[#4DB846] transition-colors">
                  <obj.icon className="w-8 h-8 text-[#0D1B3E] group-hover:text-[#4DB846] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1B3E] mb-2 font-[family-name:var(--font-sora)]">{obj.title}</h3>
                <p className="text-gray-500 text-sm font-medium">{obj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Conservation Strategies Section */}
      <section id="strategies" className="py-24 bg-[#0D1B3E] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 font-[family-name:var(--font-sora)]">Conservation Strategies</h2>
            <div className="w-32 h-1 bg-[#4DB846] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {strategies.map((strat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] p-10 text-[#0D1B3E] shadow-2xl group hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-black mb-8 text-center border-b pb-4 border-gray-100 font-[family-name:var(--font-sora)]">{strat.title}</h3>
                <ul className="space-y-4">
                  {strat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-semibold text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-[#4DB846] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <GreenButton href="/contact">Request a Water Audit</GreenButton>
          </div>
        </div>
      </section>

      {/* 4. Audit Journey Timeline Section */}
      <section id="timeline" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-[#0D1B3E] mb-4 font-[family-name:var(--font-sora)]">Audit Journey Timeline</h2>
            <div className="w-40 h-1 bg-[#4DB846] mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Vertical Line with Growth Animation */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#4DB846]/20 -translate-x-1/2 hidden md:block origin-top" 
            />

            <div className="space-y-16">
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  {/* Central Icon Node - Fixed to Line */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-20">
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                      className="w-16 h-16 rounded-full bg-white border-4 border-[#4DB846] flex items-center justify-center shadow-[0_0_20px_rgba(77,184,70,0.3)]"
                    >
                      <item.icon className="w-8 h-8 text-[#0D1B3E]" />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? "md:justify-start" : "md:flex-row-reverse"}`}
                  >
                    {/* Content Card */}
                    <div className={`w-full md:w-[45%] ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-white p-10 rounded-[2.5rem] border-2 border-transparent hover:border-[#4DB846]/30 shadow-[0_10px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_70px_rgba(77,184,70,0.1)] transition-all duration-500 group">
                        <div className={`inline-block px-5 py-1.5 rounded-full bg-[#4DB846] text-[#0D1B3E] font-black text-xs uppercase tracking-widest mb-6`}>
                          {item.phase}
                        </div>
                        <h3 className="text-2xl font-black text-[#0D1B3E] mb-6 font-[family-name:var(--font-sora)]">{item.title}</h3>
                        <ul className={`space-y-4 ${i % 2 === 0 ? "md:flex md:flex-col md:items-end" : ""}`}>
                          {item.points.map((p, idx) => (
                            <li key={idx} className={`text-gray-500 font-medium leading-relaxed flex items-start gap-3 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                              <div className="w-2 h-2 rounded-full bg-[#4DB846] mt-2 shrink-0 shadow-[0_0_10px_rgba(77,184,70,0.5)]" />
                              <span className="text-[15px]">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden md:block w-[45%]" />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 flex justify-center">
            <GreenButton href="/contact">Start Implementation</GreenButton>
          </div>
        </div>
      </section>

      {/* Footer Nav */}
      <section className="py-24 bg-[#0D1B3E] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 font-[family-name:var(--font-sora)]">Explore More <span className="text-[#4DB846]">Sustainability</span> Solutions</h2>
          <div className="w-20 h-1 bg-[#4DB846] mx-auto rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Carbon Accounting", href: "/sustainability/carbon-accounting", desc: "Accurate, compliant, and audit-ready emissions reporting." },
            { title: "Decarbonization", href: "/sustainability/decarbonization", desc: "Cut emissions. Save energy. Maximize ROI." }
          ].map((s, i) => (
            <Link key={i} href={s.href} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] group hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#4DB846] transition-colors">{s.title}</h3>
              <p className="text-gray-400 mb-6">{s.desc}</p>
              <div className="flex items-center gap-2 text-[#4DB846] font-bold">
                Learn More <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
