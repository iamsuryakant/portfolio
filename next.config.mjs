/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable Image Optimization for static export
  },
  trailingSlash: true,
};

export default nextConfig;
