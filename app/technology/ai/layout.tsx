import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const aiServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI & IoT Energy Optimization",
  description: "AI-powered energy optimization using machine learning, digital twins, fault detection, and autonomous control for smart buildings and industries.",
  provider: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    url: "https://sustainabyte.ai",
  },
  serviceType: "AI Energy Optimization",
  areaServed: { "@type": "Country", name: "India" },
  url: "https://sustainabyte.ai/technology/ai",
};

export const metadata: Metadata = {
  title: "AI IoT Energy Optimization | Machine Learning for Smart Buildings | Sustainabyte",
  description: "AI IoT energy optimization by Sustainabyte — predictive intelligence, autonomous optimization, digital twins, and fault detection for smart energy management in buildings.",
  alternates: {
    canonical: "https://sustainabyte.ai/technology/ai",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={aiServiceJsonLd} />
      {children}
    </>
  );
}
