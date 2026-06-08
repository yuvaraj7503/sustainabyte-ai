import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Solutions | End-to-End Energy Optimization India | Sustainabyte",
  description: "Comprehensive energy optimization solutions for industries and buildings in India — efficiency consulting, energy management, analytics, and AI-powered monitoring.",
  alternates: {
    canonical: "https://sustainabyte.ai/energy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
