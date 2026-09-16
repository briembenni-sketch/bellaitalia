import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  image: string;
  imageAlt?: string;
  title: ReactNode;
  text?: ReactNode;
  actions?: ReactNode;
  scrollTo?: string;
  size?: "full" | "short";
  /** Fyllir allan skjáinn án ramma – notað á forsíðu (landing) */
  bleed?: boolean;
};

/**
 * Hero með mynd í fullri breidd: fyrirsögn neðst til vinstri, lýsing og hnappar neðst til hægri.
 * Sjálfgefið í ávölum ramma; með `bleed` fyllir myndin allan skjáinn.
 */
export default function Hero({
  image,
  imageAlt = "",
  title,
  text,
  actions,
  scrollTo,
  size = "full",
  bleed = false,
}: Props) {
  const height = bleed
    ? "min-h-svh"
    : size === "full"
      ? "min-h-[88svh] md:min-h-[90svh]"
      : "min-h-[56svh] md:min-h-[60svh]";

  return (
    <section className={bleed ? "" : "px-2.5 md:px-4 pt-2.5 md:pt-4"}>
      <div
        className={`relative ${height} overflow-hidden bg-ink flex items-end ${
          bleed ? "" : "rounded-[1.5rem] md:rounded-[2.5rem]"
        }`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          preload
          fetchPriority="high"
          quality={60}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/30" />

        <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 pb-8 md:pb-14 pt-32 md:pt-40">
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end ${bleed ? "mx-auto max-w-[1600px]" : ""}`}>
            <div className="lg:col-span-7">
              <h1 className="font-display font-medium text-white text-[2.5rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.25rem] lg:leading-[1.02] tracking-tight animate-fade-up-delay-1">
                {title}
              </h1>
            </div>
            <div className={`lg:col-span-5 lg:pl-6 flex flex-col gap-5 md:gap-7 animate-fade-up-delay-2 ${scrollTo ? "xl:pr-24" : ""}`}>
              {text && <p className="text-white/85 text-[15px] sm:text-base md:text-lg leading-relaxed max-w-md">{text}</p>}
              {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
            </div>
          </div>
        </div>

        {scrollTo && (
          <a
            href={scrollTo}
            aria-label="Skruna niður"
            className="absolute right-10 bottom-10 z-10 w-14 h-14 rounded-full glass text-white hidden xl:flex items-center justify-center hover:bg-white hover:text-ink transition-colors animate-fade-up-delay-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6-6m-6 6l-6-6" />
            </svg>
          </a>
        )}
      </div>
    </section>
  );
}
