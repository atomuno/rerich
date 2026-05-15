"use client";

import Image from "next/image";
import PhotoAlbum from "react-photo-album";

import type { ClubPhotoView } from "@/lib/cms/payload-queries";

export default function ClubMasonryGallery({
  photos,
}: {
  photos: ClubPhotoView[];
}) {
  if (photos.length === 0) return null;

  const albumPhotos = photos.map((p) => ({
    src: p.src,
    width: p.width,
    height: p.height,
    alt: p.alt,
  }));

  return (
    <PhotoAlbum
      layout="masonry"
      photos={albumPhotos}
      spacing={4}
      columns={(containerWidth) => {
        if (containerWidth < 640) return 1;
        if (containerWidth < 1024) return 2;
        return 3;
      }}
      renderPhoto={({ photo, wrapperStyle }) => (
        <div
          style={{
            ...wrapperStyle,
            margin: 0,
            marginBottom: "32px",
          }}
          className="relative overflow-hidden rounded-[3rem] shadow-lg group bg-slate-50 transition-all duration-500 hover:shadow-2xl border border-transparent"
        >
          <div className="relative w-full h-full min-h-[300px]">
            <Image
              src={photo.src}
              alt={photo.alt ?? "Фото кружка"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}
    />
  );
}
