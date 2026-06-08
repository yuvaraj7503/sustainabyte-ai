"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail, Zap, Cpu, Brain, Code2, Users, X } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  image?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Satish Kumar N",
    role: "Experienced IoT Sales Manager",
    description:
      "Experienced in IoT solutions, business development, and client relationship management with a strong focus on industrial automation and smart technology solutions. Passionate about driving digital transformation through innovative IoT solutions.",
    tags: ["#IoT", "#SalesManager", "#IndustrialAutomation", "#DigitalTransformation"],
    icon: <Cpu className="w-5 h-5" />,
    image: "/people/Satish Kumar N.jpeg",
  }, {
    name: "Vijayan R",
    role: "Assistant Manager – Energy Solutions",
    description:
      "Experienced in industrial and commercial energy management. Skilled in optimizing energy performance, supporting energy-saving initiatives, and delivering efficient solutions for industrial operations, including Energy Efficiency project implementation, Energy Monitoring Systems (EMS) and Chiller Plant Management (CPM).",
    tags: [
      "#EnergySolutions",
      "#EnergyManagement",
      "#Sustainability",
      "#IndustrialEfficiency",
      "#EnergyMonitoring",
      "#CPM",
    ],
    icon: <Zap className="w-5 h-5" />,
    image: "/people/Vijayan.png",
  },
  


  {
    name: "Gowtham D",
    role: "Assistant Manager – Energy Solutions",
    description:
      "Experienced in industrial energy management. Skilled in optimizing energy performance, supporting energy-saving initiatives, and delivering efficient solutions for industrial operations includes Compressor implementation, Compressor Plant Manager & Energy Monitoring System.",
    tags: ["#EnergySolutions", "#EnergyManagement", "#Sustainability", "#IndustrialEfficiency"],
    icon: <Zap className="w-5 h-5" />,
    image: "/people/Gowtham D.jpeg",
  },
  {
    name: "Yedunath M",
    role: "IoT & Controls Project Engineer",
    description: "Experienced in IoT, industrial automation, controls engineering, and project management. Skilled in developing smart monitoring and control solutions, industrial communication systems, cloud-connected applications, and automation platforms for industrial operations and digital transformation.",
    tags: [
      "#IoT",
      "#IndustrialAutomation",
      "#ControlsEngineering",
      "#ProjectManagement",
      "#EmbeddedSystems",
      "#Industry4.0",
      "#Automation",
      "#SmartSystems",
      "#DigitalTransformation",
    ],
    icon: <Zap className="w-5 h-5" />, // IoT related icon
    image: "/people/yedunath.jpeg",
  },




];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function PeoplePage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="bg-[#060e24] min-h-screen font-[family-name:var(--font-sora)]">
      {/* ── Hero Section ── */}
      <section className="relative w-full min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* Background image + overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/people/bgimg.png"
            alt="Sustainabyte team of energy management professionals India"
            fill
            className="object-cover object-center opacity-55"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3E]/70 via-[#0a1628]/50 to-[#060e24]/85" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3DA45C]/8 rounded-full blur-[150px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4DB846]/6 rounded-full blur-[120px] -ml-32 -mb-32" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3DA45C]/30 bg-[#3DA45C]/10 text-[#3DD68C] text-sm font-medium mb-6"
            >
              <Users className="w-4 h-4" />
              Our Team
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Meet the{" "}
              <span className="bg-gradient-to-r from-[#3DA45C] to-[#3DD68C] bg-clip-text text-transparent">
                People
              </span>
              <br />
              Behind the Innovation
            </h1>
            <p className="text-[#8899b8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A passionate team driving sustainability through technology,
              energy optimization, and intelligent digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Team Grid Section ── */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group cursor-pointer flex flex-col"
                onClick={() => setSelectedMember(member)}
              >
                {/* Image Section */}
                <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-[#f8fafc] border border-gray-200/60 group-hover:border-[#3DA45C]/40 transition-all duration-500 mb-5 shadow-sm group-hover:shadow-md">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                     loading="lazy" />
                  ) : (
                    /* Placeholder avatar */
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                      <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[#1a2f5a] to-[#0f1f42] border-2 border-white/[0.08] flex items-center justify-center overflow-hidden">
                        <span className="text-3xl font-bold bg-gradient-to-br from-[#3DA45C] to-[#3DD68C] bg-clip-text text-transparent select-none">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Hover overlay glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Info Section */}
                <div className="px-2">
                  <h3 className="text-lg font-bold text-[#0a1628] group-hover:text-[#3DA45C] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Modal Pop-up ── */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-[#020617]/85 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-[#0f1f42] border border-white/[0.08] shadow-[0_0_50px_rgba(0,0,0,0.6)] z-10 flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#7a8fb5] hover:text-[#3DD68C] hover:border-[#3DA45C]/30 hover:bg-[#3DA45C]/10 transition-all duration-300 z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image */}
              <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto md:min-h-[400px] bg-gradient-to-br from-[#0D1B3E] to-[#162a54] overflow-hidden">
                {selectedMember.image ? (
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover object-top"
                   loading="lazy" />
                ) : (
                  /* Placeholder avatar */
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-[#1a2f5a] to-[#0f1f42] border-2 border-white/[0.08] flex items-center justify-center overflow-hidden">
                      <span className="text-5xl font-bold bg-gradient-to-br from-[#3DA45C] to-[#3DD68C] bg-clip-text text-transparent select-none">
                        {selectedMember.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Bio / Info */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="text-[#3DD68C] text-sm font-semibold mb-6">
                    {selectedMember.role}
                  </p>

                  <p className="text-[#7a8fb5] text-sm md:text-base leading-relaxed mb-6">
                    {selectedMember.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {selectedMember.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#3DA45C]/8 text-[#3DD68C]/80 border border-[#3DA45C]/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Bar */}
                <div className="pt-4 border-t border-white/[0.04] flex items-center gap-3">
                  <button className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#7a8fb5] hover:text-[#3DD68C] hover:border-[#3DA45C]/30 hover:bg-[#3DA45C]/10 transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#7a8fb5] hover:text-[#3DD68C] hover:border-[#3DA45C]/30 hover:bg-[#3DA45C]/10 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Join the Team CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3DA45C]/[0.03] to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Join Our{" "}
              <span className="bg-gradient-to-r from-[#3DA45C] to-[#3DD68C] bg-clip-text text-transparent">
                Team
              </span>
              ?
            </h2>
            <p className="text-[#7a8fb5] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              We&apos;re always looking for passionate individuals who want to
              make a real impact in sustainability and technology.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#3DA45C] to-[#2bc478] text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(61,164,92,0.3)] hover:scale-105 transition-all duration-300"
            >
              View Open Positions
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
