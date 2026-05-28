"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  Zap,
  LineChart,
  ShieldCheck,
  Cpu,
  Activity,
  ArrowRight,
  CheckCircle2,
  Layers,
  Network,
  Bot,
  Eye,
  TrendingDown,
  Settings2,
} from "lucide-react";
import Image from "next/image";
import GreenButton from "@/components/ui/GreenButton";

const aiCapabilities = [
  {
    icon: Bot,
    title: "Agentic AI Workflows",
    desc: "Autonomous AI agents continuously monitor, analyse and act — detecting anomalies, triggering optimizations and escalating only what matters.",
    color: "#3DD68C",
  },
  {
    icon: Brain,
    title: "Predictive Intelligence",
    desc: "Deep learning models trained on real facility data anticipate equipment failures and energy spikes before they occur — keeping operations proactive.",
    color: "#4DB846",
  },
  {
    icon: Network,
    title: "Multi-Source Data Fusion",
    desc: "AI ingests data across BACnet, Modbus, MQTT and IoT sensors — fusing it into a single intelligent operational picture across your entire portfolio.",
    color: "#3DD68C",
  },
  {
    icon: Zap,
    title: "Autonomous Optimisation",
    desc: "Closed-loop AI continuously tunes setpoints, schedules and control parameters in real time — delivering sustained energy savings without manual input.",
    color: "#4DB846",
  },
  {
    icon: LineChart,
    title: "Verified Savings Analytics",
    desc: "AI-powered M&V (IPMVP-aligned) tracks, attributes and reports every kilowatt saved — giving stakeholders auditable, bankable results.",
    color: "#3DD68C",
  },
  {
    icon: Activity,
    title: "Intelligent FDD",
    desc: "Fault Detection & Diagnostics powered by AI surfaces hidden equipment inefficiencies and emerging faults across chillers, compressors, boilers and more.",
    color: "#4DB846",
  },
];

const aiProducts = [
  {
    name: "OptiByte",
    tagline: "AI Energy Intelligence Platform",
    desc: "The central AI brain — consolidating energy data, running predictive models and orchestrating autonomous optimisation across your full facility portfolio.",
    href: "/technology/optibyte",
    accent: "#3DD68C",
  },
  {
    name: "InByte",
    tagline: "AI-Powered Audit Intelligence",
    desc: "Transforms manual energy audits into AI-assisted deep-dives — auto-flagging inefficiencies, generating recommendations and calculating verified savings potential.",
    href: "/technology/inbyte",
    accent: "#4DB846",
  },
  {
    name: "FixByte",
    tagline: "Predictive Maintenance AI",
    desc: "AI-driven fault detection that monitors equipment health continuously, predicts failures before they happen and auto-generates work orders.",
    href: "/technology/fixbyte",
    accent: "#3DD68C",
  },
  {
    name: "FusionByte",
    tagline: "AI Production Intelligence",
    desc: "Integrates production and energy data through AI models to reveal the true cost of every process — and where to cut without cutting output.",
    href: "/technology/fusionbyte",
    accent: "#4DB846",
  },
];

const metrics = [
  { value: "30%", label: "Energy Savings", sub: "average across facilities" },
  { value: "24/7", label: "Autonomous Monitoring", sub: "no human-in-loop required" },
  { value: "15min", label: "Anomaly Detection", sub: "average time to surface faults" },
  { value: "100%", label: "Audit Trail", sub: "every AI action logged" },
];

const protocols = [
  "BACnet", "Modbus", "MQTT", "Zigbee", "LoRaWAN", "OPC-UA", "M-Bus", "HTTP/REST",
];

const aiModules = [
  {
    title: "Digital Twin Intelligence",
    content: "Create real-time virtual replicas of physical energy systems to monitor performance, predict failures, optimize operations, and improve efficiency using AI-driven insights and engineering intelligence.",
    image: "/ai/digital-twin.webp",
    imageLeft: true,
    id: "digital-twin",
  },
  {
    title: "Smart Fault Detection & Diagnostics",
    content: "Detect operational faults, rule violations, inefficiencies, and abnormal system behavior instantly using deterministic engineering logic and real-time analytics.",
    image: "/ai/fdd.webp",
    imageLeft: false,
    id: "fdd",
  },
  {
    title: "Unified AI Assistant",
    content: "Interact with your systems using natural language to access data insights, diagnostics, anomaly detection, trend analysis, visualizations, and operational intelligence from a single AI-powered assistant.",
    image: "/ai/ai-assistant.webp",
    imageLeft: true,
    id: "ai-assistant",
  },
];

