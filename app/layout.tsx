import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { site } from "./data/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
  themeColor: "#1C0F0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="is" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-cream text-brown antialiased">
        {children}
      </body>
    </html>
  );
}
