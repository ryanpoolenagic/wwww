"use client"

export function SchemaOrg() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ryan Pool Enagic",
    url: "https://truelegacy.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://truelegacy.com/articles?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ryan Pool",
    jobTitle: "Wellness Advocate & Independent Enagic Distributor",
    url: "https://truelegacy.com",
    image: "https://truelegacy.com/ryan-hero.jpg",
    sameAs: [
      "https://www.instagram.com/ryanpool",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Ryan Pool Enagic",
      url: "https://truelegacy.com",
    },
    knowsAbout: [
      "Kangen Water",
      "Alkaline Ionized Water",
      "Molecular Hydrogen",
      "EmGuarde",
      "EMF Protection",
      "Anti-Aging",
      "Cellular Hydration",
      "Generational Wealth",
      "Wellness Entrepreneurship",
      "Leveluk K8",
      "Water Ionization",
    ],
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ryan Pool Enagic",
    alternateName: "Ryan Pool — Independent Enagic Distributor",
    url: "https://truelegacy.com",
    logo: {
      "@type": "ImageObject",
      url: "https://truelegacy.com/logo.jpg",
      width: 1200,
      height: 630,
    },
    image: "https://truelegacy.com/logo.jpg",
    slogan: "Creating A Healthier Future",
    description:
      "Ryan Pool Enagic helps families and entrepreneurs create a healthier future with Kangen Water, the Leveluk K8, EmGuarde EMF protection, and premium Japanese wellness products across 51+ countries.",
    sameAs: [
      "https://www.instagram.com/ryanpool",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-213-733-6286",
      contactType: "customer service",
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "California",
      addressCountry: "US",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  )
}
