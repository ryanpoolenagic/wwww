import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Ryan Pool Enagic. Learn how we use cookies to improve your experience and analyze website traffic.",
  keywords: ["cookie policy", "cookies", "data privacy", "website tracking", "Ryan Pool Enagic", "Ryan Pool"],
  openGraph: {
    title: "Cookie Policy | Ryan Pool Enagic",
    description: "Cookie Policy for Ryan Pool Enagic. Learn how we use cookies to improve your experience and analyze website traffic.",
    url: "https://truelegacy.com/cookie-policy",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ryan Pool Enagic Cookie Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Ryan Pool Enagic",
    description: "Cookie Policy for Ryan Pool Enagic. Learn how we use cookies to improve your experience and analyze website traffic.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: "/cookie-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
