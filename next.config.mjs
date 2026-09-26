/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configures allowed hostnames for the next/image component
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2uq10394z5icp.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;