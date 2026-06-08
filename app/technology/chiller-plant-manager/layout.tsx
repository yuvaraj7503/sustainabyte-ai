import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chiller Plant Manager & Optimizer | AI-Driven HVAC Optimization | Sustainabyte",
  description: "Optimize your chiller plant operations with AI-driven plant loop optimization, real-time performance metrics tracking, and Niagara integration from Sustainabyte.",
  alternates: {
    canonical: "https://sustainabyte.ai/technology/chiller-plant-manager",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
