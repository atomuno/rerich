import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sevcrf.ru";

  const paths = [
    "",
    "/fund",
    "/fund/about",
    "/fund/books",
    "/fund/exhibitions",
    "/fund/gallery",
    "/fund/library",
    "/fund/museum",
    "/fund/science/conferences",
    "/fund/science/lectures",
    "/fund/videos",
    "/uriel",
    "/uriel/about",
    "/uriel/clubs/art",
    "/uriel/clubs/ships",
    "/uriel/diplomas",
    "/uriel/exhibitions",
    "/uriel/works/crafts",
    "/uriel/works/models",
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority:
      path === ""
        ? 1
        : path === "/fund" || path === "/uriel"
          ? 0.9
          : path.includes("science")
            ? 0.8
            : 0.7,
  }));
}
