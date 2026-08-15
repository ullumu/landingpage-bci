import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Jika di-deploy ke GitHub Pages di subpath /<repo>, ganti nilai di bawah sesuai nama repo
  // basePath: "/landingpage-bci",
  // assetPrefix: "/landingpage-bci",
  env: {
    // NEXT_PUBLIC_BASE_PATH: "/landingpage-bci",
    NEXT_PUBLIC_BASE_PATH: "./",
  },
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
