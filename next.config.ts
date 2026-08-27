import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "payjustnow.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.payjustnow.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
