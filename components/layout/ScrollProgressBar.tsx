"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 z-[9999] h-[4px]"
      aria-hidden="true"
    >
      {/* Gradient bar - Much brighter green gradient */}
      <div className="h-full w-full bg-gradient-to-r from-[#3DD68C] via-[#00FFAA] to-[#00FFD1] shadow-[0_0_10px_rgba(0,255,170,0.8)]" />

      {/* Intense Glow effect at the tip */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 h-[8px] w-32 blur-[4px] opacity-100"
        style={{
          background:
            "linear-gradient(to right, transparent, #00FFAA, #ffffff)",
        }}
      />
    </motion.div>
  );
}
