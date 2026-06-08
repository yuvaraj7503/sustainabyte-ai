import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OptiByte | AI Energy Intelligence Platform for Facilities | Sustainabyte",
  description: "Unlock system-level energy insights with OptiByte — AI-powered analytics, equipment-specific diagnostics, and intelligent optimization for your entire facility portfolio.",
  alternates: {
    canonical: "https://sustainabyte.ai/technology/optibyte",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
