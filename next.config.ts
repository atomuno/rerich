import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // ЗАМЕНИТЕ 'charity-portal' на точное название вашего репозитория на GitHub
  basePath: '/rerich', 
  assetPrefix: '/rerich',
  images: { unoptimized: true }, 
  reactCompiler: true,
};

export default nextConfig;
