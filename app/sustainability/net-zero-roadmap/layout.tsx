import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Net Zero Roadmap | Plan Your Path to Carbon Neutrality | Sustainabyte",
  description: "Build a clear, data-backed path to Net Zero with Sustainabyte — baseline setting, science-aligned actions, and real-time performance monitoring.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
