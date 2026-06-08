import { generateOgImage, ogSize } from "@/lib/og-image";

export const alt = "Net Zero Roadmap India - Path to Carbon Neutrality - Sustainabyte";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage("Net Zero Roadmap", "Data-Backed Path to Carbon Neutrality in India");
}
