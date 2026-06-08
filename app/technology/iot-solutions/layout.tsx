import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT Solutions | Optiedge IoT Platform for Industrial Monitoring | Sustainabyte",
  description: "Connect your facility with Sustainabyte's Optiedge IoT platform — six smart solutions for water, AC, data monitoring, cooling towers, cameras, and chiller plant management.",
  alternates: {
    canonical: "https://sustainabyte.ai/technology/iot-solutions",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
