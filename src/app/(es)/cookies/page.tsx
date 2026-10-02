import { TextPage } from "@/components/Page/TextPage";
import { es } from "@/content/es";
import { pageMetadata } from "../../metadata";

export const metadata = pageMetadata("es", "cookies");

export default function Page() {
  return <TextPage content={es} page="cookies" />;
}
