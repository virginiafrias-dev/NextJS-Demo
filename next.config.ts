import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "na.wargaming.net",
        port: "",
        pathname:
          "/clans/media/clans/emblems/cl_433/1000050433/emblem_195x195.png",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
