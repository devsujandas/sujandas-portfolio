import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sujandas.info"

  // Static pages
  const staticPages = ["", "/blog", "/project", "/certificate"]

  // Blog posts
  const blogPosts = [
    "python-automation",
    "data-science-roadmap",
    "why-fastapi",
    "building-ai-tools",
    "portfolio-nextjs",
    "clean-code-tips",
  ]

  // Projects
  const projects = [
    "portfolio-site",
    "ecommerce-dashboard",
    "data-cleaning-app",
    "stock-forecast",
    "weather-api",
    "resume-ai-bot",
  ]

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page === "" ? 1 : 0.8,
  }))

  const blogUrls = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  const projectUrls = projects.map((slug) => ({
    url: `${baseUrl}/project/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticUrls, ...blogUrls, ...projectUrls]
}
