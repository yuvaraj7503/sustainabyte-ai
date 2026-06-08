import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sustainabyte Technologies | Energy & Sustainability Company India",
  description: "Sustainabyte Technologies makes sustainability measurable and manageable through AI-powered energy optimization, IoT monitoring, and verified savings for buildings and industries.",
  alternates: {
    canonical: "https://sustainabyte.ai/company",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
