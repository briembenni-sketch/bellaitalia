import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // data/content.json (efni úr /admin) þarf að fylgja með í serverless-pakkanum
  outputFileTracingIncludes: {
    "/**": ["./data/**"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    qualities: [75, 85, 90],
  },
  async redirects() {
    return [
      // Gamlar slóðir af Wix-síðunni og fyrri útgáfu
      { source: "/róm", destination: "/rom", permanent: true },
      { source: "/r%C3%B3m", destination: "/rom", permanent: true },
      { source: "/contact-3", destination: "/samband", permanent: true },
      { source: "/pantadu", destination: "/fyrirspurn", permanent: true },
    ];
  },
};

export default nextConfig;
