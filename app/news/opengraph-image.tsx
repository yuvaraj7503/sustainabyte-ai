import { generateOgImage, ogSize } from "@/lib/og-image";

export const alt = "News & Updates - Sustainabyte Technologies";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage("News & Updates", "Latest from Sustainabyte Technologies");
}
