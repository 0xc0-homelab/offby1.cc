import type { TerminalLine } from "@/components/Terminal/Terminal";
import type { IconName } from "@/components/Icon/icons";
import type { ContactError } from "@/lib/contact";

export type Lang = "es" | "en";

export type PageKey = "legal" | "privacy" | "cookies" | "disclosure";

export interface Link {
  label: string;
  href: string;
}

/** Everything a language's landing page says. Each language is written, not translated. */
export interface Content {
  lang: Lang;
  meta: { title: string; description: string };
  nav: { links: Link[]; cta: Link };
  hero: {
    eyebrow: string;
    title: [string, string];
    lede: string;
    primary: Link;
    secondary: Link;
    note: string;
    terminal: { title: string; status: string; label: string; lines: TerminalLine[] };
  };
  services: {
    /** The section's anchor, in the page's language. */
    id: string;
    eyebrow: string;
    title: string;
    lede: string;
    cards: { icon: IconName; title: string; description: string; items: string[] }[];
  };
  method: {
    /** The section's anchor, in the page's language. */
    id: string;
    eyebrow: string;
    title: string;
    lede: string;
    steps: { title: string; body: string }[];
    report: {
      label: string;
      title: string;
      columns: [string, string, string];
      findings: { level: "critical" | "high" | "medium" | "low"; title: string; status: string; remediated?: boolean }[];
    };
  };
  contact: {
    /** The section's anchor, in the page's language. */
    id: string;
    eyebrow: string;
    title: string;
    lede: string;
    form: {
      name: string;
      email: string;
      emailPlaceholder: string;
      company: string;
      need: string;
      pick: string;
      options: string[];
      message: string;
      messageHint: string;
      optional: string;
      consent: [string, Link, string];
      submit: string;
      sending: string;
      note: string;
      sent: string;
      failed: string;
      errors: Record<ContactError, string>;
    };
  };
  footer: {
    tagline: string;
    email: string;
    columns: { title: string; links: Link[] }[];
    legal: Link[];
  };
  pages: {
    back: Link;
    /** Shown where a page has no body yet. */
    pending: string;
    list: Record<PageKey, { path: string; title: string; body?: string[] }>;
  };
}
