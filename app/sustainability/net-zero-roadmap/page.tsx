"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Target, 
  Globe, 
  ClipboardCheck, 
  Lightbulb, 
  Zap, 
  BarChart3, 
  Settings, 
  CheckCircle2, 
  TrendingUp, 
  Presentation,
  ArrowRight,
  ShieldCheck,
  Leaf
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";

const sections = [
  {
    id: "baseline",
    title: "Baseline & Target Setting",
    icon: <Target className="w-8 h-8 text-[#3DD68C]" />,
    items: [
      {
        icon: <MapPin className="w-6 h-6 text-[#3DD68C]" />,
        text: "Accurately map Scope 1, 2, and 3 emissions using global standards"
      },
      {
        icon: <Target className="w-6 h-6 text-[#3DD68C]" />,
        text: "Establish short-term and long-term reduction goals"
      },
      {
        icon: <Globe className="w-6 h-6 text-[#3DD68C]" />,
        text: "Align with SBTI, national mandates, and internal ESG targets"
      }
    ]
  },
  {
    id: "science",
    title: "Science-Aligned Actions",
    icon: <Lightbulb className="w-8 h-8 text-[#3DD68C]" />,
    items: [
      {
        icon: <ClipboardCheck className="w-6 h-6 text-[#3DD68C]" />,
        text: "Prioritize demand-side optimization before renewables or offsets"
      },
      {
        icon: <Lightbulb className="w-6 h-6 text-[#3DD68C]" />,
        text: "Implement intelligent control strategies across HVAC, lighting, and utilities"
      },
      {
        icon: <Zap className="w-6 h-6 text-[#3DD68C]" />,
        text: "Plan renewable integration, electrification, and fuel switching step-by-step"
      }
    ]
  },
  {
    id: "monitoring",
    title: "Performance Monitoring",
    icon: <BarChart3 className="w-8 h-8 text-[#3DD68C]" />,
    items: [
      {
        icon: <BarChart3 className="w-6 h-6 text-[#3DD68C]" />,
        text: "Track progress through live dashboards and carbon reports"
      },
      {
        icon: <Settings className="w-6 h-6 text-[#3DD68C]" />,
        text: "Automate reporting for CDP, GRESB, and internal ESG audits"
      },
      {
        icon: <CheckCircle2 className="w-6 h-6 text-[#3DD68C]" />,
        text: "Adapt and improve with real-time insights from OptiByte platform"
      }
    ]
  },
  {
    id: "implementation",
    title: "Built for Real-World Implementation",
    icon: <ShieldCheck className="w-8 h-8 text-[#3DD68C]" />,
    items: [
      {
        icon: <TrendingUp className="w-6 h-6 text-[#3DD68C]" />,
        text: "Actionable roadmap tailored to your facility type and budget"
      },
      {
        icon: <Presentation className="w-6 h-6 text-[#3DD68C]" />,
        text: "OEM-agnostic, scalable, and ready for deployment across portfolios"
      },
      {
        icon: <CheckCircle2 className="w-6 h-6 text-[#3DD68C]" />,
        text: "Full support for execution, tracking, and reporting"
      }
    ]
  }
];

export default function NetZeroRoadmapPage() {
  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden">
      {/* Premium Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sustanaibility/NET ZERO Roadmap bg.webp"
            alt="Net Zero Roadmap Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E] via-[#0D1B3E]/80 to-transparent" />
          {/* Animated particles or glow */}
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#3DD68C]/20 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
         
            <h5 className="font-[family-name:var(--font-sora)] text-5xl md:text-6xl font-black mb-6 leading-tight">
              NET ZERO <br />
              <span className="bg-gradient-to-r from-[#4DB846] to-[#3DD68C] bg-clip-text text-transparent">ROADMAP</span>
            </h5>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Plan smart. Act fast. Achieve carbon neutrality.
            </h2>
            <p className="text-[#B0BEC5] text-xl md:text-2xl leading-relaxed mb-12">
              We help you go beyond ambition by building a clear, data-backed path to Net Zero.
            </p>
            <div className="flex flex-wrap gap-6">
              <GreenButton href="/contact">Get Started</GreenButton>
              <Link href="#roadmap-details" className="flex items-center gap-2 text-white font-bold hover:text-[#3DD68C] transition-colors group">
                Explore the Roadmap <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Content Grid - Redesigned to match screenshot */}
      <section id="roadmap-details" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                id={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="p-10 md:p-14 rounded-[3.5rem] bg-white border-2 border-[#3DD68C] shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative scroll-mt-32"
              >
                <h3 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl font-bold text-[#4DB846] text-center mb-16">
                  {section.title}
                </h3>

                <div className="space-y-12">
                  {section.items.map((item, iIdx) => (
                    <motion.div
                      key={iIdx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.2 + (iIdx * 0.15),
                        ease: "easeOut"
                      }}
                      className="flex gap-8 items-center group"
                    >
                      {/* Multi-ring Icon Container */}
                      <div className="relative flex-shrink-0">
                        <div className="w-20 h-20 rounded-full border border-[#0D1B3E]/20 flex items-center justify-center relative">
                          <div className="absolute inset-1.5 rounded-full border border-[#0D1B3E]/40" />
                          <div className="absolute inset-3 rounded-full border-2 border-[#0D1B3E]" />
                          <div className="relative z-10 text-[#0D1B3E] group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </div>
                        </div>
                      </div>

                      <p className="text-[#0D1B3E] text-xl md:text-2xl font-semibold leading-snug">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(61,214,140,0.1)_0,transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-black mb-8">
              Start Your Journey to <br />
              <span className="text-[#3DD68C]">Carbon Neutrality</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Ready to build your custom Net Zero Roadmap? Our team is ready to help you analyze, plan, and execute.
            </p>
            <GreenButton href="/contact">Get Started Today</GreenButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
