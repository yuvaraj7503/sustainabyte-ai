import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const efficiencyServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Energy Efficiency Consulting",
  description: "Expert energy efficiency consulting including ASHRAE audits, chiller performance analysis, power quality assessments, and equipment optimization in India.",
  provider: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    url: "https://sustainabyte.ai",
  },
  serviceType: "Energy Efficiency Consulting",
  areaServed: { "@type": "Country", name: "India" },
  url: "https://sustainabyte.ai/energy/efficiency-consulting",
};

export const metadata: Metadata = {
  title: "Energy Efficiency Consulting India | ASHRAE Audits & Optimization | Sustainabyte",
  description: "Expert energy efficiency consulting services in India including ASHRAE Level 1-2 audits, chiller performance analysis, power quality assessments, and equipment optimization.",
  alternates: {
    canonical: "https://sustainabyte.ai/energy/efficiency-consulting",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={efficiencyServiceJsonLd} />
      {children}
    </>
  );
}
