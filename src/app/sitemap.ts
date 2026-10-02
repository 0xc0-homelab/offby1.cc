import type { MetadataRoute } from "next";
import { paths } from "@/content/paths";
import type { PageKey } from "@/content/types";
import { SITE } from "./metadata";

const PAGES: (PageKey | undefined)[] = [undefined, "disclosure", "legal", "privacy", "cookies"];

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
