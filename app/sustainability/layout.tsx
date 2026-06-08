import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability Solutions | Decarbonization & Net Zero | Sustainabyte",
  description: "Drive sustainable operations with Sustainabyte's carbon accounting, decarbonization, net zero roadmaps, and water management solutions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
