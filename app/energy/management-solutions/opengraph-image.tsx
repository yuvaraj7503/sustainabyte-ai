import { generateOgImage, ogSize } from "@/lib/og-image";

export const alt = "Energy Management Solutions - ISO 50001 & M&V - Sustainabyte";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage("Energy Management Solutions", "ISO 50001 Implementation & Measurement Verification");
}
