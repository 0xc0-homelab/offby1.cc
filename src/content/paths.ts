import { en } from "./en";
import { es } from "./es";
import type { Lang, PageKey } from "./types";

/** A page's paths in both languages: the landing, or one of the text pages. */
export function paths(page?: PageKey): Record<Lang, string> {
  return page ? { es: es.pages.list[page].path, en: en.pages.list[page].path } : { es: "/", en: "/en/" };
}
