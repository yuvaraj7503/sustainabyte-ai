import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const managementServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Energy Management Solutions",
  description: "ISO 50001 energy management system implementation, ISO 50002 audits, IPMVP measurement & verification, and digital energy management platforms.",
  provider: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    url: "https://sustainabyte.ai",
  },
  serviceType: "Energy Management Software",
  areaServed: { "@type": "Country", name: "India" },
  url: "https://sustainabyte.ai/energy/management-solutions",
};

export const metadata: Metadata = {
  title: "Energy Management Software India | ISO 50001 & M&V Solutions | Sustainabyte",
  description: "Energy management software and consulting in India — ISO 50001 implementation, ISO 50002 audits, IPMVP measurement & verification, and digital energy management platforms.",
  alternates: {
    canonical: "https://sustainabyte.ai/energy/management-solutions",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={managementServiceJsonLd} />
      {children}
    </>
  );
}
