// The probes' endpoint (gitops: apps/offby1-cc/deployment.yaml).
export function GET() {
  return new Response("ok\n", { headers: { "Content-Type": "text/plain", "Cache-Control": "no-store" } });
}
