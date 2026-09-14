"use client";

import { useEffect, useState } from "react";
import InquiryForm from "./InquiryForm";

/** Róm-fyrirspurn sem forvelur ferð ef smellt var á „Bóka“ á korti. */
export default function RomInquiry() {
  const [tour, setTour] = useState<string | undefined>(undefined);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const read = () => {
      try {
        const v = sessionStorage.getItem("bella-tour");
        if (v) {
          setTour(v);
          setKey((k) => k + 1);
        }
      } catch {
        /* ignore */
      }
    };
    read();
    const onEvent = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) {
        setTour(detail);
        setKey((k) => k + 1);
      }
    };
    window.addEventListener("bella-tour", onEvent);
    return () => window.removeEventListener("bella-tour", onEvent);
  }, []);

  return <InquiryForm key={key} variant="rom" defaultTour={tour} />;
}
