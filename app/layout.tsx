import type { Metadata, Viewport } from "next";
import { Outfit, Inter, Kaushan_Script } from "next/font/google";
import "./globals.css";
import { site } from "./data/site";
import HashScroll from "./components/HashScroll";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Pensilskrift fyrir stóru orðin á forsíðunni
const kaushan = Kaushan_Script({
  variable: "--font-kaushan",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bellaitalia.is"),
  title: {
    default: "Bella Italia | Villur á Ítalíu · Róm & aðrar borgir",
    template: "%s",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "is_IS",
    siteName: site.name,
    title: "Bella Italia | Villur á Ítalíu · Róm & aðrar borgir",
    description: site.description,
    images: [{ url: "/images/hero-villa.jpg", width: 2000, height: 1600, alt: "Villa með sundlaug í Toskana" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#071517",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="is" className={`${outfit.variable} ${inter.variable} ${kaushan.variable}`}>
      <body className="min-h-screen bg-ink text-white antialiased">
        <HashScroll />
        {children}
      </body>
    </html>
  );
}
