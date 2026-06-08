import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chiller Plant Manager & Optimizer | Sustainabyte",
  description: "Optimize your chiller plant operations with AI-driven plant loop optimization, performance metrics tracking, and Niagara integration.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
