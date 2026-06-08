import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Sustainabyte Technologies",
  description: "Get in touch with Sustainabyte Technologies. Reach our global offices for energy audits, sustainability consulting, and AI-powered optimization solutions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
