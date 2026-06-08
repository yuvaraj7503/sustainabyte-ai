import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Analytics | Real-Time BMS & Utility Data Insights | Sustainabyte",
  description: "Real-time energy analytics for utility, BMS, and solar data. Identify consumption patterns, detect equipment faults, and unlock data-driven energy savings across your facility.",
  alternates: {
    canonical: "https://sustainabyte.ai/energy/analytics",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
