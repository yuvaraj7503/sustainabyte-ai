import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT Solutions | Optiedge IoT Platform | Sustainabyte",
  description: "Connect your facility with Sustainabyte's Optiedge IoT platform — six smart solutions built for industrial-scale monitoring and optimization.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
