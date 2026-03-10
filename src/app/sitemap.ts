import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sevcrf.ru";

  // Полный список путей на основе вашей структуры
  const paths = [
    "", // Главная
    "/fund", // Секция Фонда
    "/fund/about", // О Фонде
    "/fund/science", // Наука (общий раздел)
    "/fund/science/conferences", // Конференции
    "/fund/science/lectures", // Лекции (самое важное!)
    "/uriel", // Секция Uriel
    "/uriel/about", // О Uriel
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path.includes("lectures") ? 0.9 : 0.7,
  }));
}
