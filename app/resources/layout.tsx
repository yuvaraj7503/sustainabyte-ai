import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Insights | Sustainabyte Technologies",
  description: "Access whitepapers, case studies, blog articles, and industry insights on energy efficiency, sustainability, and AI-powered building optimization.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
