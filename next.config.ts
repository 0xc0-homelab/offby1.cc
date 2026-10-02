import type { NextConfig } from "next";

// Only the Content-Security-Policy comes from the app, because its nonce is
// per request (src/proxy.ts). The headers that are the same for every
// response (HSTS, nosniff, Referrer-Policy, frame and permissions policies)
// are Traefik's: a headers Middleware on the route, in gitops
// (apps/offby1-cc/httproute.yaml).
const nextConfig: NextConfig = {
  // A self-contained Node server, for the container image (Dockerfile).
  output: "standalone",
  poweredByHeader: false,
  trailingSlash: true,
  // Every image is an inline SVG: no optimizer, no sharp at runtime.
  images: { unoptimized: true },
};

export default nextConfig;
