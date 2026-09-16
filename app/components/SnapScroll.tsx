"use client";

import { useEffect } from "react";

/**
 * Kveikir á „slideshow“-skruni (CSS scroll-snap) á meðan síðan sem notar
 * íhlutinn er opin: hver hluti í <main> læsist efst í glugganum, einn í einu.
 * Aðeins virkt á stórum skjám (sjá globals.css) þar sem hver hluti er ein skjáfylli.
 */
export default function SnapScroll() {
  useEffect(() => {
    document.documentElement.classList.add("snap");
    return () => document.documentElement.classList.remove("snap");
  }, []);
  return null;
}
