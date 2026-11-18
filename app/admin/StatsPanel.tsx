"use client";

import { useState } from "react";
import type { Stats } from "../lib/ga";

/* Flipinn „Heimsóknir“: helstu tölur úr Google Analytics, lesnar á þjóninum (app/lib/ga.ts). */

// Íslenskt talnasnið (1.904) – skrifað út því ekki allir vafrar þekkja „is-IS“
const nf = { format: (n: number) => String(Math.round(n)).replace(/B(?=(d{3})+(?!d))/g, ".") };
const MONTHS = ["jan.", "feb.", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "sept.", "okt.", "nóv.", "des."];
const WEEKDAYS = ["sun.", "mán.", "þri.", "mið.", "fim.", "fös.", "lau."];

function dayLabel(iso: string, withWeekday = false) {
  const d = new Date(`${iso}T00:00:00Z`);
  const s = `${d.getUTCDate()}. ${MONTHS[d.getUTCMonth()]}`;
  return withWeekday ? `${WEEKDAYS[d.getUTCDay()]} ${s}` : s;
}

/** Heiti rása hjá Google á íslensku */
const CHANNELS: Record<string, string> = {
  Direct: "Beint (slóð slegin inn)",
  "Organic Search": "Leitarvélar",
  "Organic Social": "Samfélagsmiðlar",
  "Paid Social": "Auglýsingar á samfélagsmiðlum",
  "Paid Search": "Auglýsingar á leitarvélum",
  Referral: "Tenglar af öðrum síðum",
  Email: "Tölvupóstur",
  Unassigned: "Óflokkað",
};

