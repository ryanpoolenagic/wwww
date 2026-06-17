"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "motion/react"

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/12137336286"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(34, 197, 94, 0.7)",
          "0 0 0 20px rgba(34, 197, 94, 0)",
        ],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </motion.a>
  )
}
