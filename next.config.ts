import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**", // Allow any path
      },
    ],
  },
};

export default nextConfig;
