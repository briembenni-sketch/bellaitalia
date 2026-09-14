import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { site } from "./data/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bellaitalia.is"),
  title: {
    default: "Bella Italia | Róm & Villur á Ítalíu",
    template: "%s",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "is_IS",
    siteName: site.name,
    title: "Bella Italia | Róm & Villur á Ítalíu",
    description: site.description,
    images: [{ url: "/images/card-rom.jpg", width: 2048, height: 1536, alt: "Colosseum í Róm" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#071517",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="is" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
