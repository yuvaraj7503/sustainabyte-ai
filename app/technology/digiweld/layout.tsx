import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DigiWeld | Digital Welding Operations Intelligence | Sustainabyte",
  description: "Transform welding operations with DigiWeld — real-time monitoring, digital dashboards, and comprehensive operations intelligence.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
