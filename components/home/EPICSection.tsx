"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const epicPills = [
  { label: "Efficient", color: "from-[#193F70] to-[#236B8E]" },
  { label: "Predictive", color: "from-[#1a7a60] to-[#279178]" },
  { label: "Intelligent", color: "from-[#248a58] to-[#29A36A]" },
  { label: "Controlled", color: "from-[#228a6a] to-[#27A37B]" },
];

const commitmentCards = [
  {
    title: "Net Zero Targets",
    description:
      "Aligning your operations with global net zero commitments through measurable goals and verified pathways.",
    image: "/Net-zero targets.webp",
    accent: "#04572fff",
  },
  {
    title: "Decarbonization",
    description:
      "Systematic reduction of carbon emissions through intelligent energy management and optimization.",
    image: "/What We Do all img/co2.webp",
    accent: "#083063ff",
  },
];

function CommitmentRow({
  card,
  index,
}: {
  card: (typeof commitmentCards)[number];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      key={card.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-10 md:gap-16 mb-20 md:mb-32`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 relative">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative rounded-[2rem] overflow-hidden"
          style={{
            boxShadow: "0 20px 40px rgba(25,63,112,0.12)",
          }}
        >
          <div className="relative h-[300px] sm:h-[400px] w-full bg-white flex items-center justify-center p-6">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-left px-2 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* ESG badge */}

          <h3 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {card.title}
          </h3>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 font-[family-name:var(--font-dm-sans)]">
            {card.description}
          </p>

        </motion.div>
      </div>
    </motion.div>
  );
}
const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(36)].map((_, i) => {
        const size = 3 + (i % 4) * 2;
        const left = (i * 13.7) % 100;
        const startTop = 100 + (i % 5) * 10;
        const duration = 5 + (i % 6) * 1.5;
        const delay = (i % 8) * 0.6;
        const yDrift = -250 - (i % 5) * 60;
        const xDrift = (i % 2 === 0 ? 1 : -1) * (15 + (i % 4) * 15);
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${startTop}%`,
              // 75% green dots, 25% blue dots
              backgroundColor: i % 4 !== 0 ? '#016233ff' : '#052f67ff',
            }}
            animate={{
              y: yDrift,
              x: xDrift,
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

export default function EPICSection() {
  return (
    <section id="howitworks" className="py-20 sm:py-24 bg-[#0D1B3E] relative z-10 overflow-hidden">
      <Particles />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-white italic mb-10 sm:mb-16 font-[family-name:var(--font-dm-sans)]"
        >
          your facility deserves to be{" "}
          <motion.span
            initial={{ scale: 0, rotate: -20, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
            className="inline-block bg-gradient-to-r from-[#3DD68C] to-[#27A37B] bg-clip-text text-transparent font-bold not-italic text-2xl sm:text-3xl md:text-5xl font-[family-name:var(--font-sora)] relative"
          >
            EPIC
            <motion.span
              className="absolute -inset-2 bg-[#3DD68C]/20 blur-xl rounded-full -z-10"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.span>
        </motion.p>

        {/* EPIC Pills */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-10 mb-12 sm:mb-20">
          {epicPills.map((pill, i) => (
            <motion.div
              key={pill.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.15, ease: "easeOut" }}
              className="relative rounded group"
            >
              {/* Green pulse ring after load */}
              <motion.div
                className="absolute inset-0 rounded ring-2 ring-[#3DD68C] pointer-events-none"
                initial={{ opacity: 0, scale: 1 }}
                whileInView={{ opacity: [0, 0.6, 0], scale: [1, 1.15, 1.25] }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 + i * 0.15, ease: "easeOut" }}
              />

              <motion.div
                initial="initial"
                animate="animate"
                whileHover="hover"
                variants={{
                  initial: { scale: 1, y: 0 },
                  animate: {
                    y: [0, -6, 0],
                    transition: {
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  },
                  hover: { scale: 1.08, y: -10, transition: { type: "spring", stiffness: 400, damping: 15 } }
                }}
                className={`relative overflow-hidden px-8 sm:px-12 py-4 sm:py-5 rounded-xl text-white font-[family-name:var(--font-sora)] font-bold text-sm sm:text-lg tracking-widest cursor-default shadow-lg bg-gradient-to-br ${pill.color} border border-white/10`}
              >
                {/* Deepen on hover */}
                <motion.div
                  variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-black/15 pointer-events-none"
                />

                {/* Shimmer sweep on hover */}
                <motion.div
                  variants={{
                    initial: { left: "-100%" },
                    hover: { left: "200%" }
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] pointer-events-none"
                />

                <span className="relative z-10">{pill.label}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-white text-xl sm:text-2xl font-medium mb-14 sm:mb-20"
        >
          delivering higher performance and driving <span className="text-[#3DD68C] font-bold">sustainable</span> growth.
        </motion.p>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-sora)] text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center max-w-4xl mx-auto mb-14 sm:mb-20 px-4">
            Our Commitment to a <span className="text-[#3DD68C]">Sustainable</span> Future
          </h2>

          <div className="max-w-6xl mx-auto px-1 sm:px-1 pb-1">
            {commitmentCards.map((card, i) => (
              <CommitmentRow key={card.title} card={card} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
