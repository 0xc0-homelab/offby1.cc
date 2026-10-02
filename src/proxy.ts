import { NextResponse, type NextRequest } from "next/server";

// The Content-Security-Policy, with a fresh nonce per request: Next.js reads
// it from the request header and puts it on its inline scripts, so pages are
// rendered per request (connection() in each root layout). Scripts run only
// with that nonce or from this origin: Next.js's chunks under /_next/, and
// Cloudflare's under /cdn-cgi/, such as Email Obfuscation's decoder
// (operator decision, 2026-10-03; #9). No 'strict-dynamic': it would make
// browsers ignore 'self' and block Cloudflare's scripts.
export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const dev = process.env.NODE_ENV === "development";
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}'${dev ? " 'unsafe-eval'" : ""}`,
    `style-src 'self' 'nonce-${nonce}'`,
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

  const headers = new Headers(request.headers);
  headers.set("x-nonce", nonce);
  // The page's language, for the root layout's <html lang>.
  const path = request.nextUrl.pathname;
  headers.set("x-lang", path === "/en" || path.startsWith("/en/") ? "en" : "es");
  headers.set("Content-Security-Policy", csp);

  const response = NextResponse.next({ request: { headers } });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|healthz|_next/static|_next/image|favicon.svg|\\.well-known).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
