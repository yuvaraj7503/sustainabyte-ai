"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    publishedBy: "IRIS 2026",
    date: "January 2026",
    title: "Sustainabyte to showcase AI-driven transformation at IRIS 2026 & DeepTech Summit",
    excerpt: "We are excited to be part of the 3rd Edition of the Industrial Research & Innovation Summit – IRIS 2026, showcasing the future of AI-driven industrial transformation. It is a proud moment for Sustainabyte Technologies to be featured at the DeepTech Summit 2026 alongside leading innovators and industry experts. Our focus remains on delivering intelligent solutions in Digital Twin, AI Analytics, Energy Optimization, and Smart Industrial Automation. This platform enables us to connect with visionary leaders shaping the next generation of sustainable technologies. IRIS 2026 reflects the growing importance of deep-tech innovation in transforming industries worldwide. We are honored to contribute toward building smarter, greener, and more efficient industrial ecosystems.",
    image: "/News/thesrm.jpg",
    href: "#",
  },
  {
    id: 2,
    publishedBy: "INBAC Association",
    date: "October 2025",
    title: "INBAC features Sustainabyte's insights on Decarbonization and High-Performance Buildings",
    excerpt: "INBAC BTB Magazine (October 2025 Edition) highlighted Arun Prasad, Founder of Sustainabyte Technologies, for his article on advancing buildings beyond compliance through data-led decarbonization. The feature explains how the EPIC framework helps optimize systems, enhance reliability, and reduce energy, water, and carbon impacts.",
    image: "/News/INBAC.jpg",
    href: "#",
  },
  {
    id: 3,
    publishedBy: "Frost & Sullivan",
    date: "October 2025",
    title: "Sustainabyte featured by Frost & Sullivan for advancing intelligent energy management",
    excerpt: "Frost & Sullivan, a global leader in growth advisory and market intelligence, spotlighted Sustainabyte Technologies for its contribution to intelligent energy analytics and digital sustainability. The feature recognized our Founder and CEO Thanakarthik Kumar for leading the company's mission to make buildings Efficient, Predictive, Intelligent, and Controlled.",
    image: "/News/Frost-Sullivan.jpg",
    href: "#",
  },
];

export default function NewsPage() {
  return (
    <div className="bg-white min-h-screen text-[#0D1B3E] overflow-x-hidden font-[family-name:var(--font-sora)]">
      {/* ── Hero Section ── */}
      <section className="relative w-full min-h-[450px] flex items-center pt-32 pb-20 overflow-hidden bg-[#0D1B3E]">
        {/* Pure Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/News/background.jpg"
            alt="News Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-md">
              News
            </h1>

            {/* Subscribe button + social icons */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="#newsletter"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 rounded text-white bg-[#4DB846] hover:bg-[#3ca036] font-semibold text-sm transition-colors shadow-lg"
              >
                Subscribe
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="w-11 h-11 rounded bg-[#4DB846] hover:bg-[#3ca036] flex items-center justify-center text-white transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="w-11 h-11 rounded bg-[#4DB846] hover:bg-[#3ca036] flex items-center justify-center text-white transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="w-11 h-11 rounded bg-[#4DB846] hover:bg-[#3ca036] flex items-center justify-center text-white transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Latest News Grid ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B3E] tracking-widest uppercase">
              LATEST NEWS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {newsItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col group"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] overflow-hidden mb-6 bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Meta */}
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-4 border-b border-gray-100 pb-2">
                  <div>
                    <span className="text-[#3DA45C]">Published By : </span>
                    <span className="text-[#0D1B3E]">{item.publishedBy}</span>
                  </div>
                  <span className="text-gray-500">{item.date}</span>
                </div>

                {/* Content */}
                <h3 className="text-[#0D1B3E] font-bold text-xl md:text-2xl leading-snug mb-4 group-hover:text-[#3DA45C] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 flex-1">
                  {item.excerpt}
                </p>

                {/* Action */}
                <div>
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded bg-[#4DB846] hover:bg-[#3ca036] text-white font-semibold text-sm transition-colors"
                  >
                    Read the full article
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
