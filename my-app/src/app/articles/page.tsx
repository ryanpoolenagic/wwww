import { CalendlyButton } from "@/components/shared/calendly"
import { articles } from "@/lib/articles"
import { ArrowRight, BookOpen, Clock } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Articles | Kangen Water, Hydrogen Water & Wellness",
  description:
    "Read expert articles on Kangen Water, hydrogen water, alkaline vs tap water, EMF protection, and the Enagic opportunity. Learn how to create a healthier future with Ryan Pool Enagic.",
  keywords: [
    "Kangen Water articles",
    "hydrogen water",
    "alkaline water",
    "EMF protection",
    "Enagic blog",
    "Ryan Pool Enagic",
    "wellness articles",
    "ionized water guide",
  ],
  alternates: { canonical: "/articles" },
  openGraph: {
    title: "Articles | Ryan Pool Enagic",
    description:
      "Expert guides on Kangen Water, hydrogen water, alkaline water, and EMF protection.",
    url: "https://truelegacy.com/articles",
  },
}

export default function ArticlesPage() {
  const [featured, ...rest] = articles

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <BookOpen className="h-3.5 w-3.5" />
            The Healthier Future Journal
          </span>
          <h1 className="mt-5 font-heading text-5xl md:text-6xl font-bold">
            Articles &amp; <span className="text-shimmer-gold">Insights</span>
          </h1>
          <p className="mt-5 text-xl text-muted-foreground">
            Expert guides on Kangen Water, hydrogen water, EMF protection, and building a healthier future.
          </p>
        </div>

        <Link
          href={`/articles/${featured.slug}`}
          className="group mt-14 block overflow-hidden rounded-3xl border border-gold/20 bg-linear-to-br from-gold/10 via-card to-card p-8 transition-all hover:border-gold/40 hover:shadow-[0_24px_70px_-30px_rgba(2,132,199,0.5)] md:p-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Featured · {featured.category}
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold md:text-4xl">{featured.title}</h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{featured.excerpt}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
            Read Article
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex flex-col rounded-2xl border border-gold/15 bg-card p-7 transition-all hover:border-gold/40 hover:shadow-[0_18px_50px_-28px_rgba(2,132,199,0.5)]"
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-gold">
                <span>{article.category}</span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readTime}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-2xl font-semibold">{article.title}</h3>
              <p className="mt-3 flex-1 text-muted-foreground">{article.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                Read Article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-gold/20 bg-card p-10 text-center md:p-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready To Experience Kangen Water?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Book a free consultation with Ryan Pool and discover which Enagic machine is right for your home and health goals.
          </p>
          <CalendlyButton className="px-8 py-4 text-lg">Book A Free Consultation</CalendlyButton>
        </div>
      </div>
    </section>
  )
}
