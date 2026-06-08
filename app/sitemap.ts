import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sustainabyte.ai";

  const routes = [
    "",
    "/analytics",
    "/careers",
    "/company",
    "/contact",
    "/energy",
    "/energy/analytics",
    "/energy/efficiency-consulting",
    "/energy/management-solutions",
    "/news",
    "/people",
    "/regions",
    "/resources",
    "/sustainability",
    "/sustainability/carbon-accounting",
    "/sustainability/decarbonization",
    "/sustainability/insights",
    "/sustainability/net-zero-roadmap",
    "/sustainability/water-management",
    "/technology",
    "/technology/ai",
    "/technology/chiller-plant-manager",
    "/technology/digiweld",
    "/technology/fixbyte",
    "/technology/fusionbyte",
    "/technology/inbyte",
    "/technology/iot-solutions",
    "/technology/optibyte",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
