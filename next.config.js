/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.fbi.gov"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
