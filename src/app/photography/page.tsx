import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Australian-based photography — portraits, events, landscape and product. Frames with the craft of a gallery wall.",
};

export default function PhotographyPage() {
  return <ServicePage service="photography" />;
}
