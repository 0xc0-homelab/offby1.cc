import { Landing } from "@/components/Landing/Landing";
import { es } from "@/content/es";
import { pageMetadata } from "../metadata";

export const metadata = pageMetadata("es");

export default function Page() {
  return <Landing content={es} />;
}
