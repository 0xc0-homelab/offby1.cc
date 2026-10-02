import { TextPage } from "@/components/Page/TextPage";
import { en } from "@/content/en";
import { pageMetadata } from "../../metadata";

export const metadata = pageMetadata("en", "cookies");

export default function Page() {
  return <TextPage content={en} page="cookies" />;
}
