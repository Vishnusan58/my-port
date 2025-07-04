import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    // Mark Spline runtime as external to optimize client bundle
    if (!isServer) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      config.externals = [
        ...(config.externals as any[]),
        '@splinetool/runtime'
      ];
    }
    return config;
  },
};

export default nextConfig;
