"use client";

import { useState, useTransition, type ReactNode } from "react";
import type { Editable } from "../lib/content";
import { saveContent, type SaveResult } from "./actions";

/* ───────────────── Hjálparreitir ───────────────── */

const input =
  "w-full rounded-xl border border-white/15 bg-white/8 px-3.5 py-2.5 text-[15px] text-white placeholder:text-white/35 focus:outline-none focus:border-gold-light focus:ring-4 focus:ring-white/10 transition";
const labelCls = "block text-xs font-medium text-white/60 mb-1.5";

function Field({ label, value, onChange, hint }: { label: string; value: string; onChange: (v: string) => void; hint?: string }) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className={input} />
      {hint && <span className="mt-1 block text-[11px] text-white/40">{hint}</span>}
    </label>
  );
}

function Area({ label, value, onChange, rows = 3, hint }: { label: string; value: string; onChange: (v: string) => void; rows?: number; hint?: string }) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={rows} className={`${input} resize-y leading-relaxed`} />
      {hint && <span className="mt-1 block text-[11px] text-white/40">{hint}</span>}
    </label>
  );
}

/** Listi af textum – ein lína í reit fyrir hvert atriði. */
function Lines({ label, value, onChange, rows, hint }: { label: string; value: string[]; onChange: (v: string[]) => void; rows?: number; hint?: string }) {
  return (
    <Area
      label={label}
      value={value.join("\n")}
      onChange={(v) => onChange(v.split("\n"))}
      rows={rows ?? Math.max(2, Math.min(8, value.length + 1))}
      hint={hint ?? "Eitt atriði í hverri línu."}
    />
  );
}

