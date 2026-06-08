import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InByte IR Blaster | Smart AC Infrastructure Control | Sustainabyte",
  description: "Automate your AC infrastructure with InByte IR Blaster — smart control, energy optimization, and remote management for HVAC systems.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
