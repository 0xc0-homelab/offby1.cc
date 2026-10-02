import { TextPage } from "@/components/Page/TextPage";
import { en } from "@/content/en";
import { pageMetadata } from "../../metadata";

export const metadata = pageMetadata("en", "privacy");

export default function Page() {
  return <TextPage content={en} page="privacy" />;
}
