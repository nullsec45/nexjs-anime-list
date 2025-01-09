import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        hostname:"placehold.co"
      },
      {
        hostname:"cdn.myanimelist.net"
      }
    ]
  }
};

export default nextConfig;
