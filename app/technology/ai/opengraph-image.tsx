import { generateOgImage, ogSize } from "@/lib/og-image";

export const alt = "AI & Machine Learning for Smart Energy Management - Sustainabyte";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage("AI & Machine Learning", "Smart Energy Management for Buildings & Industries");
}
