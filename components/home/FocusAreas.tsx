"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    title: "Industries",
    images: [
      { src: "/Industries/Factories.webp",        name: "Factories"       },
      { src: "/Industries/Warehouses.webp",        name: "Warehouses"      },
      { src: "/Industries/Power Plants.webp",      name: "Power Plants"    },
      { src: "/Industries/Chemical Plants.webp",   name: "Chemical Plants" },
      { src: "/Industries/Industry Parks.webp",    name: "Industry Parks"  },
      { src: "/Industries/Twilight.webp",          name: "Twilight Plants" },
    ],
  },
  {
    title: "Commercial Buildings",
    images: [
      { src: "/Commercial Buildings/IT-Parks-300x200.webp",        name: "IT Parks"       },
      { src: "/Commercial Buildings/Hospitals-300x271.webp",        name: "Hospitals"      },
      { src: "/Commercial Buildings/Shopping-Malls-300x199.webp",   name: "Shopping Malls" },
      { src: "/Commercial Buildings/Hotels-1-300x200.webp",         name: "Hotels"         },
      { src: "/Commercial Buildings/Resorts.webp",                  name: "Resorts"        },
      { src: "/Commercial Buildings/Educational-Institutions.webp", name: "Educational Institutions" },
    ],
  },
  {
    title: "Retail Spaces",
    images: [
      { src: "/Retail Spaces/Department-Stores-300x199.webp", name: "Department Stores" },
      { src: "/Retail Spaces/Supermarkets-300x200.webp",      name: "Supermarkets" },
      { src: "/Retail Spaces/Franchise-Outlets-300x200.webp",   name: "Franchise Outlets" },
      { src: "/Retail Spaces/Restaurants.webp",                name: "Restaurants" },
      { src: "/Retail Spaces/Banks.webp",               name: "Banks" },
      { src: "/Retail Spaces/showerooms.webp",       name: "Automobile Showrooms" },
    ],
  },
];

export default function FocusAreas() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="sectors" className="py-16 sm:py-24 bg-[#0D1B3E]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-[family-name:var(--font-sora)] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Our <span className="text-[#3DD68C]">Focus Areas</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-[#B0BEC5] text-sm sm:text-base mb-10 sm:mb-14 max-w-xl mx-auto"
        >
          We serve diverse industries and sectors with tailored energy and
          sustainability solutions
        </motion.p>

        {/* Accordion */}
        <div className="space-y-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              {/* Accordion Header */}
              <motion.button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left cursor-pointer group"
                whileHover={{ backgroundColor: "rgba(61,214,140,0.05)" }}
              >
                <span className="font-[family-name:var(--font-sora)] font-semibold text-white text-base sm:text-lg group-hover:text-[#3DD68C] transition-colors">
                  {cat.title}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#3DD68C]" />
                </motion.div>
              </motion.button>

              {/* Accordion Body */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    {/* Image Cards Grid */}
                    <div className="px-4 sm:px-6 pb-5 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                      {cat.images?.map((img, j) => (
                        <motion.div
                          key={img.name}
                          initial={{ opacity: 0, y: 16, scale: 0.93 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: j * 0.06, duration: 0.35 }}
                          className="group relative rounded-xl overflow-hidden cursor-default"
                          style={{ aspectRatio: "4/3" }}
                        >
                          {/* Image */}
                          <Image
                            src={img.src}
                            alt={img.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 45vw, 33vw"
                           loading="lazy" />

                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                          {/* Name label */}
                          <div className="absolute bottom-0 left-0 right-0 px-3 py-3">
                            <p className="text-white text-sm sm:text-base font-semibold font-[family-name:var(--font-sora)] text-center leading-tight drop-shadow-lg">
                              {img.name}
                            </p>
                          </div>

                          {/* Green accent bar on hover */}
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#3DD68C]"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                            style={{ transformOrigin: "left" }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
