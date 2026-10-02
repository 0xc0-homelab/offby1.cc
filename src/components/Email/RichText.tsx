import { Fragment } from "react";

const EMAIL = /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/;

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

/**
 * Text that may hold an email address. Cloudflare's Email Obfuscation
 * rewrites addresses on the way out, and its decoder puts them back in the
 * browser; React must not compare that markup when it hydrates, or it
 * rebuilds the whole page. So each address goes inside an element whose
 * content React leaves alone (dangerouslySetInnerHTML: not hydrated).
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(EMAIL);
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} dangerouslySetInnerHTML={{ __html: escape(part) }} />
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
