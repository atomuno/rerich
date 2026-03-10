import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  // 1. Укажите здесь ваш основной домен без http/https
  const myDomain = "sevcrf.ru";

  // 2. Список разрешенных хостов
  const allowedHosts = [
    myDomain,
    "www." + myDomain,
    "localhost", // упростил для локалки
    "vercel.app", // для превью-деплоев
    "next-preview", // на всякий случай для системных нужд
  ];
  // Проверяем: если хост есть, но его нет в списке разрешенных
  const isAllowed = allowedHosts.some((allowed) => host?.includes(allowed));

  if (host && !isAllowed) {
    // Вместо простого текста отдаем 403 и жесткое сообщение
    // Это заставит поисковых роботов выкинуть чужой домен из индекса
    return new NextResponse(
      `<html>
        <head><meta name="robots" content="noindex, nofollow" /><title>403 Forbidden</title></head>
        <body style="font-family: sans-serif; text-align: center; pt-20">
          <h1>Ошибка доступа</h1>
          <p>Этот ресурс является несанкционированным зеркалом.</p>
          <p>Официальный сайт проекта: <a href="https://${myDomain}">${myDomain}</a></p>
        </body>
      </html>`,
      {
        status: 403,
        headers: { "content-type": "text/html; charset=utf-8" },
      },
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Исключаем системные пути, чтобы не сломать шрифты и картинки внутри самого сайта
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
