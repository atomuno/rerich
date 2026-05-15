import { getPayload } from "payload";
import config from "@payload-config";

type MediaLike = { url?: string | null } | number | string | null | undefined;

/** URL файла из поля upload (populate depth ≥ 1). */
export function mediaUrl(value: MediaLike): string {
  if (value == null) return "";
  if (typeof value === "number") return "";
  if (typeof value === "string") return value.startsWith("/") ? value : `/${value}`;
  if (typeof value === "object" && "url" in value) {
    const u = (value as { url?: string | null }).url;
    if (!u) return "";
    return u.startsWith("/") ? u : `/${u}`;
  }
  return "";
}

async function payload() {
  return getPayload({ config });
}

export type FundExhibitionView = {
  id: number;
  date: string;
  title: string;
  location: string;
  summary: string;
  description: string;
  photos: { src: string; caption?: string }[];
  videos?: { title: string; url: string }[];
};

export async function fetchFundExhibitions(): Promise<FundExhibitionView[]> {
  const p = await payload();
  const { docs } = await p.find({
    collection: "exhibitions-fund",
    sort: "sortOrder",
    limit: 200,
    depth: 2,
  });
  return docs.map((doc) => {
    const photos = (Array.isArray(doc.photos) ? doc.photos : [])
      .map((row: { image?: MediaLike; caption?: string }) => {
        const src = mediaUrl(row.image);
        if (!src) return null;
        return {
          src,
          ...(row.caption ? { caption: row.caption } : {}),
        };
      })
      .filter(Boolean) as { src: string; caption?: string }[];

    const videos = (Array.isArray(doc.videos) ? doc.videos : []).map(
      (v: { title?: string; url?: string }) => ({
        title: String(v.title ?? ""),
        url: String(v.url ?? ""),
      }),
    );

    const id =
      typeof doc.id === "number" ? doc.id : Number.parseInt(String(doc.id), 10);

    return {
      id,
      date: String(doc.date ?? ""),
      title: String(doc.title ?? ""),
      location: String(doc.location ?? ""),
      summary: String(doc.summary ?? ""),
      description: String(doc.description ?? ""),
      photos,
      ...(videos.length ? { videos } : {}),
    };
  });
}

export type FundVideoView = {
  title: string;
  description: string;
  rutubeUrl: string;
};

export async function fetchFundVideos(): Promise<FundVideoView[]> {
  const p = await payload();
  const { docs } = await p.find({
    collection: "videos",
    sort: "sortOrder",
    limit: 500,
    depth: 0,
  });
  return docs.map((doc) => ({
    title: String(doc.title ?? ""),
    description: String(doc.description ?? ""),
    rutubeUrl: String(doc.rutubeUrl ?? ""),
  }));
}

export type BookView = {
  id: string;
  title: string;
  author: string;
  year: string;
  pages: string;
  circulation: string;
  description: string;
  image: string;
  pdf: string;
};

export async function fetchBooks(): Promise<BookView[]> {
  const p = await payload();
  const { docs } = await p.find({
    collection: "books",
    sort: "sortOrder",
    limit: 200,
    depth: 2,
  });
  return docs.map((doc) => ({
    id: String(doc.key ?? doc.id),
    title: String(doc.title ?? ""),
    author: String(doc.author ?? ""),
    year: String(doc.year ?? ""),
    pages: String(doc.pages ?? ""),
    circulation: String(doc.circulation ?? ""),
    description: String(doc.description ?? ""),
    image: mediaUrl(doc.image as MediaLike),
    pdf: mediaUrl(doc.pdf as MediaLike),
  }));
}

export type GalleryItemView = {
  id: number;
  title: string;
  year: string;
  material: string;
  dimensions: string;
  image: string;
  description?: string;
  quotes: { text: string; author: string }[];
  width: number;
  height: number;
};

export async function fetchGallery(): Promise<GalleryItemView[]> {
  const p = await payload();
  const { docs } = await p.find({
    collection: "gallery",
    sort: "sortOrder",
    limit: 200,
    depth: 1,
  });
  return docs.map((doc) => {
    const id =
      typeof doc.id === "number" ? doc.id : Number.parseInt(String(doc.id), 10);
    const quotes = (Array.isArray(doc.quotes) ? doc.quotes : []).map(
      (q: { text?: string; author?: string }) => ({
        text: String(q.text ?? ""),
        author: String(q.author ?? ""),
      }),
    );
    return {
      id,
      title: String(doc.title ?? ""),
      year: String(doc.year ?? ""),
      material: String(doc.material ?? ""),
      dimensions: String(doc.dimensions ?? ""),
      image: mediaUrl(doc.image as MediaLike),
      ...(doc.description
        ? { description: String(doc.description) }
        : {}),
      quotes,
      width: Number(doc.width ?? 0),
      height: Number(doc.height ?? 0),
    };
  });
}

export type ConferenceTalkView = {
  id: number;
  title: string;
  speaker: string;
  date: string;
  url: string;
  tag: string;
};

