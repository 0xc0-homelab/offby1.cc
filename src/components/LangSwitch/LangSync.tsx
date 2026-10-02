"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Keeps <html lang> in step with the path after client-side navigation. Renders nothing. */
export function LangSync() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
  }, [pathname]);
  return null;
}
