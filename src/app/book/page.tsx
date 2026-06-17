import { CalendlyInline } from "@/components/shared/calendly"
import { CheckCircle, Clock, ShieldCheck, Video } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book A Free Call With Ryan Pool",
  description:
    "Book a free 30-minute call with Ryan Pool to explore Kangen Water, the Leveluk K8, or joining the True Legacy Enagic team. Pick a time that works for you.",
  keywords: ["book a call", "Ryan Pool Enagic", "Kangen Water consultation", "join Enagic team", "free consultation"],
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book A Free Call | Ryan Pool Enagic",
    description: "Pick a time for a free 30-minute call about Kangen Water or joining the True Legacy Enagic team.",
    url: "https://truelegacy.com/book",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "Book a call with Ryan Pool Enagic" }],
  },
}

const perks = [
  { icon: Clock, title: "30 Minutes", text: "A focused, no-pressure conversation about your goals." },
  { icon: Video, title: "Live & Personal", text: "Talk directly with Ryan — product info or the team opportunity." },
  { icon: ShieldCheck, title: "Zero Obligation", text: "Get honest answers. Decide what's right for you, on your terms." },
]

const choices = [
  "Discover which Kangen Water machine fits your home and budget",
  "Understand hydrogen-rich, ionized alkaline water and EMF protection",
  "Learn how to join the True Legacy Enagic team and get paid",
]

export default function BookPage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-6">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="water-blob animate-float-slow left-[4%] top-[12%] h-64 w-64" />
        <div className="water-blob animate-float-slower right-[6%] top-[20%] h-80 w-80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold shadow-sm">
            Book Your Free Call
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
            Talk To Ryan — <span className="text-shimmer-gold">Free 30-Min Call</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Whether you want product info or you&apos;re ready to join the True Legacy Enagic team, pick a time below and let&apos;s map out your healthier, wealthier future.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-8">
            <div className="grid gap-4">
              {perks.map((p) => (
                <div key={p.title} className="flex items-start gap-4 rounded-2xl border border-gold/15 bg-card p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                    <p.icon className="h-5 w-5 text-gold" />
                  </span>
                  <div>
                    <h2 className="font-heading text-lg font-semibold">{p.title}</h2>
                    <p className="text-sm text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-gold/15 bg-secondary/60 p-6">
              <h2 className="font-heading text-lg font-semibold">On this call you can:</h2>
              <ul className="mt-4 space-y-3">
                {choices.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-foreground/85">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <CalendlyInline minHeight={760} />
        </div>
      </div>
    </section>
  )
}
