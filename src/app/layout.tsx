import type { ReactNode } from "react";
import { headers } from "next/headers";
import { connection } from "next/server";
import { LangSync } from "@/components/LangSwitch/LangSync";
import { Rum } from "@/components/Rum/Rum";
import { ThemeSync } from "@/components/ThemeSwitch/ThemeSync";
import { LANG_INIT } from "@/lib/lang";
import { THEME_INIT } from "@/lib/theme";
import { mono, sans } from "./fonts";
import "./globals.css";

export { viewport } from "./metadata";

/**
 * The one root layout, for both languages: moving between / and /en/ is a
 * client-side navigation, not a full page load. The language comes from the
 * path (x-lang, set by src/proxy.ts) on the first render, and LangSync keeps
 * <html lang> right as the visitor navigates. Rendered per request: the
 * Content-Security-Policy's nonce is fresh each time.
 */
export default async function RootLayout({ children }: { children: ReactNode }) {
  await connection();
  const h = await headers();
  const lang = h.get("x-lang") === "en" ? "en" : "es";
  const nonce = h.get("x-nonce") ?? undefined;
  // data-theme is set by the inline script before React hydrates: it differs
  // from the server's markup on purpose.
  return (
    <html lang={lang} className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script nonce={nonce} dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <script nonce={nonce} dangerouslySetInnerHTML={{ __html: LANG_INIT }} />
      </head>
      <body>
        {children}
        <ThemeSync />
        <LangSync />
        {/* OpenObserve's RUM client token, from Vault through the cluster
            (gitops, apps/offby1-cc): public by design, read per request. */}
        <Rum clientToken={process.env.OPENOBSERVE_RUM_CLIENT_TOKEN} />
      </body>
    </html>
  );
}
