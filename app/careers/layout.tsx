import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Sustainabyte | Join Our AI & IoT Energy Team",
  description: "Explore career opportunities at Sustainabyte Technologies. Join our team building AI and IoT solutions for energy efficiency and sustainability in Chennai, India.",
  alternates: {
    canonical: "https://sustainabyte.ai/careers",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
