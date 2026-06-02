import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "IT & Web",
  description:
    "Web development, AI integration, hosting and automation — delivered worldwide with the same craft as our camera work.",
};

export default function ItWebPage() {
  return <ServicePage service="it-web" />;
}
