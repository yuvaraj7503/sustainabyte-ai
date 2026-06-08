"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceLink {
  title: string;
  href: string;
  description: string;
}

interface RelatedServicesProps {
  title?: string;
  services: ServiceLink[];
}

export default function RelatedServices({ title = "Explore Related Services", services }: RelatedServicesProps) {
  return (
    <section className="py-20 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-[#3DD68C]/10 hover:border-[#3DD68C]/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-[#3DD68C] transition-colors mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-[#3DD68C] text-sm font-semibold">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
