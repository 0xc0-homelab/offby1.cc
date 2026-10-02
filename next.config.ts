import type { NextConfig } from "next";

// Only the Content-Security-Policy comes from the app, because its nonce is
// per request (src/proxy.ts). The other security headers are Traefik's, in
// gitops: the baseline on every entrypoint (HSTS, nosniff, Referrer-Policy:
// platform/traefik/security-headers.yaml) and this site's own on its route
// (framing, Permissions-Policy, COOP/CORP: apps/offby1-cc/httproute.yaml).
const nextConfig: NextConfig = {
  // A self-contained Node server, for the container image (Dockerfile).
  output: "standalone",
  poweredByHeader: false,
  trailingSlash: true,
  // Every image is an inline SVG: no optimizer, no sharp at runtime.
  images: { unoptimized: true },
};

export default nextConfig;
