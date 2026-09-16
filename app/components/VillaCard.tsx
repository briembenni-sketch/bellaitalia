import Image from "next/image";
import Link from "next/link";
import type { Villa } from "../data/site";
import { ArrowIcon } from "./Icons";

type Props = {
  villa: Villa;
  /** Hvert „Fá tilboð“ vísar – sjálfgefið á villu-fyrirspurnina */
  ctaHref?: string;
  /** Stærri spjöld með meira efni (villusíðan) */
  large?: boolean;
};

export default function VillaCard({ villa, ctaHref = "/villur#fyrirspurn", large = false }: Props) {
  return (
    <article id={villa.id} className="group flex flex-col h-full rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/25 transition-colors scroll-mt-28">
      <div className={`relative overflow-hidden bg-white/8 ${large ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Image
          src={villa.image}
          alt={villa.imageAlt}
          fill
          quality={85}
          sizes={large ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 rounded-full tint px-3 py-1.5 text-xs text-white">{villa.region}</span>
        <span className="absolute bottom-4 left-4 right-4 text-white font-display text-2xl md:text-3xl font-medium tracking-tight leading-tight drop-shadow">
          {villa.name}
        </span>
      </div>
      <div className={`flex flex-col flex-1 ${large ? "p-6 md:p-8" : "p-5 md:p-6"}`}>
        <p className={`text-white/60 leading-relaxed ${large ? "text-[15px] md:text-base" : "text-[15px] line-clamp-3"}`}>{villa.text}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {villa.features.map((f) => (
            <li key={f} className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/70">
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-5 flex items-center justify-between gap-3">
          <span className="text-sm text-white/50">Verð eftir fyrirspurn</span>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white hover:text-ink transition-colors"
          >
            Fá tilboð <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
