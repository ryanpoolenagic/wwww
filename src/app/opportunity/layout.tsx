import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enagic Business Opportunity",
  description: "Create income while making an impact. Join a global community sharing Kangen Water and EmGuarde. Discover the Enagic business opportunity with Ryan Pool Enagic.",
  keywords: ["Enagic business opportunity", "Kangen Water business", "Enagic distributor", "wellness business", "Ryan Pool", "Ryan Pool Enagic", "network marketing"],
  openGraph: {
    title: "Enagic Business Opportunity | Ryan Pool Enagic",
    description: "Create income while making an impact. Join a global community of entrepreneurs building wealth through premium wellness technology.",
    url: "https://truelegacy.com/opportunity",
    images: [
      {
        url: "/ryan-convention.jpg",
        width: 1200,
        height: 630,
        alt: "Ryan Pool at Enagic Convention - Business Opportunity",
      },
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ryan Pool Enagic Business Opportunity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enagic Business Opportunity | Ryan Pool Enagic",
    description: "Create income while making an impact. Join a global community of entrepreneurs building wealth through premium wellness technology.",
    images: ["/ryan-convention.jpg"],
  },
  alternates: {
    canonical: "/opportunity",
  },
};

export default function OpportunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
