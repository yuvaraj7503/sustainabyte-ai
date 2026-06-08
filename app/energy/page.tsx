"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart3,
  Activity,
  TrendingDown,
  ArrowUpRight,
  CheckCircle2,
  PieChart,
  ShieldCheck,
  Leaf,
  Settings,
  Gauge,
  Zap,
  Search,
  Wind,
  MapPin,
  Calculator,
  TrendingUp,
  Thermometer,
  Eye,
  Flame,
  Scan,
  Droplets,
  Building2,
  ClipboardList,
  Award,
  ShieldAlert,
  Video,
  Waves,
  LineChart,
  Cpu
} from "lucide-react";
import GreenButton from "@/components/ui/GreenButton";

export default function EnergyPage() {
  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden">
      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/energy/Energy Efficiency and Consulting/energybg.webp"
            alt="Energy excellence solutions for buildings and industries - Sustainabyte"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E]/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
              We offer comprehensive, end-to-end <span className="text-[#4DB846]">energy optimization</span> solutions tailored to your industry needs
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Service Overview Section - Centered Look */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-24">
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-[#0D1B3E] mb-8">
              Energy Efficiency and Consulting Services
            </h2>
            <div className="w-64 h-1 bg-[#4DB846] mx-auto mb-10 rounded-full" />
            <p className="text-[#0D1B3E] text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium">
              Our services are designed to <span className="text-[#4DB846]">reduce carbon emissions</span> and <span className="text-[#4DB846]">boost efficiency</span> through precise audits conducted by highly qualified professionals
            </p>
          </div>

          {/* Decorative Lines Wrapper */}
          <div className="relative">
            {/* Top Right Decorative Line */}
            <div className="hidden lg:block absolute -top-12 right-0 w-1/2">
              <div className="border-t-2 border-r-2 border-dashed border-[#4DB846]/40 h-24 rounded-tr-[3rem] relative">
                <ArrowUpRight className="absolute -bottom-4 -right-4 w-10 h-10 text-[#4DB846] rotate-45" />
              </div>
            </div>

            {/* Bottom Left Decorative Line */}
            <div className="hidden lg:block absolute -bottom-12 left-0 w-1/2 z-0">
              <div className="border-b-2 border-l-2 border-dashed border-[#4DB846]/40 h-24 rounded-bl-[3rem] relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-[#4DB846]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10 px-8">
              {/* Custom Audits */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#4DB846] flex items-center justify-center mb-8 shadow-lg">
                  <CheckCircle2 className="w-10 h-10 text-[#4DB846]" />
                </div>
                <h3 className="text-3xl font-bold text-[#0D1B3E] mb-6">Custom Audits</h3>
                <p className="text-[#0D1B3E]/70 text-lg leading-relaxed">
                  Tailored for specific industries, ensuring optimal <span className="text-[#4DB846] font-bold">energy savings</span> and <span className="text-[#4DB846] font-bold">sustainability</span>
                </p>
              </motion.div>

              {/* Detailed Reporting */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#4DB846] flex items-center justify-center mb-8 shadow-lg">
                  <PieChart className="w-10 h-10 text-[#4DB846]" />
                </div>
                <h3 className="text-3xl font-bold text-[#0D1B3E] mb-6">Detailed Reporting</h3>
                <p className="text-[#0D1B3E]/70 text-lg leading-relaxed">
                  Comprehensive documentation to track progress and achieve <span className="text-[#4DB846] font-bold">sustainability</span> goals
                </p>
              </motion.div>

              {/* Regulatory Compliance */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#4DB846] flex items-center justify-center mb-8 shadow-lg">
                  <ShieldCheck className="w-10 h-10 text-[#4DB846]" />
                </div>
                <h3 className="text-3xl font-bold text-[#0D1B3E] mb-6">Regulatory Compliance</h3>
                <p className="text-[#0D1B3E]/70 text-lg leading-relaxed">
                  Adherence to the highest standards, guaranteeing compliance and operational <span className="text-[#4DB846] font-bold">efficiency</span>
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <GreenButton href="#services" className="text-xl px-12 py-5 font-bold">
              Explore Our Services
            </GreenButton>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaway - Horizontal Strip UI */}
      <section className="py-24 bg-[#0D1B3E] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-white mb-4">Key Takeaway</h2>
            <div className="w-20 h-1 bg-[#4DB846] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                title: "Total System Visibility",
                desc: <>Get a 360 view of your <span className="text-[#4DB846]">energy</span> performance across HVAC, lighting, pumps, and more.</>,
                icon: <Activity className="w-5 h-5 text-[#4DB846]" />
              },
              {
                title: "Quantified Savings",
                desc: <>Know exactly where you&apos;re losing <span className="text-[#4DB846]">energy</span> and how much you can <span className="text-[#4DB846]">save</span></>,
                icon: <TrendingDown className="w-5 h-5 text-[#4DB846]" />
              },
              {
                title: "Net Zero Ready",
                desc: <>Align your facility with ISO 50001, ASHRAE, and <span className="text-[#4DB846]">sustainability</span> target</>,
                icon: <CheckCircle2 className="w-5 h-5 text-[#4DB846]" />
              },
              {
                title: "Decarbonization",
                desc: <>Drives decarbonization by cutting energy use and emissions through data-led solutions</>,
                icon: <Leaf className="w-5 h-5 text-[#4DB846]" />
              },
              {
                title: "Operational Stability",
                desc: <>Improve reliability, and reduce downtime with detailed audit insights.</>,
                icon: <Settings className="w-5 h-5 text-[#4DB846]" />
              },
              {
                title: "Investment Clarity",
                desc: <>Back every CapEx or OpEx decision with real data and projected ROI</>,
                icon: <BarChart3 className="w-5 h-5 text-[#4DB846]" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mb-4 relative group-hover:border-[#4DB846]/50 transition-all duration-500">
                  <div className="absolute inset-0 rounded-full border-t-2 border-[#4DB846] animate-rotate-slow opacity-0 group-hover:opacity-100" />
                  <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#4DB846]/10 transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 leading-tight min-h-[3rem] flex items-center justify-center">{item.title}</h4>
                <p className="text-[#B0BEC5] text-[10px] leading-relaxed font-light px-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-[#0D1B3E] mb-6">
              Our Core <span className="text-[#4DB846]">Capabilities</span>
            </h2>
            <div className="w-32 h-1.5 bg-[#4DB846] mx-auto rounded-full mb-8" />
            <p className="text-[#0D1B3E]/70 text-xl max-w-3xl mx-auto">
              Precision-driven energy audits and consulting services to transform your industrial efficiency
            </p>
          </div>

          <div className="space-y-40">
            {[
              {
                title: "Equip-Ops Analytics",
                description: "We conduct in-depth diagnostics of all critical energy-consuming equipment such as chillers, compressors, boilers, pumps, conveyors and more to identify inefficiencies",
                image: "/energy/Energy Efficiency and Consulting/Equip-Ops-Analytics-1024x1024.webp",
                features: [
                  { name: "Equipment-Level Benchmarking", desc: "Each asset is analyzed using metrics like COP, delta-T, kW/TR, and run-hour efficiency", icon: <Gauge /> },
                  { name: "Root Cause Analysis", desc: "Existing data and logic are reviewed to trace performance issues to specific faults or misalignments", icon: <Search /> },
                  { name: "Optimization Recommendations", desc: "Clear, actionable steps are suggested to enhance performance, extend lifespan, and reduce load mismatches", icon: <Zap /> }
                ],
                cta: "Book a Performance Check"
              },
              {
                title: "Compressed Air System Performance and Leakage Audits",
                description: "Compressed air systems often suffer from hidden leaks, causing significant energy loss. We specialize in identifying, quantifying and mapping those leaks for corrective action",
                iot: "IoT Solution - OptiEdgeCAM (compressed air manager)",
                image: "/energy/Energy Efficiency and Consulting/Compressed-Air-System-1024x1024.webp",
                features: [
                  { name: "Leak Mapping & Tagging", desc: "We use ultrasonic detectors and flow tools to scan the air network and tag leak points", icon: <MapPin /> },
                  { name: "Quantification of Losses", desc: "Each Leak's airflow loss and associated energy cost are calculated and categorized", icon: <Calculator /> },
                  { name: "Cost Saving Insights", desc: "Recommendations include repair priorities and preventive actions for long-term savings", icon: <TrendingUp /> }
                ],
                cta: "Book a Performance Check"
              },
              {
                title: "Chiller Performance & Reliability",
                description: "We analyze chiller behavior across different loads and weather conditions to identify energy wastage and reliability issues",
                image: "/energy/Energy Efficiency and Consulting/Chiller-Performance-768x768.webp",
                features: [
                  { name: "System-Wide Monitoring", desc: "Parameters like chilled/ condensed water temperature, delta-T, and sequencing logic are tracked and correlated with demand", icon: <Thermometer /> },
                  { name: "Proactive Optimization", desc: "Recommendation include sequencing changes, setpoint resets, and alert configuration for early fault detection", icon: <Eye /> },
                  { name: "Performance Benchmarking", desc: "Performance is benchmarked using kW/TR and EER against industry baselines", icon: <BarChart3 /> }
                ],
                cta: "Book your Chiller Audit"
              },
              {
                title: "Boiler Performance Audit",
                description: "We evaluate steam systems to enhance combustion performance, reduce fuel consumption, and minimize distribution losses",
                image: "/energy/Energy Efficiency and Consulting/Boiler-Performance-1024x1024.webp",
                features: [
                  { name: "Thermal Diagnostics", desc: "Flue gas analysis, steam trap surveys, and heat loss inspections are conducted", icon: <Scan /> },
                  { name: "Root Cause Analysis", desc: "Combustion tuning and control schemes for part-load and startup behavior are reviewed", icon: <Flame /> },
                  { name: "Steam System Optimization", desc: "Proposals include condensate recovery, insulation fixes, and burner efficiency improvements", icon: <Droplets /> }
                ],
                cta: "Book a Performance Audit"
              },
              {
                title: "ASHRAE Level 1, 2, & 3 Energy Audits",
                description: "We specialize in providing ASHRAE Level 1, 2, and 3 audits that deliver rigorous investment-grade profiles to justify your facility's CapEx/OpEx improvements with verified energy savings.",
                image: "/energy/Energy Efficiency and Consulting/ASHRAE-Level-1-2-768x768.webp",
                features: [
                  { name: "Level 1 Walkthrough Audit", desc: "A preliminary assessment of utility bills and basic facility walkthroughs to identify low-cost/no-cost operational improvements.", icon: <ClipboardList /> },
                  { name: "Level 2 Diagnostic Audit", desc: "In-depth energy consumption diagnostics, detailed end-use breakdowns, and feasibility calculations for capital measures.", icon: <Building2 /> },
                  { name: "Level 3 Investment-Grade Audit", desc: "Highest tier modeling, rigorous transient simulation, and comprehensive cost-benefit analysis to fully secure CapEx investments.", icon: <TrendingUp /> },
                  { name: "ASHRAE & Local Regulatory Compliance", desc: "Audits conducted by certified energy managers (CEMs) to comply with local municipality and global efficiency standards.", icon: <Award /> }
                ],
                cta: "Book your Audit"
              },
              {
                title: "ISO 50001/2 & M&V Validation (IPMVP)",
                description: "Ensure continuous savings, structured compliance, and verified carbon accounting through standardized systems auditing and Measurement & Verification (M&V).",
                image: "/energy/Energy Efficiency and Consulting/Power-Quality-Analysis-768x768.webp", // reutilize dynamic visual background
                features: [
                  { name: "ISO 50001 & 50002 Implementation", desc: "End-to-end guidance to design, deploy, and audit your Energy Management System (EnMS) to achieve prestigious ISO certifications.", icon: <ShieldCheck /> },
                  { name: "IPMVP Savings Validation", desc: "Apply the International Performance Measurement and Verification Protocol (IPMVP) to mathematically isolate and prove actual savings.", icon: <Calculator /> },
                  { name: "Decarbonization Tracking", desc: "Convert verified energy savings directly into Scope 1 & 2 greenhouse gas reduction numbers for ESG reporting.", icon: <Leaf /> }
                ],
                cta: "Implement ISO EnMS"
              },
              {
                title: "Electrical Safety & Power Quality",
                description: "Evaluate the reliability, safety, harmonics, and overall efficiency of your electrical distribution networks.",
                image: "/energy/Energy Efficiency and Consulting/Electrical-Safety-Audits-1024x1024.webp",
                features: [
                  { name: "Thermal Imaging & Hot-Spot Scans", desc: "Thermographic imaging to detect loose connections, overloaded circuits, and potential fire risks.", icon: <Video /> },
                  { name: "Harmonics & Sag/Swell Analysis", desc: "Capture voltage sags, swells, transients, and waveform distortion affecting sensitive microprocessor equipment.", icon: <Waves /> },
                  { name: "Utility Penalty Prevention", desc: "Specific recommendations to correct power factor (PF) lag, reduce penalty tariffs, and extend plant assets.", icon: <Cpu /> }
                ],
                cta: "Request Visit"
              }
            ].map((capability, index) => (
              <div
                key={index}
                id={capability.title.toLowerCase().includes("equip-ops") ? "equip-ops" :
                  capability.title.toLowerCase().includes("compressed air") ? "compressed-air" :
                  capability.title.toLowerCase().includes("chiller") ? "chiller" :
                  capability.title.toLowerCase().includes("boiler") ? "boiler" :
                  capability.title.toLowerCase().includes("ashrae") ? "ashrae" :
                  capability.title.toLowerCase().includes("iso") ? "iso-50001" :
                  capability.title.toLowerCase().includes("electrical") ? "electrical" : undefined}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1 w-full"
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-[#4DB846]/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-[#0D1B3E]/5">
                      <Image
                        src={capability.image}
                        alt={capability.title}
                        width={1024}
                        height={1024}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                       loading="lazy" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1 space-y-8"
                >
                  <div className="space-y-4">
                    <h3 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl font-bold text-[#0D1B3E] leading-tight">
                      {capability.title}
                    </h3>
                    <p className="text-[#0D1B3E]/70 text-lg leading-relaxed">
                      {capability.description}
                    </p>
                    {capability.iot && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4DB846]/10 text-[#4DB846] rounded-lg font-bold text-sm">
                        <Activity className="w-4 h-4" />
                        {capability.iot}
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    {capability.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-[#4DB846]/20 flex items-center justify-center shadow-sm text-[#4DB846]">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0D1B3E] text-lg mb-1">{feature.name}</h4>
                          <p className="text-[#0D1B3E]/60 leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <GreenButton className="shadow-none px-8 py-4">
                      {capability.cta}
                    </GreenButton>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
