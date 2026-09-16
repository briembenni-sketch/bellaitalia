import "server-only";
import { createHash } from "node:crypto";
import { cookies } from "next/headers";

/** Lykilorð fyrir /admin – hægt að yfirskrifa með ADMIN_PASSWORD umhverfisbreytu. */
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "2026";
const SECRET = process.env.ADMIN_SECRET ?? "bella-italia-admin-2026";
export const COOKIE = "bella_admin";

/** Gildið sem geymt er í kökunni – hash af lykilorði og leyndarmáli, ekki lykilorðið sjálft. */
export function sessionToken(): string {
  return createHash("sha256").update(`${ADMIN_PASSWORD}:${SECRET}`).digest("hex");
}

export async function isAuthed(): Promise<boolean> {
  const jar = await cookies();
  return jar.get(COOKIE)?.value === sessionToken();
}
