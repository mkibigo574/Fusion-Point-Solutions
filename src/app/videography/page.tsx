import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Videography",
  description:
    "Cinematic, story-driven videography — brand films, showreels and event coverage. Australian-based.",
};

export default function VideographyPage() {
  return <ServicePage service="videography" />;
}
