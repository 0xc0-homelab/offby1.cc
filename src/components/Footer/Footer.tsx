import { cx } from "@/lib/cx";
import type { Link } from "@/content/types";
import { Logo } from "../Logo/Logo";
import styles from "./Footer.module.css";

export interface FooterProps {
  tagline?: string;
  email?: string;
  /** Up to 3; always one for Security (security.txt, responsible disclosure). */
  columns: { title: string; links: Link[] }[];
  legal: Link[];
  year: number;
  className?: string;
}

/** Site footer: brand, link columns, legal row. */
export function Footer({ tagline, email, columns, legal, year, className }: FooterProps) {
  return (
    <footer className={cx(styles.foot, className)}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo height={24} />
          {tagline ? <p className={cx(styles.tag, "small")}>{tagline}</p> : null}
          {email ? (
            <a className={cx(styles.mail, "code")} href={`mailto:${email}`}>
              {email}
            </a>
          ) : null}
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <p className={cx(styles.heading, "label")}>{c.title}</p>
            <ul className={styles.list}>
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={cx(styles.link, "small")}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <p className="small">© {year} offby1 · offby1.cc</p>
        <ul className={styles.legal}>
          {legal.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={cx(styles.legalLink, "small")}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
