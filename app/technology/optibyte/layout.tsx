import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OptiByte | AI Energy Intelligence Platform | Sustainabyte",
  description: "Unlock system-level energy insights with OptiByte — AI-powered analytics, equipment-specific diagnostics, and solution architecture for facilities.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
