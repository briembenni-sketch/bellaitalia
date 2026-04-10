import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

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
  title: "Bella Italia | Sérhannaðar ferðir til Ítalíu",
  description:
    "Bella Italia slf. — Sérhannaðar ferðir til Rómar og Toskana. Persónuleg þjónusta og staðbundin þekking frá Hildi.",
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
