/** @type {import('next').NextConfig} */
import withPWA from "@ducanh2912/next-pwa"
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

export default withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development"
  },
  ...nextConfig
});
