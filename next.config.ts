import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages 리포지토리 이름이 'dearpetsalon' 이므로 경로 설정을 추가합니다.
  basePath: '/dearpetsalon',
  assetPrefix: '/dearpetsalon/',
};

export default nextConfig;
