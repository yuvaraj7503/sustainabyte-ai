import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Management Solutions | ISO 50001 & M&V | Sustainabyte",
  description: "Implement ISO 50001 energy management systems, ISO 50002 audits, IPMVP measurement & verification, and digital energy platforms with Sustainabyte.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
