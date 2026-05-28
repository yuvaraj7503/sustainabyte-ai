"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Bluetooth,
  Settings2,
  Wrench,
  Lock,
  Link2,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  LayoutDashboard
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";

export default function FusionBytePage() {
  const [activeImage, setActiveImage] = useState(0);
  const dashboardImages = [
    "/technology/FusionByte/byte1.webp",
    "/technology/FusionByte/byte3.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % dashboardImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [dashboardImages.length]);

  const capabilities = [
    {
      title: "Improve Weld Accuracy",
      desc: "Precise digital control ensures consistent voltage and current for high-quality welds."
    },
    {
      title: "Reduce Setup Time",
      desc: "Switch between parameters instantly via mobile app, eliminating manual machine adjustments."
    },
    {
      title: "Minimise Human Error",
      desc: "Digital setpoints prevent accidental parameter drifts and incorrect manual settings."
    },
    {
      title: "Enabled Smart Protection",
      desc: "Built-in safety protocols and parameter locking protect both equipment and operators."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-[#0D1B3E] overflow-x-hidden font-[family-name:var(--font-sora)]">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .float-anim { animation: float 6s ease-in-out infinite; }
        
        .text-gradient {
          background: linear-gradient(to right, #4DB846, #3DD68C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 50px rgba(0,0,0,0.05);
        }

        @keyframes blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.9); }
        }
        .blink-anim { animation: blink 2s infinite; }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; filter: blur(40px); }
          50% { opacity: 0.8; filter: blur(60px); }
        }
        .pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#0D1B3E]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0D1B3E]/60 z-10" />
          <Image
            src="/technology/FusionByte/Fusionbyte-BG-2-1-scaled.webp"
            alt="FusionByte Hero"
            fill
            className="object-cover object-center opacity-80 brightness-75"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DB846]/10 border border-[#4DB846]/20 text-[#4DB846] text-sm font-bold tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(77,184,70,0.2)]">
                <div className="w-2 h-2 rounded-full bg-[#4DB846] blink-anim" />
                <Bluetooth className="w-4 h-4" />
                Bluetooth-Enabled Welding Control
              </div>
              <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.9]">
                Fusion<span className="text-[#4DB846]">Byte</span>
              </h1>
              <p className="text-3xl md:text-4xl text-gray-200 font-medium mb-12 leading-relaxed max-w-2xl">
                Wireless Precision for <span className="text-white font-bold underline decoration-[#4DB846] underline-offset-8">Welding Operations</span>. Replace manual knobs today.
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <GreenButton href="#demo">Schedule a Demo</GreenButton>
                <Link
                  href="#features"
                  className="flex items-center gap-3 text-white font-black text-lg hover:text-[#4DB846] transition-all group"
                >
                  Explore Capabilities <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Features Section */}
      <section id="features" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[#0D1B3E] mb-6">Wireless Precision</h2>
            <p className="text-xl text-gray-500 font-medium">Digitize your welding environment without hardware changes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Digitizes Welding Settings",
                desc: "Digitizes welding machine settings using a Bluetooth-enabled device.",
                icon: "/technology/FusionByte/Digitizes.svg",
                color: "from-[#4DB846]/20 to-transparent",
              },
              {
                title: "Mobile App Control",
                desc: "Operators can manage voltage and current via app, avoiding guesswork and errors.",
                icon: "/technology/FusionByte/Mobile-app.svg",
                color: "from-[#0D1B3E]/10 to-transparent",
              },
              {
                title: "Universal Integration",
                desc: "Integrates with most welders for digital control without hardware changes.",
                icon: "/technology/FusionByte/Digital-Control.svg",
                color: "from-[#4DB846]/20 to-transparent",
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group relative p-12 rounded-[3.5rem] bg-[#F8FAFC] border border-gray-100 hover:border-[#4DB846]/40 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] overflow-hidden text-center"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.color} rounded-full blur-3xl -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10">
                  <div className="w-32 h-32 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center mb-10 mx-auto group-hover:scale-110 group-hover:border-[#4DB846]/40 transition-all duration-500 p-6">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-black text-[#0D1B3E] leading-[1.2] mb-6 group-hover:text-[#4DB846] transition-all">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed mb-8">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Dashboard View Section */}
      <section className="py-24 bg-[#F8FAFC] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-[#0D1B3E] mb-8">Comprehensive Dashboard View</h2>
          <div className="w-32 h-2 bg-[#4DB846] mx-auto rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-20 bg-[#4DB846]/20 rounded-full pulse-glow" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-8 border-white float-anim bg-white aspect-[3/2]">
                <AnimatePresence>
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={dashboardImages[activeImage]}
                      alt={`FusionByte Dashboard ${activeImage + 1}`}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                  {dashboardImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${activeImage === i ? "bg-[#4DB846] w-8" : "bg-gray-300"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="space-y-12">
              {capabilities.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-start gap-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#4DB846] flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_10px_25px_rgba(77,184,70,0.3)] group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#0D1B3E] leading-tight mb-2 group-hover:text-[#4DB846] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-lg font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <GreenButton href="#demo">Schedule a Demo</GreenButton>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-[#0D1B3E] mb-8">Key Capabilities</h2>
            <div className="w-32 h-2 bg-[#4DB846] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Bluetooth Connectivity",
                desc: "Wirelessly control welding parameters using your phone or tablet.",
                icon: Bluetooth
              },
              {
                title: "Digital Setpoint Adjustment",
                desc: "Replace analog potentiometers with precise digital input—set exact voltage and current values.",
                icon: Settings2
              },
              {
                title: "Quick Installation",
                desc: "Designed for retrofit with existing machines; installation requires no major modifications.",
                icon: Wrench
              },
              {
                title: "Operator Access Control",
                desc: "Assign user permission to prevent unauthorised parameter changes during production.",
                icon: Lock
              },
              {
                title: "Works Seamlessly",
                desc: "Use FusionByte to set values and Digiweld to track performance, defects, and traceability.",
                icon: Link2
              }
            ].map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-10 rounded-[2.5rem] flex gap-8 items-center group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-[#4DB846]/40 transition-all duration-500 p-4">
                  <cap.icon className="w-10 h-10 text-[#4DB846]" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-[#0D1B3E] mb-2">{cap.title}</h4>
                  <p className="text-gray-600 text-lg font-medium">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section id="demo" className="py-32 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4DB846]/10 rounded-full blur-[150px] -mr-[400px] -mt-[400px]" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-tight">
              Ready for <br /><span className="text-gradient">Wireless Precision?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
              Step into the future of welding with FusionByte. Control, track, and optimize your operations wirelessly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/contact" className="px-12 py-6 bg-[#4DB846] text-white rounded-full font-black text-xl hover:bg-[#3da338] transition-all shadow-[0_20px_50px_rgba(77,184,70,0.3)]">
                Get Started Now
              </Link>
              <Link href="/contact" className="px-12 py-6 border-2 border-white/10 text-white rounded-full font-black text-xl hover:bg-white hover:text-[#0D1B3E] transition-all">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
