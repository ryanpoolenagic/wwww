import { ProductCard } from "@/components/products/product-card"
import { CalendlyButton } from "@/components/shared/calendly"
import type { Metadata } from "next"

type Product = {
  name: string
  image: string
  category: string
  description: string
  features: string[]
  availability: string
  link?: string
  inquiry?: boolean
}

const products: Product[] = [
  {
    name: "Leveluk K8",
    image: "/k8-machine.png",
    category: "Flagship",
    description: "Enagic's most powerful home unit. Eight platinum-coated titanium plates deliver maximum ionization and the highest antioxidant potential, producing five types of water for drinking, cooking, beauty, and cleaning.",
    features: [
      "8 platinum-dipped titanium electrode plates",
      "5 water types from one machine",
      "Multi-language voice guidance",
      "Available worldwide",
    ],
    availability: "Available Worldwide",
    link: "https://information.enagic.com/en/introduction?company_id=2&h=557a42bfc21453abced8385114d1ac32&enroller_id=11000071628&sponsor_id=11000071628&representative_id=11000071628&line_rank=0&product_id=1016",
  },
  {
    name: "Leveluk SD501 DX",
    image: "/sd501dx.png",
    category: "Best Seller",
    description: "The benchmark Kangen Water generator trusted in homes across the globe. A built-in tank stand and seven platinum-coated plates deliver consistent, hydrogen-rich water on demand.",
    features: [
      "7 platinum-dipped titanium plates",
      "Integrated stand for compact spaces",
      "Industry-leading durability",
      "Trusted by millions worldwide",
    ],
    availability: "Available Worldwide",
    link: "https://information.enagic.com/en/introduction?company_id=2&h=557a42bfc21453abced8385114d1ac32&enroller_id=11000071628&sponsor_id=11000071628&representative_id=11000071628&line_rank=0&product_id=1064",
  },
  {
    name: "Leveluk JRIV",
    image: "/jriv.png",
    category: "Kangen Water",
    description: "A compact, powerful Kangen Water generator built for smaller households and tighter spaces. Seven platinum-coated titanium plates deliver hydrogen-rich, ionized water with Enagic's signature reliability.",
    features: [
      "7 platinum-dipped titanium plates",
      "Compact, space-saving design",
      "Produces 5 types of water",
      "Multi-language voice guidance",
    ],
    availability: "Available Worldwide",
    link: "https://information.enagic.com/en/introduction?company_id=2&h=557a42bfc21453abced8385114d1ac32&enroller_id=11000071628&sponsor_id=11000071628&representative_id=11000071628&line_rank=0&product_id=1062",
  },
  {
    name: "EmGuarde",
    image: "/em-guarde.png",
    category: "EMF Protection",
    description: "A breakthrough in electromagnetic wellness. EmGuarde creates a protective field that shields your space from high-frequency electromagnetic noise emitted by everyday devices. This is a special-order product — contact Ryan directly to reserve yours.",
    features: [
      "Suppresses EMF noise within a 4-meter radius",
      "Patented Japanese harmonic technology",
      "Silent, plug-and-play 24/7 operation",
      "Does not interfere with Wi-Fi or signals",
    ],
    availability: "Special Order — USA, Canada & Mexico",
    inquiry: true,
  },
  {
    name: "Anespa DX",
    image: "/anespaDX.png",
    category: "Home Spa",
    description: "Turn any shower into a rejuvenating hot-spring experience. Anespa DX filters chlorine while infusing your water with natural minerals for healthier skin and hair.",
    features: [
      "Removes chlorine from bath & shower water",
      "Mineral-rich onsen-style hydration",
      "Gentle on skin, hair, and scalp",
      "Long-life ceramic mineral cartridge",
    ],
    availability: "Available Worldwide",
    link: "https://information.enagic.com/en/introduction?company_id=2&h=557a42bfc21453abced8385114d1ac32&enroller_id=11000071628&sponsor_id=11000071628&representative_id=11000071628&line_rank=0&product_id=1041",
  },
  {
    name: "Kangen Wagyu Beef",
    image: "/kangen-wagyu-beef.png",
    category: "Gourmet",
    description: "Authentic Japanese wagyu raised with Kangen Water at every stage. Exceptional marbling and flavor that reflect the same standard of quality behind every Enagic product.",
    features: [
      "Cattle raised with Kangen Water",
      "Premium A-grade marbling",
      "Sourced directly from Japan",
      "Restaurant-quality at home",
    ],
    availability: "Select Regions",
    link: "https://information.enagic.com/en/introduction?company_id=2&h=557a42bfc21453abced8385114d1ac32&enroller_id=11000071628&sponsor_id=11000071628&representative_id=11000071628&line_rank=0&product_id=2115",
  },
  {
    name: "Ukon SIGMA",
    image: "/kangen-ukon.png",
    category: "Supplement",
    description: "Pure spring turmeric (ukon) harvested in Yakushima, Japan, and encapsulated for maximum absorption. A daily wellness essential rich in natural curcumin and essential oils.",
    features: [
      "100% Yakushima spring turmeric",
      "High curcumin & essential-oil content",
      "No additives or preservatives",
      "Convenient daily capsules",
    ],
    availability: "Select Regions",
    link: "https://information.enagic.com/en/introduction?company_id=2&h=557a42bfc21453abced8385114d1ac32&enroller_id=11000071628&sponsor_id=11000071628&representative_id=11000071628&line_rank=0&product_id=2006",
  },
]

