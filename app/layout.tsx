import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import { Toaster } from "react-hot-toast";

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
  title: "Sustainabyte Technologies | EPIC Energy Efficiency & Net Zero Solutions",
  description:
    "Sustainabyte Technologies helps industrial facilities and commercial buildings monitor, control, and decarbonize energy usage using AI and IoT. Achieve verified savings and Net Zero alignment.",
  keywords: [
    "energy efficiency",
    "sustainability",
    "net zero",
    "decarbonization",
    "AI",
    "IoT",
    "industrial energy",
    "commercial buildings",
  ],
  openGraph: {
    title: "Sustainabyte Technologies",
    description:
      "EPIC Facilities. Verified Savings. Net Zero Aligned.",
    type: "website",
  },
  icons: {
    icon: "/icon.png?v=1",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Toaster position="top-right" reverseOrder={false} />
        <ScrollProgressBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
