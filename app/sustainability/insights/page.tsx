"use client";

import { motion } from "framer-motion";
import {
  Leaf,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const articles = [
  {
    id: 1,
    tag: "blogpost 2",
    title:
      "The Future of Smart Utilities: From Reactive Control to Autonomous Optimization",
    date: "November 4, 2025",
    excerpt:
      "In today's evolving industrial landscape, Agentic AI for Smart Utilities is redefining how energy systems operate — transforming reactive control into autonomous optimization.",
    image: "/blogs/blogpost-2.webp",
    category: "Smart Utilities",
    href: "#smart-utilities",
  },
  {
    id: 2,
    tag: "Energy Audits",
    title:
      "How ASHRAE Energy Audits identify potential energy saving opportunities to enhance building efficiency and sustainability",
    date: "September 26, 2025",
    excerpt:
      "With increasing pressure to reduce operational costs and meet decarbonization targets, facility owners are turning to structured energy efficiency solutions.",
    image: "/blogs/AdobeStock_542369459-scaled-1.webp",
    category: "Energy Audits",
    href: "#energy-audits",
  },
];

export default function InsightsPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="bg-white min-h-screen text-[#0D1B3E] overflow-x-hidden font-[family-name:var(--font-sora)]">

      {/* ── Hero Section ── */}
      <section className="relative w-full min-h-[500px] flex items-center pt-32 pb-20 overflow-hidden bg-[#0D1B3E]">
        {/* Pure Background Image - No overlays or opacity filters */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/blogs/Untitled-design.webp"
            alt="Sustainability insights and environmental data analytics - Sustainabyte Technologies"
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
              Sustainability Insights for Built
              <br />
              Environments
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
                {/* Custom LinkedIn Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="w-11 h-11 rounded bg-[#4DB846] hover:bg-[#3ca036] flex items-center justify-center text-white transition-colors shadow-lg"
              >
                {/* Custom WhatsApp Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="w-11 h-11 rounded bg-[#4DB846] hover:bg-[#3ca036] flex items-center justify-center text-white transition-colors shadow-lg"
              >
                {/* Youtube icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Latest Articles ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B3E] tracking-widest uppercase">
              LATEST ARTICLE
            </h2>
          </motion.div>

          {/* Articles list */}
          <div className="flex flex-col gap-12">
            {articles.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="group"
              >
                <Link href={article.href}>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Thumbnail */}
                    <div className="relative w-full md:w-[45%] aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 400px"
                       loading="lazy" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 py-2">
                      <h3 className="text-[#0D1B3E] font-medium text-xl md:text-2xl leading-snug mb-3 group-hover:text-[#3DA45C] transition-colors duration-300">
                        {article.title}
                      </h3>

                      <div className="text-gray-400 text-xs mb-4">
                        {article.date}
                      </div>

                      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter Section ── */}
      <section
        id="newsletter"
        className="py-20 relative overflow-hidden bg-[#eaf4eb]"
      >
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:max-w-sm"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#3DA45C] mb-3 leading-tight">
                Want to keep up with our blog?
              </h3>
              <p className="text-[#0D1B3E]/70 text-sm leading-relaxed font-medium">
                Our most valuable tips right inside your inbox, once per month.
              </p>
            </motion.div>

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-auto"
            >
              {subscribed ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-3 px-8 py-4 rounded bg-[#3DA45C]/20 border border-[#3DA45C]/40 text-[#0D1B3E] font-semibold"
                >
                  <Leaf className="w-5 h-5 text-[#3DA45C]" />
                  You&apos;re subscribed! Welcome aboard 🎉
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your e-mail"
                    className="flex-1 px-5 py-3 border border-transparent bg-[#0D1B3E] text-white placeholder-gray-400 text-sm outline-none focus:border-[#3DA45C] transition-all min-w-0 sm:min-w-[280px]"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#4DB846] hover:bg-[#3ca036] text-white font-semibold text-sm transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
