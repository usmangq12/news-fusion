/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows images from any domain
      },
      {
        protocol: "http",
        hostname: "**", // Allows images from any domain over HTTP (optional)
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
