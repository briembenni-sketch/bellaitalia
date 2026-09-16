"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Tryggir að tenglar með #kafla (t.d. /villur#fyrirspurn) lendi á réttum stað,
 * líka þegar komið er af annarri síðu. Skrollar strax og aftur nokkrum sinnum
 * á meðan myndir og letur hlaðast svo staðsetningin haldist rétt.
 * `scroll-margin-top` á kaflanum sér um bilið fyrir fasta valmyndina.
 */
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (!id) return false;
      const el = document.getElementById(id);
      if (!el) return false;
      el.scrollIntoView({ behavior: "instant", block: "start" });
      return true;
    };

    if (!window.location.hash) return;

    // Strax, og svo endurtekið á meðan síðan er að raðast (myndir, letur, reveal-hreyfingar)
    scrollToHash();
    const timers = [120, 400, 900, 1600].map((ms) => window.setTimeout(scrollToHash, ms));
    return () => timers.forEach(clearTimeout);
  }, [pathname]);

  // Smellur á #tengil sem vísar á sömu síðu (t.d. valmyndin á /villur -> /villur#fyrirspurn),
  // líka þegar slóðin breytist ekki því sama kaflamerki er þegar í slóðinni.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank") return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
      const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!el) return;
      e.preventDefault();
      if (window.location.hash !== url.hash) history.pushState(null, "", url.pathname + url.hash);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
