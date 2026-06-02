import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Fusion Point — photography, videography, or web & IT. We reply to every genuine enquiry.",
};

export default function ContactPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center" aria-label="FusionPoint Solutions — home">
            <Image
              src="/brand/fusionpoint-lockup.png"
              alt="FusionPoint Solutions"
              width={150}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-ink-muted transition-colors hover:text-ink"
          >
            ← Back to home
          </Link>
        </div>
      </header>
      <main className="pt-6">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
