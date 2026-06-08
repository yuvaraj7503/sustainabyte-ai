import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Machine Learning | Intelligent Building Automation | Sustainabyte",
  description: "Discover how Sustainabyte embeds AI at every layer — from predictive intelligence and autonomous optimization to digital twins and fault detection.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
