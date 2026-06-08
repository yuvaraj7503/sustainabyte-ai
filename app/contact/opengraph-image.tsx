import { generateOgImage, ogSize } from "@/lib/og-image";

export const alt = "Contact Sustainabyte Technologies - Energy Consulting India";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage("Contact Us", "Get Energy Audit & Sustainability Consultation");
}
