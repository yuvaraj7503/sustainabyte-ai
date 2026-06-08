import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Management Solutions India & Global | Sustainabyte Regions",
  description: "Sustainabyte delivers energy management solutions across India and globally — AI-powered energy optimization and sustainability services expanding across borders.",
  alternates: {
    canonical: "https://sustainabyte.ai/regions",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