function Panel({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl bg-white border border-ink/10 shadow-sm p-5 md:p-7">
      <h2 className="font-display text-xl font-medium tracking-tight">{title}</h2>
      {note && <p className="mt-1 text-sm text-ink/55">{note}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Tile({ label, value, sub }: { label: string; value: number; sub: string }) {
  return (
    <div className="rounded-2xl bg-white border border-ink/10 shadow-sm p-5">
      <p className="text-sm font-semibold text-ink/60">{label}</p>
      <p className="mt-2 font-display text-4xl font-medium tracking-tight tabular-nums">{nf.format(value)}</p>
      <p className="mt-1 text-sm text-ink/50">{sub}</p>
    </div>
  );
}

/** Súlurit: gestir á dag síðustu 28 daga. Ein röð, einn litur – heitið segir hvað er sýnt. */
function DailyChart({ daily }: { daily: { date: string; visitors: number; views: number }[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const max = Math.max(1, ...daily.map((d) => d.visitors));
  // Efri mörk ássins: næsta „hreina“ tala fyrir ofan hæsta gildið
  const step = max <= 5 ? 1 : max <= 20 ? 5 : max <= 50 ? 10 : max <= 200 ? 50 : Math.pow(10, Math.floor(Math.log10(max)));
  const top = Math.ceil(max / step) * step;
  const active = hover === null ? null : daily[hover];

  return (
    <div>
      <div className="relative h-48">
        {/* Hjálparlínur og gildi á ásnum */}
        {[1, 0.5, 0].map((f) => (
          <div key={f} className="absolute inset-x-0 flex items-center gap-2" style={{ bottom: `${f * 100}%`, transform: "translateY(50%)" }}>
            <span className="w-8 shrink-0 text-right text-xs tabular-nums text-ink/45">{nf.format(Math.round(top * f))}</span>
            <span className={`h-px flex-1 ${f === 0 ? "bg-ink/25" : "bg-ink/10"}`} />
          </div>
        ))}
        <div className="absolute inset-y-0 left-10 right-0 flex items-end gap-[2px]" onMouseLeave={() => setHover(null)}>
          {daily.map((d, i) => (
            <button
              key={d.date}
              type="button"
              aria-label={`${dayLabel(d.date, true)}: ${nf.format(d.visitors)} gestir, ${nf.format(d.views)} flettingar`}
              onMouseEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
              className="group relative h-full flex-1 min-w-0 flex items-end focus:outline-none"
            >
              <span
                className={`block w-full rounded-t-[4px] transition-colors ${hover === i ? "bg-forest-deep" : "bg-forest"} group-focus-visible:ring-2 group-focus-visible:ring-forest/40`}
                style={{ height: d.visitors === 0 ? "2px" : `${Math.max(3, (d.visitors / top) * 100)}%`, opacity: d.visitors === 0 ? 0.25 : 1 }}
              />
            </button>
          ))}
          {active && hover !== null && (
            <div
              role="status"
              className="pointer-events-none absolute -top-2 z-10 -translate-y-full rounded-xl bg-ink px-3 py-2 text-xs text-white shadow-lg whitespace-nowrap"
              style={
                hover < daily.length / 2
                  ? { left: `${(hover / daily.length) * 100}%` }
                  : { right: `${((daily.length - 1 - hover) / daily.length) * 100}%` }
              }
            >
              <span className="block font-semibold">{dayLabel(active.date, true)}</span>
              <span className="block tabular-nums text-white/80">
                {nf.format(active.visitors)} gestir · {nf.format(active.views)} flettingar
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-2 ml-10 flex justify-between text-xs text-ink/50">
        <span>{dayLabel(daily[0].date)}</span>
        <span>{dayLabel(daily[Math.floor(daily.length / 2)].date)}</span>
        <span>í dag</span>
      </div>
    </div>
  );
}

/** Listi með hlutfallsstiku: gildið stendur alltaf sem tala, stikan sýnir bara stærðarhlutfall. */
function BarList({ rows, unit }: { rows: { label: string; value: number }[]; unit: string }) {
  const max = Math.max(1, ...rows.map((r) => r.value));
  if (!rows.length) return <p className="text-[15px] text-ink/50">Engin gögn enn.</p>;
  return (
    <ul className="space-y-3">
      {rows.map((r) => (
        <li key={r.label}>
          <div className="flex items-baseline justify-between gap-4 text-[15px]">
            <span className="min-w-0 truncate text-ink" title={r.label}>
              {r.label}
            </span>
            <span className="shrink-0 tabular-nums font-semibold text-ink">
              {nf.format(r.value)} <span className="font-normal text-ink/50">{unit}</span>
            </span>
          </div>
          <div className="mt-1.5 h-1.5 rounded-full bg-ink/8">
            <div className="h-full rounded-full bg-forest" style={{ width: `${Math.max(2, (r.value / max) * 100)}%` }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function StatsPanel({ stats, trackingOn }: { stats: Stats; trackingOn: boolean }) {
  if (stats.status === "unconfigured") {
    return (
      <Panel title="Tölurnar eru ekki tengdar enn">
        <div className="space-y-3 text-[15px] leading-relaxed text-ink/70">
          <p>
            {trackingOn
              ? "Mælingin er í gangi og Google safnar tölunum, en stjórnborðið hefur ekki enn fengið aðgang til að sækja þær."
              : "Engin mæling er uppsett. Settu fyrst inn Measurement ID undir „Mæling“."}
          </p>
          <p>
            Til að tölurnar birtist hér þarf að setja umhverfisbreytuna <code>GA_SERVICE_ACCOUNT_JSON</code> á Vercel (lykilskrá
            þjónustuaðgangs með lesaðgang að Analytics) og birta vefinn aftur. Þangað til sjást tölurnar á{" "}
            <a href="https://analytics.google.com" target="_blank" rel="noreferrer" className="font-semibold text-forest underline underline-offset-4">
              analytics.google.com
            </a>
            .
          </p>
        </div>
      </Panel>
    );
  }

  if (stats.status === "error") {
    return (
      <Panel title="Tókst ekki að sækja tölurnar">
        <p className="text-[15px] leading-relaxed text-ink/70">{stats.message}</p>
        <p className="mt-3 text-[15px] text-ink/70">
          Tölurnar sjást áfram á{" "}
          <a href="https://analytics.google.com" target="_blank" rel="noreferrer" className="font-semibold text-forest underline underline-offset-4">
            analytics.google.com
          </a>
          .
        </p>
      </Panel>
    );
  }

  const { last7, last28, daily, pages, channels, leads, contacts } = stats;
  const fetched = new Date(stats.fetchedAt);
  const time = `${String(fetched.getHours()).padStart(2, "0")}:${String(fetched.getMinutes()).padStart(2, "0")}`;

  return (
    <>
      <p className="text-[15px] md:text-base text-ink/65 leading-relaxed">
        Tölur úr Google Analytics. Aðeins gestir sem samþykkja vafrakökur eru taldir, svo raunveruleg umferð er eitthvað meiri.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <Tile label="Gestir" value={last7.visitors} sub="síðustu 7 daga" />
        <Tile label="Gestir" value={last28.visitors} sub="síðustu 28 daga" />
        <Tile label="Flettingar" value={last28.views} sub="síðustu 28 daga" />
        <Tile label="Fyrirspurnir" value={leads} sub="sendar, síðustu 28 daga" />
      </div>

      <Panel title="Gestir á dag" note="Síðustu 28 dagar. Bentu á súlu til að sjá daginn.">
        <DailyChart daily={daily} />
      </Panel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Panel title="Vinsælustu síðurnar" note="Flettingar síðustu 28 daga.">
          <BarList unit="flettingar" rows={pages.map((p) => ({ label: p.path === "/" ? "Forsíða" : p.path, value: p.views }))} />
        </Panel>
        <Panel title="Hvaðan koma gestirnir?" note="Heimsóknir síðustu 28 daga.">
          <BarList unit="heimsóknir" rows={channels.map((c) => ({ label: CHANNELS[c.name] ?? c.name, value: c.sessions }))} />
        </Panel>
      </div>

      <Panel title="Samband">
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-[15px]">
          <div>
            <dt className="text-ink/60">Sendar fyrirspurnir</dt>
            <dd className="mt-1 font-display text-2xl font-medium tabular-nums">{nf.format(leads)}</dd>
          </div>
          <div>
            <dt className="text-ink/60">Smellir á síma, netfang og WhatsApp</dt>
            <dd className="mt-1 font-display text-2xl font-medium tabular-nums">{nf.format(contacts)}</dd>
          </div>
          <div>
            <dt className="text-ink/60">Heimsóknir alls</dt>
            <dd className="mt-1 font-display text-2xl font-medium tabular-nums">{nf.format(last28.sessions)}</dd>
          </div>
        </dl>
        <p className="mt-4 text-sm text-ink/50">Síðustu 28 dagar.</p>
      </Panel>

      <p className="text-sm text-ink/50">
        Sótt kl. {time}. Tölurnar uppfærast á um 10 mínútna fresti; nýjustu heimsóknir geta verið nokkrar klukkustundir að skila sér frá Google.
      </p>
    </>
  );
}
