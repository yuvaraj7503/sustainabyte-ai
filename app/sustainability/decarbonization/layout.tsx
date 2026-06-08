import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decarbonization | Cut Emissions & Save Energy | Sustainabyte",
  description: "Target the right assets, measure results, and achieve immediate emission reductions with Sustainabyte's data-driven decarbonization services.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
