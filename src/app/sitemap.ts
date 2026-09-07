import type { MetadataRoute } from "next";
import { services } from "@/lib/content";

const base = "https://10thhub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/for-employers",
    "/services",
    "/how-it-works",
    "/pricing",
    "/about",
    "/case-studies",
    "/faq",
    "/hire",
    "/contact",
    "/resources",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes];
}
