/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    KAKAO_API_KEY: process.env.KAKAO_API_KEY,
  },
  images: {
    domains: ["search1.kakaocdn.net", "t4.ftcdn.net", "localhost"],
  },
};

module.exports = nextConfig;
