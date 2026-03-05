import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // Правила для всех роботов (Google, Yandex, и т.д.)
      allow: "/", // Разрешить индексацию всего сайта
      disallow: [
        "/api/", // Скрываем технические API маршруты
        "/_next/", // Скрываем служебные файлы Next.js
        "/admin/", // Если появится админка — лучше скрыть её заранее
      ],
    },
    // Указываем путь к карте сайта (динамически)
    sitemap: "https://sev-rerikh.ru/sitemap.xml",
  };
}
