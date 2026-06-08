import type { MetadataRoute } from "next";

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

interface RouteConfig {
  route: string;
  priority: number;
  changeFrequency: ChangeFreq;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sustainabyte.ai";

  const routes: RouteConfig[] = [
    { route: "", priority: 1.0, changeFrequency: "weekly" },
    { route: "/analytics", priority: 0.8, changeFrequency: "monthly" },
    { route: "/careers", priority: 0.5, changeFrequency: "monthly" },
    { route: "/company", priority: 0.7, changeFrequency: "monthly" },
    { route: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { route: "/energy", priority: 0.9, changeFrequency: "monthly" },
    { route: "/energy/analytics", priority: 0.9, changeFrequency: "monthly" },
    { route: "/energy/efficiency-consulting", priority: 0.9, changeFrequency: "monthly" },
    { route: "/energy/management-solutions", priority: 0.9, changeFrequency: "monthly" },
    { route: "/news", priority: 0.6, changeFrequency: "weekly" },
    { route: "/people", priority: 0.6, changeFrequency: "monthly" },
    { route: "/regions", priority: 0.7, changeFrequency: "monthly" },
    { route: "/resources", priority: 0.7, changeFrequency: "monthly" },
    { route: "/sustainability", priority: 0.9, changeFrequency: "monthly" },
    { route: "/sustainability/carbon-accounting", priority: 0.9, changeFrequency: "monthly" },
    { route: "/sustainability/decarbonization", priority: 0.9, changeFrequency: "monthly" },
    { route: "/sustainability/insights", priority: 0.7, changeFrequency: "weekly" },
    { route: "/sustainability/net-zero-roadmap", priority: 0.9, changeFrequency: "monthly" },
    { route: "/sustainability/water-management", priority: 0.9, changeFrequency: "monthly" },
    { route: "/technology", priority: 0.8, changeFrequency: "monthly" },
    { route: "/technology/ai", priority: 0.8, changeFrequency: "monthly" },
    { route: "/technology/chiller-plant-manager", priority: 0.8, changeFrequency: "monthly" },
    { route: "/technology/digiweld", priority: 0.8, changeFrequency: "monthly" },
    { route: "/technology/fixbyte", priority: 0.8, changeFrequency: "monthly" },
    { route: "/technology/fusionbyte", priority: 0.8, changeFrequency: "monthly" },
    { route: "/technology/inbyte", priority: 0.8, changeFrequency: "monthly" },
    { route: "/technology/iot-solutions", priority: 0.8, changeFrequency: "monthly" },
    { route: "/technology/optibyte", priority: 0.8, changeFrequency: "monthly" },
  ];

  return routes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
