"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  FileCheck,
  BarChart3,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Activity,
  Settings,
  Cpu,
  Search,
  Layers,
  MapPin,
  ClipboardCheck,
  Cloud,
  FileText,
  Network,
  Lightbulb,
  Award,
  Timer,
  SearchCode,
  Sparkles,
  RotateCw
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";

export default function CarbonAccountingPage() {
  const [cdpVisible, setCdpVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [btnHovered, setBtnHovered] = useState(false);
  const cdpSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCdpVisible(true); },
      { threshold: 0.15 }
    );
    if (cdpSectionRef.current) observer.observe(cdpSectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cdpCards = [
    {
      text: "Review and interpret responses across Disclosure, Awareness, Management, and Leadership categories",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 15 14" />
        </svg>
      ),
    },
    {
      text: "Benchmark submissions against peer companies and industry best practices.",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="12" width="4" height="9" />
          <rect x="10" y="7" width="4" height="14" />
          <rect x="17" y="3" width="4" height="18" />
        </svg>
      ),
    },
    {
      text: "Provide expert-driven recommendations aligned with CDP's current scoring methodology",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L9.5 8.5H3l5.5 4-2 6.5L12 15l5.5 4-2-6.5L21 8.5h-6.5z" />
        </svg>
      ),
    },
    {
      text: "Stay updated with annual changes in CDP's questionnaire and scoring logic",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2v6h-6" />
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
          <path d="M3 22v-6h6" />
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        </svg>
      ),
    },
    {
      text: "For AI driven CDP tracking and automation, explore our platform Inbyte",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="2" x2="9" y2="4" />
          <line x1="15" y1="2" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="22" />
          <line x1="15" y1="20" x2="15" y2="22" />
          <line x1="2" y1="9" x2="4" y2="9" />
          <line x1="2" y1="15" x2="4" y2="15" />
          <line x1="20" y1="9" x2="22" y2="9" />
          <line x1="20" y1="15" x2="22" y2="15" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white min-h-screen text-[#0D1B3E] overflow-x-hidden font-[family-name:var(--font-sora)]">
      <style>{`
        @keyframes titleIn {
          from { opacity: 0; transform: translateY(-22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineExpandCDP {
          from { width: 0; }
          to   { width: 220px; }
        }
        @keyframes cardUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes btnFade {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes iconSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes glowPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.45); }
          50%      { box-shadow: 0 0 0 10px rgba(34,197,94,0); }
        }

        .cdp-title-anim  { animation: titleIn 0.65s ease both; }
        .cdp-line-anim   { animation: lineExpandCDP 0.75s 0.4s ease both; }
        .cdp-btn-anim    { animation: btnFade 0.55s 1.55s ease both; }

        .cdp-card-anim-0 { animation: cardUp 0.55s 0.50s ease both; }
        .cdp-card-anim-1 { animation: cardUp 0.55s 0.68s ease both; }
        .cdp-card-anim-2 { animation: cardUp 0.55s 0.86s ease both; }
        .cdp-card-anim-3 { animation: cardUp 0.55s 1.04s ease both; }
        .cdp-card-anim-4 { animation: cardUp 0.55s 1.22s ease both; }

        .cdp-card-hover  { transform: translateY(-8px); animation: glowPulse 1.3s infinite !important; }
        .cdp-icon-spin   { animation: iconSpin 0.65s ease; }
      `}</style>
      {/* Premium Hero Section */}
      <section className="relative h-screen flex items-start overflow-hidden pt-40 bg-[#0D1B3E] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sustanaibility/Carbon Accounting/Decarbonizationbg1.webp"
            alt="Carbon accounting and GHG emissions tracking platform - Sustainabyte Technologies"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3E]/90 via-[#0D1B3E]/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >
            <span className="text-[#4DB846] font-bold text-sm tracking-[0.3em] uppercase mb-6 block">Carbon Accounting</span>
            <h1 className="text-5xl md:text-[6.5rem] font-black mb-8 leading-[1.05] font-[family-name:var(--font-sora)]">
              Made <span className="bg-gradient-to-r from-[#4DB846] to-[#3DD68C] bg-clip-text text-transparent">Simple</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mb-12 leading-relaxed">
              Accurate, compliant, and audit-ready emissions reporting.
            </p>
            <div className="flex flex-wrap gap-6">
              <GreenButton href="#solutions">Explore Our Solutions</GreenButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1. Our Carbon Accounting Solutions Section */}
      <section id="solutions" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0D1B3E] mb-6">Our Carbon Accounting Solutions</h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Comprehensive tools to measure, report & improve your facility's <span className="text-[#4DB846] font-bold">carbon footprint</span> with confidence.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-7">
          {[
            { title: "GHG Protocol", desc: "Build a credible carbon footprint using the global gold standard", img: "/sustanaibility/Carbon Accounting/GHG.webp", href: "#ghg" },
            { title: "ISO 14064", desc: "Structured, traceable reporting for audit and compliance", img: "/sustanaibility/Carbon Accounting/ISO-14064.webp", href: "#iso14064" },
            { title: "CDP Reporting", desc: "Structured support to improve your CDP score through detailed manual analysis", img: "/sustanaibility/Carbon Accounting/CDP-Reporting.webp", href: "#cdp" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Link href={item.href} className="group relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border-4 border-[#4DB846] shadow-xl hover:shadow-[0_20px_60px_rgba(77,184,70,0.3)] transition-all duration-500 block">
                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 brightness-[0.4]"  loading="lazy" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                  <h3 className="text-3xl font-black text-[#4DB846] mb-2 group-hover:scale-105 transition-transform">{item.title}</h3>
                  <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">{item.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. GHG Protocol Section (Timeline Layout) */}
      <section id="ghg" className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black text-[#0D1B3E] inline-block relative"
            >
              GHG Protocol
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-4 left-0 h-2 bg-[#4DB846] rounded-full"
              />
            </motion.h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Central Line with expansion animation */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-1/2 top-0 w-1 bg-[#4DB846] -translate-x-1/2 hidden lg:block origin-top"
            />

            <div className="space-y-20">
              {[
                {
                  pos: "left",
                  text: "Map Scope 1, 2 and 3 emissions across facilities, fleets, and supply chains",
                  icon: MapPin,
                  delay: 0.1
                },
                {
                  pos: "right",
                  text: "Define emissions boundaries based on operational or financial control",
                  icon: Cloud,
                  delay: 0.3
                },
                {
                  pos: "left",
                  text: "Standardize emission factors from verified regional and sectoral datasets",
                  icon: ClipboardCheck,
                  delay: 0.5
                },
                {
                  pos: "right",
                  text: "Ensure consistency across business units, geographies, and timeframes",
                  icon: RotateCw,
                  delay: 0.7
                },
                {
                  pos: "left",
                  text: "Create a strong foundation for SBTI targets, Net Zero plans, and ESG strategy",
                  icon: Layers,
                  delay: 0.9
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: item.pos === "left" ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: item.delay, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 group/item ${item.pos === "right" ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Card Content (Desktop) */}
                  <div className={`flex-1 ${item.pos === "left" ? "pr-12" : "pl-12"} hidden lg:block`}>
                    <motion.div
                      whileHover={{
                        y: -10,
                        boxShadow: "0 20px 40px rgba(77,184,70,0.15)"
                      }}
                      className={`
                        w-full min-h-[220px] flex flex-col items-center justify-center text-center 
                        border-2 border-[#4DB846] rounded-[3.5rem] p-10 bg-white
                        transition-all duration-500 relative
                      `}
                    >
                      <div className="w-16 h-16 rounded-full border-2 border-[#0D1B3E] flex items-center justify-center mb-6 group-hover/item:border-[#4DB846] transition-colors bg-white shadow-sm">
                        <item.icon className="w-8 h-8 text-[#0D1B3E] group-hover/item:text-[#4DB846] transition-colors" />
                      </div>
                      <p className="text-[#0D1B3E] font-bold text-lg leading-relaxed max-w-[280px] mx-auto">{item.text}</p>
                    </motion.div>
                  </div>

                  {/* Central Node Circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full border-4 border-[#0D1B3E] bg-white flex items-center justify-center shadow-lg group-hover/item:scale-125 transition-transform duration-500">
                    <div className="w-4 h-4 bg-[#4DB846] rounded-full animate-pulse" />
                  </div>

                  {/* Mobile Card */}
                  <div className="flex-1 lg:hidden w-full px-6">
                    <div className="flex flex-col items-center justify-center text-center border-2 border-[#4DB846] rounded-[3rem] p-8 bg-white shadow-md">
                      <div className="w-12 h-12 rounded-full border-2 border-[#0D1B3E] flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-[#0D1B3E]" />
                      </div>
                      <p className="text-[#0D1B3E] font-bold leading-relaxed">{item.text}</p>
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ISO 14064 Section (Grid with Dark BG) */}
      <section id="iso14064" className="py-24 bg-[#0D1B3E] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <Image src="/sustanaibility/Carbon Accounting/ISO-14064.webp" alt="ISO 14064 carbon accounting standards compliance - Sustainabyte" fill className="object-cover"  loading="lazy" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black text-white inline-block relative"
            >
              ISO 14064
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-4 left-0 h-2 bg-[#4DB846] rounded-full"
              />
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {[
              { icon: FileText, title: "ISO 14064-1", desc: "Prepare emissions reports aligned with ISO 14064-1 for organizational GHG accounting" },
              { icon: Network, title: "Full Traceability", desc: "Ensure full traceability with documented monitoring, measurement, and verification" },
              { icon: Lightbulb, title: "Baseline Analysis", desc: "Include emissions and verified removals, with baseline comparisons" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center px-4 relative group"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                  className="w-24 h-24 rounded-full border-2 border-[#4DB846] flex items-center justify-center mb-8 bg-white/5 group-hover:bg-[#4DB846]/20 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(77,184,70,0.2)]"
                >
                  <item.icon className="w-10 h-10 text-[#4DB846]" />
                </motion.div>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">{item.desc}</p>
                {idx < 2 && <div className="absolute right-[-24px] top-1/2 -translate-y-1/2 h-40 w-[1px] bg-[#4DB846]/40 hidden md:block" />}
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
            {[
              { icon: ShieldCheck, title: "Third-party Assurance", desc: "Facilitate third-party assurance and regulatory compliance" },
              { icon: Award, title: "ESG Credibility", desc: "Strengthen credibility in ESG disclosures, green finance, and carbon credit eligibility" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx + 3) * 0.1 }}
                className="flex flex-col items-center text-center px-4 relative group"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.7 }}
                  className="w-24 h-24 rounded-full border-2 border-[#4DB846] flex items-center justify-center mb-8 bg-white/5 group-hover:bg-[#4DB846]/20 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(77,184,70,0.2)]"
                >
                  <item.icon className="w-10 h-10 text-[#4DB846]" />
                </motion.div>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">{item.desc}</p>
                {idx < 1 && <div className="absolute right-[-24px] top-1/2 -translate-y-1/2 h-40 w-[1px] bg-[#4DB846]/40 hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CDP Reporting Section (High Fidelity Widget) */}
      <section
        id="cdp"
        ref={cdpSectionRef}
        style={{
          textAlign: "center",
          padding: "120px 24px",
          background: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderTop: "1px solid #f1f5f9"
        }}
      >
        {/* Title */}
        <h2
          className={cdpVisible ? "cdp-title-anim" : ""}
          style={{
            fontSize: "36px",
            fontWeight: 800,
            color: "#0f172a",
            opacity: cdpVisible ? 1 : 0,
            fontFamily: "var(--font-sora), sans-serif",
          }}
        >
          CDP Reporting
        </h2>

        {/* Underline */}
        <div
          className={cdpVisible ? "cdp-line-anim" : ""}
          style={{
            height: "5px",
            background: "#22c55e",
            borderRadius: "3px",
            margin: "10px auto 40px",
            width: cdpVisible ? "220px" : 0,
          }}
        />

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            maxWidth: "1100px",
            width: "100%",
            marginBottom: "60px",
          }}
        >
          {cdpCards.map((card, i) => (
            <div
              key={i}
              className={[
                cdpVisible ? `cdp-card-anim-${i}` : "",
                hoveredCard === i ? "cdp-card-hover" : "",
              ].join(" ")}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                border: "2px solid #22c55e",
                borderRadius: "18px",
                padding: "24px 14px 20px",
                background: "#ffffff",
                opacity: cdpVisible ? 1 : 0,
                cursor: "pointer",
                transition: "transform 0.22s ease, box-shadow 0.22s ease",
              }}
            >
              {/* Icon ring */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  border: "2px solid #0f172a",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <div className={hoveredCard === i ? "cdp-icon-spin" : ""}>
                  {card.icon}
                </div>
              </div>

              <p
                style={{
                  fontSize: "14px",
                  color: "#475569",
                  lineHeight: 1.6,
                  fontFamily: "var(--font-sora), sans-serif",
                }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={cdpVisible ? "cdp-btn-anim" : ""}
          style={{ opacity: cdpVisible ? 1 : 0 }}
        >
          <button
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              background: "#22c55e",
              color: "#ffffff",
              border: "none",
              borderRadius: "999px",
              padding: "16px 48px",
              fontSize: "16px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "background 0.2s, transform 0.2s",
              transform: btnHovered ? "scale(1.06)" : "scale(1)",
              fontFamily: "var(--font-sora), sans-serif",
              letterSpacing: "0.01em",
              boxShadow: "0 10px 30px rgba(34,197,94,0.4)"
            }}
          >
            Improve Your CDP Score
          </button>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-[#0D1B3E] relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Explore More <span className="text-[#4DB846]">Sustainability</span> Services</h2>
          <div className="w-20 h-1.5 bg-[#4DB846] mx-auto rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Water Management", desc: "Comprehensive water auditing and conservation strategies.", href: "/sustainability#water" },
            { title: "Decarbonization", desc: "Energy-led carbon reduction pathways for industrial assets.", href: "/sustainability#decarbonization" },
            { title: "Net Zero RoadMap", desc: "Multi-year pathways for achieving institutional net zero targets.", href: "/sustainability#netzero" }
          ].map((item, idx) => (
            <Link key={idx} href={item.href} className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl group hover:bg-white/10 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#4DB846] transition-colors">{item.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{item.desc}</p>
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
