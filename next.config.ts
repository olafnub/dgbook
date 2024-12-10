import type { NextConfig } from "next";

const nextConfig: NextConfig = { // icons.duckduckgo.com
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      }
    ]
  }
};

export default nextConfig;
