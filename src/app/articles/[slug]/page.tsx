import { CalendlyButton } from "@/components/shared/calendly"
import { articles, getArticle } from "@/lib/articles"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) {
    return { title: "Article Not Found" }
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://truelegacy.com/articles/${article.slug}`,
      type: "article",
      publishedTime: article.datePublished,
      authors: ["Ryan Pool"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) {
    notFound()
  }

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    author: { "@type": "Person", name: "Ryan Pool" },
    publisher: {
      "@type": "Organization",
      name: "Ryan Pool Enagic",
      logo: {
        "@type": "ImageObject",
        url: "https://truelegacy.com/logo.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://truelegacy.com/articles/${article.slug}`,
    },
    keywords: article.keywords.join(", "),
  }

  return (
    <article className="pt-32 pb-20 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="mx-auto max-w-3xl">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-muted-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          All Articles
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider">
          <span className="rounded-full border border-gold/30 bg-secondary px-3 py-1 text-gold">
            {article.category}
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {article.readTime}
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(article.datePublished).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        <h1 className="mt-5 font-heading text-4xl font-bold leading-tight md:text-5xl">
          {article.title}
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">{article.intro}</p>

        <div className="mt-10 space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-heading text-2xl font-bold md:text-3xl">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg leading-relaxed text-foreground/85">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-gold/20 bg-linear-to-br from-gold/10 via-card to-card p-8 text-center md:p-10">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">
            Want To Try Kangen Water?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Book a free consultation with Ryan Pool and find the right Enagic machine for your home.
          </p>
          <CalendlyButton className="mt-6">Book A Free Call</CalendlyButton>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl">
        <h2 className="font-heading text-3xl font-bold">Keep Reading</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {related.map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="group flex flex-col rounded-2xl border border-gold/15 bg-card p-7 transition-all hover:border-gold/40 hover:shadow-[0_18px_50px_-28px_rgba(2,132,199,0.5)]"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                {a.category}
              </span>
              <h3 className="mt-3 font-heading text-xl font-semibold">{a.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                Read Article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}
