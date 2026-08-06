import type { MetadataRoute } from "next";
import { examples } from "./_lib/examples";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://webmasterdeniz.az";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/numuneler`, changeFrequency: "monthly", priority: 0.9 },
  ];

  const demoRoutes: MetadataRoute.Sitemap = examples.map((ex) => ({
    url: `${SITE_URL}/demo/${ex.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...demoRoutes];
}
