import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Management | Optimize Usage & Reduce Waste | Sustainabyte",
  description: "Optimize water usage, eliminate waste, and ensure sustainability with Sustainabyte's water management audits and conservation strategies.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
