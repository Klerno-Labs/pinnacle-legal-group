/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/pinnacle-legal-group",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;