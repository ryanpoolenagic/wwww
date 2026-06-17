"use client"

import { CalendlyButton } from "@/components/shared/calendly"
import { ArrowRight, Check } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"

const highlights = [
  "8 platinum-coated titanium electrode plates — the most in the Leveluk line",
  "Produces 5 water types for drinking, beauty, cooking & cleaning",
  "Highest antioxidant potential and hydrogen production",
  "Multi-language voice guidance & trusted worldwide",
]

const K8_LINK =
  "https://information.enagic.com/en/introduction?company_id=2&h=557a42bfc21453abced8385114d1ac32&enroller_id=11000071628&sponsor_id=11000071628&representative_id=11000071628&line_rank=0&product_id=1016"

export function K8Spotlight() {
  return (
    <section className="relative overflow-hidden bg-background py-20 px-6">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="water-blob animate-float-slower right-[-6%] top-[10%] h-96 w-96" />
        <div className="water-blob animate-float-slow left-[-8%] bottom-[5%] h-72 w-72" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-linear-to-tr from-gold/20 via-aqua/10 to-transparent blur-3xl" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-gold/20 bg-linear-to-b from-secondary to-card">
            <Image
              src="/k8-machine.png"
              alt="Enagic Leveluk K8 — flagship Kangen Water ionizer machine"
              fill
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-contain p-10"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            The Flagship
          </span>
          <h2 className="mt-5 font-heading text-4xl font-bold md:text-5xl">
            Meet The <span className="text-shimmer-gold">Leveluk K8</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Enagic&apos;s most powerful home unit transforms ordinary tap water into hydrogen-rich, ionized Kangen Water — the foundation of a healthier home and a healthier future.
          </p>

          <ul className="mt-7 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-foreground/85">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm md:text-base">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={K8_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-white shadow-[0_12px_34px_-10px_rgba(2,132,199,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted-gold"
            >
              Get The K8
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <CalendlyButton variant="outline" showArrow={false} className="px-7 py-3.5">
              Talk To Ryan First
            </CalendlyButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
