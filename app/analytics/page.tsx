"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Search,
  ShieldCheck,
  FileSearch,
  ArrowUpRight,
  Activity,
  Layers,
  TrendingDown,
  Leaf,
  Settings,
  Clock,
  PieChart,
  BarChart3,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";
import GreenButton from "@/components/ui/GreenButton";

export default function AnalyticsPage() {
  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden">
      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* We can use a placeholder image for the hero or reuse an existing one until we generate a specific one */}
          <Image
            src="/energy/Energy Efficiency and Consulting/energybg.webp"
            alt="Energy Analytics"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E]/90 to-transparent" />
        </div>

       
      </section>

      {/* Core Capabilities - Cinematic Scrolling Redesign */}
      <section id="analytics-services" className="py-24 bg-white relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-5xl font-black text-[#0D1B3E] mb-5">Our Core Capabilities</h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">Explore our end-to-end data analytics ecosystem through our specialized insight frameworks.</p>
            <div className="w-20 h-1.5 bg-[#4DB846] mx-auto mt-6 rounded-full" />
          </div>

          <div className="space-y-32">
            {[
              {
                id: "utility-data",
                title: "Utility Data Analytics",
                subtitle: "Utility Analytics",
                desc: "Detailed analysis of energy, water, and fuel consumption patterns using utility bills, submeters, and tariff data.",
                points: [
                  { title: "Utility Consumption Analysis", desc: "Break down usage across electricity, diesel, and water meters to identify high-consumption zones and inefficient systems" },
                  { title: "Load Profiling", desc: "Generate hourly, daily, seasonal load curves to understand peak demand periods and base load behavior" },
                  { title: "Energy Savings Potential Modelings", desc: "Simulate control strategies - like schedule optimization or load shifting - and estimate the impact on cost and energy use" },
                  { title: "Weather-Normalized Performance", desc: "Correlate utility data with ambient conditions to benchmark true performance and detect seasonal inefficiencies" }
                ],
                img: "/energy/Energy Efficiency and Consulting/energybg.webp", // Will be replaced when we generate the image
                cta: "Book a Consulting"
              },
              {
                id: "bms-data",
                title: "BMS Data Analytics",
                subtitle: "BMS Analytics",
                desc: "Operational diagnostics from live and historical Building Management System (BMS) data for HVAC and utility systems.",
                points: [
                  { title: "Chiller & HVAC Performance Analytics", desc: "Monitor real-time COP, kW/TR, and delta-T to evaluate sequencing logic, overcooling, and runtime anomalies" },
                  { title: "Cooling Tower Efficiency Mapping", desc: "Analyze wet bulb temperature trends to implement reset strategies and optimize fan speed modulation" },
                  { title: "Pump & Motor Analytics", desc: "Evaluate VFD commands, runtime deviations, and load-response mismatches to uncover unnecessary energy use" },
                  { title: "AHU Analytics", desc: "Assess air volume, temperature set points, and static pressure trends to fine-tune ventilation and avoid over-conditioning" },
                  { title: "Fault Detection & Diagnostics (FDD)", desc: "Use command-status logic to detect sensor drift, stuck actuators, and inefficient staging in critical equipment" },
                  { title: "Energy-to-Output Ratio Tracking", desc: "Compare actual system output (e.g., chilled water or airflow) to energy consumed to measure equipment effectiveness" }
                ],
                img: "/energy/Energy Efficiency and Consulting/energybg.webp", // Will be replaced when we generate the image
                cta: "Book a Consulting"
              },
              {
                id: "solar-data",
                title: "Solar Data Analytics",
                subtitle: "Solar Analytics",
                desc: "Operational diagnostics from live and historical Building Management System(BMS) data for HVAC and utility systems.",
                points: [
                  { title: "Solar Generation Monitoring", desc: "Track real-time and cumulative kWh generation to identify underperformance or inverter faults." },
                  { title: "Grid Export vs. On-site Use Analysis", desc: "Differentiate self-consumed solar energy from grid exports to assess energy independence and load coverage" },
                  { title: "Net metering & Savings Validation", desc: "Verify tariff-based savings by matching export records with utility bills and net metering credits." },
                  { title: "Solar ROI & Payback Benchmarking", desc: "Model actual financial returns using generation data, degradation rates, and local tariff structures." }
                ],
                img: "/energy/Energy Efficiency and Consulting/energybg.webp", // Will be replaced when we generate the image
                cta: "Book a Consulting"
              },
              {
                id: "design-development",
                title: "Design & Development of Analytical Systems",
                subtitle: "System Architecture",
                desc: "Performance validation and financial tracking of rooftop and on-site solar photovoltaic systems.",
                points: [
                  { title: "Data Architecture & Integration", desc: "Design robust systems that collect and harmonize data from smart meters, BMS/SCADA systems, and solar inverters via cloud or on-premise pipelines." },
                  { title: "Analytics Engine Development", desc: "Develop rule-based and AI/ML enhanced logic to calculate key performance indicators such as COP, delta-T, kW/TR, energy-to-output ratios, and emission metrics." },
                  { title: "Visualization & Dashboards", desc: "Build custom dashboards for operations, energy, and sustainability teams featuring trend charts, alerts, and role-based KPIs in real-time." },
                  { title: "Scalable & Modular Design", desc: "Create systems that are adaptable across multi-site portfolios, with modular expansion for assets, standards, or data streams." }
                ],
                img: "/energy/Energy Efficiency and Consulting/energybg.webp", // Will be replaced when we generate the image
                cta: "Book a Consulting"
              }
            ].map((feature, idx) => (
              <div key={feature.id} id={feature.id} className="scroll-mt-32">
                <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-1"
                  >
                    <span className="text-[#4DB846] font-bold text-sm tracking-widest uppercase mb-4 block">{feature.subtitle}</span>
                    <h3 className="text-4xl md:text-5xl font-black text-[#0D1B3E] mb-8 leading-tight">{feature.title}</h3>
                    <p className="text-gray-600 text-lg mb-12 leading-relaxed">{feature.desc}</p>

                    <div className="space-y-8 mb-12">
                      {feature.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex gap-6 group">
                          <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4DB846] transition-all duration-300">
                            <CheckCircle2 className="w-6 h-6 text-[#4DB846] group-hover:text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#0D1B3E] text-lg mb-1">{point.title}</h4>
                            <p className="text-gray-500 text-base">{point.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <GreenButton href="/contact">{feature.cta}</GreenButton>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex-shrink-0 w-full lg:max-w-[420px]"
                  >
                    <div className="relative rounded-3xl overflow-hidden aspect-square w-full shadow-2xl group/img border border-gray-100 hover:border-[#4DB846]/40 transition-colors duration-500">
                      <Image
                        src={feature.img}
                        alt={feature.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 420px"
                        className="object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D1B3E]/70 to-transparent px-6 py-4">
                        <span className="text-[#4DB846] text-[10px] font-bold tracking-widest uppercase">{feature.subtitle}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-24 bg-[#0D1B3E] text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,184,70,0.3)_0,transparent_100%)]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-black mb-8 leading-tight">
              Ready to Unlock <span className="text-[#4DB846]">Data-Driven</span> Performance?
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-light">
              Connect with our analytics team to build the insight infrastructure your facility needs.
            </p>
            <button className="bg-[#4DB846] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#3da336] hover:shadow-[0_0_40px_rgba(77,184,70,0.5)] transition-all duration-300">
              Schedule an Analytics Demo
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
