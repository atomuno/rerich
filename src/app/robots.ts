import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"], // Закрываем технические пути
    },
    sitemap: "https://sevcrf.ru/sitemap.xml",
  };
}
