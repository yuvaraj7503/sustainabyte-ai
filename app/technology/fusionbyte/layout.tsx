import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FusionByte | Wireless Precision Monitoring | Sustainabyte",
  description: "Achieve wireless precision monitoring with FusionByte — digital control, mobile app integration, and real-time data capture.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
