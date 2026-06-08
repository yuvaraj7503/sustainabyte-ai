import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carbon Accounting | GHG Reporting & CDP Compliance India | Sustainabyte",
  description: "Simplify carbon accounting with Sustainabyte — GHG emissions tracking, ISO 14064 compliance, and CDP reporting made measurable and actionable for Indian industries.",
  alternates: {
    canonical: "https://sustainabyte.ai/sustainability/carbon-accounting",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
