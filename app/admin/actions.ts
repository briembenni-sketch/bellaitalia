"use server";

import fs from "node:fs/promises";
import path from "node:path";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ADMIN_PASSWORD, COOKIE, isAuthed, sessionToken } from "../lib/auth";
import { CONTENT_FILE, applyEditable, defaults, toEditable } from "../lib/content";

export async function login(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  if (password !== ADMIN_PASSWORD) {
    redirect("/admin?villa=1");
  }
  const jar = await cookies();
  jar.set(COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  redirect("/admin");
}

export async function logout() {
  const jar = await cookies();
  jar.delete(COOKIE);
  redirect("/admin");
}

export type SaveResult = { ok: true; mode: "file" | "github" } | { ok: false; error: string };

/**
 * Vistar breytingar. Sjálfgefið er skrifað í data/content.json á þjóninum og síðan
 * endurbirt strax. Ef GITHUB_TOKEN og GITHUB_REPO eru stillt (t.d. á Vercel þar sem
 * ekki má skrifa á disk) er skránni í staðinn commit-að í repóið, sem endurbyggir síðuna.
 */
export async function saveContent(json: string): Promise<SaveResult> {
  if (!(await isAuthed())) return { ok: false, error: "Þú ert ekki innskráð/ur." };

  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch {
    return { ok: false, error: "Ógild gögn." };
  }

  // Hreinsa: aðeins ritstýranleg svið, í réttu formi
  const clean = toEditable(applyEditable(defaults, parsed));
  const body = JSON.stringify(clean, null, 2) + "\n";

  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO; // t.d. "briembenni-sketch/bellaitalia"
  const branch = process.env.GITHUB_BRANCH ?? "main";

  if (token && repo) {
    try {
      await commitToGitHub({ token, repo, branch, body });
    } catch (err) {
      return { ok: false, error: `Tókst ekki að vista í GitHub: ${err instanceof Error ? err.message : String(err)}` };
    }
    // Reynum líka að skrifa á disk ef það er hægt (skiptir ekki máli ef það mistekst)
    await fs.writeFile(CONTENT_FILE, body, "utf8").catch(() => undefined);
    revalidatePath("/", "layout");
    return { ok: true, mode: "github" };
  }

  try {
    await fs.mkdir(path.dirname(CONTENT_FILE), { recursive: true });
    await fs.writeFile(CONTENT_FILE, body, "utf8");
  } catch (err) {
    return {
      ok: false,
      error: `Tókst ekki að skrifa skrána: ${err instanceof Error ? err.message : String(err)}. Ef síðan er hýst á Vercel þarf að stilla GITHUB_TOKEN og GITHUB_REPO.`,
    };
  }
  revalidatePath("/", "layout");
  return { ok: true, mode: "file" };
}

async function commitToGitHub({ token, repo, branch, body }: { token: string; repo: string; branch: string; body: string }) {
  const api = `https://api.github.com/repos/${repo}/contents/data/content.json`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "bellaitalia-admin",
  };
  const current = await fetch(`${api}?ref=${encodeURIComponent(branch)}`, { headers, cache: "no-store" });
  const sha = current.ok ? ((await current.json()) as { sha?: string }).sha : undefined;
  const res = await fetch(api, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "Uppfæra efni úr /admin",
      content: Buffer.from(body, "utf8").toString("base64"),
      branch,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
}
