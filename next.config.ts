import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.gramedia.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
