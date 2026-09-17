import "server-only";
import fs from "node:fs";
import path from "node:path";
import {
  site as siteDefaults,
  tours as tourDefaults,
  villaPricing as villaPricingDefaults,
  villaText as villaTextDefaults,
  villas as villaDefaults,
  villaServices as villaServiceDefaults,
  destinations as destinationDefaults,
  wedding as weddingDefaults,
  testimonials as testimonialDefaults,
  type Tour,
  type Villa,
  type VillaService,
  type Destination,
} from "../data/site";

/**
 * Efni síðunnar = sjálfgefið efni í data/site.ts + breytingar sem Hildur gerir í /admin.
 * Breytingarnar geymast í data/content.json (aðeins textar og verð – myndir og slóðir koma
 * alltaf úr kóðanum) og eru lagðar ofan á sjálfgefna efnið hér.
 */

export type Content = {
  site: typeof siteDefaults;
  tours: Tour[];
  villaPricing: typeof villaPricingDefaults;
  villaText: typeof villaTextDefaults;
  villas: Villa[];
  villaServices: VillaService[];
  destinations: Destination[];
  wedding: typeof weddingDefaults;
  testimonials: typeof testimonialDefaults;
};

/** Það sem hægt er að breyta í /admin (allt annað kemur úr kóðanum). */
export type Editable = {
  site: { email: string; phoneIS: string; phoneIT: string };
  tours: {
    id: string;
    title: string;
    shortTitle: string;
    tag: string;
    summary: string;
    highlights: string[];
    priceLabel: string;
    prices: { label: string; value: string }[];
    details: {
      intro: string[];
      schedule: string[];
      duration: string;
      included: string[];
      note: string;
      stops: string[];
    };
  }[];
  villaPricing: { size: string; eur: string; isk: string }[];
  villaText: {
    intro: string[];
    practical: string[];
    service: string[];
    pricingNote: string;
    bookingBenefit: string;
    extras: string[];
  };
  villas: { id: string; name: string; region: string; text: string; features: string[] }[];
  villaServices: { id: string; title: string; text: string }[];
  destinations: {
    slug: string;
    name: string;
    title: string;
    lead: string;
    intro: string[];
    services: { title: string; text: string }[];
    planning: string;
  }[];
  wedding: { title: string; lead: string; intro: string[]; ideas: string[]; extras: string[] };
  testimonials: { name: string; trip: string; text: string }[];
};

export const defaults: Content = {
  site: siteDefaults,
  tours: tourDefaults,
  villaPricing: villaPricingDefaults,
  villaText: villaTextDefaults,
  villas: villaDefaults,
  villaServices: villaServiceDefaults,
  destinations: destinationDefaults,
  wedding: weddingDefaults,
  testimonials: testimonialDefaults,
};

export const CONTENT_FILE = path.join(process.cwd(), "data", "content.json");

const str = (v: unknown, fallback = ""): string => (typeof v === "string" ? v : fallback);
const list = (v: unknown, fallback: string[] = []): string[] =>
  Array.isArray(v) ? v.map((x) => String(x ?? "")).filter((x) => x.trim() !== "") : fallback;

/** Dregur ritstýranlega hluta úr fullu efni (notað til að fylla admin-formið). */
export function toEditable(c: Content): Editable {
  return {
    site: { email: c.site.email, phoneIS: c.site.phoneIS, phoneIT: c.site.phoneIT },
    tours: c.tours.map((t) => ({
      id: t.id,
      title: t.title,
      shortTitle: t.shortTitle,
      tag: t.tag,
      summary: t.summary,
      highlights: t.highlights,
      priceLabel: t.priceLabel,
      prices: t.prices ?? [],
      details: {
        intro: t.details.intro,
        schedule: t.details.schedule ?? [],
        duration: t.details.duration ?? "",
        included: t.details.included ?? [],
        note: t.details.note ?? "",
        stops: t.details.stops ?? [],
      },
    })),
    villaPricing: c.villaPricing.map((r) => ({ ...r })),
    villaText: {
      intro: c.villaText.intro,
      practical: c.villaText.practical,
      service: c.villaText.service,
      pricingNote: c.villaText.pricingNote,
      bookingBenefit: c.villaText.bookingBenefit,
      extras: c.villaText.extras,
    },
    villas: c.villas.map((v) => ({ id: v.id, name: v.name, region: v.region, text: v.text, features: v.features })),
    villaServices: c.villaServices.map((s) => ({ id: s.id, title: s.title, text: s.text })),
    destinations: c.destinations.map((d) => ({
      slug: d.slug,
      name: d.name,
      title: d.title,
      lead: d.lead,
      intro: d.intro,
      services: d.services.map(({ title, text }) => ({ title, text })),
      planning: d.planning,
    })),
    wedding: {
      title: c.wedding.title,
      lead: c.wedding.lead,
      intro: c.wedding.intro,
      ideas: c.wedding.ideas,
      extras: c.wedding.extras,
    },
    testimonials: c.testimonials.map((t) => ({ name: t.name, trip: t.trip, text: t.text })),
  };
}

/**
 * Leggur vistaðar breytingar ofan á sjálfgefið efni. Aðeins ritstýranleg svið eru tekin,
 * hlutir eru paraðir á id/slug (ferðir, villur, þjónusta, borgir) eða staðsetningu (verðtafla, umsagnir),
 * og ógilt eða vantandi efni fellur til baka á sjálfgefið.
 */
