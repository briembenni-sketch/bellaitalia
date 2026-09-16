import Image from "next/image";
import type { VillaService } from "../data/site";

type Props = { service: VillaService; index?: number };

/** Viðbótarþjónusta í villuna – falleg mynd og stuttur texti. */
export default function ServiceCard({ service }: Props) {
  return (
    <article className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-ink text-white">
      <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          quality={60}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/5" />
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <h3 className="font-display text-2xl md:text-[1.7rem] font-medium tracking-tight leading-tight">{service.title}</h3>
          <p className="mt-3 text-[14px] md:text-[15px] text-white/80 leading-relaxed">{service.text}</p>
        </div>
      </div>
    </article>
  );
}
