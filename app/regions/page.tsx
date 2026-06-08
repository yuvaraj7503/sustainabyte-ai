"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Building2, TrendingUp, Shield, ArrowRight, Zap, Target, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Region {
  name: string;
  description: string;
  focusAreas: string[];
  status: 'Active' | 'Expanding' | 'Coming Soon';
  icon: any;
  locations: string[];
}

const regions: Region[] = [
  {
    name: "South India",
    description: "Our primary hub for AI development and industrial IoT manufacturing, serving major automotive and textile clusters.",
    focusAreas: ["Industrial AI", "Textile Automation", "Smart Manufacturing"],
    status: "Active",
    icon: Building2,
    locations: ["Chennai", "Coimbatore", "Bangalore", "Hyderabad"]
  },
  {
    name: "West India",
    description: "Driving digital transformation in the chemical and pharmaceutical corridors with predictive maintenance and safety AI.",
    focusAreas: ["Predictive Maintenance", "Worker Safety", "Chemical Process AI"],
    status: "Active",
    icon: Zap,
    locations: ["Mumbai", "Pune", "Ahmedabad", "Surat"]
  },
  {
    name: "North India",
    description: "Scaling operations to support the growing renewable energy and consumer goods industries in the NCR region.",
    focusAreas: ["Renewable Energy AI", "Logistics Optimization", "Consumer Insights"],
    status: "Expanding",
    icon: TrendingUp,
    locations: ["Delhi NCR", "Jaipur", "Ludhiana", "Lucknow"]
  },
  {
    name: "East India",
    description: "Expanding support for heavy industrial sectors and mining operations with environmental monitoring solutions.",
    focusAreas: ["Mining Intelligence", "Emission Tracking", "Heavy Asset Monitoring"],
    status: "Expanding",
    icon: Target,
    locations: ["Kolkata", "Jamshedpur", "Bhubaneswar"]
  },
  {
    name: "Southeast Asia",
    description: "Entering the global market to provide smart city and building automation solutions for sustainable urban growth.",
    focusAreas: ["Smart Cities", "Building Automation", "Energy Grids"],
    status: "Coming Soon",
    icon: Globe,
    locations: ["Singapore", "Kuala Lumpur", "Bangkok"]
  },
  {
    name: "Middle East",
    description: "Partnering with energy giants to optimize oil & gas operations and drive large-scale sustainability initiatives.",
    focusAreas: ["Oil & Gas Optimization", "Water Management", "Energy Transition"],
    status: "Coming Soon",
    icon: Users,
    locations: ["Dubai", "Abu Dhabi", "Riyadh"]
  }
];

