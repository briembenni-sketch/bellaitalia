import type { Metadata } from "next";
import Link from "next/link";
import { isAuthed } from "../lib/auth";
import { getContent, toEditable, toMedia } from "../lib/content";
import { login, logout } from "./actions";
import AdminEditor from "./AdminEditor";

export const metadata: Metadata = {
  title: "Stjórnborð | Bella Italia",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ villa?: string }> }) {
  const authed = await isAuthed();
  const { villa } = await searchParams;

  if (!authed) {
    return (
      <main className="min-h-svh flex items-center justify-center px-5 bg-mist text-ink">
        <form action={login} className="w-full max-w-sm rounded-2xl bg-white border border-ink/10 shadow-sm p-8 md:p-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Bella Italia</span>
          <h1 className="mt-3 font-display text-3xl font-medium tracking-tight">Stjórnborð</h1>
          <p className="mt-2 text-[15px] text-ink/60">Hér breytir þú verðum og textum á vefnum.</p>
          <label htmlFor="password" className="mt-6 block text-[15px] font-semibold">
            Lykilorð
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoFocus
            required
            autoComplete="current-password"
            className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-base focus:outline-none focus:border-forest focus:ring-4 focus:ring-forest/15"
          />
          {villa && <p className="mt-3 text-sm text-red-600">Rangt lykilorð – reyndu aftur.</p>}
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-forest text-white px-6 py-3.5 text-base font-semibold hover:bg-forest-deep transition-colors"
          >
            Skrá inn
          </button>
          <Link href="/" className="mt-5 block text-center text-sm text-ink/50 hover:text-ink transition-colors">
            ← Til baka á vefinn
          </Link>
        </form>
      </main>
    );
  }

  const full = getContent();
  const content = toEditable(full);
  const media = toMedia(full);
  const storage = process.env.GITHUB_TOKEN && process.env.GITHUB_REPO ? "github" : "file";

  return (
    <main className="min-h-svh bg-mist text-ink">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-ink/10">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-baseline gap-3 min-w-0">
            <span className="font-display font-semibold text-lg tracking-tight">Bella Italia</span>
            <span className="text-sm text-ink/50 truncate">Stjórnborð</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/" target="_blank" className="hidden sm:inline-flex rounded-full border border-ink/15 px-4 py-2 text-sm font-medium hover:bg-ink hover:text-white transition-colors">
              Skoða vefinn ↗
            </Link>
            <form action={logout}>
              <button type="submit" className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium hover:bg-ink hover:text-white transition-colors">
                Skrá út
              </button>
            </form>
          </div>
        </div>
      </header>
      <AdminEditor initial={content} media={media} storage={storage} />
    </main>
  );
}
