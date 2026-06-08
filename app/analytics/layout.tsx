import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Analytics | Utility, BMS & Solar Analytics | Sustainabyte",
  description: "Unlock data-driven energy performance with Sustainabyte's utility, BMS, and solar analytics. Identify inefficiencies, optimize operations, and reduce costs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
