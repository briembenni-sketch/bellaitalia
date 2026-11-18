"use client";

import { useEffect, useState } from "react";
import { CONSENT_OPEN_EVENT, TRACKING_READY_EVENT } from "../lib/track";

/** „Vafrakökur“ í fæti síðunnar – sést aðeins ef mæling er uppsett, og opnar borðann aftur. */
export default function CookieLink() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const ready = () => setShow(true);
    if (document.documentElement.dataset.tracking === "on") ready();
    window.addEventListener(TRACKING_READY_EVENT, ready);
    return () => window.removeEventListener(TRACKING_READY_EVENT, ready);
  }, []);

  if (!show) return null;
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}
      className="underline underline-offset-4 hover:text-white transition-colors"
    >
      Vafrakökur
    </button>
  );
}
