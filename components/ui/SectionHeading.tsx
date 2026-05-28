"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  greenText?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  greenText,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  const parts = greenText ? title.split(greenText) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2
        className={`font-[family-name:var(--font-sora)] text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-[#0D1B3E]" : "text-white"
        }`}
      >
        {greenText ? (
          <>
            {parts[0]}
            <span className="text-[#3DD68C]">{greenText}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-gray-600" : "text-[#B0BEC5]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
