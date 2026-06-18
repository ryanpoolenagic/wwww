"use client"

import { Award, Heart, TrendingUp, Users } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Health First",
      description: "Helping families hydrate better and feel their best with Kangen Water every single day.",
    },
    {
      icon: Users,
      title: "Community",
      description: "A global network of like-minded people committed to wellness, growth, and support.",
    },
    {
      icon: Award,
      title: "Mentorship",
      description: "Proven guidance and systems for those ready to share Enagic and build something lasting.",
    },
    {
      icon: TrendingUp,
      title: "Legacy",
      description: "Creating a healthier future and meaningful impact that extends beyond a lifetime.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-3/4 overflow-hidden rounded-2xl"
            >
              <Image
                src="/ryan-convention.jpg"
                alt="Ryan Pool speaking at an Enagic convention, sharing Kangen Water for a healthier future"
                fill
                sizes="(max-width: 768px) 45vw, 22vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative aspect-3/4 overflow-hidden rounded-2xl mt-8"
            >
              <Image
                src="/ryan-trust-image.jpg"
                alt="Ryan Pool connecting with families and building trust through Kangen Water"
                fill
                sizes="(max-width: 768px) 45vw, 22vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Meet Ryan Pool
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Ryan Pool is a passionate wellness advocate and Independent Enagic Distributor focused on helping people transform their health through Kangen Water.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              His mission is simple: create a healthier future for families worldwide — improving hydration, energy, and wellbeing while empowering others to do the same.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
