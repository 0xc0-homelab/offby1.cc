import Link from "next/link";
import { Fragment } from "react";
import { cx } from "@/lib/cx";
import type { Lang } from "@/content/types";
import styles from "./LangSwitch.module.css";

const OPTIONS: { value: Lang; label: string; name: string }[] = [
  { value: "es", label: "ES", name: "Español" },
  { value: "en", label: "EN", name: "English" },
];

export interface LangSwitchProps {
  value: Lang;
  /** One page per language, reached by a client-side navigation. */
  hrefs: Record<Lang, string>;
  label?: string;
  className?: string;
}

/** ES / EN switch in mono; the active one carries a signal underline. */
export function LangSwitch({ value, hrefs, label = "Idioma / Language", className }: LangSwitchProps) {
  return (
    <div className={cx(styles.lang, "label", className)} role="group" aria-label={label}>
      {OPTIONS.map((o, i) => (
        <Fragment key={o.value}>
          {i > 0 ? (
            <span className={styles.sep} aria-hidden="true">
              /
            </span>
          ) : null}
          {/* Client-side, keeping the scroll: both languages lay out alike. */}
          <Link
            href={hrefs[o.value]}
            scroll={false}
            hrefLang={o.value}
            lang={o.value}
            title={o.name}
            aria-current={o.value === value ? "true" : undefined}
            className={cx(styles.opt, o.value === value && styles.active)}
          >
            {o.label}
          </Link>
        </Fragment>
      ))}
    </div>
  );
}
