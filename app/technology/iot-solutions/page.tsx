"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Wind,
  Thermometer,
  Activity,
  Camera,
  Database,
  ArrowRight,
  Wifi,
  Cpu,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GreenButton from "@/components/ui/GreenButton";

const products = [
  {
    id: "optiedgew",
    name: "Optiedge Water",
    subtitle: "Smart Water Monitoring",
    description:
      "Real-time water consumption monitoring and leak detection for industrial and commercial facilities. Reduce water wastage with intelligent flow analysis and automated alerts.",
    icon: Droplets,
    color: "from-blue-500 to-cyan-400",
    borderColor: "border-blue-400/30",
    glowColor: "rgba(59,130,246,0.2)",
    image: "/iot/optiedgew.png",
    features: [
      "Real-time flow rate monitoring",
      "Leak detection & alerts",
      "Consumption analytics dashboard",
      "Automated reporting",
    ],
  },
  {
    id: "optiedgeac",
    name: "Optiedge HVAC",
    subtitle: "HVAC & Air Quality Control",
    description:
      "Intelligent HVAC monitoring and control with indoor air quality tracking. Optimize energy consumption while maintaining optimal comfort and air quality standards.",
    icon: Wind,
    color: "from-emerald-500 to-teal-400",
    borderColor: "border-emerald-400/30",
    glowColor: "rgba(16,185,129,0.2)",
    image: "/iot/optiedgeac.png",
    features: [
      "HVAC performance analytics",
      "IAQ (CO₂, PM2.5, VOC) monitoring",
      "Energy optimization controls",
      "Predictive maintenance alerts",
    ],
  },
  {
    id: "optiedgect",
    name: "Optiedge Cooling Tower",
    subtitle: "Cooling Tower Intelligence",
    description:
      "Advanced cooling tower performance monitoring to maximise efficiency and prevent failures. Track water treatment, blowdown cycles, and thermal performance in real time.",
    icon: Thermometer,
    color: "from-orange-500 to-amber-400",
    borderColor: "border-orange-400/30",
    glowColor: "rgba(249,115,22,0.2)",
    image: "/iot/optiedgect.png",
    features: [
      "Thermal efficiency tracking",
      "Water treatment monitoring",
      "Blowdown cycle optimisation",
      "Fouling & scale detection",
    ],
  },
  {
    id: "optiedgecpm",
    name: "Optiedge Chiller Plant Management",
    subtitle: "Chiller & Plant Monitoring",
    description:
      "Comprehensive chiller plant monitoring for maximum COP and system reliability. Get continuous visibility into compressor health, refrigerant levels, and energy consumption.",
    icon: Activity,
    color: "from-purple-500 to-violet-400",
    borderColor: "border-purple-400/30",
    glowColor: "rgba(168,85,247,0.2)",
    image: "/iot/optiedgecpm.png",
    features: [
      "COP & efficiency benchmarking",
      "Compressor health tracking",
      "Refrigerant level monitoring",
      "Load & demand optimisation",
    ],
  },
  {
    id: "optiedgecam",
    name: "Optiedge Compressed Air Manager",
    subtitle: "Compressed Air Monitoring",
    description:
      "End-to-end compressed air system monitoring to eliminate leaks and reduce energy waste. Measure flow, pressure, and dew point across your distribution network in real time.",
    icon: Camera,
    color: "from-rose-500 to-pink-400",
    borderColor: "border-rose-400/30",
    glowColor: "rgba(244,63,94,0.2)",
    image: "/iot/optiedgecam.png",
    features: [
      "Leak detection & quantification",
      "Pressure differential analysis",
      "Dew point & quality tracking",
      "System efficiency scoring",
    ],
  },
  {
    id: "optiedgedm",
    name: "Optiedge Demand Management",
    subtitle: "Demand Management",
    description:
      "Intelligent energy demand management to reduce peak load charges and optimise tariff utilisation. Prevent demand spikes with predictive load control and real-time alerts.",
    icon: Database,
    color: "from-[#4DB846] to-[#3DD68C]",
    borderColor: "border-[#4DB846]/30",
    glowColor: "rgba(77,184,70,0.2)",
    image: "/iot/optiedgedm.png",
    features: [
      "Peak demand prediction & control",
      "Tariff optimisation engine",
      "Load shedding automation",
      "Real-time kVA/kW dashboards",
    ],
  },
];

const stats = [
  { value: "6+", label: "IoT Modules", icon: Cpu },
  { value: "99.9%", label: "Uptime Reliability", icon: Shield },
  { value: "Real-time", label: "Data Streams", icon: Wifi },
  { value: "30%", label: "Avg. Energy Saved", icon: Zap },
];

