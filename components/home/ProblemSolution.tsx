"use client";

import { motion, Variants } from "framer-motion";
import {
  Database, Gauge, FileText, Wrench, Leaf,
  ArrowRight, Wifi, BarChart3, Lightbulb, ShieldCheck,
} from "lucide-react";

const problemItems = [
  { icon: "Gauge",    label: "BMS / SCADA Data",    sub: "Siloed, rarely analysed" },
  { icon: "Database", label: "Energy Meters",        sub: "Raw numbers without context" },
  { icon: "FileText", label: "Utility Bills",        sub: "Reactive, not predictive" },
  { icon: "Wrench",   label: "Maintenance Logs",     sub: "Disconnected from energy data" },
  { icon: "Leaf",     label: "ESG Targets",          sub: "No clear path to achievement" },
];

const solutionItems = [
  { icon: "Wifi",        label: "Unified IoT Data Layer",      sub: "All sources, one platform" },
  { icon: "BarChart3",   label: "Real-Time Analytics Engine",  sub: "From raw data to live KPIs" },
  { icon: "Lightbulb",   label: "AI-Driven Recommendations",   sub: "Actionable, quantified insights" },
  { icon: "ShieldCheck", label: "Verified Savings & Reporting", sub: "M&V-backed, audit-ready output" },
];

const iconMap: Record<string, React.ElementType> = {
  Gauge, Database, FileText, Wrench, Leaf, Wifi, BarChart3, Lightbulb, ShieldCheck,
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ProblemSolution() {
  return (
    <section id="problem-solution" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#193F70]/8 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[420px] h-[420px] rounded-full bg-[#27A37B]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <motion.p initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-[#3DD68C] mb-4 font-[family-name:var(--font-dm-sans)]">
            The Challenge
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
            className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Most Facilities Have <span className="text-[#3DD68C]">Data</span>.<br />
            But Not{" "}
            <span className="relative inline-block">
              Intelligence.
              <motion.span className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-[#3DD68C] to-[#27A37B] rounded-full"
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }} style={{ originX: 0 }} />
            </span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.2 }}
            className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto font-[family-name:var(--font-dm-sans)]">
            Buildings generate enormous amounts of data — yet most teams still make energy decisions based on monthly utility bills and gut feel. That gap costs millions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="bg-gradient-to-br from-red-50 to-red-50/50 border border-red-200/50 rounded-2xl p-8 sm:p-10 backdrop-blur-sm flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-10 rounded-full bg-gradient-to-b from-red-500 to-red-600" />
              <h3 className="font-[family-name:var(--font-sora)] text-xl sm:text-2xl font-bold text-slate-900">The Problem</h3>
            </div>
            <p className="text-slate-600 text-sm font-[family-name:var(--font-dm-sans)] mb-8 leading-relaxed">
              Most facilities already have the raw inputs — they just cannot connect them into a coherent intelligence layer.
            </p>
            <ul className="space-y-4 mb-8">
              {problemItems.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.li key={item.label} variants={itemVariants} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-100 to-red-50 border border-red-200/60 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:from-red-200 group-hover:to-red-100 transition-all duration-200">
                      <Icon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm font-[family-name:var(--font-dm-sans)]">{item.label}</p>
                      <p className="text-slate-500 text-xs font-[family-name:var(--font-dm-sans)] mt-0.5">{item.sub}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
            <motion.div variants={itemVariants} className="mt-auto p-4 rounded-xl bg-gradient-to-r from-red-100/60 to-red-50/60 border border-red-200/40">
              <p className="text-red-700 text-sm font-[family-name:var(--font-dm-sans)] leading-relaxed">
                <span className="font-bold">Result:</span> Energy waste goes undetected. Equipment degrades silently. ESG targets stay unmet.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="bg-gradient-to-br from-emerald-50 via-blue-50/30 to-emerald-50/50 border border-emerald-200/50 rounded-2xl p-8 sm:p-10 backdrop-blur-sm flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-10 rounded-full bg-gradient-to-b from-[#3DD68C] to-[#27A37B]" />
              <h3 className="font-[family-name:var(--font-sora)] text-xl sm:text-2xl font-bold text-slate-900">The Sustainabyte Solution</h3>
            </div>
            <p className="text-slate-600 text-sm font-[family-name:var(--font-dm-sans)] mb-8 leading-relaxed">
              We connect your existing data into an <span className="text-[#3DD68C] font-semibold">AIoT intelligence layer</span> that transforms noise into decisions — and decisions into verified savings.
            </p>
            <ul className="space-y-4 mb-8">
              {solutionItems.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.li key={item.label} variants={itemVariants} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-200/60 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:from-emerald-200 group-hover:to-emerald-100 transition-all duration-200">
                      <Icon className="w-5 h-5 text-[#3DD68C]" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm font-[family-name:var(--font-dm-sans)]">{item.label}</p>
                      <p className="text-slate-500 text-xs font-[family-name:var(--font-dm-sans)] mt-0.5">{item.sub}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
            <motion.div variants={itemVariants} className="mt-auto p-4 rounded-xl bg-gradient-to-r from-emerald-100/60 to-emerald-50/60 border border-emerald-200/40">
              <p className="text-emerald-700 text-sm font-[family-name:var(--font-dm-sans)] leading-relaxed">
                <span className="font-bold">Result:</span> You finally know where your energy goes, why equipment underperforms, and exactly how to fix it — with verified proof.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { value: "19+", label: "Years of energy domain expertise" },
            { value: "30%", label: "Average energy savings achieved" },
            { value: "100%", label: "M&V-backed, verifiable results" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gradient-to-br from-slate-50 to-slate-50/50 border border-slate-200/50 rounded-xl px-6 py-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl font-black text-[#3DD68C] mb-2">{stat.value}</p>
              <p className="text-slate-600 text-sm font-[family-name:var(--font-dm-sans)]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
