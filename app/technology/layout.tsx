import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology | AI-Powered Products & IoT Solutions | Sustainabyte",
  description: "Explore Sustainabyte's technology suite — OptiByte, FixByte, FusionByte, InByte, DigiWeld, and IoT solutions powered by advanced AI.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
