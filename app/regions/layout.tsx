import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Presence | Where Sustainabyte Operates",
  description: "Discover Sustainabyte's global footprint — delivering AI-powered energy and sustainability solutions across multiple regions worldwide.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
