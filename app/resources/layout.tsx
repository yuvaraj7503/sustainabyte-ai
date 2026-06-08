import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Insights | Energy Efficiency Whitepapers | Sustainabyte",
  description: "Access whitepapers, case studies, and industry insights on energy efficiency, sustainability, AI-powered building optimization, and decarbonization strategies.",
  alternates: {
    canonical: "https://sustainabyte.ai/resources",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
