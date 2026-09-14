import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  image?: string;
  imageAlt?: string;
  video?: string;
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  actions?: ReactNode;
  scrollTo?: string;
  minHeight?: string;
};

/**
 * Hero í ávölum ramma með mynd/myndbandi í fullri breidd — eftir fyrirmynd:
 * fyrirsögn neðst til vinstri, lýsing neðst til hægri, hringlaga skrunhnappur.
 */
export default function Hero({
  image,
  imageAlt = "",
  video,
  eyebrow,
  title,
  text,
  actions,
  scrollTo,
  minHeight = "min-h-[92vh]",
}: Props) {
  return (
    <section className="px-3 md:px-4 pt-3 md:pt-4">
      <div
        className={`relative ${minHeight} rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden bg-ink flex items-end`}
      >
        {video ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={image}
            aria-hidden="true"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          image && (
            <Image
              src={image}
              alt={imageAlt}
              fill
              preload
              sizes="100vw"
              className="object-cover animate-ken-burns"
            />
          )
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-10 md:pb-14 pt-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              {eyebrow && (
                <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs md:text-sm text-white/90 animate-fade-up">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light" /> {eyebrow}
                </span>
              )}
              <h1 className="mt-6 font-display font-medium text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight animate-fade-up-delay-1">
                {title}
              </h1>
            </div>
            <div className={`lg:col-span-5 lg:pl-6 flex flex-col gap-7 animate-fade-up-delay-2 ${scrollTo ? "xl:pr-24" : ""}`}>
              {text && <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-md">{text}</p>}
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
            <svg className="w-5 h-5 animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6-6m-6 6l-6-6" />
            </svg>
          </a>
        )}
      </div>
    </section>
  );
}
