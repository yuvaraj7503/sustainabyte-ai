import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const netZeroServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Net Zero Roadmap",
  description: "Data-backed net zero roadmap development — baseline setting, science-aligned decarbonization actions, and real-time performance monitoring for carbon neutrality.",
  provider: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    url: "https://sustainabyte.ai",
  },
  serviceType: "Net Zero Consulting",
  areaServed: { "@type": "Country", name: "India" },
  url: "https://sustainabyte.ai/sustainability/net-zero-roadmap",
};

export const metadata: Metadata = {
  title: "Net Zero Roadmap India | Path to Carbon Neutrality | Sustainabyte",
  description: "Build a clear, data-backed net zero roadmap for your facility in India — baseline setting, science-aligned actions, and real-time performance monitoring for carbon neutrality.",
  alternates: {
    canonical: "https://sustainabyte.ai/sustainability/net-zero-roadmap",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={netZeroServiceJsonLd} />
      {children}
    </>
  );
}
