/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/dearpetsalon',
    // assetPrefix를 제거하고 basePath만 사용해봅니다.
};

export default nextConfig;
