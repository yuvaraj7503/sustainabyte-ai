import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Management Solutions | Optimize Usage & Reduce Waste | Sustainabyte",
  description: "Optimize water usage, eliminate waste, and ensure sustainability with Sustainabyte's water management audits and conservation strategies for industries and buildings.",
  alternates: {
    canonical: "https://sustainabyte.ai/sustainability/water-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
