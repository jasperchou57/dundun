import type { MetadataRoute } from "next";
import { tools } from "@/lib/tools";
import { topics } from "@/lib/topics";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const now = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/tools`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...tools.map((t) => ({
      url: `${siteUrl}/tools/${t.key}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    {
      url: `${siteUrl}/topics`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.6,
    },
    ...topics.map((t) => ({
      url: `${siteUrl}/topics/${t.key}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
    ...topics.flatMap((t) =>
      t.pages.map((p) => ({
        url: `${siteUrl}/topics/${t.key}/${p.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.4,
      }))
    ),
  ];
}
