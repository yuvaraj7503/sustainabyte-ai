"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";

export default function EnergyManagementSolutionsPage() {
  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden">
      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/energy/Energy Management Solutions/Energy-Management-Solutions-BG.webp"
            alt="Energy Management Solutions"
            fill
            className="object-cover opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E]/30 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex items-center justify-center min-h-[40vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full text-center"
          >
            <h1 className="font-[family-name:var(--font-sora)] text-5xl md:text-8xl font-black bg-gradient-to-r from-[#4DB846] to-[#3DD68C] bg-clip-text text-transparent leading-[1.1]">
              Energy Management Solutions
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities - Cinematic Scrolling Redesign */}
      <section id="management-services" className="py-24 bg-white relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-5xl font-black text-[#0D1B3E] mb-5">Our <span className="bg-gradient-to-r from-[#4DB846] to-[#3DD68C] bg-clip-text text-transparent">Expertise</span></h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">Comprehensive frameworks and digital solutions to manage and optimize your energy performance.</p>
            <div className="w-20 h-1.5 bg-[#4DB846] mx-auto mt-6 rounded-full" />
          </div>

          <div className="space-y-32">
            {[
              {
                id: "iso-50001",
                title: "ISO 50001 System Implementation Support",
                subtitle: "ISO 50001 Support",
                desc: "We help you design and implement a customized Energy Management System (EnMS) aligned with ISO 50001 standards.",
                points: [
                  { title: "Policy and Framework design", desc: "We assist in setting energy policies, identifying SEUs, and defining energy objectives." },
                  { title: "Process & Audit Readiness", desc: "We guide you through internal audits, measurement frameworks, and continuous improvement cycles." },
                  { title: "Culture of Efficiency", desc: "Enable organizational ownership of energy performance through training and systematized tracking." }
                ],
                img: "/energy/Energy Management Solutions/ISO-50001-768x768.webp",
                cta: "Schedule Your Consultation"
              },
              {
                id: "iso-50002",
                title: "ISO 50002 Energy Audit Support",
                subtitle: "ISO 50002 Support",
                desc: "We conduct energy audit based on ISO 50002 standards to help you identify actionable opportunities for reducing energy waste.",
                points: [
                  { title: "Audit Planning & Asset Profiling", desc: "We define the audit scope, map energy flows, and assess critical systems for in-depth analysis." },
                  { title: "Data Collection & Analysis", desc: "Detailed on-site measurements and load profiling are carried out to benchmark energy performance and identify savings potential." },
                  { title: "Actionable Insights & Reporting", desc: "We deliver clear, investment-ready recommendations supported by data, enabling your teams to prioritize high-impact efficiency measures." },
                  { title: "Compliance & Improvement", desc: "Support for aligning your internal audits with ISO 50002 expectations and embedding audit outcomes into your long-term energy strategy." }
                ],
                img: "/energy/Energy Management Solutions/ISO-50002-768x768.webp",
                cta: "Book a Consulting"
              },
              {
                id: "ipmvp",
                title: "Measurement & Verification (IPMVP)",
                subtitle: "M & V (IPMVP)",
                desc: "We ensure your energy savings are real, quantifiable, and validated using globally recognized M & V protocols.",
                points: [
                  { title: "Baseline Development", desc: "We create normalized baseline models using operational and historical data." },
                  { title: "IPMVP Alignment", desc: "We apply Option B/C protocols based on metering availability and project scope." },
                  { title: "Post-Implementation Validation", desc: "We compare performance data to baseline to quantify verified savings." }
                ],
                img: "/energy/Energy Management Solutions/M-V-768x768.webp",
                cta: "Schedule Your Consultation"
              },
              {
                id: "digitalisation",
                title: "Digitalisation for savings tracking",
                subtitle: "Digitalisation",
                desc: "We digitalize the entire energy performance lifecycle from data collection to reporting enabling full transparency and ongoing verification.",
                points: [
                  { title: "Integrated Data Streams", desc: "We connect BMS, IoT sensors, and utility meters for seamless data flow." },
                  { title: "Real-Time Dashboards", desc: "Track energy usage, savings, and anomalies across systems and zones." },
                  { title: "Automated Reporting", desc: "Generate stakeholder-ready reports for internal review, sustainability reporting and compliance audits." }
                ],
                img: "/energy/Energy Management Solutions/Digitisation-1024x1024.webp",
                cta: "Book your Consultation"
              }
            ].map((feature, idx) => (
              <div key={feature.id} id={feature.id} className="scroll-mt-32 group">
                <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-1"
                  >
                    <span className="text-[#4DB846] font-bold text-sm tracking-widest uppercase mb-4 block">{feature.subtitle}</span>
                    <h3 className="text-4xl md:text-5xl font-black text-[#0D1B3E] mb-8 leading-tight group-hover:text-[#4DB846] transition-colors duration-500">{feature.title}</h3>
                    <p className="text-gray-600 text-lg mb-12 leading-relaxed">{feature.desc}</p>

                    <div className="space-y-8 mb-12">
                      {feature.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex gap-6 group">
                          <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4DB846] transition-all duration-300">
                            <CheckCircle2 className="w-6 h-6 text-[#4DB846] group-hover:text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#0D1B3E] text-lg mb-1">{point.title}</h4>
                            <p className="text-gray-500 text-base">{point.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12">
                      <div className="border-t-[1.5px] border-dashed border-[#4DB846] mb-8" />
                      <div className="flex flex-col items-center">
                        <GreenButton href="/contact">{feature.cta}</GreenButton>
                        <div className="w-32 h-0.5 bg-[#4DB846] mt-3" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex-shrink-0 w-full lg:max-w-[420px]"
                  >
                    <div className="relative rounded-3xl overflow-hidden aspect-square w-full shadow-2xl group/img border border-gray-100 hover:border-[#4DB846]/40 transition-colors duration-500">
                      <Image
                        src={feature.img}
                        alt={feature.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 420px"
                        className="object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D1B3E]/70 to-transparent px-6 py-4">
                        <span className="text-[#4DB846] text-[10px] font-bold tracking-widest uppercase">{feature.subtitle}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Full-width dark blue separator for all except the last item */}
                {idx < 3 && (
                  <div className="w-screen relative left-1/2 -translate-x-1/2 h-16 bg-[#0D1B3E] mt-24" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Pillars Navigation */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-5xl font-black text-[#0D1B3E] mb-4">Explore Our Energy Pillars</h2>
            <div className="w-24 h-1.5 bg-[#4DB846] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Energy Efficiency and Consulting",
                desc: "End-to-end optimization through specialized audits, diagnostics, and compliance reporting.",
                href: "/energy/efficiency-consulting",
                img: "/energy/Energy Efficiency and Consulting/energybg.webp",
                label: "Optimization & Consulting"
              },
              {
                title: "Energy Analytics",
                desc: "Harness the power of data with our advanced utility, BMS, and solar analytics frameworks.",
                href: "/energy/analytics",
                img: "/energy/Energy Analytics/Energy-Analytics-BG.webp",
                label: "Data-Driven Insights"
              }
            ].map((pillar, idx) => (
              <Link key={idx} href={pillar.href} className="group relative rounded-3xl overflow-hidden aspect-[16/9] shadow-xl hover:shadow-2xl transition-all duration-500">
                <Image
                  src={pillar.img}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.8]"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#0D1B3E] via-transparent to-transparent">
                  <span className="text-[#4DB846] text-sm font-bold tracking-widest uppercase mb-2">{pillar.label}</span>
                  <h3 className="text-3xl font-black text-white mb-3 group-hover:text-[#4DB846] transition-colors">{pillar.title}</h3>
                  <p className="text-gray-300 max-w-md">{pillar.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-[#4DB846] font-bold">
                    Learn More <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-24 bg-[#0D1B3E] text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,184,70,0.3)_0,transparent_100%)]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-black mb-8 leading-tight">
              Ready to Optimize Your <span className="bg-gradient-to-r from-[#4DB846] to-[#3DD68C] bg-clip-text text-transparent">Energy Infrastructure</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-light">
              Connect with our consulting team to build the management strategy your facility needs.
            </p>
            <button className="bg-[#4DB846] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#3da336] hover:shadow-[0_0_40px_rgba(77,184,70,0.5)] transition-all duration-300">
              Schedule an Energy Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
