import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability Solutions | Decarbonization & Net Zero India | Sustainabyte",
  description: "Drive sustainable operations with Sustainabyte's carbon accounting, decarbonization services, net zero roadmaps, and water management solutions for industries in India.",
  alternates: {
    canonical: "https://sustainabyte.ai/sustainability",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
