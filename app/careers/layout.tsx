import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join the Sustainabyte Team",
  description: "Explore career opportunities at Sustainabyte Technologies. Join our team building AI and IoT solutions for energy efficiency and sustainability.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
