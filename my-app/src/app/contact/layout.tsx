import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Ryan Pool",
  description: "Get in touch with Ryan Pool to learn about Kangen Water and the Leveluk K8. Book a free consultation and start creating a healthier future today.",
  keywords: ["contact Ryan Pool", "Ryan Pool Enagic", "Kangen Water consultation", "buy Kangen Water", "Enagic distributor", "WhatsApp"],
  openGraph: {
    title: "Contact | Ryan Pool Enagic",
    description: "Get in touch with Ryan Pool to learn about Kangen Water and the Leveluk K8. Book a free consultation today.",
    url: "https://truelegacy.com/contact",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Ryan Pool Enagic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Ryan Pool Enagic",
    description: "Get in touch with Ryan Pool to learn about Kangen Water and the Leveluk K8.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
