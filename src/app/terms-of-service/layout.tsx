import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Ryan Pool Enagic. Read our terms and conditions for using our website and services.",
  keywords: ["terms of service", "terms and conditions", "legal", "Ryan Pool Enagic", "Ryan Pool"],
  openGraph: {
    title: "Terms of Service | Ryan Pool Enagic",
    description: "Terms of Service for Ryan Pool Enagic. Read our terms and conditions for using our website and services.",
    url: "https://truelegacy.com/terms-of-service",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ryan Pool Enagic Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Ryan Pool Enagic",
    description: "Terms of Service for Ryan Pool Enagic. Read our terms and conditions for using our website and services.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: "/terms-of-service",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