export async function fetchConferenceTalks(): Promise<ConferenceTalkView[]> {
  const p = await payload();
  const { docs } = await p.find({
    collection: "conferences",
    sort: "sortOrder",
    limit: 200,
    depth: 0,
  });
  return docs.map((doc) => {
    const id =
      typeof doc.id === "number" ? doc.id : Number.parseInt(String(doc.id), 10);
    return {
      id,
      title: String(doc.title ?? ""),
      speaker: String(doc.speaker ?? ""),
      date: String(doc.date ?? ""),
      url: String(doc.url ?? ""),
      tag: String(doc.tag ?? ""),
    };
  });
}

export type LectureCardView = {
  id: number;
  title: string;
  speaker: string;
  date: string;
  url: string;
  tag?: string;
};

export async function fetchLectures(): Promise<LectureCardView[]> {
  const p = await payload();
  const { docs } = await p.find({
    collection: "lectures",
    sort: "sortOrder",
    limit: 500,
    depth: 0,
  });
  return docs.map((doc) => {
    const id =
      typeof doc.id === "number" ? doc.id : Number.parseInt(String(doc.id), 10);
    const tagRaw = doc.tag;
    const tag =
      typeof tagRaw === "string" && tagRaw.trim() !== ""
        ? tagRaw.trim()
        : undefined;
    return {
      id,
      title: String(doc.title ?? ""),
      speaker: String(doc.speaker ?? ""),
      date: String(doc.date ?? ""),
      url: String(doc.url ?? ""),
      ...(tag !== undefined ? { tag } : {}),
    };
  });
}

export type CraftView = {
  id: string;
  title: string;
  desc: string;
  imageSrc: string;
};

export async function fetchCrafts(): Promise<CraftView[]> {
  const p = await payload();
  const { docs } = await p.find({
    collection: "crafts",
    sort: "sortOrder",
    limit: 200,
    depth: 2,
  });
  return docs.map((doc) => ({
    id: String(doc.key ?? doc.id),
    title: String(doc.title ?? ""),
    desc: String(doc.desc ?? ""),
    imageSrc: mediaUrl(doc.image as MediaLike),
  }));
}

export type UrielExhibitionView = {
  id: number;
  date: string;
  title: string;
  location: string;
  hasPhotos: boolean;
  slug?: string;
  photoCount?: number;
};

export async function fetchUrielExhibitions(): Promise<UrielExhibitionView[]> {
  const p = await payload();
  const { docs } = await p.find({
    collection: "exhibitions-uriel",
    sort: "sortOrder",
    limit: 500,
    depth: 0,
  });
  return docs.map((doc) => {
    const id =
      typeof doc.id === "number" ? doc.id : Number.parseInt(String(doc.id), 10);
    return {
      id,
      date: String(doc.date ?? ""),
      title: String(doc.title ?? ""),
      location: String(doc.location ?? ""),
      hasPhotos: Boolean(doc.hasPhotos),
      ...(doc.slug ? { slug: String(doc.slug) } : {}),
      ...(typeof doc.photoCount === "number"
        ? { photoCount: doc.photoCount }
        : {}),
    };
  });
}

export type DiplomaCardView = {
  key: string;
  src: string;
  year: number;
};

export async function fetchDiplomaCards(): Promise<DiplomaCardView[]> {
  const p = await payload();
  const { docs } = await p.find({
    collection: "diplomas",
    sort: "sortOrder",
    limit: 200,
    depth: 2,
  });
  const cards: DiplomaCardView[] = [];
  for (const doc of docs) {
    const year = Number(doc.year);
    const certs = Array.isArray(doc.certificates) ? doc.certificates : [];
    certs.forEach((row: { image?: MediaLike }, i) => {
      const src = mediaUrl(row.image);
      if (!src) return;
      cards.push({
        key: `${year}-${i}`,
        src,
        year,
      });
    });
  }
  return cards;
}

export type ShipModelRow = { id: number; title: string; src?: string };

export type ShipGroupView = {
  groupKey: "junior" | "middle" | "senior";
  name: string;
  background: string;
  url: string;
  models: ShipModelRow[];
};

export async function fetchShipGroups(): Promise<ShipGroupView[]> {
  const p = await payload();
  const { docs } = await p.find({
    collection: "ships-models",
    sort: "sortOrder",
    limit: 20,
    depth: 2,
  });
  return docs.map((doc) => {
    const bg = mediaUrl(doc.background as MediaLike);
    const url = String(doc.url ?? "");
    const models = (Array.isArray(doc.models) ? doc.models : []).map(
      (m: { modelId?: number; title?: string; image?: MediaLike }) => ({
        id: Number(m.modelId ?? 0),
        title: String(m.title ?? ""),
        src: mediaUrl(m.image) || undefined,
      }),
    );
    return {
      groupKey: doc.groupKey as "junior" | "middle" | "senior",
      name: String(doc.name ?? ""),
      background: bg,
      url,
      models,
    };
  });
}
