import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
  // Payload admin uploads (PDF, images) go through Server Actions — default limit is 1MB.
  experimental: {
    serverActions: {
      bodySizeLimit: "50mb",
    },
  },
};

export default withPayload(nextConfig);