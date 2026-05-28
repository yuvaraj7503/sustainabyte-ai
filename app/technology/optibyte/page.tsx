"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  BarChart3,
  ShieldCheck,
  Cpu,
  Settings,
  TrendingUp,
  ArrowUpRight,
  Flame,
  Wind,
  Snowflake,
  Droplets,
  Fan,
  Activity,
  Layers,
  Search,
  Monitor,
  Users
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";


const industrialEquipment = [
  {
    name: "Boilers",
    icon: <Flame className="w-8 h-8 text-[#3DD68C]" />,
    image: "/technology/Boilers.webp",
    details: [
      "Monitors fuel gas & fuel use",
      "Track steam output in real time",
      "Cuts fuel costs, improve efficiency"
    ]
  },
  {
    name: "Compressors",
    icon: <Wind className="w-8 h-8 text-[#3DD68C]" />,
    image: "/technology/Compressors.webp",
    details: [
      "Tracks pressure, runtime, cycles",
      "Detects leaks, part-load issues",
      "Boosts energy savings"
    ]
  },
  {
    name: "Kilns",
    icon: <Activity className="w-8 h-8 text-[#3DD68C]" />,
    image: "/technology/Kilns.webp",
    details: [
      "Maps temperature & heat loss",
      "Tracks fuel vs. output",
      "Enhances firing stability"
    ]
  },
  {
    name: "Furnaces",
    icon: <Flame className="w-8 h-8 text-[#3DD68C]" />,
    image: "/technology/Furnaces.webp",
    details: [
      "Logs temp & burner status",
      "Detects insulation loss",
      "Lowers fuel use, extends life"
    ]
  }
];

const utilityEquipment = [
  {
    name: "Chiller Systems",
    icon: <Snowflake className="w-8 h-8 text-[#3DD68C]" />,
    image: "/technology/Chiller Systems.webp",
    details: [
      "Tracks CHWST, CHWRT, compressor cycles",
      "Auto setpoint tuning",
      "Boosts efficiency, cuts cooling cost"
    ]
  },
  {
    name: "Pumps",
    icon: <Droplets className="w-8 h-8 text-[#3DD68C]" />,
    image: "/technology/Pumps.webp",
    details: [
      "Monitors runtime, VFD speed",
      "Automates lead-lag",
      "Prevents dry-run, reduces wear"
    ]
  },
  {
    name: "Cooling Towers",
    icon: <Wind className="w-8 h-8 text-[#3DD68C]" />,
    image: "/technology/Cooling Towers.webp",
    details: [
      "Wet bulb-based control",
      "Fan speed via VFD",
      "Saves 7–30% energy"
    ]
  },
  {
    name: "AHUs (Air Handling Units)",
    icon: <Fan className="w-8 h-8 text-[#3DD68C]" />,
    image: "/technology/AHUs (Air Handling Units).webp",
    details: [
      "Monitors air temperature and pressure",
      "Adjusts fan speed using VFD logic",
      "Improves airflow, comfort, and energy use"
    ]
  },
  {
    name: "STP (Sewage Treatment)",
    icon: <Droplets className="w-8 h-8 text-[#3DD68C]" />,
    image: "/technology/STP (Sewage Treatment).webp",
    details: [
      "Tracks sludge, levels, DO, BOD",
      "Compliance-ready reporting",
      "Prevents overflows"
    ]
  },
  {
    name: "WTP (Water Treatment)",
    icon: <Droplets className="w-8 h-8 text-[#3DD68C]" />,
    image: "/technology/WTP (Water Treatment).webp",
    details: [
      "Logs flow, turbidity, TDS",
      "Monitors dosing efficiency",
      "Ensures water safety"
    ]
  }
];

