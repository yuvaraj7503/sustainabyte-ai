"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const partners = [
  { name: "StartupTN", src: "/about/Startup-TN-Logo-300x77.webp" },
  { name: "CS Instruments", src: "/about/CS_LOGO_GREEN-300x68.webp" },
  { name: "Startup India", src: "/about/startup-india-logo.webp" },
  { name: "BACSYS", src: "/about/BACSYS-Logo-300x75.webp" },
  { name: "First Language", src: "/about/First-Language-Logo.svg" },
  { name: "Bureau Veritas", src: "/about/Bureau_Veritas-Logo.wine_-300x200.webp" },
  { name: "Microsoft Azure", src: "/about/Microsoft-Azure-150x150.webp" },
  { name: "Bootstrappers", src: "/about/Bootstrapers-Logo-150x150.webp" },
];

const clients = [
  "/clients/Client-Logo-1-150x120.webp",
  "/clients/Client-Logo-2-300x126.webp",
  "/clients/Client-Logo-3-298x300.webp",
  "/clients/Client-Logo-4-300x220.webp",
  "/clients/Client-Logo-5-288x300.webp",
  "/clients/Client-Logo-6-300x177.webp",
  "/clients/Client-Logo-7-1-300x123.webp",
  "/clients/Client-Logo-8-286x300.webp",
  "/clients/Client-Logo-10-300x285.webp",
  "/clients/Client-Logo-11-300x105.webp",
];

