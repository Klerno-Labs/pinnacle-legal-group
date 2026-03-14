/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/pinnacle-legal-group",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;