import { TextPage } from "@/components/Page/TextPage";
import { es } from "@/content/es";
import { pageMetadata } from "../../metadata";

export const metadata = pageMetadata("es", "privacy");

export default function Page() {
  return <TextPage content={es} page="privacy" />;
}
