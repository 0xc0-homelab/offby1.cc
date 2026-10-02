import type { Content, PageKey } from "@/content/types";
import { cx } from "@/lib/cx";
import { Button } from "../Button/Button";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { Shell } from "./Shell";
import styles from "./TextPage.module.css";

/** A page of plain text: the legal pages and the disclosure policy. */
export function TextPage({ content: c, page }: { content: Content; page: PageKey }) {
  const p = c.pages.list[page];
  return (
    <Shell content={c} page={page}>
      <article className={styles.page}>
        <SectionHeader as="h1" title={p.title} />
        <div className={styles.body}>
          {(p.body ?? [c.pages.pending]).map((para) => (
            <p key={para} className={cx(styles.para, "body")}>
              {para}
            </p>
          ))}
        </div>
        <Button href={c.pages.back.href} variant="secondary" className={styles.back}>
          {c.pages.back.label}
        </Button>
      </article>
    </Shell>
  );
}
