import type { ReactNode } from "react";
import { connection } from "next/server";
import type { Lang } from "@/content/types";
import { mono, sans } from "./fonts";
import "./globals.css";

/**
 * The <html> both root layouts share, one per language. Rendered per request:
 * the Content-Security-Policy's nonce is fresh each time (src/proxy.ts).
 */
export async function RootHtml({ lang, children }: { lang: Lang; children: ReactNode }) {
  await connection();
  return (
    <html lang={lang} className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
