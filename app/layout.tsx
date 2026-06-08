import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import { Toaster } from "react-hot-toast";
import JsonLd from "@/components/seo/JsonLd";

const Footer = dynamic(() => import("@/components/layout/Footer"));

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Sustainabyte Technologies | AI Energy Management India",
    template: "%s",
  },
  description:
    "AI energy management India — Sustainabyte Technologies helps industrial facilities and commercial buildings monitor, control, and decarbonize energy usage using AI and IoT. Achieve verified savings and Net Zero alignment.",
  keywords: [
    "AI energy management India",
    "energy efficiency",
    "sustainability",
    "net zero",
    "decarbonization",
    "AI",
    "IoT",
    "industrial energy",
    "commercial buildings",
    "energy management software",
    "energy audit India",
  ],
  metadataBase: new URL("https://sustainabyte.ai"),
  alternates: {
    canonical: "https://sustainabyte.ai",
  },
  openGraph: {
    title: "Sustainabyte Technologies | AI Energy Management India",
    description:
      "AI-powered energy optimization for buildings & industries. EPIC Facilities. Verified Savings. Net Zero Aligned.",
    type: "website",
    siteName: "Sustainabyte Technologies",
    url: "https://sustainabyte.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainabyte Technologies | AI Energy Management India",
    description: "AI-powered energy optimization for buildings & industries.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png?v=1",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sustainabyte Technologies",
  url: "https://sustainabyte.ai",
  logo: "https://sustainabyte.ai/Company-Logo-3-1.webp",
  description: "AI-powered energy optimization and sustainability solutions for buildings and industries in India.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sustainabyte Technologies",
  url: "https://sustainabyte.ai",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://sustainabyte.ai/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Toaster position="top-right" reverseOrder={false} />
        <ScrollProgressBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
