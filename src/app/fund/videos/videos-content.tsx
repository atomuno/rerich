import { fundVideos } from "@/data/fundVideos";

function toRutubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const parts = parsed.pathname.split("/").filter(Boolean);
    const videoId = parts[parts.length - 1];
    const token = parsed.searchParams.get("p");

    if (!videoId) return null;
    return token
      ? `https://rutube.ru/play/embed/${videoId}?p=${token}`
      : `https://rutube.ru/play/embed/${videoId}`;
  } catch {
    return null;
  }
}

function extractYear(description: string): string {
  const match = description.match(/\b(\d{4})\b/u);
  return match ? match[1] : "";
}

export default function VideosContent() {
  return (
    <div className="min-h-screen bg-white text-slate-900 px-4 md:px-6 py-12">
      <header className="max-w-5xl mx-auto pt-16 pb-14 font-serif text-center">
        <h1 className="text-4xl md:text-5xl font-bold uppercase mb-6">
          Видеоролики
        </h1>
        <p className="text-slate-700 text-lg leading-relaxed max-w-3xl mx-auto">
          Подборка видеороликов из архива фонда. Для каждого материала доступен
          предпросмотр и переход на RuTube.
        </p>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {fundVideos.map((video) => {
          const embedUrl = toRutubeEmbedUrl(video.rutubeUrl);
          if (!embedUrl) return null;
          const year = extractYear(video.description);

          return (
            <a
              key={video.rutubeUrl}
              href={video.rutubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-100 shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow duration-300"
              aria-label={video.title}
            >
              <article className="h-full font-sans">
                <div className="relative w-full aspect-video bg-slate-100">
                  <iframe
                    src={embedUrl}
                    title={video.title}
                    loading="lazy"
                    allow="clipboard-write; autoplay"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full pointer-events-none"
                  />
                </div>
                <div className="px-4 py-3 border-t border-slate-100">
                  <p className="text-sm md:text-[15px] text-slate-800 leading-snug tracking-tight">
                    {video.title}
                    {year ? (
                      <span className="text-slate-400 font-medium"> ({year})</span>
                    ) : null}
                  </p>
                </div>
              </article>
            </a>
          );
        })}
      </main>
    </div>
  );
}
