import type { ReactNode } from "react";
import { headers } from "next/headers";
import { connection } from "next/server";
import type { Lang } from "@/content/types";
import { ThemeSync } from "@/components/ThemeSwitch/ThemeSync";
import { THEME_INIT } from "@/lib/theme";
import { mono, sans } from "./fonts";
import "./globals.css";

/**
 * The <html> both root layouts share, one per language. Rendered per request:
 * the Content-Security-Policy's nonce is fresh each time (src/proxy.ts).
 */
export async function RootHtml({ lang, children }: { lang: Lang; children: ReactNode }) {
  await connection();
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  // data-theme is set by the inline script before React hydrates: it differs
  // from the server's markup on purpose.
  return (
    <html lang={lang} className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script nonce={nonce} dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        {children}
        <ThemeSync />
      </body>
    </html>
  );
}
