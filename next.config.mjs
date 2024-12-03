/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Only include valid experimental features
  },
  reactStrictMode: true,
  output: "standalone", // Required for deployment with Firebase Functions
};

export default nextConfig;
