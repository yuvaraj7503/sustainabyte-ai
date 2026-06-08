import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Meet the People Behind Sustainabyte",
  description: "Meet the leadership and team driving innovation at Sustainabyte Technologies — engineers, AI specialists, and sustainability experts.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
