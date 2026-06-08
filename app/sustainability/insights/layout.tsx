import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability Insights | Articles & Research | Sustainabyte",
  description: "Explore sustainability insights, research articles, and expert perspectives on built environment optimization and carbon reduction.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
