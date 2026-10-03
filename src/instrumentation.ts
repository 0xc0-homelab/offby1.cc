import { registerOTel } from "@vercel/otel";
import type { Instrumentation } from "next";

// Traces to OpenObserve's collector, over OTLP HTTP. The endpoint and the
// service name come from the environment (gitops, apps/offby1-cc):
// OTEL_EXPORTER_OTLP_ENDPOINT and OTEL_SERVICE_NAME. Without an endpoint, as
// in `next dev`, nothing is exported. Traefik's traceparent header makes each
// server span a child of its span for the request.
export function register() {
  registerOTel({ serviceName: process.env.OTEL_SERVICE_NAME ?? "offby1-cc" });
}

// Next.js logs nothing in production, errors included. One JSON line per
// server error on stderr, which the collector reads as a log at level error.
// The digest is the one Next.js shows the visitor, so a report can be matched.
export const onRequestError: Instrumentation.onRequestError = (
  err,
  request,
  context,
) => {
  const error = err as Error & { digest?: string };
  console.error(
    JSON.stringify({
      level: "error",
      msg: error.message,
      digest: error.digest,
      method: request.method,
      path: request.path,
      route: context.routePath,
      route_type: context.routeType,
      render_source: context.renderSource,
    }),
  );
};
