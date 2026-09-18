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
      <main className="min-h-svh flex items-center justify-center px-5 bg-ink text-white">
        <form action={login} className="w-full max-w-sm rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-sand">Bella Italia</span>
          <h1 className="mt-3 font-display text-3xl font-medium tracking-tight">Stjórnborð</h1>
          <p className="mt-2 text-sm text-white/60">Sláðu inn lykilorðið til að breyta verðum og textum.</p>
          <label htmlFor="password" className="mt-6 block text-sm font-medium text-white/80">
            Lykilorð
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoFocus
            required
            autoComplete="current-password"
            className="mt-2 w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3.5 text-white focus:outline-none focus:border-gold-light focus:ring-4 focus:ring-white/10"
          />
          {villa && <p className="mt-3 text-sm text-red-400">Rangt lykilorð – reyndu aftur.</p>}
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:bg-sand-light transition-colors"
          >
            Innskrá
          </button>
          <Link href="/" className="mt-5 block text-center text-xs text-white/45 hover:text-white transition-colors">
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
    <main className="min-h-svh bg-ink text-white">
      <header className="sticky top-0 z-40 glass-dark">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-display font-semibold text-lg tracking-tight">Bella Italia</span>
            <span className="text-xs text-white/50 truncate">Stjórnborð · verð og textar</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/" target="_blank" className="hidden sm:inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-medium hover:bg-white hover:text-ink transition-colors">
              Skoða vefinn ↗
            </Link>
            <form action={logout}>
              <button type="submit" className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium hover:bg-white hover:text-ink transition-colors">
                Útskrá
              </button>
            </form>
          </div>
        </div>
      </header>
      <AdminEditor initial={content} media={media} storage={storage} />
    </main>
  );
}
