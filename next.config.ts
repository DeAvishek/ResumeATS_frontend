import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.piclumen.com",
      },
      {
        protocol: "https",
        hostname: "imgcdn.stablediffusionweb.com",
      },
    ],
  },
};

export default nextConfig;

