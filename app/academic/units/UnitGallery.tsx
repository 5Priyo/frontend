"use client";

import { useState } from "react";

interface GalleryItem {
  id: number;
  title: string | null;
  category: string | null;
  description: string | null;
  cover_image: string;
  year: number | null;
  month: string | null;
}

interface Props {
  gallery: GalleryItem[];
}

export default function UnitGallery({ gallery }: Props) {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  if (!gallery || gallery.length === 0) return null;

  return (
    <>
      <div className="bg-white rounded-[14px] border border-[#e5eaf3] p-8 mb-6 shadow-sm">
        <div className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#2563b0] mb-5">
          Gallery
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {gallery.map((item) => (
            <button
              key={item.id}
              onClick={() => setLightbox(item)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-[#e5eaf3] focus:outline-none"
            >
              <img
                src={item.cover_image}
                alt={item.title ?? "Gallery image"}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0f2a5e]/0 group-hover:bg-[#0f2a5e]/55 transition-all duration-300 flex flex-col items-center justify-center gap-1 p-3">
                <i className="fas fa-expand text-white text-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                {item.title && (
                  <span className="text-white text-[11px] font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {item.title}
                  </span>
                )}
              </div>
              {/* Year badge */}
              {item.year && (
                <span className="absolute top-2 left-2 bg-black/50 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  {item.year}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] bg-black/85 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden max-w-[700px] w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            >
              <i className="fas fa-times text-[13px]"></i>
            </button>

            {/* Image */}
            <img
              src={lightbox.cover_image}
              alt={lightbox.title ?? "Gallery image"}
              className="w-full max-h-[420px] object-cover"
            />

            {/* Info */}
            <div className="p-5">
              {lightbox.title && (
                <h3 className="font-bold text-[#1e3a5f] text-[16px] mb-1">
                  {lightbox.title}
                </h3>
              )}
              <div className="flex items-center gap-3 flex-wrap mb-2">
                {lightbox.category && (
                  <span className="bg-[#eff6ff] text-[#2563b0] text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                    {lightbox.category}
                  </span>
                )}
                {(lightbox.month || lightbox.year) && (
                  <span className="text-[12px] text-[#6b7280]">
                    {[lightbox.month, lightbox.year].filter(Boolean).join(" ")}
                  </span>
                )}
              </div>
              {lightbox.description && (
                <p className="text-[#4b5563] text-[13px] leading-6">
                  {lightbox.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}