export default function AIPage() {
  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden font-[family-name:var(--font-sora)]">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        .float-anim { animation: float 7s ease-in-out infinite; }
        @keyframes scan { 0%{top:0%} 100%{top:100%} }
        .scan-line { animation: scan 3s linear infinite; }
        @keyframes grid-fade { 0%,100%{opacity:0.03} 50%{opacity:0.07} }
        .grid-bg { animation: grid-fade 5s ease-in-out infinite; }
        .glow-green { box-shadow: 0 0 40px rgba(61,214,140,0.25), 0 0 80px rgba(61,214,140,0.1); }
        .card-glass {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
        }
        .card-glass:hover {
          background: rgba(61,214,140,0.06);
          border-color: rgba(61,214,140,0.25);
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .pulse-ring { animation: pulse-ring 2.5s ease-out infinite; }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ai/ai 1.png"
            alt="AI Technology Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3E] via-transparent to-[#0D1B3E]" />
          <div className="absolute inset-0 bg-[#0D1B3E]/40" />
        </div>

        {/* Grid background */}
        <div
          className="absolute inset-0 grid-bg pointer-events-none z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(61,214,140,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(61,214,140,0.06) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(61,214,140,0.12) 0%, transparent 70%)" }} />

        {/* Animated orbs */}
        <motion.div className="absolute top-32 left-16 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(61,214,140,0.12) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-24 right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(77,184,70,0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              {/* Badge */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#3DD68C]/30 bg-[#3DD68C]/10 mb-10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-[#3DD68C] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3DD68C]" />
                </span>
                <span className="text-[#3DD68C] text-sm font-semibold tracking-widest uppercase">Sustainabyte AI</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-7xl lg:text-8xl font-black leading-[1.0] mb-8 tracking-tight">
                Intelligence<br />
                <span style={{ background: "linear-gradient(135deg, #3DD68C 0%, #4DB846 50%, #3DD68C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Built In.
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
                Sustainabyte embeds AI at every layer — from sensor data ingestion to autonomous optimisation — so your facilities run smarter without adding complexity.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-start justify-start gap-5">
                <GreenButton href="/contact">Request a Demo</GreenButton>
                <Link href="#capabilities" className="flex items-center gap-2 text-white/70 hover:text-[#3DD68C] font-semibold transition-colors group">
                  Explore AI Capabilities <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
            <div className="hidden lg:block" />
          </div>

          {/* Metric strip (Running Animation) */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-20 overflow-hidden border border-white/[0.06] rounded-2xl max-w-5xl mx-auto bg-white/[0.02] backdrop-blur-md relative group">
            {/* Gradient masks for smooth fade on edges */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#0D1B3E] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#0D1B3E] to-transparent z-10 pointer-events-none" />
            
            <div className="flex w-fit">
              <motion.div 
                className="flex"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              >
                {[...metrics, ...metrics, ...metrics, ...metrics].map((m, i) => (
                  <div key={i} className="flex-shrink-0 w-[200px] md:w-[256px] px-4 py-6 text-center border-r border-white/[0.05] transition-all duration-300 hover:bg-white/[0.05]">
                    <div className="text-3xl md:text-4xl font-black text-[#3DD68C] mb-1 drop-shadow-[0_0_15px_rgba(61,214,140,0.4)]">{m.value}</div>
                    <div className="text-white font-bold text-[10px] md:text-xs uppercase tracking-tighter opacity-80">{m.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── AI CAPABILITIES ── */}
      <section id="capabilities" className="py-28 relative bg-white">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(61,214,140,0.05) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-20">
            <p className="text-[#2EA86A] text-sm font-bold tracking-widest uppercase mb-4">Core AI Capabilities</p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-gray-900">
              What Our AI<br />Actually Does
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Six pillars of AI capability — each purpose-built for industrial energy and operational intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((cap, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
                className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 group cursor-default transition-all duration-400 hover:-translate-y-2 shadow-sm hover:shadow-xl hover:border-[#3DD68C]/30 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110 shadow-lg group-hover:shadow-[#3DD68C]/20"
                  style={{ background: `${cap.color}15`, border: `1px solid ${cap.color}30` }}>
                  <cap.icon className="w-10 h-10" style={{ color: cap.color === '#3DD68C' ? '#2EA86A' : cap.color }} />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#2EA86A] transition-colors">{cap.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI INTELLIGENCE MODULES (Alternating) ── */}
      <section className="py-28 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {aiModules.map((module, i) => (
            <div key={i} id={module.id} className={`flex flex-col lg:flex-row items-center gap-16 mb-32 last:mb-0 ${!module.imageLeft ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: module.imageLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#3DD68C]/20 to-[#4DB846]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-gray-50">
                    <Image
                      src={module.image}
                      alt={module.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2 text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3DD68C]/10 border border-[#3DD68C]/20 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3DD68C] animate-pulse" />
                  <span className="text-[#2EA86A] text-xs font-bold uppercase tracking-wider">Advanced AI Module</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  {module.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {module.content}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Real-time Analytics",
                    "Predictive Modeling",
                    "Autonomous Control",
                    "Detailed Reporting"
                  ].map((feat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (idx * 0.1), duration: 0.4 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#3DD68C]" />
                      <span className="text-sm font-semibold text-gray-700">{feat}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW AI WORKS ── */}
      <section className="py-28 relative overflow-hidden bg-[#0D1B3E]">
        {/* Background elements */}
        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `linear-gradient(rgba(61,214,140,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(61,214,140,0.1) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 50%, rgba(61,214,140,0.08) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-20">
            <p className="text-[#3DD68C] text-sm font-bold tracking-widest uppercase mb-4">The AI Loop</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">From Data to Action</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              A continuous intelligence loop — ingesting data, learning patterns, predicting outcomes and taking autonomous action.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
            {/* Connector line with glow */}
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-[2px] overflow-hidden bg-white/5">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#3DD68C] to-transparent"
              />
            </div>

            {[
              { icon: Network, step: "01", title: "Ingest", desc: "Real-time data streams from IoT sensors, BMS, meters and production systems — unified across protocols." },
              { icon: Brain, step: "02", title: "Learn", desc: "AI models continuously learn normal vs. anomalous behaviour, building facility-specific intelligence over time." },
              { icon: Activity, step: "03", title: "Predict", desc: "Forecasting engines surface energy spikes, equipment faults and optimisation opportunities hours in advance." },
              { icon: Zap, step: "04", title: "Act", desc: "Autonomous agents implement optimisations, trigger alerts and generate reports — closing the loop without delay." },
            ].map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative w-32 h-32 rounded-3xl flex items-center justify-center mb-8 bg-white/[0.03] border border-white/10 backdrop-blur-xl group-hover:border-[#3DD68C]/40 transition-all duration-500 shadow-2xl">
                  <div className="absolute inset-0 bg-[#3DD68C]/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
                  <step.icon className="w-12 h-12 text-[#3DD68C] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-[#3DD68C] to-[#4DB846] shadow-lg flex items-center justify-center text-white text-sm font-black border-2 border-[#0D1B3E] z-20">
                    {step.step}
                  </div>
                  {/* Decorative glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#3DD68C]/20 to-[#4DB846]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 transition-colors group-hover:text-[#3DD68C]">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[240px] group-hover:text-gray-300 transition-colors">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI-POWERED PRODUCTS ── */}
      <section className="py-28 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-20">
            <p className="text-[#2EA86A] text-sm font-bold tracking-widest uppercase mb-4">AI-Powered Products</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">AI in Every Product</h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Each product in the Sustainabyte suite is an AI-native application — not AI bolted on, but intelligence built in from day one.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiProducts.map((product, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10 group transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl hover:bg-white hover:border-[#3DD68C]/20">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.3 }}
                      className="text-xs font-bold tracking-widest uppercase mb-3 block"
                      style={{ color: product.accent === '#3DD68C' ? '#2EA86A' : product.accent }}>
                      {product.tagline}
                    </motion.span>
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900">{product.name}</h3>
                  </div>
                  <Link href={product.href}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-200 group-hover:border-[#3DD68C]/40 group-hover:bg-[#3DD68C]/10 group-hover:rotate-45 transition-all duration-500">
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#2EA86A] transition-colors" />
                  </Link>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{product.desc}</p>
                <div className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent mb-8" />
                <Link href={product.href} className="flex items-center gap-2 text-base font-bold transition-colors hover:text-[#2EA86A] text-gray-500 group/link">
                  Explore {product.name} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONNECTIVITY ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#071022] to-[#0D1B3E] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#3DD68C] text-sm font-bold tracking-widest uppercase mb-4">Universal Connectivity</p>
            <h2 className="text-3xl md:text-5xl font-black mb-6">Connects to Everything</h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-12">
              Our AI layer speaks every industrial protocol — integrating your existing infrastructure without rip-and-replace.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {protocols.map((p, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05, color: "#3DD68C", backgroundColor: "rgba(61,214,140,0.1)" }}
                  className="px-6 py-3 rounded-xl card-glass text-sm font-bold text-gray-300 transition-all cursor-default border border-white/10 hover:border-[#3DD68C]/30">
                  {p}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-20 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-50 border border-gray-100 shadow-sm rounded-3xl p-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: ShieldCheck, title: "Responsible AI", desc: "Every AI decision is logged, explainable and auditable. No black-box outputs — only transparent, traceable intelligence." },
              { icon: Cpu, title: "Edge + Cloud Hybrid", desc: "AI runs at the edge for latency-sensitive tasks and in the cloud for deep analytics — the best of both worlds." },
              { icon: TrendingDown, title: "Outcome-Focused", desc: "We measure AI success by verified savings, uptime improvements and audit-ready reports — not model accuracy metrics." },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-white shadow-sm border border-gray-100 transition-all duration-500 group-hover:scale-110 group-hover:border-[#3DD68C]/30 group-hover:bg-[#3DD68C]/5">
                  <item.icon className="w-8 h-8 text-[#2EA86A] transition-transform duration-500 group-hover:rotate-12" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-[#2EA86A] transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(61,214,140,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight text-gray-900">
              Ready to Make Your<br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{ background: "linear-gradient(135deg, #2EA86A, #3CA336)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Facility Intelligent?
              </motion.span>
            </h2>
            <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Talk to our team and discover how Sustainabyte AI can deliver measurable, verified savings across your operations within weeks.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <GreenButton href="/contact">Book a Discovery Call</GreenButton>
              <Link href="/technology" className="px-8 py-4 rounded-full border border-gray-200 text-gray-900 font-bold hover:bg-gray-50 hover:border-[#3DD68C]/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                See All Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
