import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