export function applyEditable(base: Content, raw: unknown): Content {
  if (!raw || typeof raw !== "object") return base;
  const e = raw as Partial<Record<keyof Editable, unknown>>;
  const out: Content = { ...base };

  if (e.site && typeof e.site === "object") {
    const s = e.site as Record<string, unknown>;
    const phoneIT = str(s.phoneIT, base.site.phoneIT);
    out.site = {
      ...base.site,
      email: str(s.email, base.site.email),
      phoneIS: str(s.phoneIS, base.site.phoneIS),
      phoneIT,
      whatsapp: `https://wa.me/${phoneIT.replace(/\D/g, "")}`,
    };
  }

  if (Array.isArray(e.tours)) {
    const byId = new Map((e.tours as Record<string, unknown>[]).filter(Boolean).map((t) => [String(t.id), t]));
    out.tours = base.tours.map((t) => {
      const s = byId.get(t.id);
      if (!s) return t;
      const d = (s.details && typeof s.details === "object" ? s.details : {}) as Record<string, unknown>;
      const prices = Array.isArray(s.prices)
        ? (s.prices as Record<string, unknown>[])
            .map((p) => ({ label: str(p?.label), value: str(p?.value) }))
            .filter((p) => p.label || p.value)
        : t.prices;
      const opt = (v: string[]) => (v.length ? v : undefined);
      return {
        ...t,
        title: str(s.title, t.title),
        shortTitle: str(s.shortTitle, t.shortTitle),
        tag: str(s.tag, t.tag),
        summary: str(s.summary, t.summary),
        highlights: list(s.highlights, t.highlights),
        priceLabel: str(s.priceLabel, t.priceLabel),
        prices: prices && prices.length ? prices : undefined,
        details: {
          intro: list(d.intro, t.details.intro),
          schedule: opt(list(d.schedule)),
          duration: str(d.duration) || undefined,
          included: opt(list(d.included)),
          note: str(d.note) || undefined,
          stops: opt(list(d.stops)),
        },
      };
    });
  }

  if (Array.isArray(e.villaPricing)) {
    const rows = e.villaPricing as Record<string, unknown>[];
    out.villaPricing = base.villaPricing.map((r, i) => {
      const s = rows[i];
      return s ? { size: str(s.size, r.size), eur: str(s.eur, r.eur), isk: str(s.isk, r.isk) } : r;
    });
  }

  if (e.villaText && typeof e.villaText === "object") {
    const s = e.villaText as Record<string, unknown>;
    out.villaText = {
      intro: list(s.intro, base.villaText.intro),
      practical: list(s.practical, base.villaText.practical),
      service: list(s.service, base.villaText.service),
      pricingNote: str(s.pricingNote, base.villaText.pricingNote),
      bookingBenefit: str(s.bookingBenefit, base.villaText.bookingBenefit),
      extras: list(s.extras, base.villaText.extras),
    };
  }

  if (Array.isArray(e.villas)) {
    const byId = new Map((e.villas as Record<string, unknown>[]).filter(Boolean).map((v) => [String(v.id), v]));
    out.villas = base.villas.map((v) => {
      const s = byId.get(v.id);
      return s
        ? { ...v, name: str(s.name, v.name), region: str(s.region, v.region), text: str(s.text, v.text), features: list(s.features, v.features) }
        : v;
    });
  }

  if (Array.isArray(e.villaServices)) {
    const byId = new Map((e.villaServices as Record<string, unknown>[]).filter(Boolean).map((v) => [String(v.id), v]));
    out.villaServices = base.villaServices.map((v) => {
      const s = byId.get(v.id);
      return s ? { ...v, title: str(s.title, v.title), text: str(s.text, v.text) } : v;
    });
  }

  if (Array.isArray(e.destinations)) {
    const bySlug = new Map((e.destinations as Record<string, unknown>[]).filter(Boolean).map((d) => [String(d.slug), d]));
    out.destinations = base.destinations.map((d) => {
      const s = bySlug.get(d.slug);
      if (!s) return d;
      // Myndir koma alltaf úr kóðanum: parað á heiti, annars á stöðu í lista
      const services = Array.isArray(s.services)
        ? (s.services as Record<string, unknown>[])
            .map((x, i) => {
              const title = str(x?.title);
              const base = d.services.find((b) => b.title === title) ?? d.services[i];
              return { title, text: str(x?.text), image: base?.image, imageAlt: base?.imageAlt };
            })
            .filter((x) => x.title)
        : d.services;
      return {
        ...d,
        name: str(s.name, d.name),
        title: str(s.title, d.title),
        lead: str(s.lead, d.lead),
        intro: list(s.intro, d.intro),
        services,
        planning: str(s.planning, d.planning),
      };
    });
  }

  if (e.wedding && typeof e.wedding === "object") {
    const s = e.wedding as Record<string, unknown>;
    out.wedding = {
      ...base.wedding,
      title: str(s.title, base.wedding.title),
      lead: str(s.lead, base.wedding.lead),
      intro: list(s.intro, base.wedding.intro),
      ideas: list(s.ideas, base.wedding.ideas),
      extras: list(s.extras, base.wedding.extras),
    };
  }

  if (Array.isArray(e.testimonials)) {
    const rows = (e.testimonials as Record<string, unknown>[]).filter(Boolean);
    const mapped = rows
      .map((s) => ({ name: str(s.name), trip: str(s.trip), text: str(s.text) }))
      .filter((s) => s.name && s.text);
    if (mapped.length) out.testimonials = mapped;
  }

  return out;
}

/** Les vistaðar breytingar af diski (tóm ef skráin er ekki til eða ógild). */
export function readSaved(): unknown {
  try {
    return JSON.parse(fs.readFileSync(CONTENT_FILE, "utf8"));
  } catch {
    return {};
  }
}

/** Efni síðunnar eins og það á að birtast: sjálfgefið + breytingar úr /admin. */
export function getContent(): Content {
  return applyEditable(defaults, readSaved());
}
