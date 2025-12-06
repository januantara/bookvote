import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.gramedia.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
