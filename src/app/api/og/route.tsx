import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams, origin } = new URL(request.url);
    const title = searchParams.get("title") || "Научный лекторий";

    const fontResponse = await fetch(new URL("/fonts/font.ttf", origin));
    if (!fontResponse.ok) throw new Error("Font not found");
    const fontData = await fontResponse.arrayBuffer();

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Текст слева
          justifyContent: "center",
          // Глубокий, насыщенный синий градиент
          backgroundColor: "#020617", // Почти черный в основе
          backgroundImage:
            "radial-gradient(circle at 10% 10%, #1e40af 0%, transparent 40%), radial-gradient(circle at 90% 90%, #1d4ed8 0%, transparent 40%), radial-gradient(circle at 50% 50%, #111827 0%, transparent 80%)",
          padding: "100px 140px", // Чуть больше отступ слева
          fontFamily: "Playfair",
        }}
      >
        {/* Акцентная синяя линия слева (сделали чуть ярче) */}
        <div
          style={{
            position: "absolute",
            left: "90px",
            top: "120px",
            bottom: "120px",
            width: "3px",
            background:
              "linear-gradient(to bottom, transparent, #60a5fa, transparent)",
            opacity: 0.8,
          }}
        />

        {/* Основной заголовок — крупный, белый, чистый */}
        <div
          style={{
            fontSize: 88, // Немного увеличили
            textAlign: "left",
            lineHeight: 1.1,
            fontWeight: 700,
            color: "white",
            maxWidth: "950px",
            display: "flex",
            flexDirection: "column",
            // Легкое свечение текста для премиальности
            textShadow: "0 5px 15px rgba(0,0,0,0.3)",
          }}
        >
          {title}
        </div>

        {/* Нижний колонтитул (аккуратный) */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            right: "140px",
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#94a3b8", // Спокойный серый
            display: "flex",
            alignItems: "center",
            fontWeight: 500,
          }}
        >
          {/* Маленький синий маркер */}
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#60a5fa",
              marginRight: "15px",
              boxShadow: "0 0 10px #60a5fa",
            }}
          />
          СГФР | УРИЭЛЬ
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
