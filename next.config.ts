import type { NextConfig } from "next";
import path from "node:path";

const repoName = "elixhausener-landbaeckerei";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
