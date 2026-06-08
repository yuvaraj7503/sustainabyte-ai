import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology | AI-Powered Energy Products & IoT Solutions | Sustainabyte",
  description: "Explore Sustainabyte's technology suite — OptiByte, FixByte, FusionByte, InByte, DigiWeld, and IoT solutions powered by advanced AI for energy optimization.",
  alternates: {
    canonical: "https://sustainabyte.ai/technology",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
