"use client";

import { useEffect } from "react";
import { openobserveRum } from "@openobserve/browser-rum";

// Sent to this same origin, never to OpenObserve directly: gitops routes
// /rum/v1/default/rum, POST only, to its RUM intake. connect-src stays 'self'.
function intake({ path, parameters }: { path: string; parameters: string }) {
  return `${window.location.origin}${path}?${parameters}`;
}

let started = false;

/**
 * Real User Monitoring: page loads, Core Web Vitals, JavaScript errors, slow
 * resources and clicks, to OpenObserve. Nothing is stored on the visitor's
 * browser (the session lives in memory, no anonymous user id) and there is
 * no session replay, so no consent banner is needed. The client token is
 * public by design; without one, as in `next dev`, RUM stays off. Renders
 * nothing.
 */
export function Rum({ clientToken }: { clientToken?: string }) {
  useEffect(() => {
    if (!clientToken || started) return;
    started = true;
    openobserveRum.init({
      applicationId: "offby1-cc",
      clientToken,
      site: window.location.host,
      organizationIdentifier: "default",
      proxy: intake,
      service: "offby1-cc",
      env: "production",
      sessionSampleRate: 100,
      sessionReplaySampleRate: 0,
      sessionPersistence: "memory",
      trackAnonymousUser: false,
      trackResources: true,
      trackLongTasks: true,
      trackUserInteractions: true,
    });
  }, [clientToken]);
  return null;
}
