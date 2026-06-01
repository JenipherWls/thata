import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/lib/site";

const staticRoutes = [
  "/",
  "/quem-sou",
  "/publicidade-marketing",
  "/fotografia",
  "/videomaker",
  "/influencer-parcerias",
  "/atriz-modelo",
  "/blog",
  "/trabalhe-comigo",
  "/contato",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  })) satisfies MetadataRoute.Sitemap;

  const blogEntries = blogPosts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, siteConfig.url).toString(),
    lastModified: post.date,
    changeFrequency: "yearly",
    priority: 0.5,
  })) satisfies MetadataRoute.Sitemap;

  return [...staticEntries, ...blogEntries];
}
