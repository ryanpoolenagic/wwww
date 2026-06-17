import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Ryan Pool Enagic. Learn how we collect, use, and protect your personal information. Your privacy is important to us.",
  keywords: ["privacy policy", "data protection", "personal information", "Ryan Pool Enagic", "Ryan Pool"],
  openGraph: {
    title: "Privacy Policy | Ryan Pool Enagic",
    description: "Privacy Policy for Ryan Pool Enagic. Learn how we collect, use, and protect your personal information.",
    url: "https://truelegacy.com/privacy-policy",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ryan Pool Enagic Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Ryan Pool Enagic",
    description: "Privacy Policy for Ryan Pool Enagic. Learn how we collect, use, and protect your personal information.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
