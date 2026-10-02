import type { ReactNode } from "react";
import { RootHtml } from "../root";

export { viewport } from "../metadata";

export default function Layout({ children }: { children: ReactNode }) {
  return <RootHtml lang="en">{children}</RootHtml>;
}
