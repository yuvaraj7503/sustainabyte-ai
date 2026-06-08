"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  Zap,
  Thermometer,
  Calendar,
  Smartphone,
  Activity,
  Radio,
  Shield,
  ArrowRight,
  CheckCircle2,
  Clock,
  BarChart3,
  Cpu,
  Power,
  Plus,
  Minus,
  CheckCircle,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Sliders,
  Settings,
  Flame,
  Snowflake,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";

export default function InBytePage() {
  // AC Simulator States
  const [acPower, setAcPower] = useState(true);
  const [acTemp, setAcTemp] = useState(24);
  const [acMode, setAcMode] = useState<"cool" | "eco" | "fan">("eco");
  const [scheduleActive, setScheduleActive] = useState(true);
  const [mqttLogs, setMqttLogs] = useState<string[]>([
    "MQTT broker initialized successfully",
    "Connected to broker at broker.sustainabyte.ai:8883",
    "Device ir_blaster_091 subscribed to sustainabyte/device_091/control",
    "Published status: Online (Temp: 27°C, Humidity: 54%)"
  ]);

  const logContainerRef = useRef<HTMLDivElement>(null);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setMqttLogs((prev) => [...prev.slice(-6), `[${timestamp}] ${message}`]);
  };

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [mqttLogs]);

  // Handle Simulator Actions
  const togglePower = () => {
    const newState = !acPower;
    setAcPower(newState);
    addLog(`CMD: Power ${newState ? "ON" : "OFF"} -> Topic: sustainabyte/device_091/set_power`);
  };

  const adjustTemp = (amount: number) => {
    if (!acPower) return;
    const nextTemp = Math.max(16, Math.min(30, acTemp + amount));
    if (nextTemp !== acTemp) {
      setAcTemp(nextTemp);
      addLog(`CMD: Set Temp to ${nextTemp}°C -> Topic: sustainabyte/device_091/set_temp`);
    }
  };

  const changeMode = (newMode: "cool" | "eco" | "fan") => {
    if (!acPower) return;
    setAcMode(newMode);
    addLog(`CMD: Set Mode to ${newMode.toUpperCase()} -> Topic: sustainabyte/device_091/set_mode`);
  };

  const toggleSchedule = () => {
    const nextState = !scheduleActive;
    setScheduleActive(nextState);
    addLog(`CMD: Lunch scheduling ${nextState ? "ENABLED" : "DISABLED"} -> Topic: sustainabyte/device_091/set_sched`);
  };

  // Calculations for Simulator
  const getSavings = () => {
    if (!acPower) return 100;
    if (acMode === "fan") return 75;
    if (acMode === "eco") {
      // Eco adds a base 10% saving
      return Math.min(60, Math.max(10, (acTemp - 16) * 5 + 10));
    }
    return Math.min(50, Math.max(0, (acTemp - 16) * 5));
  };

  const getSavingsColor = (savings: number) => {
    if (savings >= 70) return "text-emerald-400 border-emerald-500/30 bg-emerald-500/10";
    if (savings >= 30) return "text-green-400 border-green-500/30 bg-green-500/10";
    if (savings >= 15) return "text-yellow-400 border-yellow-500/30 bg-yellow-500/10";
    return "text-red-400 border-red-500/30 bg-red-500/10";
  };
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#0D1B3E] overflow-x-hidden font-[family-name:var(--font-sora)]">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .float-anim { animation: float 5s ease-in-out infinite; }
        
        .text-gradient {
          background: linear-gradient(135deg, #4DB846, #3DD68C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 20px 50px rgba(13, 27, 62, 0.05);
        }

        .dark-glass-card {
          background: rgba(13, 27, 62, 0.85);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-[#0D1B3E]">
        {/* Background Image with Dark Blue Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3E]/50 via-[#0D1B3E]/40 to-[#0D1B3E]/80 z-10" />
          <Image
            src="/technology/IR%20Blaster/bgimg.png"
            alt="InByte IR blaster for smart HVAC control in facilities - Sustainabyte"
            fill
            className="object-cover object-center opacity-90 brightness-90"
            priority
          />
        </div>

        {/* Floating background glowing circles */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#3DD68C]/10 rounded-full blur-[120px] pointer-events-none z-10" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#4DB846]/10 rounded-full blur-[90px] pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-4xl">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
             

              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] tracking-tight">
                IR <span className="text-gradient">Blaster</span>
              </h1>
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3DD68C]/10 border border-[#3DD68C]/20 text-[#3DD68C] text-sm font-bold tracking-wider uppercase">
                <Radio className="w-4 h-4 animate-pulse" />
                Smart IoT AC Automation
              </div>
              <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl">
                Smart AC monitoring and remote control system built on MQTT communication and hardware integration. Control AC devices, manage temperature, configure schedules, and monitor device status through a centralized mobile application.
              </p>

              <div className="flex flex-wrap gap-5 pt-4">
                <GreenButton href="#features">Explore Features</GreenButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/10 text-white rounded-full font-bold text-sm hover:bg-white hover:text-[#0D1B3E] transition-all duration-300"
                >
                  Request a Demo
                </Link>
              </div>

              {/* Badges Grid */}
              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10 max-w-xl">
                {[
                  { title: "MQTT Protocol", desc: "" },
                  { title: "Real-Time Monitoring", desc: "" },
                  { title: "Multi-AC Control", desc: "" }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="text-white font-bold text-base md:text-lg">{item.title}</h4>
                    <p className="text-gray-400 text-xs md:text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-[#4DB846] font-extrabold tracking-[0.25em] uppercase mb-4 block text-sm">
              The Challenge
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0D1B3E] mb-6">
              Why This Product Was Developed
            </h2>
            <div className="w-24 h-1.5 bg-[#4DB846] mx-auto rounded-full mb-8" />
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              In most offices and homes, air conditioners are operated manually using traditional IR remotes. While this works for basic control, it creates serious limitations when it comes to monitoring, automation, and energy management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Forgotten Operations",
                desc: "Users forget to turn OFF the AC when leaving a room or office, causing significant energy waste.",
                icon: AlertTriangle,
                color: "border-amber-500/10 hover:border-amber-500/30"
              },
              {
                title: "Lack of Visibility",
                desc: "No way to monitor whether an AC is ON or OFF without physically being present in the room.",
                icon: Smartphone,
                color: "border-sky-500/10 hover:border-sky-500/30"
              },
              {
                title: "Excess Cooling",
                desc: "Maintaining unnecessarily low temperatures (e.g. 18°C) leads to exponentially higher electricity bills.",
                icon: TrendingUp,
                color: "border-red-500/10 hover:border-red-500/30"
              },
              {
                title: "Off-Hours Waste",
                desc: "During lunch breaks or non-working hours, ACs continue to run with no one present to switch them off.",
                icon: Clock,
                color: "border-[#4DB846]/10 hover:border-[#4DB846]/30"
              },
              {
                title: "Zero Centralization",
                desc: "No centralized dashboard or interface to view and manage multiple ACs across different locations.",
                icon: Cpu,
                color: "border-purple-500/10 hover:border-purple-500/30"
              }
            ].map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`p-10 rounded-[2.5rem] bg-[#F8FAFC] border-2 ${problem.color} transition-all duration-300 hover:shadow-lg`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6">
                  <problem.icon className="w-7 h-7 text-[#4DB846]" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">{problem.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{problem.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-32 bg-[#0D1B3E] relative overflow-hidden">
        {/* Glows */}
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#4DB846]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#3DD68C]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-[#3DD68C] font-extrabold tracking-[0.25em] uppercase mb-4 block text-sm">
              The Remedy
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Our Solution: Three Core Purposes
            </h2>
            <div className="w-24 h-1.5 bg-[#3DD68C] mx-auto rounded-full mb-8" />
            <p className="text-lg text-gray-300 font-medium leading-relaxed">
              The IR Blaster is built on three pillars that solve every pain point of traditional AC management.
            </p>
          </div>

          {/* Solution Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Energy Saving",
                desc: "Automated schedules and lunch-break automation ensure the AC turns OFF when no one is present, eliminating wasteful operation and reducing electricity bills.",
                icon: Zap,
                details: "Automatic lunch hour shutdown, off-hours setback templates, and intelligent thermostat setpoint locks."
              },
              {
                title: "Real-Time Monitoring",
                desc: "The mobile app displays live AC status (Online/Offline/Active), current temperature, humidity sensor data, and last-seen timestamp in real time via MQTT.",
                icon: BarChart3,
                details: "Built-in environmental sensors query temperature and humidity, publishing data intervals every 30 seconds."
              },
              {
                title: "Remote Control",
                desc: "Users can turn the AC ON/OFF, adjust temperature, and configure WiFi from anywhere using the mobile app — no physical remote required.",
                icon: Smartphone,
                details: "Secure MQTT publish/subscribe commands route adjustments from the app to the IR transmitter instantly."
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="dark-glass-card p-10 rounded-[3rem] flex flex-col justify-between h-full"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#3DD68C]/10 border border-[#3DD68C]/20 flex items-center justify-center">
                    <pillar.icon className="w-7 h-7 text-[#3DD68C]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 text-gray-400 text-xs leading-relaxed">
                  <strong>How it works: </strong>{pillar.details}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive AC Control Simulator Widget */}
      <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left column explanation */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#4DB846] font-extrabold tracking-[0.25em] uppercase block text-sm">
                Interactive Demo
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0D1B3E] leading-tight">
                Experience Smart AC Control
              </h2>
              <p className="text-gray-500 font-medium text-base leading-relaxed">
                Interact with our live simulation widget to see how the IR Blaster functions. Adjust setpoints and modes to calculate instant energy savings and see live simulated MQTT network messaging.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  "Optimized setpoints (e.g. 24°C) save up to 30% electricity compared to 18°C.",
                  "Eco mode adjusts active cycle offsets for smart performance.",
                  "Instant response (under 50ms) using lightweight MQTT packets."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4DB846] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-600">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column simulator */}
            <div className="lg:col-span-7 flex justify-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-xl rounded-[2.5rem] shadow-[0_30px_70px_rgba(13,27,62,0.1)] border-2 border-white/60 bg-gradient-to-b from-white to-[#F1F5F9] p-6 md:p-8"
              >
                {/* Simulator Header */}
                <div className="flex justify-between items-center pb-6 border-b border-gray-200/80 mb-6">
                  <div>
                    <h3 className="font-black text-xl text-[#0D1B3E]">Virtual AC Control</h3>
                    <p className="text-xs text-gray-400 font-bold flex items-center gap-1.5 mt-0.5">
                      <span className={`w-2 h-2 rounded-full ${acPower ? "bg-green-500 animate-ping" : "bg-red-500"}`} />
                      MQTT Client Status: {acPower ? "Connected" : "Disconnected"}
                    </p>
                  </div>
                  
                  {/* Energy Savings Indicator Badge */}
                  <div className={`px-4 py-2 border rounded-full text-xs font-black transition-all ${getSavingsColor(getSavings())}`}>
                    Savings: {getSavings()}%
                  </div>
                </div>

                {/* Virtual Remote Control LCD Screen */}
                <div className="bg-[#0D1B3E] rounded-[2rem] p-6 text-white space-y-6 shadow-inner relative overflow-hidden mb-6">
                  {/* Ambient Screen Light */}
                  {acPower && (
                    <div className="absolute inset-0 bg-[#3DD68C]/5 blur-[40px] pointer-events-none" />
                  )}

                  <div className="flex justify-between items-start relative z-10">
                    <span className="text-xs text-gray-400 font-bold tracking-widest uppercase">
                      IR_Blaster_091
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 bg-white/10 rounded uppercase">
                      {acPower ? (acMode === "eco" ? "Eco Enabled" : acMode === "cool" ? "Cool Mode" : "Fan Mode") : "AC Off"}
                    </span>
                  </div>

                  {/* Large Temp Indicator */}
                  <div className="flex justify-center items-center py-6 relative z-10">
                    {acPower ? (
                      <div className="text-center">
                        <span className="text-7xl md:text-8xl font-black font-[family-name:var(--font-sora)]">
                          {acTemp}
                        </span>
                        <span className="text-2xl font-bold align-super">°C</span>
                      </div>
                    ) : (
                      <span className="text-4xl md:text-5xl font-black text-gray-500 font-[family-name:var(--font-sora)] py-4">
                        STANDBY
                      </span>
                    )}
                  </div>

                  {/* Mini stats */}
                  <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 text-xs font-medium text-gray-400 relative z-10">
                    <div>
                      Ambient Temp: <strong className="text-white">26.4°C</strong>
                    </div>
                    <div className="text-right">
                      Room Humidity: <strong className="text-white">52.8% RH</strong>
                    </div>
                  </div>
                </div>

                {/* Remote Buttons Layout */}
                <div className="space-y-6">
                  {/* Row 1: Power & Mode */}
                  <div className="grid grid-cols-4 gap-4">
                    {/* Power button */}
                    <button
                      onClick={togglePower}
                      className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all shadow-sm ${
                        acPower
                          ? "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20"
                          : "bg-[#0D1B3E] text-white hover:bg-[#1A3065]"
                      }`}
                    >
                      <Power className="w-5 h-5" />
                      <span className="text-[10px] font-black uppercase">Power</span>
                    </button>

                    {/* Mode Cool */}
                    <button
                      onClick={() => changeMode("cool")}
                      disabled={!acPower}
                      className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-1.5 border transition-all ${
                        !acPower
                          ? "opacity-50 cursor-not-allowed bg-gray-100 text-gray-400 border-transparent"
                          : acMode === "cool"
                          ? "bg-[#3DD68C]/10 border-[#3DD68C] text-[#27A37B] font-bold"
                          : "bg-white border-gray-200 text-[#0D1B3E] hover:bg-gray-50"
                      }`}
                    >
                      <Snowflake className="w-5 h-5" />
                      <span className="text-[10px] font-bold uppercase">Cool</span>
                    </button>

                    {/* Mode Eco */}
                    <button
                      onClick={() => changeMode("eco")}
                      disabled={!acPower}
                      className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-1.5 border transition-all ${
                        !acPower
                          ? "opacity-50 cursor-not-allowed bg-gray-100 text-gray-400 border-transparent"
                          : acMode === "eco"
                          ? "bg-[#3DD68C]/10 border-[#3DD68C] text-[#27A37B] font-bold"
                          : "bg-white border-gray-200 text-[#0D1B3E] hover:bg-gray-50"
                      }`}
                    >
                      <Lightbulb className="w-5 h-5" />
                      <span className="text-[10px] font-bold uppercase">Eco</span>
                    </button>

                    {/* Mode Fan */}
                    <button
                      onClick={() => changeMode("fan")}
                      disabled={!acPower}
                      className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-1.5 border transition-all ${
                        !acPower
                          ? "opacity-50 cursor-not-allowed bg-gray-100 text-gray-400 border-transparent"
                          : acMode === "fan"
                          ? "bg-[#3DD68C]/10 border-[#3DD68C] text-[#27A37B] font-bold"
                          : "bg-white border-gray-200 text-[#0D1B3E] hover:bg-gray-50"
                      }`}
                    >
                      <WindIcon className="w-5 h-5" />
                      <span className="text-[10px] font-bold uppercase">Fan</span>
                    </button>
                  </div>

                  {/* Temp control buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => adjustTemp(-1)}
                      disabled={!acPower || acTemp <= 16}
                      className="flex-1 py-4 border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl flex items-center justify-center gap-2 text-[#0D1B3E] font-bold shadow-sm transition-all"
                    >
                      <Minus className="w-5 h-5" /> Temp Down
                    </button>

                    <button
                      onClick={() => adjustTemp(1)}
                      disabled={!acPower || acTemp >= 30}
                      className="flex-1 py-4 border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl flex items-center justify-center gap-2 text-[#0D1B3E] font-bold shadow-sm transition-all"
                    >
                      <Plus className="w-5 h-5" /> Temp Up
                    </button>
                  </div>

                  {/* Lunch Schedule Switcher */}
                  <div className="p-4 border border-gray-200 bg-white rounded-2xl flex justify-between items-center shadow-sm">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#4DB846]" />
                      <div>
                        <h4 className="text-sm font-bold text-[#0D1B3E]">Lunch Hour Automation</h4>
                        <p className="text-xs text-gray-400 font-medium">Automatic off: 1:00 PM - 2:00 PM</p>
                      </div>
                    </div>
                    <button
                      onClick={toggleSchedule}
                      className={`w-12 h-6 rounded-full p-1 transition-all ${
                        scheduleActive ? "bg-[#3DD68C]" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full transition-all ${
                          scheduleActive ? "translate-x-6" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Broker Terminal Console Logs */}
                  <div className="border border-gray-200/80 rounded-2xl bg-[#0D1B3E]/5 p-4">
                    <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-wider mb-2">
                      Live MQTT Broker Logs
                    </h4>
                    <div
                      ref={logContainerRef}
                      className="font-mono text-[9px] text-gray-500 h-28 overflow-y-auto space-y-1.5"
                    >
                      {mqttLogs.map((log, i) => (
                        <div key={i} className="leading-normal whitespace-pre-wrap">
                          {log}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="features" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-[#4DB846] font-extrabold tracking-[0.25em] uppercase mb-4 block text-sm">
              Features
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0D1B3E] mb-6">
              Capabilities
            </h2>
            <div className="w-24 h-1.5 bg-[#4DB846] mx-auto rounded-full mb-8" />
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Everything you need to automate and monitor your AC infrastructure from a single platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "MQTT Communication",
                desc: "Reliable real-time bidirectional messaging between device and mobile app over any network.",
                icon: Radio
              },
              {
                title: "Temperature & Humidity",
                desc: "Onboard sensors continuously track ambient conditions and surface them in the dashboard.",
                icon: Zap
              },
              {
                title: "Smart Schedules",
                desc: "Configure automatic ON/OFF schedules and lunch-break automation for every device.",
                icon: Clock
              },
              {
                title: "WiFi Configuration",
                desc: "Remote WiFi provisioning — no need for physical access to reconfigure network settings.",
                icon: Wifi
              },
              {
                title: "Device Status Alerts",
                desc: "Instant Online/Offline/Active status with last-seen timestamps for every AC unit.",
                icon: Sliders
              },
              {
                title: "Centralized App",
                desc: "Manage all AC devices from one mobile application with a clean intuitive interface.",
                icon: Smartphone
              }
            ].map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group p-10 rounded-[2.5rem] bg-[#F8FAFC] hover:bg-white border border-gray-100 hover:border-[#3DD68C]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <cap.icon className="w-7 h-7 text-[#4DB846]" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1B3E] mb-3 group-hover:text-[#4DB846] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Device Gallery Section */}
      <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-[#4DB846] font-extrabold tracking-[0.25em] uppercase mb-4 block text-sm">
              Hardware
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0D1B3E] mb-6">
              Meet the Device
            </h2>
            <div className="w-24 h-1.5 bg-[#4DB846] mx-auto rounded-full mb-8" />
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Compact, robust, and WiFi-enabled — the IR Blaster hardware integrates seamlessly into any environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "", img: "/technology/IR%20Blaster/ir2.png" },
              { title: "", img: "/technology/IR%20Blaster/ir3.png" },
              { title: "", img: "/technology/IR%20Blaster/ir4.png" }
            ].map((device, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-square w-full bg-white rounded-[2rem] overflow-hidden"
              >
                <Image
                  src={device.img}
                  alt={`${device.title} of IR Blaster`}
                  fill
                  className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                 loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#0D1B3E] relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4DB846]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight">
              Ready to Automate Your <br />
              <span className="text-gradient">AC Infrastructure?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
              Deploy the IR Blaster in your office or facility and start saving energy, gaining visibility, and controlling every AC unit from your phone today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <GreenButton href="/contact">Request a Demo</GreenButton>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/10 text-white rounded-full font-bold text-sm hover:bg-white hover:text-[#0D1B3E] transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Simple wind icon wrapper
function WindIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
      <path d="M17.5 15.6a1.9 1.9 0 1 1 2 2.4H2" />
      <path d="M9.8 9.6a2 2 0 1 1 2.2 1.4H2" />
    </svg>
  );
}
