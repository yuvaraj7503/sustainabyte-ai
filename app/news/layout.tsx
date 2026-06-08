import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Sustainabyte Technologies",
  description: "Stay up to date with the latest news, awards, and industry updates from Sustainabyte Technologies.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
