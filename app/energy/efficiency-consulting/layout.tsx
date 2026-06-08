import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Efficiency Consulting | Audits & Optimization | Sustainabyte",
  description: "Expert energy efficiency consulting including ASHRAE audits, chiller performance analysis, power quality assessments, and equipment optimization.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
