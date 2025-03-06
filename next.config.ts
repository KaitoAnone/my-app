/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "server-ygyw.onrender.com",
        port: "",
        pathname: "/uploads/**/*",
      },
    ],
  },
};

export default nextConfig;
