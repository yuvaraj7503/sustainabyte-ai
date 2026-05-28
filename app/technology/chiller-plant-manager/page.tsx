"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Snowflake,
  Activity,
  Cpu,
  Settings,
  ShieldCheck,
  ArrowRight,
  TrendingDown,
  Monitor,
  Database,
  Wind,
  Droplets,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";

const features = [
  {
    title: "Chiller Sequencing",
    subtitle: "Automated Multi-Chiller Orchestration",
    description: "Intelligent lead-lag rotation and load balancing based on real-time compressor coefficient of performance (COP) and operating hours.",
    icon: Layers,
    color: "from-blue-500 to-indigo-400",
    glowColor: "rgba(59,130,246,0.06)",
  },
  {
    title: "Pump & Tower Optimization",
    subtitle: "Heat Rejection Loop Control",
    description: "VFD speed modulation of condenser and chilled water pumps, coupled with wet-bulb temperature-based cooling tower fan speed tuning.",
    icon: Wind,
    color: "from-teal-500 to-emerald-400",
    glowColor: "rgba(20,184,166,0.06)",
  },
  {
    title: "Demand-Based Operation",
    subtitle: "Dynamic Setpoint Resets",
    description: "Automatically resets chilled water supply temperature and condenser water temperature based on actual building load and ambient weather.",
    icon: Activity,
    color: "from-purple-500 to-pink-400",
    glowColor: "rgba(168,85,247,0.06)",
  },
  {
    title: "Delta-T Optimization",
    subtitle: "Eliminating Low Delta-T Syndrome",
    description: "Mitigate efficiency loss by continuously tracking temperature difference (CHWST vs CHWRT) and optimizing flow control valve sequencing.",
    icon: Droplets,
    color: "from-cyan-500 to-blue-400",
    glowColor: "rgba(6,182,212,0.06)",
  },
];

const integrations = [
  {
    title: "Niagara & BMS Integration",
    desc: "Seamless connectivity using BACnet IP, BACnet MSTP, Modbus TCP/RTU, and LonWorks. Compatible with Honeywell, Johnson Controls, Siemens, and Tridium Niagara frameworks.",
    icon: Database,
  },
  {
    title: "Dual Chiller Support",
    desc: "Optimized control algorithms designed for both water-cooled systems (centrifugal/screw) and air-cooled systems (screw/scroll).",
    icon: Snowflake,
  },
  {
    title: "AI Recommendations",
    desc: "Continuous diagnostic engines that detect condenser fouling, scaling, and refrigerant leak anomalies, offering immediate corrective setpoints.",
    icon: Cpu,
  },
];

