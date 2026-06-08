import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Analytics | Real-Time Energy Data Insights | Sustainabyte",
  description: "Leverage real-time energy analytics for utility, BMS, and solar data. Identify consumption patterns, detect faults, and unlock data-driven energy savings.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
