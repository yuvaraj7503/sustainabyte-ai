"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Settings,
  LayoutDashboard,
  ClipboardList,
  QrCode,
  Package,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  MousePointer2,
  PhoneCall
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";

export default function FixBytePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      title: "Real-time visibility into maintenance operations",
      image: "/technology/fixbyte/Fixbyte-II-scaled.webp",
      desc: "Comprehensive Dashboard View"
    },
    {
      title: "Lower downtime through checklist-driven preventive actions",
      image: "/technology/fixbyte/Fixbyte-III-scaled.webp",
      desc: "Comprehensive Dashboard View"
    },
    {
      title: "Boost productivity with clear KPI dashboards",
      image: "/technology/fixbyte/Fixbyte-IV-scaled.webp",
      desc: "Comprehensive Dashboard View"
    },
    {
      title: "Reduce manual errors and improve resource allocation",
      image: "/technology/fixbyte/Fusionbyte-IV-scaled.webp",
      desc: "Comprehensive Dashboard View"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen text-[#0D1B3E] overflow-x-hidden font-[family-name:var(--font-sora)]">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .float-anim { animation: float 6s ease-in-out infinite; }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(77, 184, 70, 0.2); }
          50% { box-shadow: 0 0 40px rgba(77, 184, 70, 0.4); }
        }
        .glow-hover:hover { animation: glow 2s infinite; }

        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .text-gradient {
          background: linear-gradient(to right, #4DB846, #3DD68C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0D1B3E]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0D1B3E]/60 z-10" />
          <Image
            src="/technology/fixbyte/Fixbyte-BG-3-scaled.webp"
            alt="FixByte facility maintenance management platform - Sustainabyte Technologies"
            fill
            className="object-cover object-center opacity-80 brightness-75"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DB846]/10 border border-[#4DB846]/20 text-[#4DB846] text-sm font-bold tracking-wider uppercase mb-6">
                <Zap className="w-4 h-4" />
                Mobile-First CMMS
              </div>
              <h1 className="text-7xl md:text-9xl font-black text-white mb-6 leading-tight">
                Fixi<span className="text-[#4DB846]">Byte</span>
              </h1>
              <p className="text-3xl md:text-4xl text-gray-300 font-medium mb-10 leading-relaxed max-w-2xl">
                The modern standard for <span className="text-white font-bold underline decoration-[#4DB846] underline-offset-8">Asset & Maintenance</span> management.
              </p>
              <div className="flex flex-wrap gap-6">
                <GreenButton href="#demo">Schedule a Demo</GreenButton>
                <Link
                  href="#features"
                  className="inline-flex items-center gap-3 text-white font-black text-lg hover:text-[#4DB846] transition-all group"
                >
                  Explore Features <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Monitor And Manage Section */}
      <section id="features" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-[#0D1B3E] mb-8">Monitor And Manage</h2>
              <div className="w-32 h-2 bg-[#4DB846] mb-10 rounded-full" />
              <p className="text-2xl text-gray-600 mb-14 leading-relaxed font-medium">
                Everything you need to run maintenance operations right from your mobile.
              </p>

              <div className="space-y-10">
                {[
                  {
                    title: "Generate and close work orders instantly",
                    icon: "/technology/fixbyte/Generate.svg",
                  },
                  {
                    title: "Scan QR codes to update asset status",
                    icon: "/technology/fixbyte/Scan.svg",
                  },
                  {
                    title: "Track Maintenance KPIs and asset history",
                    icon: "/technology/fixbyte/Track-1.svg",
                  }
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-8 group"
                  >
                    <div className="w-28 h-28 flex-shrink-0 flex items-center justify-center rounded-3xl bg-[#4DB846]/10 group-hover:bg-[#4DB846] transition-colors duration-300 p-6">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={80}
                        height={80}
                        className="group-hover:scale-110 transition-transform duration-300"
                       loading="lazy" />
                    </div>
                    <h3 className="text-2xl font-black text-[#0D1B3E] leading-tight group-hover:text-[#4DB846] transition-colors">
                      {feature.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-[#4DB846]/5 rounded-full blur-3xl" />
              <div className="relative">
                <Image
                  src="/technology/fixbyte/mobile view.webp"
                  alt="FixByte mobile app for facility maintenance tracking - Sustainabyte"
                  width={800}
                  height={1000}
                  className="w-full h-auto float-anim"
                 loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4DB846]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-[#0D1B3E] mb-12">Key Capabilities</h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Role-Based UI",
                    desc: "Role-based dashboards for CXOs, engineers, and technicians",
                    icon: LayoutDashboard
                  },
                  {
                    title: "Work Order Management",
                    desc: "Create, track, and close work orders via mobile",
                    icon: ClipboardList
                  },
                  {
                    title: "QR-Code Asset Management",
                    desc: "Instant asset ID and real-time updates via QR codes.",
                    icon: QrCode
                  },
                  {
                    title: "Comprehensive Modules",
                    desc: "Integrated modules for maintenance, labor, materials and purchases.",
                    icon: Package
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 p-8 rounded-[2.5rem] bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#4DB846]/30 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#4DB846]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4DB846] transition-colors duration-300">
                      <item.icon className="w-8 h-8 text-[#4DB846] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-[#0D1B3E] mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-lg font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#4DB846]/30 to-transparent rounded-[3rem] blur-2xl" />
              <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/technology/fixbyte/mobile apps.webp"
                  alt="FixByte mobile applications for on-site maintenance teams - Sustainabyte"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain"
                 loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operational Impact Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#4DB846] font-black tracking-[0.3em] uppercase mb-4 block"
            >
              The Impact
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-black text-[#0D1B3E] mb-8">Driving Real Results</h2>
            <div className="w-32 h-2 bg-[#4DB846] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Lower downtime through checklist-driven preventive actions",
                icon: ShieldCheck,
                color: "from-[#4DB846]/20 to-transparent"
              },
              {
                title: "Boost productivity with clear KPI dashboards",
                icon: BarChart3,
                color: "from-[#3DD68C]/20 to-transparent"
              },
              {
                title: "Reduce manual errors and improve resource allocation",
                icon: CheckCircle2,
                color: "from-[#4DB846]/20 to-transparent"
              },
              {
                title: "Real-time visibility into maintenance operations",
                icon: LayoutDashboard,
                color: "from-[#3DD68C]/20 to-transparent"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="glass-card p-10 rounded-[2.5rem] flex gap-8 items-center group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-[#4DB846]/40 transition-all duration-500">
                  <item.icon className="w-10 h-10 text-[#4DB846]" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-[#0D1B3E] leading-tight mb-2 group-hover:text-[#4DB846] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#4DB846] font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Learn more <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section: Comprehensive Dashboard View */}
      <section className="py-32 bg-[#F8FAFC] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-[#0D1B3E] mb-8">Comprehensive Dashboard View</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#4DB846] to-[#3DD68C] mx-auto rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-12 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-[#0D1B3E] hover:bg-[#4DB846] hover:text-white transition-all z-40"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-12 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-[#0D1B3E] hover:bg-[#4DB846] hover:text-white transition-all z-40"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative aspect-[16/10] md:aspect-[21/12] rounded-[4rem] overflow-hidden bg-white shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-12"
              >
                <motion.h3
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-black text-[#0D1B3E] leading-tight mb-12 text-center max-w-4xl"
                >
                  {carouselItems[currentSlide].title}
                </motion.h3>

                <div className="relative w-full h-full max-h-[600px] flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={carouselItems[currentSlide].image}
                      alt={carouselItems[currentSlide].title}
                      fill
                      className="object-contain drop-shadow-[0_30px_100px_rgba(0,0,0,0.15)]"
                     loading="lazy" />
                  </motion.div>
                </div>

                <div className="mt-12 flex gap-4">
                  {carouselItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-3 rounded-full transition-all duration-500 ${currentSlide === idx ? "w-20 bg-[#4DB846]" : "w-4 bg-gray-200"
                        }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GreenButton href="#demo">Schedule a Demo</GreenButton>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="py-32 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4DB846]/20 rounded-full blur-[150px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4DB846]/10 rounded-full blur-[120px] -ml-48 -mb-48" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-tight">Ready to Transform Your <span className="text-[#4DB846]">Maintenance</span>?</h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Empower your technicians, reduce downtime, and gain real-time visibility into your asset operations with FixByte.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button className="px-12 py-6 bg-[#4DB846] text-white rounded-full font-black text-xl hover:bg-[#3da338] transition-all shadow-[0_20px_50px_rgba(77,184,70,0.3)] hover:shadow-[0_30px_70px_rgba(77,184,70,0.4)] hover:-translate-y-1">
                Schedule a Demo
              </button>
              <Link href="/contact" className="px-12 py-6 border-2 border-white/20 text-white rounded-full font-black text-xl hover:bg-white hover:text-[#0D1B3E] transition-all">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
