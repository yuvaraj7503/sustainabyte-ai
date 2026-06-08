import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sustainabyte Technologies",
  description: "AI-powered energy optimization and sustainability solutions for buildings and industries.",
  url: "https://sustainabyte.ai",
  telephone: "+91-XXXXXXXXXX",
  email: "info@sustainabyte.ai",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Madambakkam",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600126",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.87,
    longitude: 80.17,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [],
};

export const metadata: Metadata = {
  title: "Contact Sustainabyte Technologies | Get Energy Audit & Consultation",
  description: "Contact Sustainabyte Technologies for energy audits, AI-powered optimization, and sustainability consulting. Offices in Chennai, India with global presence.",
  alternates: {
    canonical: "https://sustainabyte.ai/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={contactJsonLd} />
      {children}
    </>
  );
}
