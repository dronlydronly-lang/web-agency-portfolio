import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Photos are self-hosted in /public/agency — no external remote
    // domain needed anymore, which also removes a cross-origin round
    // trip on every cold image request.
    qualities: [60, 70, 75],
  },
};

export default nextConfig;
