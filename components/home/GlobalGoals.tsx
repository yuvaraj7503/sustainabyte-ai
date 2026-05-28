"use client";

import { motion } from "framer-motion";

const sdgs = [
  { number: 7, title: "Affordable & Clean Energy", color: "#FCC30B" },
  { number: 9, title: "Industry, Innovation & Infrastructure", color: "#F36D25" },
  { number: 11, title: "Sustainable Cities & Communities", color: "#F99D26" },
  { number: 12, title: "Responsible Consumption & Production", color: "#BF8B2E" },
  { number: 13, title: "Climate Action", color: "#3F7E44" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

export default function GlobalGoals() {
  return (
    <section id="impact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-sora)] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4"
        >
          Our Commitment to{" "}
          <span className="text-[#3DD68C]">Global Goals</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          Sustainabyte aligns with the UN Sustainable Development Goals to
          create meaningful impact through our work
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-6"
        >
          {sdgs.map((sdg) => (
            <motion.div
              key={sdg.number}
              variants={cardVariants}
              whileHover={{
                scale: 1.1,
                y: -8,
                boxShadow: `0 20px 40px ${sdg.color}30`,
              }}
              className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center text-white cursor-default transition-shadow"
              style={{ backgroundColor: sdg.color }}
            >
              <span className="text-xl sm:text-3xl font-bold font-[family-name:var(--font-sora)]">
                {sdg.number}
              </span>
              <span className="text-[8px] sm:text-[9px] font-medium leading-tight text-center px-1 sm:px-2 mt-1 opacity-90">
                {sdg.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
