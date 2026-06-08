import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FixByte | Predictive Maintenance & Asset Management Platform | Sustainabyte",
  description: "Monitor and manage facility maintenance with FixByte — predictive analytics, automated scoring, comprehensive dashboards, and mobile-first asset management.",
  alternates: {
    canonical: "https://sustainabyte.ai/technology/fixbyte",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
