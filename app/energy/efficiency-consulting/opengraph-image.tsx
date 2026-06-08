import { generateOgImage, ogSize } from "@/lib/og-image";

export const alt = "Energy Efficiency Consulting Services India - Sustainabyte";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage("Energy Efficiency Consulting", "ASHRAE Audits & Equipment Optimization in India");
}