export default function ChillerPlantManagerPage() {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    {
      name: "kW/TR Tracker",
      value: "0.52 kW/TR",
      trend: "-18% Power Reduction",
      description: "Direct specific energy consumption tracker. Helps operators visualize exact electricity input required per Ton of Refrigeration (TR) in real time.",
    },
    {
      name: "COP Calculator",
      value: "6.8 COP",
      trend: "+22% Cycle Efficiency",
      description: "Continuous Coefficient of Performance benchmark. Measures the ratio of useful cooling output to electrical energy consumed by the compressor.",
    },
    {
      name: "Specific Energy",
      value: "0.12 kWh/TRh",
      trend: "Verified IPMVP Savings",
      description: "Aggregated plant efficiency score. Normalizes cooling energy usage against weather, scheduling, and building utilization baselines.",
    },
  ];

  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden font-[family-name:var(--font-sora)]">

      {/* ── Hero Section (BLUE / DARK) ── */}
      <section className="relative min-h-[85vh] flex items-center pt-36 pb-20 overflow-hidden bg-[#0D1B3E]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/technology/Energy analysis  bg.webp"
            alt="Chiller Plant Manager background"
            fill
            className="object-cover opacity-20 brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3E]/60 via-[#0D1B3E]/90 to-[#0D1B3E]" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#3DD68C]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-[#3DD68C] text-sm font-bold tracking-wider uppercase mb-8">
                <Snowflake className="w-4 h-4 text-blue-400 animate-spin" style={{ animationDuration: '8s' }} />
                CPM/CPO Optimization Suite
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white">
                Chiller Plant <br />
                <span className="bg-gradient-to-r from-[#3DD68C] to-blue-400 bg-clip-text text-transparent">
                  Manager & Optimizer
                </span>
              </h1>
              <p className="text-xl text-gray-300 font-light max-w-2xl mb-12 leading-relaxed">
                Supercharge your plant&apos;s COP and eliminate energy waste. Sustainabyte CPM/CPO delivers demand-based chiller sequencing, Delta-T improvement, and pump/tower optimization.
              </p>
              <div className="flex flex-wrap gap-4">
                <GreenButton href="/contact?subject=Book a Chiller Audit" variant="primary">
                  Book Chiller Audit
                </GreenButton>
                <Link
                  href="#features"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 rounded-full hover:bg-white/5 font-semibold text-sm transition-all text-white"
                >
                  Explore Capabilities
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Premium Dashboard Mockup Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square w-full rounded-[2.5rem] bg-[#0F1C3F]/60 border border-white/10 p-8 flex flex-col justify-between overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px]" />

              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="text-lg font-bold text-white">Plant COP Trend</h4>
                  <p className="text-xs text-gray-400">Centrifugal Chiller 01 & 02</p>
                </div>
                <div className="px-3 py-1 bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/20 rounded-full text-xs font-semibold">
                  Live Analytics
                </div>
              </div>

              {/* Graphic Chart Element */}
              <div className="flex-1 w-full relative mb-6 min-h-[220px] p-2 overflow-hidden">
                <svg viewBox="0 0 460 200" className="w-full h-full overflow-visible">
                  {/* Grid Lines (Horizontal) */}
                  {[20, 50, 80, 110, 140, 170].map((y, idx) => (
                    <line
                      key={idx}
                      x1="0"
                      y1={y}
                      x2="460"
                      y2={y}
                      stroke="rgba(255,255,255,0.03)"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Horizontal Support/Resistance Lines (Blue) */}
                  <line x1="0" y1="120" x2="460" y2="120" stroke="#2196F3" strokeWidth="1.2" opacity="0.8" />
                  <line x1="0" y1="180" x2="460" y2="180" stroke="#2196F3" strokeWidth="1.2" opacity="0.8" />
                  
                  {/* Horizontal Dashed Indicator Line (Teal/Green) */}
                  <line x1="0" y1="135" x2="460" y2="135" stroke="#26A69A" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

                  {/* Programmatic Candlesticks */}
                  {Array.from({ length: 65 }).map((_, i) => {
                    const x = parseFloat((10 + (i * 440) / 65).toFixed(2));
                    
                    // Generate a technical-looking curve structure
                    let base = 110;
                    if (i < 20) {
                      // Left peak
                      base = 120 - Math.sin((i / 20) * Math.PI) * 90;
                    } else if (i < 28) {
                      // Drop
                      base = 30 + ((i - 20) / 8) * 80;
                    } else if (i < 40) {
                      // Second peak
                      base = 110 - Math.sin(((i - 28) / 12) * Math.PI) * 60;
                    } else if (i < 55) {
                      // Steep drop
                      base = 50 + ((i - 40) / 15) * 110;
                    } else {
                      // Consolidation
                      base = 160 + Math.sin(((i - 55) / 10) * Math.PI * 2) * 12;
                    }

                    // Add high/low noise
                    const noiseH = (Math.sin(i * 1.7) + Math.cos(i * 2.3)) * 6;
                    const noiseL = (Math.cos(i * 1.5) - Math.sin(i * 2.1)) * 6;
                    
                    const high = parseFloat((base - 10 + noiseH).toFixed(2));
                    const low = parseFloat((base + 12 + noiseL).toFixed(2));
                    const open = parseFloat((base + (Math.sin(i * 3.5) * 6)).toFixed(2));
                    const close = parseFloat((base - (Math.cos(i * 2.8) * 6)).toFixed(2));
                    const isGreen = close < open; // close is lower y (higher price)

                    return (
                      <g key={i}>
                        {/* Wick */}
                        <line
                          x1={x}
                          y1={high}
                          x2={x}
                          y2={low}
                          stroke={isGreen ? "#26A69A" : "#EF5350"}
                          strokeWidth="1"
                        />
                        {/* Body */}
                        <rect
                          x={parseFloat((x - 2).toFixed(2))}
                          y={parseFloat(Math.min(open, close).toFixed(2))}
                          width="4"
                          height={parseFloat(Math.max(Math.abs(open - close), 2).toFixed(2))}
                          fill={isGreen ? "#26A69A" : "#EF5350"}
                        />
                      </g>
                    );
                  })}

                  {/* Moving Average Line 1 (Smooth Indigo/Purple Curve) */}
                  <path
                    d="M 10,130 C 50,110 90,80 140,75 C 190,70 230,40 280,60 C 330,80 370,140 450,150"
                    fill="none"
                    stroke="#5C6BC0"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />

                  {/* Moving Average Line 2 (Smooth Light Blue Curve) */}
                  <path
                    d="M 10,180 C 60,170 120,150 180,130 C 240,110 320,105 450,145"
                    fill="none"
                    stroke="#29B6F6"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />
                </svg>
              </div>

              {/* KPI Cards Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <span className="text-xs text-gray-400">Average kW/TR</span>
                  <p className="text-2xl font-bold text-[#3DD68C]">0.52</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <span className="text-xs text-gray-400">COP Efficiency</span>
                  <p className="text-2xl font-bold text-blue-400">6.8</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Optimization Pillars (WHITE / LIGHT) ── */}
      <section id="features" className="py-28 relative bg-gradient-to-b from-white to-[#F0F4FA] text-gray-800">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#27A37B] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Core Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#193F70] mb-6">
              Plant Loop Optimization Pillars
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#27A37B] to-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative rounded-[2.5rem] border border-[#193F70]/10 bg-white p-8 flex flex-col sm:flex-row gap-6 hover:border-[#27A37B]/40 hover:shadow-2xl hover:shadow-[#193F70]/10 transition-all duration-300 shadow-xl shadow-[#193F70]/5"
                  style={{ boxShadow: `0 10px 40px ${feat.glowColor}` }}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feat.color} flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-[#193F70]">{feat.title}</h3>
                    <h4 className="text-[#27A37B] text-xs font-semibold tracking-wider uppercase mb-4">{feat.subtitle}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feat.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Key Performance Indicators (BLUE / DARK) ── */}
      <section className="py-28 bg-[#0D1B3E] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">

            <div>
              <span className="text-[#3DD68C] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                Chiller Plant KPIs
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Quantified Performance Metrics
              </h2>
              <p className="text-gray-400 mb-12 leading-relaxed">
                Unlock granular visibility. CPM/CPO aggregates and tracks energy parameters to display clean efficiency profiles to your plant operators and managers.
              </p>

              {/* Selector Buttons */}
              <div className="flex flex-col gap-4">
                {metrics.map((metric, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMetric(idx)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${activeMetric === idx
                      ? 'bg-blue-500/10 border-blue-400 text-white'
                      : 'bg-white/[0.02] border-white/5 text-gray-400 hover:bg-white/[0.04]'
                      }`}
                  >
                    <span className="text-lg font-bold block">{metric.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Display Panel */}
            <motion.div
              key={activeMetric}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-10 rounded-[3rem] border border-white/[0.08] bg-[#0F1C3F]/40 backdrop-blur-md relative overflow-hidden h-[400px] flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />

              <div>
                <span className="text-[#3DD68C] text-xs font-bold uppercase tracking-widest block mb-2">Target Metric Benchmark</span>
                <h3 className="text-6xl font-black text-white mb-4">
                  {metrics[activeMetric].value}
                </h3>
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#3DD68C]/15 border border-[#3DD68C]/35 text-[#3DD68C] text-xs font-bold mb-8">
                  {metrics[activeMetric].trend}
                </span>
              </div>

              <div className="border-t border-white/10 pt-8 mt-auto">
                <h4 className="text-lg font-bold mb-2">Metric Impact Description</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {metrics[activeMetric].description}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Integrations & Support Section (WHITE / LIGHT) ── */}
      <section className="py-28 bg-gradient-to-b from-[#F0F4FA] to-white relative text-gray-800">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-[#27A37B] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Connectivity & Logic
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#193F70] mb-6">
              Niagara Integration & AI Recommendation
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrations.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-10 rounded-[3rem] border border-[#193F70]/10 bg-white flex flex-col items-center text-center shadow-xl shadow-[#193F70]/5 hover:border-[#27A37B]/40 hover:shadow-2xl hover:shadow-[#193F70]/10 transition-all duration-300 group"
                >
                  <div className="w-20 h-20 rounded-3xl bg-gray-50 border border-gray-200/80 flex items-center justify-center mb-8 text-[#27A37B] group-hover:bg-[#27A37B]/10 transition-all duration-500">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-[#193F70] mb-4 group-hover:text-[#27A37B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Final Section (BLUE / DARK) ── */}
      <section className="py-24 bg-[#0D1B3E] relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-white">
            Optimize Your Plant Loop <br />
            & <span className="bg-gradient-to-r from-[#3DD68C] to-blue-400 bg-clip-text text-transparent">Minimize Chiller Bills</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Get an engineering check and live simulation parameters for your centrifugal, screw, or scroll chiller plants.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <GreenButton href="/contact?subject=Book a Chiller Audit">Book Chiller Audit</GreenButton>
            <Link href="/contact?subject=CPM Demo" className="text-white font-bold hover:text-[#3DD68C] transition-colors">
              Talk to Chiller Specialist
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
