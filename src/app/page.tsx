import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { InstagramSection } from "@/components/sections/instagram";
import { K8Spotlight } from "@/components/sections/k8-spotlight";
import { KangenWater } from "@/components/sections/kangen-water";
import { SocialProof } from "@/components/sections/social-proof";
import { WaveDivider } from "@/components/shared/water-background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kangen Water & The Leveluk K8",
  description: "Creating a healthier future with Kangen Water. Ryan Pool helps families discover hydrogen-rich, ionized alkaline water from Enagic's flagship Leveluk K8 — better hydration, antioxidants, and everyday wellness.",
  keywords: ["Kangen Water", "Leveluk K8", "buy Kangen Water", "hydrogen water", "alkaline ionized water", "Enagic", "Ryan Pool", "Ryan Pool Enagic", "water ionizer", "healthier future", "cellular hydration", "antioxidant water"],
  openGraph: {
    title: "Ryan Pool Enagic | Creating A Healthier Future",
    description: "Discover Kangen Water and the flagship Leveluk K8 with Ryan Pool — hydrogen-rich, ionized alkaline water for a healthier future.",
    url: "https://truelegacy.com",
    images: [
      {
        url: "https://truelegacy.com/ryan-trust-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ryan Pool - Independent Enagic Distributor helping families create a healthier future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Pool Enagic | Creating A Healthier Future",
    description: "Discover Kangen Water and the flagship Leveluk K8 with Ryan Pool — hydrogen-rich, ionized alkaline water for a healthier future.",
    images: ["https://truelegacy.com/ryan-trust-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <KangenWater />
      <WaveDivider className="text-background" />
      <K8Spotlight />
      <About />
      <SocialProof />
      <WaveDivider className="text-card" flip />
      <InstagramSection />
    </main>
  );
}
