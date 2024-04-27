/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  // register: true,
  // scope: "/app",
  // sw: "service-worker.js",
  //...
});

const nextConfig = {
  webpack(config, { isServer, dev }) {
    // 修改 SVG 的加载器配置
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default withPWA(nextConfig);
