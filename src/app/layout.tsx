import { BuyButton } from "@/components/shared/buy-button";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { SchemaOrg } from "@/components/shared/schema-org";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Ryan Pool Enagic | Creating A Healthier Future",
    template: "%s | Ryan Pool Enagic",
  },
  description: "Ryan Pool Enagic helps families and entrepreneurs create a healthier future with Kangen Water, the Leveluk K8 ionizer, EmGuarde EMF protection, and premium Japanese wellness across 51+ countries.",
  keywords: ["Ryan Pool", "Ryan Pool Enagic", "Enagic", "Kangen Water", "Leveluk K8", "buy Kangen Water", "Kangen Water machine", "EmGuarde", "EMF protection", "hydrogen water", "alkaline water", "ionized water", "anti-aging", "cellular hydration", "wellness technology", "water ionizer", "healthier future", "Enagic distributor", "51 countries"],
  authors: [{ name: "Ryan Pool" }],
  creator: "Ryan Pool",
  publisher: "Ryan Pool Enagic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://truelegacy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ryan Pool Enagic | Creating A Healthier Future",
    description: "Create a healthier future with Kangen Water, the Leveluk K8, EmGuarde EMF protection, and premium Japanese wellness through Ryan Pool Enagic.",
    url: "https://truelegacy.com",
    siteName: "Ryan Pool Enagic",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Pool Enagic | Creating A Healthier Future",
    description: "Create a healthier future with Kangen Water, the Leveluk K8, EmGuarde EMF protection, and premium Japanese wellness through Ryan Pool Enagic.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Add the Google Search Console verification code here once available:
  // verification: { google: "<your-code>" },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "California, United States",
    "geo.position": "36.7783;-119.4179",
    ICBM: "36.7783, -119.4179",
    coverage: "Worldwide",
    distribution: "Global",
    rating: "General",
  },
};

export const viewport = {
  themeColor: "#0284C7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <BuyButton />
        <WhatsAppButton />
        <SchemaOrg />
      </body>
    </html>
  );
}
