import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sustainabyte Technologies",
  description: "Learn about Sustainabyte Technologies — our mission to make sustainability measurable and manageable through energy, sustainability, and technology solutions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
