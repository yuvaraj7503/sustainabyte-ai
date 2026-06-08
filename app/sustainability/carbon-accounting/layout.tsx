import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carbon Accounting | GHG Reporting & CDP | Sustainabyte",
  description: "Simplify carbon accounting with Sustainabyte — GHG emissions tracking, ISO 14064 compliance, and CDP reporting made measurable and actionable.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
