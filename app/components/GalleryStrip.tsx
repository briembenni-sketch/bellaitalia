import Image from "next/image";
import { gallery } from "../data/site";

/** Óendanleg mynda-rúlla (marquee) — tvöfölduð svo hún lykkist sléttilega. */
export default function GalleryStrip() {
  const items = [...gallery, ...gallery];
  return (
    <div className="relative overflow-hidden group" aria-label="Myndir frá Ítalíu">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#1C0F0A] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#1C0F0A] to-transparent z-10" />
      <div className="flex gap-4 w-max animate-marquee group-hover:[animation-play-state:paused]">
        {items.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative h-56 md:h-72 w-[22rem] md:w-[28rem] shrink-0 overflow-hidden"
            aria-hidden={i >= gallery.length}
          >
            <Image
              src={img.src}
              alt={i < gallery.length ? img.alt : ""}
              fill
              sizes="(max-width: 768px) 352px, 448px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
