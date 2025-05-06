import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "na.wargaming.net",
      //   port: "",
      //   pathname:
      //     "/clans/media/clans/emblems/cl_433/1000050433/emblem_195x195.png",
      // },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "na.wargaming.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/messages",
        destination: "/",
        permanent: true,
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
