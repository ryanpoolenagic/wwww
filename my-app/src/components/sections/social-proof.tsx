"use client"

import { WaterBackground } from "@/components/shared/water-background"
import { Globe2 } from "lucide-react"
import { motion } from "motion/react"

export function SocialProof() {
  return (
    <section className="relative overflow-hidden py-20 px-6 bg-background">
      <WaterBackground />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <Globe2 className="h-3.5 w-3.5" />
            Trusted Worldwide
          </span>
          <h2 className="mt-5 font-heading text-4xl md:text-5xl font-bold mb-4">
            A Global Movement For A Healthier Future
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join families and entrepreneurs across 51+ countries who trust Kangen Water and Enagic technology every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { label: "Countries", value: "51+" },
            { label: "Global Shipping", value: "190+" },
            { label: "Years Trusted", value: "40+" },
            { label: "Water Types", value: "5" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-5xl md:text-6xl font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-heading text-2xl md:text-3xl font-semibold text-foreground/90">
            Used and trusted by professional athletes like Tom Brady and Steph Curry.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
