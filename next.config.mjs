/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable Image Optimization for static export
  },
  trailingSlash: true,
  output: 'export',
};

export default nextConfig;
