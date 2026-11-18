import "server-only";
import { createSign } from "node:crypto";

/*
 * Tölur úr Google Analytics fyrir stjórnborðið (Google Analytics Data API).
 *
 * Krefst umhverfisbreytunnar GA_SERVICE_ACCOUNT_JSON: öll JSON-lykilskráin fyrir
 * þjónustuaðgang (service account) sem hefur „Viewer“-aðgang að GA-eigninni.
 * GA_PROPERTY_ID má yfirskrifa; sjálfgefið er eignin bellaitalia.is.
 */

const PROPERTY_ID = process.env.GA_PROPERTY_ID ?? "565054987";
const CACHE_MS = 10 * 60 * 1000;

export type StatsTotals = { visitors: number; sessions: number; views: number };

export type Stats =
  | { status: "unconfigured" }
  | { status: "error"; message: string }
  | {
      status: "ok";
      fetchedAt: string;
      last7: StatsTotals;
      last28: StatsTotals;
      /** Síðustu 28 dagar, elsti fyrst. date = "YYYY-MM-DD" */
      daily: { date: string; visitors: number; views: number }[];
      pages: { path: string; views: number; visitors: number }[];
      channels: { name: string; sessions: number }[];
      /** Síðustu 28 dagar */
      leads: number;
      contacts: number;
    };

type ServiceAccount = { client_email: string; private_key: string };

function readAccount(): ServiceAccount | null {
  const raw = process.env.GA_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;
  try {
    const j = JSON.parse(raw) as Partial<ServiceAccount>;
    if (typeof j.client_email !== "string" || typeof j.private_key !== "string") return null;
    return { client_email: j.client_email, private_key: j.private_key.replace(/\\n/g, "\n") };
  } catch {
    return null;
  }
}

const b64url = (v: string | Buffer) => Buffer.from(v).toString("base64url");

let tokenCache: { token: string; expires: number } | null = null;

/** OAuth-aðgangslykill fyrir þjónustuaðganginn (JWT undirritað með einkalyklinum). */
async function accessToken(account: ServiceAccount): Promise<string> {
  if (tokenCache && tokenCache.expires > Date.now() + 60_000) return tokenCache.token;
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }))}.${b64url(
    JSON.stringify({
      iss: account.client_email,
      scope: "https://www.googleapis.com/auth/analytics.readonly",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  )}`;
  const signature = createSign("RSA-SHA256").update(unsigned).sign(account.private_key);
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${unsigned}.${b64url(signature)}` }),
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`Innskráning hjá Google mistókst (${res.status})`);
  const j = (await res.json()) as { access_token: string; expires_in: number };
  tokenCache = { token: j.access_token, expires: Date.now() + j.expires_in * 1000 };
  return j.access_token;
}

type Row = { dimensionValues?: { value: string }[]; metricValues?: { value: string }[] };
type Report = { rows?: Row[] };

const dim = (r: Row, i: number) => r.dimensionValues?.[i]?.value ?? "";
const num = (r: Row, i: number) => Number(r.metricValues?.[i]?.value ?? 0) || 0;

/** Les svör API-sins yfir í það form sem stjórnborðið sýnir (aðskilið svo hægt sé að prófa það). */
export function parseReports(reports: Report[], today = new Date()): Extract<Stats, { status: "ok" }> {
  const [totals, daily, pages, channels, events] = reports;

  const empty: StatsTotals = { visitors: 0, sessions: 0, views: 0 };
  const range = (name: string): StatsTotals => {
    const r = totals?.rows?.find((x) => dim(x, 0) === name);
    return r ? { visitors: num(r, 0), sessions: num(r, 1), views: num(r, 2) } : empty;
  };

  // Dagar án heimsókna koma ekki í svarinu – fyllum þá með núlli
  const byDate = new Map((daily?.rows ?? []).map((r) => [dim(r, 0), r]));
  const days: { date: string; visitors: number; views: number }[] = [];
  for (let i = 27; i >= 0; i--) {
    const d = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - i));
    const iso = d.toISOString().slice(0, 10);
    const r = byDate.get(iso.replace(/-/g, ""));
    days.push({ date: iso, visitors: r ? num(r, 0) : 0, views: r ? num(r, 1) : 0 });
  }

  const eventCount = (name: string) => {
    const r = events?.rows?.find((x) => dim(x, 0) === name);
    return r ? num(r, 0) : 0;
  };

  return {
    status: "ok",
    fetchedAt: today.toISOString(),
    last7: range("last7"),
    last28: range("last28"),
    daily: days,
    pages: (pages?.rows ?? []).map((r) => ({ path: dim(r, 0), views: num(r, 0), visitors: num(r, 1) })),
    channels: (channels?.rows ?? []).map((r) => ({ name: dim(r, 0), sessions: num(r, 0) })),
    leads: eventCount("generate_lead"),
    contacts: eventCount("contact"),
  };
}

let statsCache: { at: number; value: Stats } | null = null;

export async function getStats(): Promise<Stats> {
  const account = readAccount();
  if (!account) return { status: "unconfigured" };
  if (statsCache && Date.now() - statsCache.at < CACHE_MS) return statsCache.value;

  const last28 = { startDate: "27daysAgo", endDate: "today" };
  try {
    const token = await accessToken(account);
    const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:batchRunReports`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        requests: [
          {
            dateRanges: [
              { startDate: "6daysAgo", endDate: "today", name: "last7" },
              { ...last28, name: "last28" },
            ],
            metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "screenPageViews" }],
          },
          {
            dateRanges: [last28],
            dimensions: [{ name: "date" }],
            metrics: [{ name: "activeUsers" }, { name: "screenPageViews" }],
          },
          {
            dateRanges: [last28],
            dimensions: [{ name: "pagePath" }],
            metrics: [{ name: "screenPageViews" }, { name: "activeUsers" }],
            orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
            limit: 8,
          },
          {
            dateRanges: [last28],
            dimensions: [{ name: "sessionDefaultChannelGroup" }],
            metrics: [{ name: "sessions" }],
            orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
            limit: 6,
          },
          {
            dateRanges: [last28],
            dimensions: [{ name: "eventName" }],
            metrics: [{ name: "eventCount" }],
            dimensionFilter: { filter: { fieldName: "eventName", inListFilter: { values: ["generate_lead", "contact"] } } },
          },
        ],
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error("GA Data API svaraði", res.status, body);
      const hint =
        res.status === 403
          ? "Þjónustuaðgangurinn hefur ekki aðgang að Analytics-eigninni, eða Data API er ekki virkt."
          : `Google svaraði ${res.status}.`;
      return { status: "error", message: hint };
    }
    const j = (await res.json()) as { reports?: Report[] };
    const value = parseReports(j.reports ?? []);
    statsCache = { at: Date.now(), value };
    return value;
  } catch (err) {
    console.error("GA Data API: villa", err);
    return { status: "error", message: err instanceof Error ? err.message : "Óþekkt villa" };
  }
}
