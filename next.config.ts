import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "payjustnow.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.payjustnow.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
