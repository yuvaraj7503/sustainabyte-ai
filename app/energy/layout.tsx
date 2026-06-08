import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Solutions | End-to-End Energy Optimization | Sustainabyte",
  description: "Comprehensive energy optimization solutions tailored to your industry — from efficiency consulting and audits to energy management and analytics.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
