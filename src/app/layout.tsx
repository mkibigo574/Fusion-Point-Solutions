import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Display face — geometric sans that matches the FusionPoint Solutions logo.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fusionpoint.studio"),
  title: {
    default: "Fusion Point — Photography · Videography · IT & Web",
    template: "%s — Fusion Point",
  },
  description:
    "A creative-technical studio under one roof. Australian-based photography and videography. Web development, AI integration and IT delivered worldwide.",
  icons: {
    icon: "/brand/fp-mark.png",
    apple: "/brand/fp-mark.png",
  },
  keywords: [
    "photography",
    "videography",
    "web development",
    "AI integration",
    "creative studio",
    "Australia",
  ],
  openGraph: {
    title: "Fusion Point — One studio. Three crafts.",
    description:
      "Australian-based photo & video. Web & IT delivered worldwide.",
    type: "website",
    locale: "en_AU",
    siteName: "Fusion Point",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fusion Point — One studio. Three crafts.",
    description:
      "Australian-based photo & video. Web & IT delivered worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
