"use client";

/* eslint-disable @next/next/no-img-element -- masonry needs intrinsic image heights */
import Masonry from "react-masonry-css";

/** Fewer columns → larger thumbnails */
const breakpointColsMany = {
  default: 2,
  640: 1,
};

export type MasonryPhoto = {
  src: string;
  caption?: string;
  alt?: string;
};

function PhotoTile({
  photo,
  idx,
  imgClassName,
}: {
  photo: MasonryPhoto;
  idx: number;
  imgClassName?: string;
}) {
  return (
    <div className="group relative w-full break-inside-avoid">
      <img
        src={photo.src}
        alt={photo.alt ?? photo.caption ?? `Фото ${idx + 1}`}
        loading={idx < 8 ? "eager" : "lazy"}
        decoding="async"
        className={
          imgClassName ??
          "block w-full rounded-md shadow-sm transition duration-300 group-hover:shadow-md"
        }
      />
      {photo.caption ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-md bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-left text-[11px] leading-snug text-white sm:text-xs">
            {photo.caption}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default function ExhibitionMasonryGallery({
  photos,
}: {
  photos: MasonryPhoto[];
}) {
  if (photos.length === 0) return null;

  /* Одно фото — на всю ширину области просмотра, максимально крупно */
  if (photos.length === 1) {
    const photo = photos[0];
    return (
      <div className="flex w-full min-h-[min(58svh,520px)] items-center justify-center px-1 py-2 md:min-h-[min(62svh,640px)] md:px-2 md:py-4">
        <PhotoTile
          photo={photo}
          idx={0}
          imgClassName="max-h-[min(78svh,920px)] w-full max-w-full object-contain object-center rounded-lg shadow-md transition duration-300 group-hover:shadow-lg"
        />
      </div>
    );
  }

  /* Два фото — на всю ширину модалки: в ряд на широком экране, столбик на узком */
  if (photos.length === 2) {
    return (
      <div className="grid w-full grid-cols-1 gap-3 min-h-[min(50svh,440px)] md:grid-cols-2 md:gap-4 md:min-h-[min(56svh,600px)]">
        {photos.map((photo, idx) => (
          <div
            key={`${photo.src}-${idx}`}
            className="flex min-h-[min(44svh,380px)] items-center justify-center md:min-h-0"
          >
            <PhotoTile
              photo={photo}
              idx={idx}
              imgClassName="max-h-[min(72svh,880px)] w-full max-w-full object-contain object-center rounded-lg shadow-md transition duration-300 group-hover:shadow-lg"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        .exhibition-masonry {
          display: flex;
          margin-left: -12px;
          width: auto;
        }
        .exhibition-masonry_column {
          padding-left: 12px;
          background-clip: padding-box;
        }
      `}</style>
      <Masonry
        breakpointCols={breakpointColsMany}
        className="exhibition-masonry"
        columnClassName="exhibition-masonry_column"
      >
        {photos.map((photo, idx) => (
          <div key={`${photo.src}-${idx}`} className="mb-3 sm:mb-3.5">
            <PhotoTile photo={photo} idx={idx} />
          </div>
        ))}
      </Masonry>
    </>
  );
}
