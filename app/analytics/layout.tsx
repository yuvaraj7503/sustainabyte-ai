import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Analytics Platform | Utility, BMS & Solar Data Insights | Sustainabyte",
  description: "Sustainabyte's energy analytics platform delivers utility, BMS, and solar data insights. Identify consumption patterns, detect faults, and reduce energy costs with data-driven analytics.",
  alternates: {
    canonical: "https://sustainabyte.ai/analytics",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
