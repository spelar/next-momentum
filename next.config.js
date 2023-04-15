/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    KAKAO_API_KEY: process.env.KAKAO_API_KEY,
  },
};

module.exports = nextConfig;