export default function CompanyPage() {
  return (
    <div className="bg-white min-h-screen font-[family-name:var(--font-sora)]">
      {/* ── Hero Section ── */}
      <section className="relative w-full min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about/About-Us-BG-1-scaled.webp"
            alt="Making sustainability measurable and manageable - Sustainabyte Technologies mission"
            fill
            className="object-cover"
            priority
          />
          {/* A gradient to ensure text readability */}
          <div className="absolute inset-0 bg-[#0D1B3E]/60" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
              Making <span className="text-[#3DA45C]">Sustainability</span>
              <br />
              measurable and
              <br />
              manageable.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col-reverse md:flex-row items-center justify-between gap-12"
          >
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B3E] mb-6 border-b-2 border-[#3DA45C] pb-2 inline-block">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
                Partnering worldwide to adopt technology for reducing environmental impact and enhancing operational efficiency.
              </p>
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 relative flex-shrink-0">
              <Image src="/about/Mission.svg" alt="Sustainabyte mission - AI-driven energy optimization partnership" fill className="object-contain"  loading="lazy" />
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 relative flex-shrink-0">
              <Image src="/about/Vision.svg" alt="Sustainabyte vision - innovative energy intelligence for India" fill className="object-contain"  loading="lazy" />
            </div>
            <div className="flex-1 text-center md:text-right">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B3E] mb-6 border-b-2 border-[#3DA45C] pb-2 inline-block">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg ml-auto">
                To lead global sustainability with advanced technology integration, creating a greener, cleaner future.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Solutions Intro ── */}
      <section className="py-20 bg-[#0D1B3E] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Our Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#B0BEC5] text-lg max-w-2xl mx-auto mb-12 font-medium"
          >
            We deliver innovative, data-driven solutions that drive growth, efficiency, and sustainability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#energy" className="px-6 py-2 bg-[#3DA45C] hover:bg-[#2bc478] rounded text-sm font-bold transition-colors shadow-lg">Energy</a>
            <a href="#sustainability" className="px-6 py-2 bg-[#3DA45C] hover:bg-[#2bc478] rounded text-sm font-bold transition-colors shadow-lg">Sustainability</a>
            <a href="#technology" className="px-6 py-2 bg-[#3DA45C] hover:bg-[#2bc478] rounded text-sm font-bold transition-colors shadow-lg">Technology</a>
          </motion.div>
        </div>
      </section>

      {/* ── Detailed Solutions ── */}
      <section className="py-24 bg-white space-y-24">
        <div className="max-w-6xl mx-auto px-6 space-y-24">

          {/* Energy */}
          <motion.div id="energy" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-6">Energy</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We help businesses take control of their <span className="text-[#3DA45C] font-semibold">energy</span> performance through data-backed strategies and real-time optimization.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether it&apos;s reducing operational costs, cutting emissions, or extending asset life, we make sure energy works for you, not the other way around.
              </p>
              <p className="text-[#0D1B3E] font-medium mb-8 italic">
                Because in a <span className="text-[#3DA45C] font-semibold">Net Zero</span> future, every kilowatt counts.
              </p>
              <Link href="/energy" className="inline-flex items-center gap-2 text-[#0D1B3E] font-bold hover:text-[#3DA45C] transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-[#3DA45C] shadow-xl">
                <Image src="/about/Energy-768x432.webp" alt="Energy management services - Sustainabyte industrial solutions" fill className="object-cover hover:scale-105 transition-transform duration-700"  loading="lazy" />
              </div>
            </div>
          </motion.div>

          {/* Sustainability */}
          <motion.div id="sustainability" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-[#3DA45C] shadow-xl">
                <Image src="/about/Sustainability-768x432.webp" alt="Sustainability consulting and carbon accounting - Sustainabyte Technologies" fill className="object-cover hover:scale-105 transition-transform duration-700"  loading="lazy" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-6">Sustainability</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We equip organizations with the tools, data, and direction to act decisively. Whether you&apos;re tracking <span className="text-[#3DA45C] font-semibold">emissions</span>, conserving water, reducing <span className="text-[#3DA45C] font-semibold">energy</span> consumption, or building a path to <span className="text-[#3DA45C] font-semibold">Net Zero</span>, our approach combines technical depth with operational clarity.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We help you move from intent to measurable progress.
              </p>
              <p className="text-[#0D1B3E] font-medium mb-8 italic">
                Because only what can be measured can be managed.
              </p>
              <Link href="/sustainability" className="inline-flex items-center gap-2 text-[#0D1B3E] font-bold hover:text-[#3DA45C] transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Technology */}
          <motion.div id="technology" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-6">Technology</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We build intelligent systems that connect AI-driven software with IoT-enabled hardware, making buildings smarter, more <span className="text-[#3DA45C] font-semibold">efficient</span>, and future-ready.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our platforms help you monitor, analyze, and act in real time, turning data into savings, uptime, and <span className="text-[#3DA45C] font-semibold">sustainability</span>.
              </p>
              <p className="text-[#0D1B3E] font-medium mb-8 italic">
                We don&apos;t just digitize operations, we make them intelligent.
              </p>
              <Link href="/technology" className="inline-flex items-center gap-2 text-[#0D1B3E] font-bold hover:text-[#3DA45C] transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-[#3DA45C] shadow-xl">
                <Image src="/about/Technology-768x432.webp" alt="AI and IoT technology platform for energy optimization - Sustainabyte" fill className="object-cover hover:scale-105 transition-transform duration-700"  loading="lazy" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Partnered With & Clients ── */}
      <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-24 text-center">

          {/* Partners */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D1B3E] mb-12 inline-block border-b-2 border-[#3DA45C] pb-2">
              Partnered With
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {partners.map((partner, idx) => (
                <div key={idx} className="relative h-16 w-32 md:h-20 md:w-40 hover:scale-105 transition-transform duration-300">
                  <Image src={partner.src} alt={partner.name} fill className="object-contain"  loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Clients Marquee */}
          <div id="clients" className="pt-10 -mt-10">
            <h2 className="text-2xl font-bold text-[#0D1B3E] mb-12 inline-block border-b-2 border-[#3DA45C] pb-2">
              Our Clients
            </h2>
            <div className="relative w-full overflow-hidden">
              <div className="flex w-max animate-marquee space-x-12 md:space-x-20 items-center py-4">
                {[...clients, ...clients].map((src, idx) => (
                  <div key={idx} className="relative h-16 w-32 md:h-24 md:w-40 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <Image src={src} alt="Sustainabyte trusted client partner logo" fill className="object-contain"  loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Add Custom Animation for Marquee */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 7s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

    </div>
  );
}
