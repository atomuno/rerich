import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams, origin } = new URL(request.url);
    const title = searchParams.get("title") || "Научный лекторий СГФР";

    // Загружаем шрифт (убедись, что это Playfair Display Bold)
    const fontResponse = await fetch(new URL("/fonts/font.ttf", origin));

    if (!fontResponse.ok) {
      throw new Error("Font file not found in public/fonts/font.ttf");
    }

    const fontData = await fontResponse.arrayBuffer();

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // Ультра-яркий и сочный градиент (Neon/Cyberpunk style)
          backgroundColor: "#030712",
          backgroundImage:
            "radial-gradient(circle at 10% 10%, #3b82f6 0%, transparent 40%), radial-gradient(circle at 90% 90%, #ec4899 0%, transparent 40%), radial-gradient(circle at 50% 50%, #8b5cf6 0%, transparent 60%)",
          color: "white",
          padding: "80px",
          // Шрифт, который мы победили
          fontFamily: "Playfair",
        }}
      >
        {/* Полупрозрачная подложка для читаемости текста (Glassmorphism) */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "60px",
            right: "60px",
            bottom: "60px",
            background: "rgba(0, 0, 0, 0.2)",
            borderRadius: "30px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        />

        {/* ТОЛЬКО заголовок. Крупный, жирный, по центру. */}
        <div
          style={{
            fontSize: 90, // Увеличили для максимального акцента
            textAlign: "center",
            lineHeight: 1.1,
            fontWeight: 700,
            maxWidth: "1000px",
            // Эффект легкого свечения текста для стиля
            textShadow:
              "0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(139, 92, 246, 0.4)",
            position: "relative", // Чтобы быть поверх подложки
          }}
        >
          {title}
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Playfair",
            data: fontData,
            style: "normal",
            weight: 700,
          },
        ],
      },
    );
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return new Response(`Error: ${msg}`, { status: 500 });
  }
}
