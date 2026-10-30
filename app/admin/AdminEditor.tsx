"use client";

import { useEffect, useLayoutEffect, useRef, useState, useTransition, type ReactNode } from "react";
import Image from "next/image";
import type { AdminMedia, Editable } from "../lib/content";
import { saveContent, type SaveResult } from "./actions";

/*
 * Einfalt form fyrir Hildi: ljóst, stórt letur, hver reitur með skýru heiti og
 * aðeins þeir textar sem sjást í raun á vefnum. Annað í `Editable` (t.d. heiti
 * villuhéraða) er geymt óbreytt.
 */

/* ───────────────── Reitir ───────────────── */

const inputCls =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-base text-ink placeholder:text-ink/35 shadow-sm focus:outline-none focus:border-forest focus:ring-4 focus:ring-forest/15 transition";

/** Textareitur sem stækkar með textanum. */
function TextArea({ value, onChange, placeholder, label }: { value: string; onChange: (v: string) => void; placeholder?: string; label?: string }) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight + 2}px`;
  }, [value]);
  return (
    <textarea
      ref={ref}
      rows={2}
      value={value}
      aria-label={label}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`${inputCls} resize-none overflow-hidden leading-relaxed`}
    />
  );
}

function Field({
  label,
  hint,
  value,
  onChange,
  multiline = false,
  placeholder,
}: {
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[15px] font-semibold text-ink">{label}</span>
      {hint && <span className="block mt-0.5 text-sm text-ink/55">{hint}</span>}
      <span className="block mt-2">
        {multiline ? (
          <TextArea value={value} onChange={onChange} placeholder={placeholder} />
        ) : (
          <input type="text" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} className={inputCls} />
        )}
      </span>
    </label>
  );
}

function RemoveButton({ onClick, label = "Fjarlægja" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-ink/50 hover:text-white hover:bg-red-600 transition-colors"
    >
      {label}
    </button>
  );
}

function AddButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-xl border-2 border-dashed border-ink/20 px-4 py-2.5 text-sm font-semibold text-forest hover:border-forest hover:bg-forest/5 transition-colors"
    >
      <span className="text-lg leading-none">+</span> {children}
    </button>
  );
}

/** Listi af línum – hver lína í sínum reit, með „Fjarlægja“ og „+ Bæta við“. */
function ListField({
  label,
  hint,
  value,
  onChange,
  addLabel = "Bæta við línu",
  multiline = false,
  placeholder,
}: {
  label: string;
  hint?: string;
  value: string[];
  onChange: (v: string[]) => void;
  addLabel?: string;
  multiline?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <span className="block text-[15px] font-semibold text-ink">{label}</span>
      {hint && <span className="block mt-0.5 text-sm text-ink/55">{hint}</span>}
      <ul className="mt-2 space-y-2">
        {value.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-6 pt-3.5 shrink-0 text-right text-sm tabular-nums text-ink/35">{i + 1}.</span>
            <div className="flex-1 min-w-0">
              {multiline ? (
                <TextArea label={`${label} ${i + 1}`} value={item} placeholder={placeholder} onChange={(v) => onChange(value.map((x, j) => (j === i ? v : x)))} />
              ) : (
                <input
                  type="text"
                  aria-label={`${label} ${i + 1}`}
                  value={item}
                  placeholder={placeholder}
                  onChange={(e) => onChange(value.map((x, j) => (j === i ? e.target.value : x)))}
                  className={inputCls}
                />
              )}
            </div>
            <div className="pt-1">
              <RemoveButton onClick={() => onChange(value.filter((_, j) => j !== i))} />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-3 pl-8">
        <AddButton onClick={() => onChange([...value, ""])}>{addLabel}</AddButton>
      </div>
    </div>
  );
}

/* ───────────────── Útlit ───────────────── */

/** Hvítt spjald með fyrirsögn og hlekk á síðuna þar sem textinn birtist. */
function Card({ title, where, href, children }: { title: string; where?: string; href?: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl bg-white border border-ink/10 shadow-sm">
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 md:px-7 pt-5 md:pt-6">
        <h2 className="font-display text-xl md:text-2xl font-medium tracking-tight text-ink">{title}</h2>
        {where && (
          <span className="text-sm text-ink/50">
            Birtist á:{" "}
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-forest underline underline-offset-4 hover:text-ink">
                {where} ↗
              </a>
            ) : (
              where
            )}
          </span>
        )}
      </header>
      <div className="px-5 md:px-7 pt-5 pb-6 md:pb-7 space-y-6">{children}</div>
    </section>
  );
}

/** Fellilisti fyrir eina ferð, borg eða þjónustu – lokaður þar til smellt er á hann. */
function Item({ title, subtitle, image, children, onRemove }: { title: string; subtitle?: string; image?: string; children: ReactNode; onRemove?: () => void }) {
  return (
    <details className="group rounded-xl border border-ink/12 bg-mist/60 open:bg-white open:shadow-sm">
      <summary className="cursor-pointer list-none flex items-center gap-4 p-3 pr-4 [&::-webkit-details-marker]:hidden">
        {image ? (
          <span className="relative w-16 h-12 md:w-20 md:h-14 shrink-0 rounded-lg overflow-hidden bg-ink/10">
            <Image src={image} alt="" fill sizes="80px" className="object-cover" />
          </span>
        ) : null}
        <span className="flex-1 min-w-0">
          <span className="block font-semibold text-ink truncate">{title || "(án heitis)"}</span>
          {subtitle && <span className="block text-sm text-ink/50 truncate">{subtitle}</span>}
        </span>
        <span className="shrink-0 rounded-lg bg-white border border-ink/12 px-3 py-1.5 text-sm font-medium text-ink/70 group-open:hidden">Breyta</span>
        <span className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium text-ink/50 hidden group-open:inline">Loka ▲</span>
      </summary>
      <div className="px-4 md:px-5 pb-5 pt-2 space-y-6 border-t border-ink/10">
        {children}
        {onRemove && (
          <div className="pt-2 border-t border-ink/10">
            <RemoveButton label="Eyða þessu alveg" onClick={onRemove} />
          </div>
        )}
      </div>
    </details>
  );
}

/* ───────────────── Ritill ───────────────── */

const TABS = [
  { id: "verd", label: "Verð", sub: "Verð á ferðum" },
  { id: "villur", label: "Villur", sub: "Gott að vita og þjónusta" },
  { id: "rom", label: "Ferðir í Róm", sub: "Heiti og lýsingar" },
  { id: "borgir", label: "Borgir", sub: "Feneyjar, Flórens o.fl." },
  { id: "tilefni", label: "Ferðalög & tilefni", sub: "Brúðkaup, afmæli o.fl." },
  { id: "umsagnir", label: "Umsagnir", sub: "Það sem gestir segja" },
  { id: "samband", label: "Sími & netfang", sub: "Birtist á öllum síðum" },
] as const;
type TabId = (typeof TABS)[number]["id"];

export default function AdminEditor({ initial, media, storage }: { initial: Editable; media: AdminMedia; storage: "file" | "github" }) {
  const [saved, setSaved] = useState<Editable>(initial);
  const [c, setC] = useState<Editable>(initial);
  const [tab, setTab] = useState<TabId>("verd");
  const [dirty, setDirty] = useState(false);
  const [result, setResult] = useState<SaveResult | null>(null);
  const [pending, start] = useTransition();

  // Vara við ef farið er af síðunni án þess að vista
  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

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
      if (r.ok) {
        setSaved(c);
        setDirty(false);
      }
    });

  const undo = () => {
    if (!confirm("Hætta við allar óvistaðar breytingar?")) return;
    setC(saved);
    setDirty(false);
    setResult(null);
  };

  const confirmRemove = (what: string, fn: () => void) => {
    if (confirm(`Viltu eyða ${what}?`)) fn();
  };

  const go = (id: TabId) => {
    setTab(id);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 pt-6 md:pt-10 pb-44 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 lg:gap-10 items-start">
        {/* Valmynd */}
        <nav aria-label="Hlutar vefsins" className="lg:sticky lg:top-24">
          <p className="hidden lg:block mb-3 text-sm font-semibold text-ink/50">Hverju viltu breyta?</p>
          <ul className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
            {TABS.map((t) => (
              <li key={t.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => go(t.id)}
                  aria-current={tab === t.id}
                  className={`w-full text-left rounded-xl px-4 py-2.5 lg:py-3 transition-colors ${
                    tab === t.id ? "bg-forest text-white shadow-sm" : "bg-white border border-ink/10 text-ink hover:border-forest/50"
                  }`}
                >
                  <span className="block font-semibold whitespace-nowrap">{t.label}</span>
                  <span className={`hidden lg:block text-sm ${tab === t.id ? "text-white/75" : "text-ink/50"}`}>{t.sub}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-6 min-w-0">
          {/* ═══════════════ VERÐ ═══════════════ */}
          {tab === "verd" && (
            <>
              <Intro>Hér eru öll verð á ferðunum í Róm á einum stað. Breyttu tölunum og ýttu svo á <b>Vista</b> neðst.</Intro>
              {c.tours.map((t, i) => (
                <Card key={t.id} title={t.title} where="Rómarsíðan" href="/rom">
                  <div className="flex gap-4 items-start">
                    {media.tours[t.id]?.image && (
                      <span className="relative hidden sm:block w-24 h-18 shrink-0 rounded-lg overflow-hidden bg-ink/10">
                        <Image src={media.tours[t.id].image} alt="" fill sizes="96px" className="object-cover" />
                      </span>
                    )}
                    <div className="flex-1 min-w-0">
                      <Field
                        label="Verð á spjaldinu"
                        hint="Stutti textinn efst í horninu á ferðaspjaldinu."
                        placeholder="t.d. Frá €150"
                        value={t.priceLabel}
                        onChange={(x) => set((d) => void (d.tours[i].priceLabel = x))}
                      />
                    </div>
                  </div>
                  <div>
                    <span className="block text-[15px] font-semibold text-ink">Verðlisti</span>
                    <span className="block mt-0.5 text-sm text-ink/55">Birtist þegar smellt er á „Lesa meira“. Vinstra megin hvað er verið að borga fyrir, hægra megin verðið.</span>
                    <div className="mt-2 space-y-2">
                      {t.prices.map((p, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <input
                            type="text"
                            aria-label="Fyrir hvað"
                            placeholder="t.d. Verð á mann"
                            value={p.label}
                            onChange={(e) => set((d) => void (d.tours[i].prices[j].label = e.target.value))}
                            className={`${inputCls} flex-1 min-w-0`}
                          />
                          <input
                            type="text"
                            aria-label="Verð"
                            placeholder="€150"
                            value={p.value}
                            onChange={(e) => set((d) => void (d.tours[i].prices[j].value = e.target.value))}
                            className={`${inputCls} w-28 sm:w-36 shrink-0 font-semibold`}
                          />
                          <RemoveButton onClick={() => set((d) => void (d.tours[i].prices = d.tours[i].prices.filter((_, k) => k !== j)))} />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <AddButton onClick={() => set((d) => void d.tours[i].prices.push({ label: "", value: "" }))}>Bæta við verði</AddButton>
                    </div>
                  </div>
                  <Field
                    label="Athugasemd undir verðinu"
                    hint="Má vera tómt."
                    multiline
                    value={t.details.note}
                    onChange={(x) => set((d) => void (d.tours[i].details.note = x))}
                  />
                </Card>
              ))}
            </>
          )}

          {/* ═══════════════ VILLUR ═══════════════ */}
          {tab === "villur" && (
            <>
              <Intro>Textarnir á villusíðunni. Myndir og héruðin sjálf breytast ekki hér.</Intro>
              <Card title="Gott að vita" where="Villusíðan" href="/villur">
                <ListField
                  label="Punktar"
                  hint="Stuttar línur – best að hafa þær fjórar eða færri."
                  addLabel="Bæta við punkti"
                  multiline
                  value={c.villaText.practical}
                  onChange={(x) => set((d) => void (d.villaText.practical = x))}
                />
              </Card>
              <Card title="Viðbótarþjónusta í villuna" where="Villusíðan" href="/villur">
                <Field
                  label="Texti við fyrirsögnina"
                  multiline
                  value={c.villaText.bookingBenefit}
                  onChange={(x) => set((d) => void (d.villaText.bookingBenefit = x))}
                />
                <div className="space-y-2">
                  {c.villaServices.map((s, i) => (
                    <Item key={s.id} title={s.title} subtitle={s.text} image={media.villaServices[s.id]?.image}>
                      <Field label="Heiti" value={s.title} onChange={(x) => set((d) => void (d.villaServices[i].title = x))} />
                      <Field label="Texti" multiline value={s.text} onChange={(x) => set((d) => void (d.villaServices[i].text = x))} />
                    </Item>
                  ))}
                </div>
              </Card>
              <Card title="Smáa letrið við fyrirspurnarformið" where="Villusíðan, neðst" href="/villur">
                <ListField label="Línur" addLabel="Bæta við línu" multiline value={c.villaText.service} onChange={(x) => set((d) => void (d.villaText.service = x))} />
              </Card>
            </>
          )}

          {/* ═══════════════ RÓM ═══════════════ */}
          {tab === "rom" && (
            <>
              <Intro>
                Smelltu á ferð til að breyta textanum. Verðin eru undir{" "}
                <button type="button" onClick={() => go("verd")} className="font-semibold text-forest underline underline-offset-4">
                  Verð
                </button>
                .
              </Intro>
              <Card title={`Ferðir í Róm (${c.tours.length})`} where="Rómarsíðan" href="/rom">
                <div className="space-y-2">
                  {c.tours.map((t, i) => (
                    <Item key={t.id} title={t.title} subtitle={t.priceLabel} image={media.tours[t.id]?.image}>
                      <Field label="Heiti ferðar" value={t.title} onChange={(x) => set((d) => void (d.tours[i].title = x))} />
                      <Field label="Litla merkið" hint="Stuttur texti með hástöfum efst á spjaldinu, t.d. „Gönguferð“." value={t.tag} onChange={(x) => set((d) => void (d.tours[i].tag = x))} />
                      <Field label="Stutt lýsing á spjaldinu" multiline value={t.summary} onChange={(x) => set((d) => void (d.tours[i].summary = x))} />
                      <ListField
                        label="Áherslur"
                        hint="Þrjár fyrstu birtast neðst á spjaldinu."
                        addLabel="Bæta við áherslu"
                        value={t.highlights}
                        onChange={(x) => set((d) => void (d.tours[i].highlights = x))}
                      />

                      <div className="rounded-xl bg-mist p-4 md:p-5 space-y-6">
                        <p className="text-sm font-semibold text-ink/60 uppercase tracking-wider">Glugginn „Lesa meira“</p>
                        <ListField
                          label="Lýsing"
                          hint="Hver reitur er ein málsgrein."
                          addLabel="Bæta við málsgrein"
                          multiline
                          value={t.details.intro}
                          onChange={(x) => set((d) => void (d.tours[i].details.intro = x))}
                        />
                        <ListField label="Brottför" hint="Dagar og tímar." addLabel="Bæta við tíma" value={t.details.schedule} onChange={(x) => set((d) => void (d.tours[i].details.schedule = x))} />
                        <Field label="Lengd" placeholder="t.d. 3 klukkustundir" value={t.details.duration} onChange={(x) => set((d) => void (d.tours[i].details.duration = x))} />
                        <ListField label="Staðir sem eru heimsóttir" addLabel="Bæta við stað" value={t.details.stops} onChange={(x) => set((d) => void (d.tours[i].details.stops = x))} />
                        <ListField label="Innifalið" addLabel="Bæta við atriði" multiline value={t.details.included} onChange={(x) => set((d) => void (d.tours[i].details.included = x))} />
                      </div>
                    </Item>
                  ))}
                </div>
              </Card>
            </>
          )}

          {/* ═══════════════ BORGIR ═══════════════ */}
          {tab === "borgir" && (
            <>
              <Intro>Smelltu á borg til að breyta textanum á síðunni hennar.</Intro>
              <Card title="Borgir" where="Borgasíðan" href="/borgir">
                <div className="space-y-2">
                  {c.destinations.map((d0, i) => {
                    const m = media.destinations[d0.slug];
                    return (
                      <Item key={d0.slug} title={d0.title} subtitle={d0.lead} image={m?.image}>
                        <Field label="Heiti" value={d0.title} onChange={(x) => set((d) => void (d.destinations[i].title = x))} />
                        <Field label="Stutt lýsing" hint="Birtist á spjaldinu og efst á síðu borgarinnar." multiline value={d0.lead} onChange={(x) => set((d) => void (d.destinations[i].lead = x))} />
                        {d0.slug === "rom" ? (
                          <p className="text-sm text-ink/55">
                            Ferðirnar í Róm eru undir{" "}
                            <button type="button" onClick={() => go("rom")} className="font-semibold text-forest underline underline-offset-4">
                              Ferðir í Róm
                            </button>
                            .
                          </p>
                        ) : (
                          <>
                            <ListField
                              label="Inngangur"
                              hint="Textinn við „Hvað er í boði“. Hver reitur er ein málsgrein."
                              addLabel="Bæta við málsgrein"
                              multiline
                              value={d0.intro}
                              onChange={(x) => set((d) => void (d.destinations[i].intro = x))}
                            />
                            <div>
                              <span className="block text-[15px] font-semibold text-ink">Það sem er í boði</span>
                              <div className="mt-2 space-y-2">
                                {d0.services.map((s, j) => (
                                  <Item
                                    key={j}
                                    title={s.title}
                                    subtitle={s.text}
                                    image={(m?.services.find((b) => b.title === s.title) ?? m?.services[j])?.image}
                                    onRemove={() =>
                                      confirmRemove(`„${s.title || "þessu"}“`, () =>
                                        set((d) => void (d.destinations[i].services = d.destinations[i].services.filter((_, k) => k !== j)))
                                      )
                                    }
                                  >
                                    <Field label="Heiti" value={s.title} onChange={(x) => set((d) => void (d.destinations[i].services[j].title = x))} />
                                    <Field label="Texti" multiline value={s.text} onChange={(x) => set((d) => void (d.destinations[i].services[j].text = x))} />
                                  </Item>
                                ))}
                              </div>
                              <div className="mt-3">
                                <AddButton onClick={() => set((d) => void d.destinations[i].services.push({ title: "", text: "" }))}>Bæta við</AddButton>
                              </div>
                            </div>
                            <Field
                              label="Texti í „Við setjum ferðina saman fyrir ykkur“"
                              multiline
                              value={d0.planning}
                              onChange={(x) => set((d) => void (d.destinations[i].planning = x))}
                            />
                          </>
                        )}
                      </Item>
                    );
                  })}
                </div>
              </Card>
            </>
          )}

          {/* ═══════════════ TILEFNI ═══════════════ */}
          {tab === "tilefni" && (
            <>
              <Intro>Textarnir á síðunni um ferðalög og sérstök tilefni.</Intro>
              <Card title="Efst á síðunni" where="Tilefnissíðan" href="/brudkaup">
                <Field label="Fyrirsögn" multiline value={c.wedding.title} onChange={(x) => set((d) => void (d.wedding.title = x))} />
                <Field label="Stutt lýsing" hint="Birtist líka á forsíðunni." multiline value={c.wedding.lead} onChange={(x) => set((d) => void (d.wedding.lead = x))} />
              </Card>
              <Card title="Meginmál" where="Tilefnissíðan" href="/brudkaup">
                <ListField label="Inngangur" hint="Hver reitur er ein málsgrein." addLabel="Bæta við málsgrein" multiline value={c.wedding.intro} onChange={(x) => set((d) => void (d.wedding.intro = x))} />
                <ListField label="Hugmyndir" hint="Stutt orð sem birtast í einni línu undir innganginum." addLabel="Bæta við hugmynd" value={c.wedding.ideas} onChange={(x) => set((d) => void (d.wedding.ideas = x))} />
                <ListField label="Allt á einum stað" hint="Gátlistinn hægra megin." addLabel="Bæta við atriði" value={c.wedding.extras} onChange={(x) => set((d) => void (d.wedding.extras = x))} />
              </Card>
            </>
          )}

          {/* ═══════════════ UMSAGNIR ═══════════════ */}
          {tab === "umsagnir" && (
            <>
              <Intro>Stuttar umsagnir virka best – ein birtist í einu á forsíðunni og þær skiptast sjálfkrafa.</Intro>
              <Card title={`Umsagnir (${c.testimonials.length})`} where="Forsíðan" href="/">
                <div className="space-y-2">
                  {c.testimonials.map((t, i) => (
                    <Item
                      key={i}
                      title={t.name}
                      subtitle={t.text}
                      onRemove={() => confirmRemove(`umsögninni frá ${t.name || "þessum gesti"}`, () => set((d) => void (d.testimonials = d.testimonials.filter((_, k) => k !== i))))}
                    >
                      <Field label="Umsögn" multiline value={t.text} onChange={(x) => set((d) => void (d.testimonials[i].text = x))} />
                      <Field label="Nafn" placeholder="Nafn gests" value={t.name} onChange={(x) => set((d) => void (d.testimonials[i].name = x))} />
                      <Field label="Ferð" placeholder="t.d. Villa í Toskana" value={t.trip} onChange={(x) => set((d) => void (d.testimonials[i].trip = x))} />
                    </Item>
                  ))}
                </div>
                <AddButton onClick={() => set((d) => void d.testimonials.push({ name: "", trip: "", text: "" }))}>Bæta við umsögn</AddButton>
              </Card>
            </>
          )}

          {/* ═══════════════ SAMBAND ═══════════════ */}
          {tab === "samband" && (
            <>
              <Intro>Birtist á öllum síðum, neðst og í fyrirspurnum.</Intro>
              <Card title="Sími & netfang">
                <Field label="Netfang" hint="Fyrirspurnir af vefnum berast hingað." value={c.site.email} onChange={(x) => set((d) => void (d.site.email = x))} />
                <Field label="Sími á Íslandi" value={c.site.phoneIS} onChange={(x) => set((d) => void (d.site.phoneIS = x))} />
                <Field label="Sími á Ítalíu (WhatsApp)" hint="WhatsApp-hnappurinn notar þetta númer." value={c.site.phoneIT} onChange={(x) => set((d) => void (d.site.phoneIT = x))} />
              </Card>
            </>
          )}
        </div>
      </div>

      {/* Vista */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 backdrop-blur shadow-[0_-8px_30px_rgba(7,21,23,0.08)]">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8 py-3 md:py-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
          <div className="flex-1 text-center sm:text-left text-[15px]">
            {pending ? (
              <span className="text-ink/60">Vista…</span>
            ) : result?.ok ? (
              <span className="font-semibold text-leaf">
                ✓ Vistað!{" "}
                <span className="font-normal text-ink/60">
                  {result.mode === "github" ? "Breytingarnar birtast á vefnum eftir 1–2 mínútur." : "Breytingarnar eru komnar á vefinn."}
                </span>
              </span>
            ) : result && !result.ok ? (
              <span className="text-red-600">
                <b>Tókst ekki að vista.</b> Reyndu aftur eftir smá stund. <span className="block text-xs text-red-600/70 break-words">{result.error}</span>
              </span>
            ) : dirty ? (
              <span className="font-semibold text-gold">● Þú átt eftir að vista breytingarnar.</span>
            ) : (
              <span className="text-ink/50">{storage === "github" ? "Allt vistað. Breytingar birtast 1–2 mínútum eftir að þú vistar." : "Allt vistað."}</span>
            )}
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {dirty && !pending && (
              <button type="button" onClick={undo} className="rounded-full px-5 py-3.5 text-sm font-medium text-ink/60 hover:text-ink hover:bg-mist transition-colors">
                Hætta við
              </button>
            )}
            <button
              type="button"
              onClick={save}
              disabled={pending || !dirty}
              className="flex-1 sm:flex-none rounded-full bg-forest text-white px-8 py-3.5 text-base font-semibold hover:bg-forest-deep transition-colors disabled:bg-ink/15 disabled:text-ink/40 disabled:cursor-not-allowed"
            >
              {pending ? "Vista…" : "Vista"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Intro({ children }: { children: ReactNode }) {
  return <p className="text-[15px] md:text-base text-ink/65 leading-relaxed">{children}</p>;
}
