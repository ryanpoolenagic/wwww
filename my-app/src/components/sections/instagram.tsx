"use client"

import { motion } from "motion/react"

function Instagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function InstagramSection() {
  return (
    <section className="relative overflow-hidden bg-card py-20 px-6">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <Instagram className="h-3.5 w-3.5" />
            Follow The Journey
          </span>
          <h2 className="mt-5 font-heading text-4xl font-bold md:text-5xl">
            See Kangen Water <span className="text-shimmer-gold">In Action</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Real stories and results from Ryan Pool and the global Enagic community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-10 w-full max-w-[420px]"
        >
          <div className="relative aspect-9/16 overflow-hidden rounded-3xl border border-gold/20 bg-white shadow-[0_30px_90px_-30px_rgba(2,132,199,0.4)]">
            <iframe
              src="https://www.instagram.com/p/DNEDAU7PHic/embed"
              title="Ryan Pool on Instagram"
              className="h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <a
            href="https://www.instagram.com/ryanpool"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-secondary"
          >
            <Instagram className="h-4 w-4" />
            Follow @ryanpool
          </a>
        </motion.div>
      </div>
    </section>
  )
}
