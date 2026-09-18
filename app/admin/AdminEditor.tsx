"use client";

import { useState, useTransition, type ReactNode } from "react";
import Image from "next/image";
import type { AdminMedia, Editable } from "../lib/content";
import { saveContent, type SaveResult } from "./actions";
import { CheckIcon, ClockIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "../components/Icons";

/* ───────────────── Breytanlegur texti ───────────────── */

/**
 * Texti sem er breytt á staðnum: erfir letur, lit og stærð frá umhverfinu svo spjaldið
 * lítur eins út og á vefnum. Ósýnilegt afrit af textanum heldur hæðinni réttri.
 */
function E({
  value,
  onChange,
  label,
  className = "",
  placeholder = "Skrifaðu hér…",
  multiline = false,
}: {
  value: string;
  onChange: (v: string) => void;
  label: string;
  className?: string;
  placeholder?: string;
  multiline?: boolean;
}) {
  return (
    <span
      className={`grid min-w-0 cursor-text rounded-md outline-1 outline-dashed outline-offset-4 outline-white/15 hover:outline-white/45 focus-within:outline-gold-light focus-within:bg-white/5 transition-colors ${className}`}
    >
      <span aria-hidden className="invisible [grid-area:1/1] whitespace-pre-wrap break-words">
        {(value || placeholder) + "​"}
      </span>
      <textarea
        rows={1}
        value={value}
        aria-label={label}
        title={label}
        placeholder={placeholder}
        onChange={(e) => onChange(multiline ? e.target.value : e.target.value.replace(/\n/g, " "))}
        className="[grid-area:1/1] w-full h-full min-w-0 resize-none overflow-hidden border-0 bg-transparent p-0 m-0 outline-none [font:inherit] [letter-spacing:inherit] [text-transform:inherit] [text-align:inherit] text-inherit placeholder:text-white/30"
      />
    </span>
  );
}

function Remove({ onClick, label = "Eyða" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="shrink-0 w-6 h-6 rounded-full border border-white/15 bg-ink/60 text-white/50 text-sm leading-none flex items-center justify-center hover:bg-red-500 hover:border-red-500 hover:text-white transition-colors"
    >
      ×
    </button>
  );
}

function Add({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button type="button" onClick={onClick} className="text-xs font-medium text-gold-light hover:text-white transition-colors w-fit">
      + {children}
    </button>
  );
}

/** Listi af stuttum textum – hvert atriði breytanlegt, með eyða- og bæta-við hnöppum. */
function EList({
  value,
  onChange,
  label,
  addLabel = "Bæta við",
  className = "space-y-2",
  itemClassName = "",
  prefix,
  multiline = false,
}: {
  value: string[];
  onChange: (v: string[]) => void;
  label: string;
  addLabel?: string;
  className?: string;
  itemClassName?: string;
  prefix?: (i: number) => ReactNode;
  multiline?: boolean;
}) {
  return (
    <div>
      <ul className={className}>
        {value.map((item, i) => (
          <li key={i} className={`flex items-start gap-2.5 min-w-0 ${itemClassName}`}>
            {prefix?.(i)}
            <E label={`${label} ${i + 1}`} value={item} multiline={multiline} onChange={(v) => onChange(value.map((x, j) => (j === i ? v : x)))} className="flex-1" />
            <Remove onClick={() => onChange(value.filter((_, j) => j !== i))} />
          </li>
        ))}
      </ul>
      <div className={value.length ? "mt-3" : ""}>
        <Add onClick={() => onChange([...value, ""])}>{addLabel}</Add>
      </div>
    </div>
  );
}

/** Lítið merki yfir reit sem sést ekki sjálfur á spjaldi á vefnum. */
function L({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <span className="block text-[11px] font-medium tracking-[0.15em] uppercase text-white/40 mb-2">{label}</span>
      {children}
    </div>
  );
}

function Heading({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 md:mb-8">
      <div>
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">{eyebrow}</span>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-[1.05]">{title}</h2>
      </div>
      {note && <p className="text-sm text-white/50 max-w-sm md:text-right">{note}</p>}
    </div>
  );
}

const eyebrowCls = "text-[11px] font-medium tracking-[0.22em] uppercase";
const pad = (n: number) => String(n + 1).padStart(2, "0");
const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

/* ───────────────── Ritill ───────────────── */

const TABS = [
  { id: "villur", label: "Villur" },
  { id: "rom", label: "Róm" },
  { id: "borgir", label: "Borgir" },
  { id: "brudkaup", label: "Brúðkaup" },
  { id: "umsagnir", label: "Umsagnir" },
  { id: "samband", label: "Samband" },
] as const;
type TabId = (typeof TABS)[number]["id"];

export default function AdminEditor({ initial, media, storage }: { initial: Editable; media: AdminMedia; storage: "file" | "github" }) {
  const [c, setC] = useState<Editable>(initial);
  const [tab, setTab] = useState<TabId>("villur");
  const [dirty, setDirty] = useState(false);
  const [result, setResult] = useState<SaveResult | null>(null);
  const [pending, start] = useTransition();

  const set = (fn: (draft: Editable) => void) => {
    setC((prev) => {
      const next = structuredClone(prev);
      fn(next);
      return next;
    });
    setDirty(true);
    setResult(null);
  };

  const save = () =>
    start(async () => {
      const r = await saveContent(JSON.stringify(c));
      setResult(r);
      if (r.ok) setDirty(false);
    });

  return (
    <>
      {/* Flipar */}
      <nav className="sticky top-16 z-30 bg-ink/90 backdrop-blur-md border-b border-white/10" aria-label="Hlutar síðunnar">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 flex items-center gap-1 overflow-x-auto no-scrollbar py-2.5">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                setTab(t.id);
                window.scrollTo({ top: 0 });
              }}
              aria-current={tab === t.id}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                tab === t.id ? "bg-white text-ink" : "text-white/65 hover:text-white hover:bg-white/10"
              }`}
            >
              {t.label}
            </button>
          ))}
          <span className="ml-auto hidden lg:block shrink-0 pl-6 text-xs text-white/45">Smelltu á texta til að breyta honum · myndir breytast ekki hér</span>
        </div>
      </nav>

      <div className="mx-auto max-w-[1400px] px-5 md:px-8 py-8 md:py-12 pb-40 space-y-16 md:space-y-24">
        {/* ═══════════════ VILLUR ═══════════════ */}
        {tab === "villur" && (
          <>
            <section>
              <Heading eyebrow="Forsíða og villusíða" title="Dæmi um villur" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {c.villas.map((v, i) => (
                  <article key={v.id} className="flex flex-col rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
                    <div className="relative aspect-[16/10] bg-white/8">
                      <Image src={media.villas[v.id]?.image ?? ""} alt={media.villas[v.id]?.imageAlt ?? ""} fill quality={85} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />
                      <div className={`absolute top-5 left-5 right-5 text-white label-on-image ${eyebrowCls}`}>
                        <E label="Svæði" value={v.region} onChange={(x) => set((d) => void (d.villas[i].region = x))} className="w-fit min-w-24" />
                      </div>
                      <div className="absolute bottom-4 left-5 right-5 text-white font-display text-2xl md:text-3xl font-medium tracking-tight leading-tight drop-shadow">
                        <E label="Heiti villu" value={v.name} onChange={(x) => set((d) => void (d.villas[i].name = x))} />
                      </div>
                    </div>
                    <div className="p-6 md:p-8 space-y-4">
                      <div className="text-white/60 leading-relaxed text-[15px] md:text-base">
                        <E label="Lýsing" value={v.text} multiline onChange={(x) => set((d) => void (d.villas[i].text = x))} />
                      </div>
                      <div className="text-xs text-white/50">
                        <EList label="Eiginleiki" addLabel="Bæta við eiginleika" className="flex flex-wrap gap-x-5 gap-y-2.5" itemClassName="items-center" value={v.features} onChange={(x) => set((d) => void (d.villas[i].features = x))} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <Heading eyebrow="Villusíða" title="Gott að vita" note="Stuttir punktar – best að hafa þá fjóra eða færri." />
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-10">
                {c.villaText.practical.map((p, i) => (
                  <li key={i} className="border-t border-white/15 pt-5 pb-7">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm text-gold-light tabular-nums">{pad(i)}</span>
                      <Remove onClick={() => set((d) => void (d.villaText.practical = d.villaText.practical.filter((_, j) => j !== i)))} />
                    </div>
                    <div className="mt-3 font-display text-lg md:text-xl font-medium tracking-tight leading-snug text-white/90">
                      <E label={`Punktur ${i + 1}`} value={p} multiline onChange={(x) => set((d) => void (d.villaText.practical[i] = x))} />
                    </div>
                  </li>
                ))}
              </ul>
              <Add onClick={() => set((d) => void d.villaText.practical.push(""))}>Bæta við punkti</Add>
            </section>

            <section>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 md:mb-8">
                <div>
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Forsíða og villusíða</span>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-[1.05]">Viðbótarþjónusta í villuna</h2>
                </div>
                <div className="text-white/60 max-w-md md:text-right w-full md:w-auto md:min-w-72">
                  <E label="Texti við fyrirsögn" value={c.villaText.bookingBenefit} multiline onChange={(x) => set((d) => void (d.villaText.bookingBenefit = x))} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                {c.villaServices.map((s, i) => (
                  <article key={s.id} className="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden bg-ink-soft">
                    <Image src={media.villaServices[s.id]?.image ?? ""} alt={media.villaServices[s.id]?.imageAlt ?? ""} fill quality={85} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/5" />
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 space-y-3">
                      <div className="font-display text-2xl md:text-[1.7rem] font-medium tracking-tight leading-tight">
                        <E label="Heiti þjónustu" value={s.title} onChange={(x) => set((d) => void (d.villaServices[i].title = x))} />
                      </div>
                      <div className="text-[14px] md:text-[15px] text-white/80 leading-relaxed">
                        <E label="Texti" value={s.text} multiline onChange={(x) => set((d) => void (d.villaServices[i].text = x))} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                <div className="lg:col-span-4">
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Villusíða</span>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-[1.05]">Viðmið eftir stærð</h2>
                  <div className="mt-4 text-white/60 text-[15px] leading-relaxed">
                    <E label="Skýring við verðtöflu" value={c.villaText.pricingNote} multiline onChange={(x) => set((d) => void (d.villaText.pricingNote = x))} />
                  </div>
                </div>
                <div className="lg:col-span-8 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 divide-y divide-white/10 overflow-hidden">
                  {c.villaPricing.map((row, i) => (
                    <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 items-baseline px-5 md:px-8 py-4 md:py-5">
                      <span className="font-medium">
                        <E label="Stærð" value={row.size} onChange={(x) => set((d) => void (d.villaPricing[i].size = x))} />
                      </span>
                      <span className="font-display text-xl md:text-2xl font-medium text-gold-light">
                        <E label="Verð í evrum" value={row.eur} onChange={(x) => set((d) => void (d.villaPricing[i].eur = x))} />
                      </span>
                      <span className="text-sm text-white/50 sm:text-right">
                        <E label="Um í krónum" value={row.isk} onChange={(x) => set((d) => void (d.villaPricing[i].isk = x))} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="max-w-xl">
              <L label="Smáa letrið við hliðina á fyrirspurnarforminu">
                <div className="text-sm text-white/60">
                  <EList label="Lína" addLabel="Bæta við línu" value={c.villaText.service} multiline onChange={(x) => set((d) => void (d.villaText.service = x))} />
                </div>
              </L>
            </section>
          </>
        )}

        {/* ═══════════════ RÓM ═══════════════ */}
        {tab === "rom" && (
          <section>
            <Heading eyebrow="Rómarsíðan" title={`${c.tours.length} ferðir í Róm`} note="Spjaldið sést á síðunni. Undir „Lesa meira“ er efni gluggans sem opnast." />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 items-start">
              {c.tours.map((t, i) => (
                <article key={t.id} className="flex flex-col rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image src={media.tours[t.id]?.image ?? ""} alt={media.tours[t.id]?.imageAlt ?? ""} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className={`${eyebrowCls} text-sand min-w-0 flex-1`}>
                        <E label="Merki" value={t.tag} onChange={(x) => set((d) => void (d.tours[i].tag = x))} />
                      </span>
                      <span className="font-display text-base font-medium text-gold-light min-w-0 flex-1 text-right">
                        <E label="Verð á spjaldi" value={t.priceLabel} onChange={(x) => set((d) => void (d.tours[i].priceLabel = x))} />
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-medium tracking-tight leading-tight">
                      <E label="Heiti ferðar" value={t.title} onChange={(x) => set((d) => void (d.tours[i].title = x))} />
                    </h3>
                    <div className="text-[15px] text-white/60 leading-relaxed">
                      <E label="Stutt lýsing" value={t.summary} multiline onChange={(x) => set((d) => void (d.tours[i].summary = x))} />
                    </div>
                    <div className="text-xs text-white/50">
                      <EList label="Áherslupunktur" addLabel="Bæta við punkti" className="space-y-2" itemClassName="items-center" value={t.highlights} onChange={(x) => set((d) => void (d.tours[i].highlights = x))} />
                    </div>
                  </div>

                  <details className="group border-t border-white/10">
                    <summary className="cursor-pointer list-none px-6 py-4 flex items-center justify-between text-sm font-semibold text-gold-light hover:text-white transition-colors">
                      Lesa meira – efni gluggans
                      <span className="text-lg leading-none transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <div className="px-6 pb-7 space-y-6">
                      <L label="Stutt heiti (flýtival efst á síðu)">
                        <E label="Stutt heiti" value={t.shortTitle} onChange={(x) => set((d) => void (d.tours[i].shortTitle = x))} />
                      </L>
                      <L label="Lýsing – málsgreinar">
                        <div className="text-white/70 leading-relaxed text-[15px]">
                          <EList label="Málsgrein" addLabel="Bæta við málsgrein" className="space-y-4" multiline value={t.details.intro} onChange={(x) => set((d) => void (d.tours[i].details.intro = x))} />
                        </div>
                      </L>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/8 p-4">
                          <L label="Brottför">
                            <div className="text-sm">
                              <EList label="Brottför" addLabel="Bæta við tíma" value={t.details.schedule} onChange={(x) => set((d) => void (d.tours[i].details.schedule = x))} />
                            </div>
                          </L>
                        </div>
                        <div className="rounded-2xl bg-white/8 p-4">
                          <L label="Lengd">
                            <div className="text-sm flex items-center gap-2">
                              <ClockIcon className="w-4 h-4 text-gold-light shrink-0" />
                              <E label="Lengd" value={t.details.duration} placeholder="t.d. 3 klukkustundir" onChange={(x) => set((d) => void (d.tours[i].details.duration = x))} className="flex-1" />
                            </div>
                          </L>
                        </div>
                      </div>
                      <L label="Staðir / stopp">
                        <div className="text-sm">
                          <EList
                            label="Stopp"
                            addLabel="Bæta við stað"
                            className="space-y-2"
                            prefix={(n) => <span className="text-gold-light font-semibold w-5 shrink-0 text-right">{n + 1}.</span>}
                            value={t.details.stops}
                            onChange={(x) => set((d) => void (d.tours[i].details.stops = x))}
                          />
                        </div>
                      </L>
                      <L label="Innifalið">
                        <div className="text-sm">
                          <EList
                            label="Innifalið"
                            addLabel="Bæta við atriði"
                            prefix={() => <CheckIcon className="w-4 h-4 mt-0.5 text-leaf shrink-0" />}
                            multiline
                            value={t.details.included}
                            onChange={(x) => set((d) => void (d.tours[i].details.included = x))}
                          />
                        </div>
                      </L>
                      <div className="rounded-2xl bg-white/8 border border-white/10 p-5">
                        <L label="Kostnaður">
                          <div className="space-y-3">
                            {t.prices.map((p, j) => (
                              <div key={j} className="flex items-baseline gap-3">
                                <span className="flex-1 min-w-0 text-sm text-white/70">
                                  <E label="Verðlína – lýsing" value={p.label} placeholder="t.d. Verð á mann" onChange={(x) => set((d) => void (d.tours[i].prices[j].label = x))} />
                                </span>
                                <span className="w-24 shrink-0 font-display text-2xl font-medium text-right">
                                  <E label="Verðlína – verð" value={p.value} placeholder="€150" onChange={(x) => set((d) => void (d.tours[i].prices[j].value = x))} />
                                </span>
                                <Remove onClick={() => set((d) => void (d.tours[i].prices = d.tours[i].prices.filter((_, k) => k !== j)))} />
                              </div>
                            ))}
                            <Add onClick={() => set((d) => void d.tours[i].prices.push({ label: "", value: "" }))}>Bæta við verðlínu</Add>
                            <div className="pt-2 text-xs text-white/55 leading-relaxed">
                              <E label="Athugasemd um verð" value={t.details.note} multiline placeholder="Athugasemd undir verði (valfrjálst)" onChange={(x) => set((d) => void (d.tours[i].details.note = x))} />
                            </div>
                          </div>
                        </L>
                      </div>
                    </div>
                  </details>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ═══════════════ BORGIR ═══════════════ */}
        {tab === "borgir" &&
          c.destinations.map((d0, i) => {
            const m = media.destinations[d0.slug];
            return (
              <section key={d0.slug}>
                <div className="relative min-h-[300px] md:min-h-[380px] flex items-end rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-ink-soft">
                  <Image src={m?.image ?? ""} alt={m?.imageAlt ?? ""} fill quality={85} sizes="100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/20" />
                  <div className="relative w-full p-6 md:p-10 space-y-3">
                    <span className={`${eyebrowCls} text-white label-on-image`}>{m?.eyebrow}</span>
                    <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight max-w-2xl">
                      <E label="Heiti borgar" value={d0.title} onChange={(x) => set((d) => void (d.destinations[i].title = x))} />
                    </h2>
                    <div className="text-white/80 text-[15px] md:text-base leading-relaxed max-w-xl">
                      <E label="Stutt lýsing (spjald og hero)" value={d0.lead} multiline onChange={(x) => set((d) => void (d.destinations[i].lead = x))} />
                    </div>
                  </div>
                </div>

                {d0.slug === "rom" ? (
                  <p className="mt-4 text-sm text-white/50">
                    Ferðirnar í Róm eru undir flipanum{" "}
                    <button type="button" onClick={() => setTab("rom")} className="underline underline-offset-4 text-gold-light hover:text-white">
                      Róm
                    </button>
                    .
                  </p>
                ) : (
                  <div className="mt-8 space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                      <div className="lg:col-span-8">
                        <L label="Inngangur við „Hvað er í boði“">
                          <div className="text-white/60">
                            <EList label="Málsgrein" addLabel="Bæta við málsgrein" className="space-y-3" multiline value={d0.intro} onChange={(x) => set((d) => void (d.destinations[i].intro = x))} />
                          </div>
                        </L>
                      </div>
                      <div className="lg:col-span-4">
                        <L label="Nafn í texta og formi (t.d. „Flórens“)">
                          <E label="Nafn í texta" value={d0.name} onChange={(x) => set((d) => void (d.destinations[i].name = x))} />
                        </L>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                      {d0.services.map((s, j) => {
                        const img = (m?.services.find((b) => b.title === s.title) ?? m?.services[j])?.image;
                        return (
                          <article key={j} className="flex flex-col rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
                            <div className="relative aspect-[16/10] bg-ink-soft">
                              {img && <Image src={img} alt="" fill quality={85} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />}
                              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                              <span className="absolute top-4 left-5 font-display text-sm text-white/90 tabular-nums label-on-image">{pad(j)}</span>
                              <span className="absolute top-3 right-3">
                                <Remove label="Eyða þjónustu" onClick={() => set((d) => void (d.destinations[i].services = d.destinations[i].services.filter((_, k) => k !== j)))} />
                              </span>
                            </div>
                            <div className="p-6 md:p-7 space-y-3">
                              <h3 className="font-display text-2xl font-medium tracking-tight leading-tight">
                                <E label="Heiti þjónustu" value={s.title} onChange={(x) => set((d) => void (d.destinations[i].services[j].title = x))} />
                              </h3>
                              <div className="text-[15px] text-white/60 leading-relaxed">
                                <E label="Stutt lýsing" value={s.text} multiline onChange={(x) => set((d) => void (d.destinations[i].services[j].text = x))} />
                              </div>
                            </div>
                          </article>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => set((d) => void d.destinations[i].services.push({ title: "", text: "" }))}
                        className="min-h-40 rounded-3xl border border-dashed border-white/20 text-sm font-medium text-white/55 hover:text-white hover:border-white/50 transition-colors"
                      >
                        + Bæta við þjónustu
                      </button>
                    </div>

                    <L label="Texti í „Við setjum ferðina saman fyrir ykkur“">
                      <div className="text-white/70 max-w-xl">
                        <E label="Skipulagning – texti" value={d0.planning} multiline onChange={(x) => set((d) => void (d.destinations[i].planning = x))} />
                      </div>
                    </L>
                  </div>
                )}
              </section>
            );
          })}

        {/* ═══════════════ BRÚÐKAUP ═══════════════ */}
        {tab === "brudkaup" && (
          <section className="space-y-10">
            <div className="relative min-h-[340px] md:min-h-[440px] flex items-end rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-ink-soft">
              <Image src={media.wedding.image} alt={media.wedding.imageAlt} fill quality={85} sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/25" />
              <div className="relative w-full p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-end">
                <h2 className="lg:col-span-7 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                  <E label="Fyrirsögn" value={c.wedding.title} multiline onChange={(x) => set((d) => void (d.wedding.title = x))} />
                </h2>
                <div className="lg:col-span-5 text-white/85 text-[15px] md:text-lg leading-relaxed">
                  <E label="Stutt lýsing" value={c.wedding.lead} multiline onChange={(x) => set((d) => void (d.wedding.lead = x))} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">{media.wedding.eyebrow}</span>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-[1.05]">Dagurinn sem á að vera fullkominn</h3>
                </div>
                <div className="text-white/65 leading-relaxed text-[16px] md:text-[17px]">
                  <EList label="Málsgrein" addLabel="Bæta við málsgrein" className="space-y-4" multiline value={c.wedding.intro} onChange={(x) => set((d) => void (d.wedding.intro = x))} />
                </div>
                <L label="Hugmyndir (lína undir innganginum)">
                  <div className="text-sm text-white/55">
                    <EList label="Hugmynd" addLabel="Bæta við hugmynd" className="flex flex-wrap gap-x-5 gap-y-2.5" itemClassName="items-center" value={c.wedding.ideas} onChange={(x) => set((d) => void (d.wedding.ideas = x))} />
                  </div>
                </L>
              </div>
              <div className="lg:col-span-5">
                <L label="Allt á einum stað – gátlisti">
                  <div className="text-[15px]">
                    <EList
                      label="Atriði"
                      addLabel="Bæta við atriði"
                      className="space-y-3"
                      itemClassName="items-center rounded-2xl bg-white/10 px-4 py-3.5"
                      prefix={() => <CheckIcon className="w-4 h-4 text-gold-light shrink-0" />}
                      value={c.wedding.extras}
                      onChange={(x) => set((d) => void (d.wedding.extras = x))}
                    />
                  </div>
                </L>
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════ UMSAGNIR ═══════════════ */}
        {tab === "umsagnir" && (
          <section>
            <Heading eyebrow="Forsíða" title="Það sem gestir okkar segja" note="Stuttar umsagnir virka best – ein birtist í einu og þær rúlla sjálfkrafa." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
              {c.testimonials.map((t, i) => (
                <figure key={i} className="rounded-3xl p-6 sm:p-7 bg-ink-soft/85 border border-white/10">
                  <div className="flex items-center justify-between">
                    <span aria-hidden className="font-display text-5xl leading-[0.6] text-gold">
                      &ldquo;
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-display tabular-nums text-white/40">
                        {pad(i)} / {String(c.testimonials.length).padStart(2, "0")}
                      </span>
                      <Remove label="Eyða umsögn" onClick={() => set((d) => void (d.testimonials = d.testimonials.filter((_, k) => k !== i)))} />
                    </span>
                  </div>
                  <blockquote className="mt-5 text-[15px] sm:text-base leading-relaxed text-white/85">
                    <E label="Umsögn" value={t.text} multiline onChange={(x) => set((d) => void (d.testimonials[i].text = x))} />
                  </blockquote>
                  <figcaption className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                    <span aria-hidden className="w-11 h-11 shrink-0 rounded-full text-sm font-semibold flex items-center justify-center bg-white/10 text-gold-light">
                      {initials(t.name)}
                    </span>
                    <span className="min-w-0 flex-1 space-y-2">
                      <span className="block text-sm font-semibold text-white">
                        <E label="Nafn" value={t.name} placeholder="Nafn gests" onChange={(x) => set((d) => void (d.testimonials[i].name = x))} />
                      </span>
                      <span className="block text-xs text-white/50">
                        <E label="Ferð" value={t.trip} placeholder="t.d. Villa í Toskana" onChange={(x) => set((d) => void (d.testimonials[i].trip = x))} />
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
              <button
                type="button"
                onClick={() => set((d) => void d.testimonials.push({ name: "", trip: "", text: "" }))}
                className="min-h-40 rounded-3xl border border-dashed border-white/20 text-sm font-medium text-white/55 hover:text-white hover:border-white/50 transition-colors"
              >
                + Bæta við umsögn
              </button>
            </div>
          </section>
        )}

        {/* ═══════════════ SAMBAND ═══════════════ */}
        {tab === "samband" && (
          <section>
            <Heading eyebrow="Allar síður" title="Hafa samband" note="Birtist á öllum síðum, í footer og í fyrirspurnum. WhatsApp-hlekkurinn fylgir ítalska númerinu." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {(
                [
                  { key: "phoneIS", icon: <PhoneIcon />, title: "Sími", sub: "Ísland" },
                  { key: "email", icon: <MailIcon />, title: "Netfang", sub: "Fyrirspurnir berast hingað" },
                  { key: "phoneIT", icon: <WhatsAppIcon className="w-6 h-6" />, title: "WhatsApp sími", sub: "Ítalía" },
                ] as const
              ).map((card) => (
                <div key={card.key} className="rounded-3xl bg-white/5 border border-white/10 p-8">
                  <span className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center">{card.icon}</span>
                  <h3 className="mt-6 text-xs text-white/50">{card.title}</h3>
                  <div className="mt-2 font-display text-2xl font-medium tracking-tight break-all">
                    <E label={card.title} value={c.site[card.key]} onChange={(x) => set((d) => void (d.site[card.key] = x))} />
                  </div>
                  <p className="mt-2 text-sm text-white/50">{card.sub}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Vista */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-3 md:px-4 pb-3 md:pb-4 pointer-events-none">
        <div className="pointer-events-auto mx-auto max-w-[1200px] glass-dark rounded-3xl px-4 md:px-6 py-3 md:py-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
          <div className="text-sm text-white/70 flex-1 text-center sm:text-left">
            {result?.ok ? (
              result.mode === "github" ? (
                "Vistað. Breytingarnar birtast á vefnum eftir 1–2 mínútur þegar síðan hefur verið endurbyggð."
              ) : (
                "Vistað. Breytingarnar eru komnar inn á vefinn."
              )
            ) : result && !result.ok ? (
              <span className="text-red-400">{result.error}</span>
            ) : dirty ? (
              "Óvistaðar breytingar."
            ) : storage === "github" ? (
              "Breytingar vistast í GitHub og birtast eftir endurbyggingu."
            ) : (
              "Engar breytingar."
            )}
          </div>
          <button
            type="button"
            onClick={save}
            disabled={pending || !dirty}
            className="rounded-full bg-white text-ink px-7 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed w-full sm:w-auto"
          >
            {pending ? "Vistar…" : "Vista breytingar"}
          </button>
        </div>
      </div>
    </>
  );
}
