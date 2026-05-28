"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, Video, Download } from "lucide-react";
import GreenButton from "@/components/ui/GreenButton";

const resources = [
  { icon: FileText, type: "Case Study", title: "30% Energy Reduction at Lucas TVS", description: "How we helped Lucas TVS achieve significant energy savings across their manufacturing facility." },
  { icon: FileText, type: "Case Study", title: "Hospital HVAC Optimization", description: "AI-driven HVAC optimization resulting in 22% cost reduction while maintaining patient comfort." },
  { icon: BookOpen, type: "Whitepaper", title: "The Path to Net Zero for Indian Industries", description: "Comprehensive guide on achieving Net Zero targets in the Indian industrial context." },
  { icon: BookOpen, type: "Whitepaper", title: "IoT in Energy Management", description: "How IoT sensors and AI analytics are revolutionizing building energy management." },
  { icon: Video, type: "Webinar", title: "EPIC Framework for Energy Efficiency", description: "Learn about our Efficient, Predictive, Intelligent, Controlled approach to facility management." },
  { icon: Download, type: "Guide", title: "BEE Compliance Handbook", description: "Step-by-step guide to meeting Bureau of Energy Efficiency compliance requirements." },
];

export default function ResourcesPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 bg-[#0D1B3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/20 mb-6">
              <BookOpen className="w-4 h-4" /> Resources
            </span>
            <h1 className="font-[family-name:var(--font-sora)] text-4xl md:text-6xl font-bold text-white mb-6">
              Insights & <span className="text-[#3DD68C]">Resources</span>
            </h1>
            <p className="text-[#B0BEC5] text-lg leading-relaxed">Explore our case studies, whitepapers, and guides to learn more about energy efficiency and sustainability.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3DD68C]/10 flex items-center justify-center">
                    <r.icon className="w-5 h-5 text-[#3DD68C]" />
                  </div>
                  <span className="text-xs font-semibold text-[#3DD68C] uppercase tracking-wider">{r.type}</span>
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-lg font-bold text-[#0D1B3E] mb-3">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{r.description}</p>
                <div className="mt-6">
                  <GreenButton variant="outline" className="text-xs px-5 py-2">Read More</GreenButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
