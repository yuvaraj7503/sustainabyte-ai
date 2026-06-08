import { generateOgImage, ogSize } from "@/lib/og-image";

export const alt = "Energy Analytics Platform - Utility BMS Solar - Sustainabyte";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage("Energy Analytics Platform", "Utility, BMS & Solar Data Analytics");
}