export default function OptiBytePage() {
  const [currentBg, setCurrentBg] = useState(0);
  const bgImages = [
    "/What We Do all img/Technology-768x768.webp",
    "/technology/Energy analysis  bg.webp",
    "/technology/bg3.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden">
      {/* Immersive Background Slider Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentBg}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={bgImages[currentBg]}
                alt="OptiByte Background"
                fill
                className="object-cover scale-110"
                priority
              />
            </motion.div>
          </AnimatePresence>
          {/* High-impact dark overlays */}
          <div className="absolute inset-0 bg-[#0D1B3E]/60 backdrop-blur-[1px] z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E] via-transparent to-[#0D1B3E]/40 z-[2]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <h1 className="font-[family-name:var(--font-sora)] text-4xl md:text-6xl font-black mb-8 leading-none tracking-tighter drop-shadow-2xl">
              Opti<span className="bg-gradient-to-r from-[#4DB846] to-[#3DD68C] bg-clip-text text-transparent">Byte</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center"
            >


              <GreenButton href="/contact" className="px-12 py-5 text-sm font-black tracking-widest shadow-[0_0_50px_rgba(61,214,140,0.3)] transition-all hover:scale-105 active:scale-95">
                Schedule the Demo
              </GreenButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Unlock Insights Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-[2rem] overflow-hidden aspect-[16/11] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] border border-gray-100 group bg-gray-50/30"
            >
              <Image
                src="/technology/optibyteui.webp"
                alt="OptiByte Architecture Diagram"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0D1B3E]/5 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-black text-[#0D1B3E] mb-8">
                Unlock <span className="text-[#3DD68C]">System-Level</span> Insights
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Gain deep visibility into how your equipment behaves across seasons, zones, and operating conditions with a high-performance feature suite.
              </p>

              <div className="space-y-8">
                {[
                  { icon: <Monitor className="w-6 h-6" />, title: "Real-Time Energy Monitoring", desc: "Live visualization of power loads, electrical parameters, and utility consumption patterns across your entire facility footprint." },
                  { icon: <Layers className="w-6 h-6" />, title: "Equipment-Level Analytics", desc: "Granular diagnostics for HVAC, compressed air, boilers, and pumps to isolate inefficiencies down to individual mechanical assets." },
                  { icon: <Zap className="w-6 h-6" />, title: "Chiller Plant KPIs", desc: "Track coefficient of performance (COP), specific energy consumption (kW/TR), and heat balance equations in real time." },
                  { icon: <ShieldCheck className="w-6 h-6" />, title: "Alerts & Anomaly Detection", desc: "AI-driven diagnostics that immediately flag deviations, drift, low Delta-T syndrome, and equipment failures before they trigger shutdowns." },
                  { icon: <BarChart3 className="w-6 h-6" />, title: "M&V Reporting (IPMVP)", desc: "Generate automated Measurement & Verification reports compliant with global IPMVP standards to verify exact CapEx/OpEx savings." },
                  { icon: <Users className="w-6 h-6" />, title: "Role-Based Dashboards", desc: "Tailored viewports for facility heads, energy engineers, and corporate CXOs to track operational uptime and net-zero targets." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-14 h-14 rounded-2xl bg-[#0D1B3E]/5 flex items-center justify-center text-[#3DD68C] group-hover:bg-[#3DD68C] group-hover:text-white transition-all duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0D1B3E] mb-1">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Session Showcase */}
      <section className="py-32 bg-[#0D1B3E] relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('/technology/fullimg.webp')] bg-cover bg-center opacity-10 grayscale scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3E] via-transparent to-[#0D1B3E]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-6xl font-black text-white mb-6">
              The <span className="text-[#3DD68C]">OptiByte</span> Solution Architecture
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A unified interface designed for complex industrial environments. Monitor, analyze, and optimize every asset from a single pane of glass.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] p-4 bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] max-w-6xl mx-auto"
          >
            <div className="rounded-[2.5rem] overflow-hidden border border-white/20">
              <Image
                src="/technology/fullimg.webp"
                alt="Full Platform Interface"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* Core Value Props Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-2 mb-20">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#0D1B3E]" />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-10 h-10" />,
                title: "View asset-specific trends and performance benchmarks",
              },
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: (
                  <>
                    Detect inefficiencies in Real-time & drive <span className="text-[#3DD68C] font-bold">energy savings</span> for your facility
                  </>
                ),
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Get actionable insights using AI-driven analytics",
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative w-40 h-40 mb-10 flex items-center justify-center">
                  {/* Solid Gradient Circle */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0D1B3E] via-[#0D1B3E]/80 to-[#3DD68C] shadow-2xl group-hover:scale-105 transition-transform duration-500" />

                  {/* Icon */}
                  <div className="relative z-10 text-white/40 group-hover:text-white transition-colors duration-500">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-[#0D1B3E] leading-relaxed max-w-[280px]">
                  {card.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Insights Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-6xl font-black text-[#0D1B3E] mb-6">
              Equipment-Specific <span className="text-[#3DD68C]">Insights</span>
            </h2>
            <div className="w-24 h-2 bg-[#3DD68C] mx-auto rounded-full" />
          </div>

          <div className="mb-20">
            <h3 className="text-3xl font-black text-[#0D1B3E] mb-12 flex items-center gap-4">
              <span className="w-12 h-1 bg-[#0D1B3E] rounded-full" /> Industrial Equipment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industrialEquipment.map((eq, i) => (
                <EquipmentCard key={i} eq={eq} index={i} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-black text-[#0D1B3E] mb-12 flex items-center gap-4">
              <span className="w-12 h-1 bg-[#0D1B3E] rounded-full" /> Utility Equipment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {utilityEquipment.map((eq, i) => (
                <FlipEquipmentCard key={i} eq={eq} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>








      {/* CTA Final Section */}
      <section className="py-24 bg-[#0D1B3E] relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(61,214,140,0.1)_0,transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-6xl font-black mb-8 leading-tight">
            Ready to Make Your <br />
            Facility <span className="text-[#3DD68C]">EPIC</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join the forward-thinking facilities using OptiByte to drive verified savings and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <GreenButton href="/contact">Schedule a Demo</GreenButton>
            <Link href="/technology" className="text-white font-bold hover:text-[#3DD68C] transition-colors">
              Explore Tech Stack
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function EquipmentCard({ eq, index }: { eq: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group p-8 rounded-[2rem] bg-[#F8FAFC] border border-gray-100 hover:border-[#3DD68C]/50 hover:shadow-2xl transition-all duration-500 h-full"
    >
      {eq.image && (
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-white">
          <Image
            src={eq.image}
            alt={eq.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      )}
      <h4 className="text-2xl font-black text-[#0D1B3E] mb-6 group-hover:text-[#3DD68C] transition-colors">{eq.name}</h4>
      <ul className="space-y-4">
        {eq.details.map((detail: string, j: number) => (
          <li key={j} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
            <div className="w-1.5 h-1.5 bg-[#3DD68C] rounded-full mt-2 flex-shrink-0" />
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function FlipEquipmentCard({ eq, index }: { eq: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="flip-card h-[420px]"
    >
      <div className="flip-card-inner">
        {/* Front Face - Text & Details */}
        <div className="flip-card-front p-8 rounded-[2rem] bg-[#F8FAFC] border border-gray-100 shadow-lg flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8">
            <div className="text-[#3DD68C]">
              {eq.icon}
            </div>
          </div>
          <h4 className="text-2xl font-black text-[#0D1B3E] mb-6">{eq.name}</h4>
          <ul className="space-y-4 flex-1 w-full">
            {eq.details.map((detail: string, j: number) => (
              <li key={j} className="flex gap-3 text-gray-600 text-sm leading-relaxed justify-center">
                <div className="w-1.5 h-1.5 bg-[#3DD68C] rounded-full mt-2 flex-shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
          <div className="mt-6 text-xs text-[#3DD68C] font-bold uppercase tracking-widest opacity-60">
            Hover to preview →
          </div>
        </div>

        {/* Back Face - Equipment Image */}
        <div className="flip-card-back rounded-[2rem] overflow-hidden border border-[#3DD68C]/30 shadow-2xl bg-white">
          {eq.image ? (
            <div className="relative w-full h-full">
              <Image
                src={eq.image}
                alt={eq.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0D1B3E] via-[#0D1B3E]/80 to-transparent">
                <h4 className="text-xl font-black text-white">{eq.name}</h4>
                <p className="text-[#3DD68C] text-sm font-bold mt-1">OptiByte Monitored</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-8">
              <div className="w-20 h-20 rounded-full bg-[#3DD68C]/10 flex items-center justify-center mx-auto mb-6">
                {eq.icon}
              </div>
              <h4 className="text-2xl font-black text-[#0D1B3E]">{eq.name}</h4>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
