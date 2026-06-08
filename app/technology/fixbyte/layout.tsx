import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FixByte | Predictive Maintenance & Asset Management | Sustainabyte",
  description: "Monitor and manage facility maintenance with FixByte — predictive analytics, automated scoring, and comprehensive dashboard views.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
