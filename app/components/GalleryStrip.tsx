import Image from "next/image";
import { gallery } from "../data/site";

/** Mynda-rúlla (marquee) — tvöfölduð svo hún lykkist sléttilega. */
export default function GalleryStrip() {
  const items = [...gallery, ...gallery];
  return (
    <div className="relative overflow-hidden group" aria-label="Myndir frá Ítalíu">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-28 bg-gradient-to-r from-paper to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-28 bg-gradient-to-l from-paper to-transparent z-10" />
      <div className="flex gap-3 md:gap-4 w-max animate-marquee group-hover:[animation-play-state:paused]">
        {items.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className={`relative h-44 sm:h-56 md:h-72 shrink-0 overflow-hidden rounded-2xl md:rounded-3xl bg-mist ${
              i % 3 === 1 ? "w-40 sm:w-56 md:w-72" : "w-64 sm:w-80 md:w-[26rem]"
            }`}
            aria-hidden={i >= gallery.length}
          >
            <Image
              src={img.src}
              alt={i < gallery.length ? img.alt : ""}
              fill
              quality={60}
              sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 416px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
