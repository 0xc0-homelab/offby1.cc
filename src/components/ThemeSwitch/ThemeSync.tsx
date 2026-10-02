"use client";

import { useEffect } from "react";
import { restoreTheme } from "@/lib/theme";

/** Re-applies the stored theme after hydration. Renders nothing. */
export function ThemeSync() {
  useEffect(restoreTheme, []);
  return null;
}
