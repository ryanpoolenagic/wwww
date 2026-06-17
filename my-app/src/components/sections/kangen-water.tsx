"use client"

import { WaveField } from "@/components/shared/water-graphics"
import { Droplets, HeartPulse, Leaf, ShieldCheck, Sparkles, Zap } from "lucide-react"
import { motion } from "motion/react"

const benefits = [
  {
    icon: Droplets,
    title: "Superior Hydration",
    description: "Micro-clustered water molecules absorb faster at the cellular level, hydrating your body more efficiently than ordinary tap water.",
  },
  {
    icon: Sparkles,
    title: "Antioxidant-Rich",
    description: "A negative oxidation-reduction potential (ORP) helps neutralize free radicals linked to oxidative stress and premature aging.",
  },
  {
    icon: Zap,
    title: "Hydrogen-Infused",
    description: "Dissolved molecular hydrogen acts as a selective antioxidant, supporting energy, recovery, and overall vitality.",
  },
  {
    icon: Leaf,
    title: "Alkaline Balance",
    description: "Drinking water ionized to an alkaline pH supports your body's natural balance and a healthier internal environment.",
  },
  {
    icon: ShieldCheck,
    title: "Five Water Types",
    description: "One machine produces drinking, beauty, cleaning, and sanitizing waters — replacing harsh chemicals throughout your home.",
  },
  {
    icon: HeartPulse,
    title: "Everyday Wellness",
    description: "A simple daily habit that families across 51+ countries rely on to feel more energized and live well.",
  },
]

export function KangenWater() {
  return (
    <section className="relative overflow-hidden bg-card py-20 px-6">
      <WaveField className="opacity-60" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            What Is Kangen Water?
          </span>
          <h2 className="mt-5 font-heading text-4xl font-bold md:text-5xl">
            Not Just Water. <span className="text-shimmer-gold">Living Water.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Kangen Water&trade; is electrically ionized, hydrogen-rich alkaline water produced by Enagic&apos;s medical-grade machines. For over 40 years it has been trusted in Japanese hospitals and homes worldwide for hydration, balance, and wellness.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-gold/15 bg-background p-7 transition-all hover:border-gold/40 hover:shadow-[0_18px_50px_-24px_rgba(2,132,199,0.5)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
