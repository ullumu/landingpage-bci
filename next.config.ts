import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath: "", // ganti dengan /nama-repo jika subdirectory
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
