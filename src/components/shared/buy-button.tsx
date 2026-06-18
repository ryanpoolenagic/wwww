"use client"

import { trackMetaEvent } from "@/components/shared/meta-pixel"
import { Droplets } from "lucide-react"
import { motion } from "motion/react"

export function BuyButton() {
  return (
    <motion.a
      href="https://information.enagic.com/en/introduction?company_id=2&h=557a42bfc21453abced8385114d1ac32&enroller_id=11000071628&sponsor_id=11000071628&representative_id=11000071628&line_rank=0&product_id=1016"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackMetaEvent("InitiateCheckout")}
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-linear-to-br from-gold to-yellow-500 rounded-full shadow-lg hover:brightness-110 transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(234, 179, 8, 0.7)",
          "0 0 0 20px rgba(234, 179, 8, 0)",
        ],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
      aria-label="Buy Here"
      title="Buy Here"
    >
      <Droplets className="w-7 h-7 text-white" />
    </motion.a>
  )
}
