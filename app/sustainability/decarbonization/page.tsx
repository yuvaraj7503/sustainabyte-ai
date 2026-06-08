"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Cloud, 
  TrendingUp, 
  Target, 
  Search, 
  XCircle, 
  CheckCircle2, 
  Activity, 
  Layout, 
  Settings, 
  ArrowUpRight,
  ShieldCheck,
  MousePointer2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";

export default function DecarbonizationPage() {
  return (
    <div className="bg-white min-h-screen text-[#0D1B3E] overflow-x-hidden font-[family-name:var(--font-sora)]">
      {/* 1. Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-[#0D1B3E] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sustanaibility/Decarbonization/Decarbonizationbg.webp"
            alt="Industrial decarbonization strategy and emission reduction - Sustainabyte"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E] via-[#0D1B3E]/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[#4DB846] font-bold text-sm tracking-widest uppercase mb-4 block">Decarbonization</span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[1.1]">
              Cut Emissions. <br />
              <span className="bg-gradient-to-r from-[#4DB846] to-[#3DD68C] bg-clip-text text-transparent">Save Energy.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mb-12 leading-relaxed">
              Maximize ROI. We turn operational inefficiencies into <span className="text-white font-bold">measurable climate action</span>.
            </p>
            <GreenButton href="#approach">Explore Our Strategy</GreenButton>
          </motion.div>
        </div>
      </section>

      {/* 2. Key Metrics (Stats) Section */}
      <section className="py-20 bg-white relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                label: "Energy Reduction", 
                value: "7-30%", 
                icon: Zap, 
                desc: "Average efficiency gain across industrial systems",
                color: "text-[#4DB846]"
              },
              { 
                label: "Carbon Reduction", 
                value: "15%", 
                icon: Cloud, 
                desc: "Direct reduction in Scope 1 & 2 emissions",
                color: "text-[#0D1B3E]"
              },
              { 
                label: "ROI Period", 
                value: "2-3 Years", 
                icon: TrendingUp, 
                desc: "Payback through direct energy savings",
                color: "text-[#4DB846]"
              }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border-2 border-gray-100 p-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#4DB846] transition-all duration-500`}>
                  <stat.icon className={`w-8 h-8 ${stat.color} group-hover:text-white transition-colors`} />
                </div>
                <h3 className="text-5xl font-black mb-4 text-[#0D1B3E]">{stat.value}</h3>
                <p className="text-[#4DB846] font-bold text-lg mb-2 uppercase tracking-wide">{stat.label}</p>
                <p className="text-gray-500 leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Target the Right Asset Section */}
      <section id="approach" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-sora)] font-black text-[#0D1B3E] mb-2">Target the Right Asset</h2>
            <div className="w-40 h-1 bg-[#4DB846] mx-auto rounded-full" />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">
            {/* Text Points */}
            <div className="w-full lg:w-1/3 space-y-12">
              {[
                {
                  icon: Target,
                  text: "Focus on HVAC, Chillers, Pumps, and Lighting; your top energy consumers",
                  subPoints: ["Asset-level prioritization", "Peak demand analysis"]
                },
                {
                  icon: Search,
                  text: "Identify Carbon hotspots across utility systems",
                  subPoints: ["Thermal Mapping", "Leakage Detection"]
                },
                {
                  icon: XCircle,
                  text: "Avoid capex-heavy changes with data-led operational fixes",
                  subPoints: ["Optimization over replacement", "System Tuning"]
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-[#0D1B3E] flex items-center justify-center shrink-0 group-hover:border-[#4DB846] transition-colors relative mt-1">
                    <div className="absolute inset-1 rounded-full border border-[#0D1B3E]/10 group-hover:border-[#4DB846]/30 transition-colors" />
                    <item.icon className="w-8 h-8 text-[#0D1B3E] group-hover:text-[#4DB846] transition-colors" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-[#0D1B3E] font-bold text-lg leading-snug">{item.text}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.subPoints.map((sub, i) => (
                        <span key={i} className="px-3 py-1 rounded-md bg-[#0D1B3E]/5 text-[#0D1B3E]/60 text-sm font-semibold border border-[#0D1B3E]/10">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image Gallery */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { src: "/sustanaibility/Decarbonization/HVAC-567x1024.webp", initialY: -80 },
                { src: "/sustanaibility/Decarbonization/Immediate-Impact-1-768x768.webp", initialY: 80 },
                { src: "/sustanaibility/Decarbonization/Target-Assets-3-570x1024.webp", initialY: -80 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: item.initialY }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, delay: 0.4 + (i * 0.2), ease: "easeOut" }}
                  whileHover={{ y: i % 2 === 0 ? -10 : 10 }}
                  className="aspect-[3/5] relative rounded-[2.5rem] overflow-hidden border-2 border-[#4DB846] shadow-xl"
                >
                  <Image src={item.src} alt="Decarbonization target asset identification - Sustainabyte Technologies" fill className="object-cover"  loading="lazy" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <GreenButton href="/contact">Book a Consulting</GreenButton>
          </div>
        </div>
      </section>

      {/* 4. Measurable Results Section */}
      <section id="results" className="py-24 bg-[#F8FAFC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-sora)] font-black text-[#0D1B3E] mb-2">Measurable Results</h2>
            <div className="w-40 h-1 bg-[#4DB846] mx-auto rounded-full" />
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 mb-16">
            {/* Text Points */}
            <div className="w-full lg:w-1/3 space-y-12">
              {[
                {
                  icon: Zap,
                  text: "7-30% energy savings across key systems",
                  metric: "Energy Reduction"
                },
                {
                  icon: ShieldCheck,
                  text: "Verified Scope 1 & 2 emission reductions",
                  metric: "15% Carbon Drop"
                },
                {
                  icon: Activity,
                  text: "Continuous performance tracking for ESG and CDP Compliance",
                  metric: "2-3 Years ROI"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-full border-2 border-[#0D1B3E] flex items-center justify-center shrink-0 group-hover:border-[#4DB846] transition-colors relative mt-1">
                    <div className="absolute inset-1 rounded-full border border-[#0D1B3E]/10 group-hover:border-[#4DB846]/30 transition-colors" />
                    <item.icon className="w-8 h-8 text-[#0D1B3E] group-hover:text-[#4DB846] transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-[#0D1B3E] font-bold text-lg leading-snug">{item.text}</p>
                    <div className="inline-block px-4 py-1 rounded-full bg-[#4DB846] text-[#0D1B3E] text-sm font-black uppercase tracking-wider">
                      {item.metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Gallery */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { src: "/sustanaibility/Decarbonization/MR-2.webp", initialY: -80 },
                { src: "/sustanaibility/Decarbonization/Measurable-Results-1-768x432.webp", initialY: 80 },
                { src: "/sustanaibility/Decarbonization/MR-3.webp", initialY: -80 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: item.initialY }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                  whileHover={{ y: i % 2 === 0 ? -10 : 10 }}
                  className="aspect-[3/5] relative rounded-[2.5rem] overflow-hidden border-2 border-[#4DB846] shadow-xl"
                >
                  <Image src={item.src} alt="Measurable decarbonization results and verified emission reduction - Sustainabyte" fill className="object-cover"  loading="lazy" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <GreenButton href="/contact">Book a Consulting</GreenButton>
          </div>
        </div>
      </section>

      {/* 5. Immediate Impact Section */}
      <section id="impact" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-sora)] font-black text-[#0D1B3E] mb-2">Immediate Impact</h2>
            <div className="w-40 h-1 bg-[#4DB846] mx-auto rounded-full" />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">
            {/* Text Points */}
            <div className="w-full lg:w-1/3 space-y-12">
              {[
                {
                  icon: Zap,
                  text: "Fast implementation, minimal disruption"
                },
                {
                  icon: Settings,
                  text: "OEM-agnostic integration with your existing infrastructure"
                },
                {
                  icon: Layout,
                  text: "Fully automated dashboard and reports for transparency and audits"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full border-2 border-[#0D1B3E] flex items-center justify-center shrink-0 group-hover:border-[#4DB846] transition-colors relative">
                    <div className="absolute inset-1 rounded-full border border-[#0D1B3E]/10 group-hover:border-[#4DB846]/30 transition-colors" />
                    <item.icon className="w-8 h-8 text-[#0D1B3E] group-hover:text-[#4DB846] transition-colors" />
                  </div>
                  <p className="text-[#0D1B3E] font-semibold text-lg leading-snug">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Image Gallery */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { src: "/sustanaibility/Decarbonization/II-3-768x768.webp", initialY: -80 },
                { src: "/sustanaibility/Decarbonization/Immediate-Impact-1-768x768.webp", initialY: 80 },
                { src: "/sustanaibility/Decarbonization/MR-2.webp", initialY: -80 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: item.initialY }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                  whileHover={{ y: i % 2 === 0 ? -10 : 10 }}
                  className="aspect-[3/5] relative rounded-[2.5rem] overflow-hidden border-2 border-[#4DB846] shadow-xl"
                >
                  <Image src={item.src} alt="Immediate carbon reduction impact through targeted interventions - Sustainabyte" fill className="object-cover"  loading="lazy" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <GreenButton href="/contact">Book a Consulting</GreenButton>
          </div>
        </div>
      </section>

      {/* Pillars Section (Footer-like navigation) */}
      <section className="py-24 bg-[#0D1B3E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-sora)] font-black mb-4 text-white">Explore More <span className="text-[#4DB846]">Sustainability</span> Services</h2>
          <div className="w-20 h-1.5 bg-[#4DB846] mx-auto rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Water Management", desc: "Comprehensive water auditing and conservation strategies.", href: "/sustainability#water" },
            { title: "Carbon Accounting", desc: "Accurate, compliant, and audit-ready emissions reporting.", href: "/sustainability/carbon-accounting" },
            { title: "Net Zero RoadMap", desc: "Multi-year pathways for achieving institutional net zero targets.", href: "/sustainability#netzero" }
          ].map((item, idx) => (
            <Link key={idx} href={item.href} className="bg-white/5 border border-white/10 p-10 rounded-3xl group hover:bg-white/10 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#4DB846] transition-colors">{item.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 mb-8 leading-relaxed">{item.desc}</p>
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
