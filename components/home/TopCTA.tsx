"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GreenButton from "@/components/ui/GreenButton";

export default function TopCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/energy/energy-banner.webp"
          alt="Industrial energy facility exterior - Sustainabyte Technologies"
          fill
          className="object-cover"
         loading="lazy" />
        <div className="absolute inset-0 bg-[#0D1B3E]/85 mix-blend-multiply" />
        <div className="absolute inset-0 mesh-gradient opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DB846]/10 text-[#4DB846] border border-[#4DB846]/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#4DB846] animate-pulse" />
          Comprehensive Optimization
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-[family-name:var(--font-sora)] text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10"
        >
          We offer comprehensive,<br />
          <span className="text-gradient">end-to-end energy optimization</span> solutions<br />
          tailored to your industry needs
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <GreenButton href="/contact" variant="primary">Contact Our Experts</GreenButton>
        </motion.div>
      </div>
    </section>
  );
}
