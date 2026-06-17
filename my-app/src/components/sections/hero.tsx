"use client"

import { CalendlyButton } from "@/components/shared/calendly"
import { HealthPulseIcon, HydrogenMoleculeIcon, WaterDropIcon, WaveField } from "@/components/shared/water-graphics"
import { Sparkles } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

const stats = [
  { value: "51+", label: "Countries" },
  { value: "5", label: "Water Types" },
  { value: "40+", label: "Years Trusted" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-secondary via-background to-background pt-32 pb-20 md:pt-40">
      {/* Floating water orbs + waves */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="water-blob animate-float-slow left-[6%] top-[14%] h-64 w-64" />
        <div className="water-blob animate-float-slower right-[8%] top-[22%] h-80 w-80" />
        <div className="water-blob animate-float-slow bottom-[6%] left-[30%] h-72 w-72" />
      </div>
      <WaveField />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Health · Hydration · Legacy
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Creating A <span className="text-shimmer-gold">Healthier Future</span>, One Glass At A Time
          </h1>
          <p className="mx-auto mt-6 max-w-[52ch] text-lg text-muted-foreground lg:mx-0">
            Ryan Pool helps families and entrepreneurs transform their health with Kangen Water — hydrogen-rich, ionized, alkaline water from Enagic&apos;s flagship Leveluk K8.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <CalendlyButton className="w-full sm:w-auto">Book A Free Call</CalendlyButton>
            <Link
              href="/products"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-white px-7 py-3.5 text-base font-semibold text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary sm:w-auto"
            >
              Explore Kangen Water
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-heading text-3xl font-bold text-gold">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-linear-to-tr from-gold/15 via-aqua/10 to-transparent blur-2xl" />
          <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] border border-gold/20 bg-white shadow-[0_30px_90px_-30px_rgba(2,132,199,0.45)]">
            <Image
              src="/ryan-hero.jpg"
              alt="Ryan Pool, Independent Enagic Distributor, sharing Kangen Water for a healthier future"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover"
            />
          </div>

          {/* Floating graphic chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-10 flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur"
          >
            <WaterDropIcon className="h-8 w-8 text-gold" />
            <span className="text-sm font-semibold text-foreground">Ionized & Alkaline</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 bottom-16 flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur"
          >
            <HydrogenMoleculeIcon className="h-8 w-12" />
            <span className="text-sm font-semibold text-foreground">Hydrogen-Rich</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 left-12 flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur"
          >
            <HealthPulseIcon className="h-7 w-14" />
            <span className="text-sm font-semibold text-foreground">Antioxidant</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
