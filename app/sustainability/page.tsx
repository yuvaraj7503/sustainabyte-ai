"use client";

import { motion } from "framer-motion";
import { Leaf, BarChart3, FileText, Target, TreePine, Recycle, ArrowUpRight, Zap, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";

const services = [
  { icon: Target, title: "Net Zero Roadmap", description: "Customized pathway planning to achieve your net zero emissions targets with verifiable milestones.", href: "/sustainability/net-zero-roadmap" },
  { icon: BarChart3, title: "Carbon Accounting", description: "Accurate, compliant, and audit-ready emissions reporting aligned with GHG Protocol and ISO 14064.", href: "/sustainability/carbon-accounting" },
  { icon: Zap, title: "Decarbonization", description: "Energy-led carbon reduction pathways for industrial assets and commercial facilities.", href: "/sustainability/decarbonization" },
  { icon: FileText, title: "ESG Reporting", description: "Automated ESG compliance reporting aligned with GRI, TCFD, and other global frameworks.", href: "/sustainability#esg" },
  { icon: TreePine, title: "Green Certification", description: "Support for LEED, IGBC, and other green building certification processes.", href: "/sustainability#green-cert" },
  { icon: Recycle, title: "Waste Reduction", description: "Comprehensive waste management strategies integrated with your energy optimization goals.", href: "/sustainability#waste" },
  { icon: Leaf, title: "Sustainability Strategy", description: "End-to-end sustainability consulting to align your operations with global sustainability goals.", href: "/sustainability#strategy" },
  { icon: BookOpen, title: "Sustainability Insights", description: "Deep dives into industrial AI, carbon reduction strategies, and smart utility management.", href: "/sustainability/insights" },
];

export default function SustainabilityPage() {
  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden">
      {/* Premium Hero Section with CTA */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/What We Do all img/bgimg.webp"
            alt="Sustainability solutions for carbon reduction and net zero India - Sustainabyte"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E] via-[#0D1B3E]/80 to-transparent" />
          <div className="absolute inset-0 mesh-gradient opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/20 mb-8">
              <Leaf className="w-4 h-4" /> Eco-Transformation
            </span>

            <h1 className="font-[family-name:var(--font-sora)] text-4xl md:text-7xl font-black mb-8 leading-[1.1]">
              <span className="text-white">Driving</span> <br />
              <span className="text-gradient">Sustainable Operations</span>
            </h1>

            <p className="text-[#B0BEC5] text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl">
              We offer comprehensive, <span className="text-white font-bold italic">end-to-end sustainability</span> transformation solutions tailored to your organizational needs.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <GreenButton href="/contact">Contact Our Experts</GreenButton>
            </div>


          </motion.div>
        </div>
      </section>


      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3DD68C]/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D1B3E] mb-6"
            >
              Sustainability <span className="text-[#3DD68C]">Services</span>
            </motion.h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Comprehensive environmental solutions designed to help your organization achieve
              <span className="text-[#3DD68C] font-semibold"> operational excellence</span> and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Link key={i} href={s.href}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -12 }}
                  className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(61,214,140,0.1)] transition-all duration-500 group relative overflow-hidden h-full"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#3DD68C]/5 rounded-bl-[4rem] group-hover:bg-[#3DD68C]/10 transition-colors" />

                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                    className="relative z-10"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#3DD68C] transition-all duration-500 shadow-lg">
                      <s.icon className="w-7 h-7 text-[#3DD68C] group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-[#0D1B3E] mb-4 group-hover:text-[#3DD68C] transition-colors">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">{s.description}</p>

                    <div className="mt-8 pt-6 border-t border-gray-50 flex items-center gap-2 text-[#3DD68C] font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-500">
                      <span>Learn more</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
