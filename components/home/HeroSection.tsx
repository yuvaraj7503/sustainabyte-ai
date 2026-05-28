"use client";

import { motion } from "framer-motion";
import GreenButton from "@/components/ui/GreenButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      {/* Background Image with Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/Net%20Zero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Subtle dark gradient from the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E]/80 via-[#0D1B3E]/40 to-transparent" />
        {/* Subtle dark gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E] via-transparent to-transparent opacity-80" />
        {/* Radial glow */}
        <div
          className="absolute top-1/2 right-0 w-[700px] h-[700px] -translate-y-1/2 translate-x-1/4"
          style={{
            background:
              "radial-gradient(circle, rgba(61,214,140,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-40 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(61,214,140,0.1) 0%, transparent 70%)",
          }}
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-48 h-48 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(26,45,90,0.5) 0%, transparent 70%)",
          }}
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 sm:mb-8"
            >
              <motion.span
                animate={{ y: [-4, 4] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium bg-[#0A1128] text-[#00FFAA] border border-[#00FFAA] group overflow-visible"
                style={{
                  boxShadow: "0 0 20px rgba(0,255,170,0.4), 0 0 40px rgba(0,255,170,0.2), 0 0 80px rgba(0,255,170,0.1), inset 0 0 15px rgba(0,255,170,0.3)"
                }}>

                {/* Floating Particles Orbit Container */}
                <div className="absolute inset-[-15px] pointer-events-none" style={{ animation: "rotate-slow 10s linear infinite" }}>
                  <span className="absolute top-0 left-1/4 w-1 h-1 bg-[#00FFAA] rounded-full shadow-[0_0_8px_#00FFAA]"></span>
                  <span className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-[#00FFAA] rounded-full shadow-[0_0_10px_#00FFAA]"></span>
                  <span className="absolute top-1/2 -left-2 w-1 h-1 bg-[#00FFAA] rounded-full opacity-50 shadow-[0_0_5px_#00FFAA]"></span>
                  <span className="absolute top-1/4 -right-1 w-0.5 h-0.5 bg-[#00FFAA] rounded-full shadow-[0_0_8px_#00FFAA]"></span>
                  <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[#00FFAA] rounded-full shadow-[0_0_10px_#00FFAA]"></span>
                </div>

                {/* Intense Outer Halo pulse */}
                <div className="absolute inset-0 rounded-full bg-[#00FFAA]/20 blur-xl animate-pulse pointer-events-none" />

                {/* Content */}
                <span className="relative z-10 flex items-center gap-2" style={{ textShadow: "0 0 10px rgba(0,255,170,0.8), 0 0 20px rgba(0,255,170,0.4)" }}>
                  {/* Glowing dot */}
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFAA] opacity-100" style={{ boxShadow: "0 0 20px #00FFAA" }}></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00FFAA] shadow-[0_0_15px_#00FFAA,0_0_30px_#00FFAA]"></span>
                  </span>
                  AI-Powered Energy Intelligence
                </span>
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-[family-name:var(--font-sora)] text-[clamp(2rem,4.5vw,4.2rem)] font-bold leading-[1.15] tracking-tight mb-4 sm:mb-6 text-white"
            >
              AI-Powered{" "}
              <span className="bg-gradient-to-r from-[#3DD68C] to-[#00FFAA] bg-clip-text text-transparent">
                Energy Optimization
              </span>
              <br />
              for Buildings & Industries
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[#B0BEC5] text-base sm:text-lg md:text-xl max-w-xl mb-8 sm:mb-10 leading-relaxed"
            >
              Sustainabyte helps commercial buildings, factories, and campuses reduce HVAC and utility energy costs through AIoT monitoring, chiller plant optimization, energy audits, and verified savings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-nowrap items-center gap-3"
            >
              <GreenButton href="/contact?subject=Book a Demo" variant="primary">
                Book a Demo
              </GreenButton>

              <GreenButton href="/technology/optibyte" variant="outline">
                Explore OptiByte Platform
              </GreenButton>

              <GreenButton href="/contact?subject=Request Energy Audit" variant="dark">
                Request Energy Audit
              </GreenButton>
            </motion.div>
          </div>

          {/* Right side is intentionally left blank because the background image (lending page.webp) 
              contains the complex visual elements (like the Net Zero glowing UI) on the right half. */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0D1B3E] to-transparent z-10" />
    </section>
  );
}
