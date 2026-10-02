import type { MetadataRoute } from "next";
import { es } from "@/content/es";
import { paths } from "@/content/paths";
import type { PageKey } from "@/content/types";
import { SITE } from "./metadata";

// The noindex pages (the owner's address) are left out.
const TEXT_PAGES: PageKey[] = ["disclosure", "legal", "privacy", "cookies"];
const PAGES: (PageKey | undefined)[] = [undefined, ...TEXT_PAGES.filter((page) => !es.pages.list[page].noindex)];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((page) => {
    const p = paths(page);
    const languages = { es: SITE + p.es, en: SITE + p.en };
    return [
      { url: SITE + p.es, alternates: { languages } },
      { url: SITE + p.en, alternates: { languages } },
    ];
  });
}
