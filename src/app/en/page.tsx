import { Landing } from "@/components/Landing/Landing";
import { en } from "@/content/en";
import { pageMetadata } from "../metadata";

export const metadata = pageMetadata("en");

export default function Page() {
  return <Landing content={en} />;
}
