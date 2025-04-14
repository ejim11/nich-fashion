import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://d3bcnu5rxir0tz.cloudfront.net/**")],
  },
};

export default nextConfig;