export default function IoTSolutionsPage() {
  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden font-[family-name:var(--font-sora)]">

      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] flex items-center pt-36 pb-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/iot/hero-bg.png"
            alt="IoT Solutions Background"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3E]/60 via-[#0D1B3E]/40 to-[#0D1B3E]" />
        </div>

        {/* Animated blobs */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#4DB846]/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[100px]" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#4DB846 1px, transparent 1px), linear-gradient(90deg, #4DB846 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4DB846]/10 border border-[#4DB846]/30 text-[#4DB846] text-sm font-bold tracking-wider uppercase mb-8"
            >
              <Wifi className="w-4 h-4" />
              Industrial IoT Solutions
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8">
              Optiedge
              <span className="block bg-gradient-to-r from-[#4DB846] to-[#3DD68C] bg-clip-text text-transparent">
                IoT Platform
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mb-12 leading-relaxed">
              Six purpose-built IoT modules that turn your industrial assets into{" "}
              <span className="text-white font-semibold">
                intelligent, data-driven systems
              </span>{" "}
              — from water and air to cooling and demand management.
            </p>

            <div className="flex flex-wrap gap-5">
              <GreenButton href="#products">Explore Modules</GreenButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-white font-bold text-lg hover:text-[#4DB846] transition-all group"
              >
                Get a Demo{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#4DB846]/10 border border-[#4DB846]/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#4DB846]" />
                </div>
                <div className="text-4xl font-black text-[#0D1B3E] mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section id="products" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#4DB846] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              Our Modules
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Six Smart Solutions
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Each Optiedge module is engineered for a specific industrial system —
              deploy individually or as an integrated suite.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative rounded-[2rem] border ${product.borderColor} bg-white/[0.04] backdrop-blur-sm flex flex-col group overflow-hidden`}
                style={{ boxShadow: `0 0 60px ${product.glowColor}` }}
              >
                {/* Top colour bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.color} opacity-70 group-hover:opacity-100 transition-opacity`} />

                {/* Product image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient fade into card body */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0D1B3E]/90" />

                </div>

                {/* Card body */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="mb-1">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
                      {product.subtitle}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-black text-white mb-3 group-hover:bg-gradient-to-r group-hover:${product.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-7">
                    {product.features.map((feat, fi) => (
                      <li key={fi} className="flex items-center gap-2.5 text-sm text-gray-300">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${product.color} flex-shrink-0`} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#4DB846] hover:gap-4 transition-all duration-300 group/link"
                  >
                    Request a Demo
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${product.glowColor} 0%, transparent 60%)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Optiedge ── */}
      <section className="py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#4DB846] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                Why Optiedge
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-[#0D1B3E] mb-8 leading-tight">
                Built for{" "}
                <span className="bg-gradient-to-r from-[#4DB846] to-[#3DD68C] bg-clip-text text-transparent">
                  Industrial
                </span>{" "}
                Scale
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                The Optiedge platform is purpose-engineered for harsh industrial
                environments — ruggedised hardware, edge computing, and
                cloud-native analytics working together seamlessly.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Cpu,
                    title: "Edge Computing",
                    desc: "On-device processing ensures zero data latency, even without internet connectivity.",
                  },
                  {
                    icon: Shield,
                    title: "Industrial-grade Reliability",
                    desc: "Designed for 24/7 operation in high-temperature and high-humidity environments.",
                  },
                  {
                    icon: Wifi,
                    title: "Protocol Agnostic",
                    desc: "Supports Modbus, BACnet, MQTT, and OPC-UA for seamless integration with any BMS.",
                  },
                  {
                    icon: BarChart3,
                    title: "Unified Analytics",
                    desc: "All six modules feed into a single OptiByte analytics platform for holistic insights.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 items-start group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#4DB846]/10 border border-[#4DB846]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4DB846] group-hover:border-[#4DB846] transition-all duration-300">
                      <item.icon className="w-6 h-6 text-[#4DB846] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-[#0D1B3E] font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating product card stack */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[600px]">
                {products.slice(0, 4).map((p, i) => (
                  <motion.div
                    key={p.id}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    }}
                    className={`absolute rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden`}
                    style={{
                      top: `${i * 130}px`,
                      left: i % 2 === 0 ? "0px" : "60px",
                      width: "300px",
                      boxShadow: `0 8px 40px ${p.glowColor}`,
                    }}
                  >
                    <div className="px-5 py-4 flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center flex-shrink-0`}>
                        <p.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-[#0D1B3E] font-black text-sm">{p.name}</div>
                        <div className="text-gray-500 text-xs">{p.subtitle}</div>
                      </div>
                      <div className="ml-auto w-2 h-2 rounded-full bg-[#4DB846] animate-pulse" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4DB846]/8 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Ready to Connect Your{" "}
              <span className="bg-gradient-to-r from-[#4DB846] to-[#3DD68C] bg-clip-text text-transparent">
                Facility?
              </span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Talk to our IoT specialists and get a tailored Optiedge deployment
              plan for your facility within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <GreenButton href="/contact">Book a Consultation</GreenButton>
              <Link
                href="/technology/optibyte"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white rounded-full font-bold hover:bg-white hover:text-[#0D1B3E] transition-all"
              >
                See OptiByte Platform
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
