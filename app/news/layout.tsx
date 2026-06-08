import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Sustainabyte News & Updates",
  description: "Latest news, awards, and industry updates from Sustainabyte Technologies.",
  url: "https://sustainabyte.ai/news",
  publisher: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    url: "https://sustainabyte.ai",
  },
};

export const metadata: Metadata = {
  title: "News & Updates | Sustainabyte Technologies",
  description: "Latest news, awards, and industry updates from Sustainabyte Technologies — AI-driven energy management, sustainability, and smart building innovations.",
  alternates: {
    canonical: "https://sustainabyte.ai/news",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={blogJsonLd} />
      {children}
    </>
  );
}
