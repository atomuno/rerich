import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MAIN_DOMAIN = "sevcrf.ru";
const ALLOWED_EXACT_HOSTNAMES = new Set([
  MAIN_DOMAIN,
  `www.${MAIN_DOMAIN}`,
  "localhost",
  "127.0.0.1",
]);

export function proxy(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();
  const isVercelPreview = hostname.endsWith(".vercel.app");
  const isAllowed = ALLOWED_EXACT_HOSTNAMES.has(hostname) || isVercelPreview;

  if (!isAllowed) {
    return new NextResponse(
      `<html>
        <head><meta name="robots" content="noindex, nofollow" /><title>403 Forbidden</title></head>
        <body style="font-family: sans-serif; text-align: center; padding-top: 5rem;">
          <h1>Ошибка доступа</h1>
          <p>Этот ресурс является несанкционированным зеркалом.</p>
          <p>Официальный сайт проекта: <a href="https://${MAIN_DOMAIN}">${MAIN_DOMAIN}</a></p>
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
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
