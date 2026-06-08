import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decarbonization Services | Cut Emissions & Save Energy | Sustainabyte",
  description: "Target the right assets, measure results, and achieve immediate emission reductions with Sustainabyte's data-driven decarbonization services for buildings and industries.",
  alternates: {
    canonical: "https://sustainabyte.ai/sustainability/decarbonization",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