export const metadata: Metadata = {
  title: "Products | Kangen Water, K8 & Enagic Wellness",
  description: "Explore the Ryan Pool Enagic wellness ecosystem: Kangen Water machines including the Leveluk K8 and SD501 DX, EmGuarde EMF protection, Anespa DX, Ukon SIGMA, and premium Japanese wellness products.",
  keywords: ["Kangen Water", "Enagic", "Leveluk K8", "Leveluk SD501 DX", "Leveluk JRIV", "EmGuarde", "Anespa DX", "Ukon SIGMA", "Kangen Wagyu", "hydrogen water", "alkaline ionized water", "cellular hydration", "anti-aging", "wellness products", "water ionizer", "EMF protection", "Ryan Pool", "Ryan Pool Enagic", "buy Kangen Water USA", "Enagic distributor"],
  openGraph: {
    title: "Products | Ryan Pool Enagic",
    description: "Explore Kangen Water, EmGuarde EMF protection, home spa technology, and premium Japanese wellness products through Ryan Pool Enagic.",
    url: "https://truelegacy.com/products",
    images: [
      {
        url: "/k8-machine.png",
        width: 1200,
        height: 630,
        alt: "Leveluk K8 Kangen Water Machine - Premium Wellness Product",
      },
      {
        url: "/sd501dx.png",
        width: 1200,
        height: 630,
        alt: "Leveluk SD501 DX Kangen Water Machine",
      },
      {
        url: "/em-guarde.png",
        width: 1200,
        height: 630,
        alt: "EmGuarde EMF Protection Device",
      },
      {
        url: "/anespaDX.png",
        width: 1200,
        height: 630,
        alt: "Anespa DX Luxury Spa System",
      },
      {
        url: "/kangen-wagyu-beef.png",
        width: 1200,
        height: 630,
        alt: "Kangen Wagyu Beef Premium Set",
      },
      {
        url: "/kangen-ukon.png",
        width: 1200,
        height: 630,
        alt: "Ukon SIGMA Premium Turmeric Supplement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Ryan Pool Enagic",
    description: "Explore Kangen Water, EmGuarde EMF protection, home spa technology, and premium Japanese wellness products through Ryan Pool Enagic.",
    images: ["/k8-machine.png"],
  },
  alternates: {
    canonical: "/products",
  },
}

export default function ProductsPage() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
            Premium Wellness Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the Ryan Pool Enagic wellness ecosystem: Kangen Water, EMF protection, home spa technology, and premium Japanese wellness products.
          </p>
        </div>

        <div className="mb-12 rounded-3xl border border-gold/20 bg-linear-to-br from-gold/10 via-card to-card p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Featured Power Combo
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-5xl">
                K8 + EmGuarde. The Health & Protection Duo.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                The Leveluk K8 and EmGuarde combine two of Enagic&apos;s most powerful products: hydrogen-rich Kangen Water for daily cellular hydration and EMF protection for modern digital environments.
              </p>
            </div>
            <div className="rounded-2xl border border-gold/15 bg-background/60 p-6">
              <ul className="space-y-4 text-sm text-foreground/85">
                <li><span className="font-semibold text-gold">K8:</span> Flagship 8-plate Kangen Water machine for daily cellular hydration</li>
                <li><span className="font-semibold text-gold">EmGuarde:</span> Japanese-engineered EMF protection for modern digital environments</li>
                <li><span className="font-semibold text-gold">Together:</span> A premium home wellness foundation for health, income, and legacy</li>
              </ul>
              <a
                href="https://information.enagic.com/en/introduction?company_id=2&h=557a42bfc21453abced8385114d1ac32&enroller_id=11000071628&sponsor_id=11000071628&representative_id=11000071628&line_rank=0&product_id=1016"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-white shadow-lg hover:brightness-110 transition-all"
              >
                Shop the Duo
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              name={product.name}
              image={product.image}
              description={product.description}
              link={product.link}
              category={product.category}
              features={product.features}
              availability={product.availability}
              inquiry={product.inquiry}
              index={index}
            />
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-gold/20 bg-card p-10 text-center md:p-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Not Sure Where To Start?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Every journey is different. Book a free consultation and we&apos;ll help you choose the right Enagic technology for your home, health, and goals.
          </p>
          <CalendlyButton className="px-8 py-4 text-lg">Book A Free Consultation</CalendlyButton>
        </div>
      </div>
    </section>
  )
}
