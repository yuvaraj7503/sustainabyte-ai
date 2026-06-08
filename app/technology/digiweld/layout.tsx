import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DigiWeld | Digital Welding Operations Intelligence Platform | Sustainabyte",
  description: "Transform welding operations with DigiWeld — real-time monitoring, digital dashboards, comprehensive operations intelligence, and production analytics.",
  alternates: {
    canonical: "https://sustainabyte.ai/technology/digiweld",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