const RegionCard = ({ region, index }: { region: Region, index: number }) => {
  const Icon = region.icon;
  const isActive = region.status === 'Active';
  const StatusIcon = isActive ? Shield : region.status === 'Expanding' ? TrendingUp : Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(61,214,140,0.15)] hover:border-[#3DD68C]/30 transition-all duration-500 relative"
    >
      {/* Header: Icon & Status */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:border-[#3DD68C]/20 transition-colors mb-4">
          <Icon className="w-7 h-7 text-[#3DD68C]" />
        </div>
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${isActive
          ? 'bg-[#3DD68C]/10 text-[#2ba86b] border-[#3DD68C]/30'
          : region.status === 'Expanding'
            ? 'bg-blue-50 text-blue-600 border-blue-100'
            : region.status === 'Coming Soon'
              ? 'bg-yellow-50 text-yellow-600 border-yellow-100'
              : 'bg-gray-100 text-gray-500 border-gray-200'
          }`}>
          <StatusIcon className="w-3 h-3" />
          {region.status}
        </div>
      </div>

      {/* Title & Description */}
      <div className="text-center mb-8">
        <h3 className="font-sora text-2xl font-bold mb-3 text-[#0D1B3E] group-hover:text-[#3DD68C] transition-colors">{region.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed min-h-[60px]">
          {region.description}
        </p>
      </div>

      {/* Tags: Focus Areas */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {region.focusAreas.map((area, i) => (
          <span key={i} className="text-[11px] font-medium px-3 py-1 bg-gray-50 text-gray-500 rounded-lg border border-gray-100 group-hover:bg-[#3DD68C]/5 group-hover:text-[#3DD68C] group-hover:border-[#3DD68C]/10 transition-colors">
            {area}
          </span>
        ))}
      </div>

      {/* Locations */}
      <div className="pt-6 border-t border-gray-50">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {region.locations.map((loc, i) => (
            <div key={i} className="flex items-center gap-1.5 text-[12px] font-bold text-gray-400 group-hover:text-[#0D1B3E] transition-colors">
              <MapPin className="w-3 h-3 text-[#3DD68C] opacity-50" />
              {loc}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function RegionsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Regions/2b earth.webp"
            alt="Energy management solutions across India - regional operations map"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E] via-[#0D1B3E]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3E]/70 via-transparent to-transparent" />
          <div className="absolute inset-0 mesh-gradient opacity-10" />

          {/* Location Markers (Green Dots) */}
          <div className="absolute inset-0 z-20">
            {[
              // South India
              { top: "46%", left: "70.5%", label: "Chennai" },
              { top: "45%", left: "69.7%", label: "Coimbatore" },


              // West India




              // Others

            ].map((marker, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 + (i * 0.05), duration: 0.5 }}
                className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 group/marker"
                style={{ top: marker.top, left: marker.left }}
              >
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-[#3DD68C] rounded-full animate-ping opacity-40" />
                {/* Inner Dot */}
                <div className="absolute inset-[1px] bg-[#3DD68C] rounded-full shadow-[0_0_6px_#3DD68C]" />

                {/* Tooltip Label */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 bg-[#0D1B3E]/90 backdrop-blur-md rounded-lg border border-white/10 opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-30">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">{marker.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-30 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="font-sora text-5xl md:text-8xl font-bold mb-8 leading-tight text-white">
              Where We <br /><span className="text-[#3DD68C]">Operate</span>
            </h1>
            <p className="text-gray-200 text-sm md:text-lg leading-relaxed mb-10 max-w-3xl">
              Currently serving clients across India with an expanding footprint across Southeast Asia and the Middle East through AI-powered industrial intelligence, energy optimization, and sustainability solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: REGIONAL FOOTPRINT ── */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#3DD68C] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Regional Footprint</span>
              <h2 className="font-sora text-4xl md:text-5xl font-bold text-[#0D1B3E]">Expanding Intelligence <br />Across Borders</h2>
            </div>
            <p className="text-gray-500 text-lg max-w-md">
              We strategically expand our presence to where industrial challenges meet sustainable opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, idx) => (
              <RegionCard key={region.name} region={region} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: GLOBAL COMMITMENT ── */}
      <section className="py-32 bg-gray-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-10 md:p-14 rounded-[3rem] border border-gray-100 relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-500 text-center"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3DD68C]/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-all duration-700 group-hover:bg-[#3DD68C]/20" />
              <div className="w-16 h-16 relative mb-8 rounded-full overflow-hidden border-2 border-[#3DD68C]/20 group-hover:border-[#3DD68C]/50 transition-colors shadow-lg mx-auto">
                <Image
                  src="/Regions/2b earth.webp"
                  alt="Sustainabyte global energy management commitment - India operations"
                  fill
                  className="object-cover scale-150 group-hover:scale-125 transition-transform duration-700"
                 loading="lazy" />
              </div>
              <h3 className="font-sora text-3xl font-bold mb-6 text-[#0D1B3E]">Global Commitment</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We are committed to helping industries worldwide achieve smarter operations, reduced energy consumption, improved sustainability performance, and long-term operational excellence through AI, IoT, and intelligent automation technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-10 md:p-14 rounded-[3rem] border border-gray-100 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3DD68C]/10 rounded-full blur-[80px] -ml-32 -mb-32 transition-all duration-700 group-hover:bg-[#3DD68C]/20" />
              <Shield className="w-12 h-12 text-[#3DD68C] mb-8 mx-auto" />
              <h3 className="font-sora text-3xl font-bold mb-6 text-[#0D1B3E]">Regional Support</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Our regional teams work closely with clients to deliver scalable, data-driven, and future-ready industrial solutions with continuous innovation and dedicated support.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-[#3DD68C] text-[#0D1B3E] hover:text-white rounded-xl font-bold transition-all border border-gray-200 hover:border-transparent group/btn shadow-sm"
                >
                  Contact Our Team
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
}
