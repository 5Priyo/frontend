import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["ucj.ac.lk"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "192.168.12.187",
        port: "8000",
        pathname: "/**",
      },
    ],
  },
  allowedDevOrigins: ["192.168.12.187"],
};

export default nextConfig;