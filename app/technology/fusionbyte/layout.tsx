import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FusionByte | Wireless Precision Monitoring for Industries | Sustainabyte",
  description: "Achieve wireless precision monitoring with FusionByte — digital control, mobile app integration, and real-time industrial data capture from Sustainabyte.",
  alternates: {
    canonical: "https://sustainabyte.ai/technology/fusionbyte",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