function Prices({ value, onChange }: { value: { label: string; value: string }[]; onChange: (v: { label: string; value: string }[]) => void }) {
  const update = (i: number, k: "label" | "value", v: string) => onChange(value.map((p, j) => (j === i ? { ...p, [k]: v } : p)));
  return (
    <div>
      <span className={labelCls}>Verðlínur (birtast í „Lesa meira“ glugganum)</span>
      <div className="space-y-2">
        {value.map((p, i) => (
          <div key={i} className="grid grid-cols-[1fr_130px_auto] gap-2">
            <input type="text" value={p.label} onChange={(e) => update(i, "label", e.target.value)} placeholder="Lýsing, t.d. 2 klst · verð á mann" className={input} />
            <input type="text" value={p.value} onChange={(e) => update(i, "value", e.target.value)} placeholder="€150" className={input} />
            <button type="button" onClick={() => onChange(value.filter((_, j) => j !== i))} aria-label="Eyða línu" className="rounded-xl border border-white/15 px-3 text-white/60 hover:bg-white hover:text-ink transition-colors">
              ×
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => onChange([...value, { label: "", value: "" }])} className="mt-2 text-xs font-medium text-gold-light hover:text-white transition-colors">
        + Bæta við verðlínu
      </button>
    </div>
  );
}

function Section({ title, description, children, defaultOpen = false }: { title: string; description?: string; children: ReactNode; defaultOpen?: boolean }) {
  return (
    <details open={defaultOpen} className="group rounded-3xl bg-white/5 border border-white/10 open:border-white/20">
      <summary className="cursor-pointer list-none px-5 md:px-7 py-5 flex items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-xl md:text-2xl font-medium tracking-tight">{title}</h2>
          {description && <p className="mt-1 text-sm text-white/55">{description}</p>}
        </div>
        <span className="shrink-0 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="px-5 md:px-7 pb-7 space-y-6">{children}</div>
    </details>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl bg-ink/60 border border-white/10 p-4 md:p-5 space-y-4">
      <h3 className="font-display text-lg font-medium tracking-tight text-sand">{title}</h3>
      {children}
    </div>
  );
}

/* ───────────────── Ritill ───────────────── */

export default function AdminEditor({ initial, storage }: { initial: Editable; storage: "file" | "github" }) {
  const [c, setC] = useState<Editable>(initial);
  const [dirty, setDirty] = useState(false);
  const [result, setResult] = useState<SaveResult | null>(null);
  const [pending, start] = useTransition();

  const set = (fn: (draft: Editable) => Editable) => {
    setC((prev) => fn(structuredClone(prev)));
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
    <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-8 md:py-12 pb-36">
      <div className="mb-8">
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Stjórnborð</span>
        <h1 className="mt-3 font-display text-3xl md:text-4xl font-medium tracking-tight">Breyta verðum og textum</h1>
        <p className="mt-3 text-white/60 max-w-2xl text-[15px] leading-relaxed">
          Opnaðu hluta, breyttu textanum og smelltu á <strong className="text-white">Vista breytingar</strong> neðst.
          Myndir og uppbygging síðunnar breytast ekki hér – aðeins textar og verð.
        </p>
      </div>

      <div className="space-y-4">
        {/* Samband */}
        <Section title="Samband" description="Netfang og símanúmer sem birtast á öllum síðum og í fyrirspurnum.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Field label="Netfang" value={c.site.email} onChange={(v) => set((d) => ((d.site.email = v), d))} />
            <Field label="Sími (Ísland)" value={c.site.phoneIS} onChange={(v) => set((d) => ((d.site.phoneIS = v), d))} />
            <Field label="Sími (Ítalía / WhatsApp)" value={c.site.phoneIT} onChange={(v) => set((d) => ((d.site.phoneIT = v), d))} hint="WhatsApp-hlekkurinn fylgir þessu númeri." />
          </div>
        </Section>

        {/* Ferðir í Róm */}
        <Section title="Ferðir í Róm" description={`${c.tours.length} ferðir – verð, lýsingar og það sem er innifalið.`} defaultOpen>
          {c.tours.map((t, i) => (
            <Card key={t.id} title={t.title || t.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Heiti" value={t.title} onChange={(v) => set((d) => ((d.tours[i].title = v), d))} />
                <Field label="Stutt heiti (flýtival)" value={t.shortTitle} onChange={(v) => set((d) => ((d.tours[i].shortTitle = v), d))} />
                <Field label="Merki (t.d. Skoðunarferð)" value={t.tag} onChange={(v) => set((d) => ((d.tours[i].tag = v), d))} />
                <Field label="Verð á spjaldi" value={t.priceLabel} onChange={(v) => set((d) => ((d.tours[i].priceLabel = v), d))} hint="Stutt, t.d. „€150 á mann“ eða „Verð eftir fyrirspurn“." />
              </div>
              <Area label="Stutt lýsing á spjaldi" value={t.summary} onChange={(v) => set((d) => ((d.tours[i].summary = v), d))} rows={2} />
              <Lines label="Áherslupunktar (pillur á spjaldi)" value={t.highlights} onChange={(v) => set((d) => ((d.tours[i].highlights = v), d))} />
              <Prices value={t.prices} onChange={(v) => set((d) => ((d.tours[i].prices = v), d))} />
              <Lines label="Lýsing í „Lesa meira“ (ein málsgrein í línu)" value={t.details.intro} onChange={(v) => set((d) => ((d.tours[i].details.intro = v), d))} rows={4} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Lines label="Brottför" value={t.details.schedule} onChange={(v) => set((d) => ((d.tours[i].details.schedule = v), d))} rows={2} />
                <Field label="Lengd" value={t.details.duration} onChange={(v) => set((d) => ((d.tours[i].details.duration = v), d))} />
              </div>
              <Lines label="Innifalið" value={t.details.included} onChange={(v) => set((d) => ((d.tours[i].details.included = v), d))} rows={3} />
              {t.details.stops.length > 0 && (
                <Lines label="Staðir / stopp" value={t.details.stops} onChange={(v) => set((d) => ((d.tours[i].details.stops = v), d))} rows={4} />
              )}
              <Area label="Athugasemd um verð" value={t.details.note} onChange={(v) => set((d) => ((d.tours[i].details.note = v), d))} rows={2} hint="Birtist undir verðinu, t.d. „Verð fer eftir fjölda þátttakenda…“" />
            </Card>
          ))}
        </Section>

        {/* Villur */}
        <Section title="Villur – verðtafla og textar" description="Viðmiðunarverð eftir stærð, inngangstextar og „Gott að vita“.">
          <Card title="Viðmið eftir stærð">
            <div className="space-y-2">
              <div className="hidden md:grid grid-cols-3 gap-2 text-[11px] uppercase tracking-[0.15em] text-white/40 px-1">
                <span>Stærð</span>
                <span>Verð í evrum</span>
                <span>Um í krónum</span>
              </div>
              {c.villaPricing.map((r, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <input type="text" value={r.size} onChange={(e) => set((d) => ((d.villaPricing[i].size = e.target.value), d))} className={input} />
                  <input type="text" value={r.eur} onChange={(e) => set((d) => ((d.villaPricing[i].eur = e.target.value), d))} className={input} />
                  <input type="text" value={r.isk} onChange={(e) => set((d) => ((d.villaPricing[i].isk = e.target.value), d))} className={input} />
                </div>
              ))}
            </div>
            <Area label="Skýring við verðtöfluna" value={c.villaText.pricingNote} onChange={(v) => set((d) => ((d.villaText.pricingNote = v), d))} rows={2} />
          </Card>
          <Card title="Textar á villusíðu">
            <Lines label="Inngangur („Við finnum réttu eignina“) – ein málsgrein í línu" value={c.villaText.intro} onChange={(v) => set((d) => ((d.villaText.intro = v), d))} rows={5} />
            <Lines label="Gott að vita" value={c.villaText.practical} onChange={(v) => set((d) => ((d.villaText.practical = v), d))} rows={4} />
            <Area label="Gjaldfrjáls þjónusta – texti" value={c.villaText.bookingBenefit} onChange={(v) => set((d) => ((d.villaText.bookingBenefit = v), d))} rows={3} />
            <Lines label="Um þjónustuna (tvær málsgreinar)" value={c.villaText.service} onChange={(v) => set((d) => ((d.villaText.service = v), d))} rows={5} />
          </Card>
        </Section>

        {/* Dæmi um villur */}
        <Section title="Dæmi um villur" description="Fjögur dæmi á forsíðu og villusíðu. Myndirnar breytast ekki hér.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.villas.map((v, i) => (
              <Card key={v.id} title={v.name || v.id}>
                <Field label="Heiti" value={v.name} onChange={(x) => set((d) => ((d.villas[i].name = x), d))} />
                <Field label="Svæði (merki)" value={v.region} onChange={(x) => set((d) => ((d.villas[i].region = x), d))} />
                <Area label="Lýsing" value={v.text} onChange={(x) => set((d) => ((d.villas[i].text = x), d))} rows={3} />
                <Lines label="Eiginleikar (pillur)" value={v.features} onChange={(x) => set((d) => ((d.villas[i].features = x), d))} rows={3} />
              </Card>
            ))}
          </div>
        </Section>

        {/* Viðbótarþjónusta */}
        <Section title="Viðbótarþjónusta í villuna" description="Einkakokkur, ljósmyndari, vínsmökkun, akstur.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.villaServices.map((s, i) => (
              <Card key={s.id} title={s.title || s.id}>
                <Field label="Heiti" value={s.title} onChange={(x) => set((d) => ((d.villaServices[i].title = x), d))} />
                <Area label="Texti" value={s.text} onChange={(x) => set((d) => ((d.villaServices[i].text = x), d))} rows={3} />
              </Card>
            ))}
          </div>
        </Section>

        {/* Borgir */}
        <Section title="Róm og aðrar borgir" description="Textar á borgaspjöldum og borgasíðum (Flórens, Napoli · Amalfi · Pompei, Feneyjar).">
          {c.destinations.map((d0, i) => (
            <Card key={d0.slug} title={d0.title || d0.slug}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Heiti" value={d0.title} onChange={(x) => set((d) => ((d.destinations[i].title = x), d))} />
                <Field label="Nafn í texta (t.d. „í Flórens“)" value={d0.name} onChange={(x) => set((d) => ((d.destinations[i].name = x), d))} />
              </div>
              <Area label="Stutt lýsing (spjald og hero)" value={d0.lead} onChange={(x) => set((d) => ((d.destinations[i].lead = x), d))} rows={2} />
              {d0.slug !== "rom" && (
                <>
                  <Lines label="Inngangur – ein málsgrein í línu" value={d0.intro} onChange={(x) => set((d) => ((d.destinations[i].intro = x), d))} rows={4} />
                  <div>
                    <span className={labelCls}>Þjónusta í boði</span>
                    <div className="space-y-2">
                      {d0.services.map((s, j) => (
                        <div key={j} className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-2">
                          <input type="text" value={s.title} onChange={(e) => set((d) => ((d.destinations[i].services[j].title = e.target.value), d))} placeholder="Heiti" className={input} />
                          <input type="text" value={s.text} onChange={(e) => set((d) => ((d.destinations[i].services[j].text = e.target.value), d))} placeholder="Stutt lýsing" className={input} />
                          <button type="button" onClick={() => set((d) => ((d.destinations[i].services = d.destinations[i].services.filter((_, k) => k !== j)), d))} aria-label="Eyða" className="rounded-xl border border-white/15 px-3 py-2 text-white/60 hover:bg-white hover:text-ink transition-colors">
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                    <button type="button" onClick={() => set((d) => (d.destinations[i].services.push({ title: "", text: "" }), d))} className="mt-2 text-xs font-medium text-gold-light hover:text-white transition-colors">
                      + Bæta við þjónustu
                    </button>
                  </div>
                  <Area label="Skipulagning – texti" value={d0.planning} onChange={(x) => set((d) => ((d.destinations[i].planning = x), d))} rows={2} />
                </>
              )}
            </Card>
          ))}
        </Section>

        {/* Brúðkaup */}
        <Section title="Brúðkaup og sérstök tilefni">
          <Field label="Fyrirsögn" value={c.wedding.title} onChange={(v) => set((d) => ((d.wedding.title = v), d))} />
          <Area label="Stutt lýsing" value={c.wedding.lead} onChange={(v) => set((d) => ((d.wedding.lead = v), d))} rows={2} />
          <Lines label="Inngangur – ein málsgrein í línu" value={c.wedding.intro} onChange={(v) => set((d) => ((d.wedding.intro = v), d))} rows={4} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Lines label="Hugmyndir (pillur)" value={c.wedding.ideas} onChange={(v) => set((d) => ((d.wedding.ideas = v), d))} />
            <Lines label="Þjónusta í boði (gátlisti)" value={c.wedding.extras} onChange={(v) => set((d) => ((d.wedding.extras = v), d))} />
          </div>
        </Section>

        {/* Umsagnir */}
        <Section title="Umsagnir gesta" description="Birtast á forsíðu. Eyddu texta til að fella umsögn út, eða bættu við nýrri.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.testimonials.map((t, i) => (
              <Card key={i} title={t.name || `Umsögn ${i + 1}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Nafn" value={t.name} onChange={(x) => set((d) => ((d.testimonials[i].name = x), d))} />
                  <Field label="Ferð" value={t.trip} onChange={(x) => set((d) => ((d.testimonials[i].trip = x), d))} />
                </div>
                <Area label="Umsögn" value={t.text} onChange={(x) => set((d) => ((d.testimonials[i].text = x), d))} rows={4} />
                <button type="button" onClick={() => set((d) => ((d.testimonials = d.testimonials.filter((_, k) => k !== i)), d))} className="text-xs font-medium text-red-400 hover:text-red-300 transition-colors">
                  Eyða umsögn
                </button>
              </Card>
            ))}
          </div>
          <button type="button" onClick={() => set((d) => (d.testimonials.push({ name: "", trip: "", text: "" }), d))} className="text-xs font-medium text-gold-light hover:text-white transition-colors">
            + Bæta við umsögn
          </button>
        </Section>
      </div>

      {/* Vista */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-3 md:px-4 pb-3 md:pb-4 pointer-events-none">
        <div className="pointer-events-auto mx-auto max-w-[1200px] glass-dark rounded-3xl px-4 md:px-6 py-3 md:py-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
          <div className="text-sm text-white/70 flex-1 text-center sm:text-left">
            {result?.ok
              ? result.mode === "github"
                ? "Vistað. Breytingarnar birtast á vefnum eftir 1–2 mínútur þegar síðan hefur verið endurbyggð."
                : "Vistað. Breytingarnar eru komnar inn á vefinn."
              : result && !result.ok
                ? <span className="text-red-400">{result.error}</span>
                : dirty
                  ? "Óvistaðar breytingar."
                  : storage === "github"
                    ? "Breytingar vistast í GitHub og birtast eftir endurbyggingu."
                    : "Engar breytingar."}
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
    </div>
  );
}
