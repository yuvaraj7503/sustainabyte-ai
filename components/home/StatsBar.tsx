"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Settings, Leaf } from "lucide-react";

function useCountUp(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(end);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startCounting || hasStarted.current) return;
    hasStarted.current = true;

    setCount(0);
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [startCounting, end, duration]);

  return count;
}

const stats = [
  {
    icon: Users,
    value: 75,
    suffix: "+",
    label: "Clients",
  },
  {
    icon: Settings,
    value: 25,
    suffix: "+",
    label: "Equipment Categories",
  },
  {
    icon: Leaf,
    value: null,
    display: "7-30%",
    label: "Savings",
  },
];

function AnimatedStat({ stat, inView }: { stat: typeof stats[number]; inView: boolean }) {
  const count = useCountUp(stat.value ?? 0, 1800, inView);

  return (
    <div>
      <div className="font-[family-name:var(--font-sora)] text-2xl sm:text-3xl font-bold text-[#193F70]">
        {stat.value !== null ? `${count}${stat.suffix}` : stat.display}
      </div>
      <div className="text-gray-500 text-sm font-medium">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative z-20 bg-[#0B1E3D]">
      {/* Dark blue background band covering the top half of this section */}
      <div className="absolute top-0 left-0 right-0 h-[60%] bg-[#0D1B3E]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-12 pb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-xl shadow-black/5 py-8 sm:py-10 px-4 sm:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center justify-center gap-3 sm:gap-4 py-3 sm:py-4 md:py-0"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#3DD68C] flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#3DD68C]" />
                </div>
                <AnimatedStat stat={stat} inView={isInView} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
