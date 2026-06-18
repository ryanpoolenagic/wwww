"use client"

import { CALENDLY_URL, CalendlyButton } from "@/components/shared/calendly"
import { trackMetaEvent } from "@/components/shared/meta-pixel"
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  Droplets,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"

const K8_LINK =
  "https://information.enagic.com/en/introduction?company_id=2&h=557a42bfc21453abced8385114d1ac32&enroller_id=11000071628&sponsor_id=11000071628&representative_id=11000071628&line_rank=0&product_id=1016"

const trustPoints = [
  "Flagship Leveluk home ionizer",
  "8 platinum-coated titanium electrode plates",
  "5 water settings for drinking, cooking, beauty, and cleaning",
  "Official Enagic order page through Ryan Pool",
]

const outcomes = [
  {
    icon: Droplets,
    title: "Upgrade Daily Hydration",
    description:
      "Make hydrogen-rich, ionized alkaline drinking water from your own kitchen tap instead of relying on bottled water runs.",
  },
  {
    icon: Zap,
    title: "Built For Serious Output",
    description:
      "The K8 is Enagic's flagship Leveluk machine, designed with 8 electrode plates for strong ionization performance.",
  },
  {
    icon: ShieldCheck,
    title: "One Machine, More Uses",
    description:
      "Use different water types for everyday drinking, food prep, beauty routines, and household cleaning support.",
  },
]

const buyingSteps = [
  "Choose Buy Now to open Ryan's official Enagic K8 order page.",
  "Prefer guidance? Book a free 30-minute call before you decide.",
  "Ryan helps you understand the machine, setup, and next steps.",
]

const faqs = [
  {
    question: "Is this the actual K8 machine?",
    answer:
      "Yes. This section links to the Enagic Leveluk K8, Enagic's flagship home water ionizer.",
  },
  {
    question: "Should I buy now or schedule first?",
    answer:
      "If you already know the K8 is the machine you want, use Buy Now. If you want help comparing options or understanding setup, book the call.",
  },
  {
    question: "What makes the K8 different?",
    answer:
      "The K8 uses 8 platinum-coated titanium electrode plates and produces multiple water types, giving families a high-performance option for daily use.",
  },
]

export function K8Spotlight() {
  return (
    <section id="k8-machine" className="relative scroll-mt-28 overflow-hidden bg-background px-6 py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="water-blob animate-float-slower right-[-6%] top-[8%] h-96 w-96" />
        <div className="water-blob animate-float-slow left-[-8%] bottom-[12%] h-72 w-72" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              Featured Kangen Machine
            </span>
            <h2 className="mt-5 max-w-3xl font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
              Get The <span className="text-shimmer-gold">Leveluk K8</span> For A Healthier Home
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              The K8 is Enagic&apos;s flagship Kangen Water machine for families who want cleaner daily routines, better hydration habits, and a trusted system on their counter.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-xl border border-gold/15 bg-white px-4 py-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm font-medium text-foreground/85">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={K8_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMetaEvent("InitiateCheckout")}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-bold text-white shadow-[0_14px_38px_-12px_rgba(2,132,199,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted-gold"
              >
                Buy The K8 Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <CalendlyButton variant="outline" showArrow={false} showIcon className="px-8 py-4">
                Book A Free K8 Call
              </CalendlyButton>
            </div>

            <div className="mt-5 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-gold hover:text-muted-gold">
                <CalendarDays className="h-4 w-4" />
                Open the calendar link
              </a>
              <span className="hidden text-border sm:block">|</span>
              <span>Free 30-minute informational meeting with Ryan.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-linear-to-tr from-gold/20 via-aqua/10 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-linear-to-b from-white to-secondary shadow-[0_30px_90px_-34px_rgba(2,132,199,0.55)]">
              <div className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold shadow-sm backdrop-blur">
                Leveluk K8
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/k8-machine.png"
                  alt="Enagic Leveluk K8 Kangen Water ionizer machine"
                  fill
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-contain p-8 sm:p-10"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 border-t border-gold/15 bg-white/80 text-center">
                <div className="px-3 py-4">
                  <div className="font-heading text-2xl font-bold text-gold">8</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Plates</div>
                </div>
                <div className="border-x border-gold/15 px-3 py-4">
                  <div className="font-heading text-2xl font-bold text-gold">5</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Waters</div>
                </div>
                <div className="px-3 py-4">
                  <div className="font-heading text-2xl font-bold text-gold">K8</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Flagship</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {outcomes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-xl border border-gold/15 bg-white p-6 shadow-[0_18px_50px_-32px_rgba(2,132,199,0.45)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-xl border border-gold/15 bg-secondary p-6">
            <h3 className="font-heading text-2xl font-semibold">How To Get Started</h3>
            <ol className="mt-5 space-y-4">
              {buyingSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-0.5 text-sm leading-6 text-foreground/80">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-xl border border-gold/15 bg-white p-6">
            <h3 className="font-heading text-2xl font-semibold">Quick Answers Before You Buy</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <div className="flex items-start gap-2 font-semibold text-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    <span>{faq.question}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
