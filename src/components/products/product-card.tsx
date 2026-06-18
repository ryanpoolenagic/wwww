"use client"

import { trackMetaEvent } from "@/components/shared/meta-pixel"
import { ArrowRight, Check, MessageCircle, ShoppingCart } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  name: string
  image: string
  description: string
  link?: string
  index: number
  category?: string
  features?: string[]
  availability?: string
  inquiry?: boolean
}

export function ProductCard({ name, image, description, link, index, category, features, availability, inquiry }: ProductCardProps) {
  return (
    <motion.div
      key={name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 hover:shadow-[0_18px_50px_-28px_rgba(2,132,199,0.5)] transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-linear-to-b from-secondary to-card">
        {category && (
          <span className="absolute left-4 top-4 z-10 rounded-full border border-gold/30 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur-sm">
            {category}
          </span>
        )}
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
          priority={index < 3}
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-2xl font-semibold mb-3">{name}</h3>
        <p className="text-muted-foreground mb-5">{description}</p>
        {features && features.length > 0 && (
          <ul className="mb-5 space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        {availability && (
          <p className="mb-5 text-xs uppercase tracking-wider text-muted-foreground/70">{availability}</p>
        )}
        {inquiry ? (
          <Link
            href="/contact"
            aria-label={`Request ${name} — contact to order`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold bg-gold/10 px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold/20"
          >
            <MessageCircle className="h-4 w-4" />
            Contact To Order
          </Link>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Buy ${name} now`}
            onClick={() => trackMetaEvent("InitiateCheckout")}
            className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(2,132,199,0.6)] transition-all hover:bg-muted-gold"
          >
            <ShoppingCart className="h-4 w-4" />
            Buy Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        )}
      </div>
    </motion.div>
  )
}
