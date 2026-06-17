"use client"

import { motion } from "motion/react"

/* Animated water droplet with inner shine */
export function WaterDropIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <motion.path
        d="M24 4C24 4 9 21 9 31a15 15 0 0 0 30 0C39 21 24 4 24 4Z"
        fill="url(#dropGrad)"
        stroke="currentColor"
        strokeWidth="1.5"
        initial={{ y: -4, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      <ellipse cx="19" cy="30" rx="4" ry="6" fill="#fff" opacity="0.45" />
      <defs>
        <linearGradient id="dropGrad" x1="9" y1="4" x2="39" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7DD3FC" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* Hydrogen molecule (H2) animated */
export function HydrogenMoleculeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" fill="none" className={className} aria-hidden="true">
      <motion.g
        animate={{ rotate: [0, 6, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "32px 24px" }}
      >
        <line x1="20" y1="24" x2="44" y2="24" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
        <circle cx="20" cy="24" r="12" fill="url(#hGrad)" />
        <circle cx="44" cy="24" r="12" fill="url(#hGrad)" />
        <text x="20" y="29" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">H</text>
        <text x="44" y="29" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">H</text>
      </motion.g>
      <defs>
        <linearGradient id="hGrad" x1="8" y1="12" x2="56" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22D3EE" />
          <stop offset="1" stopColor="#0369A1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* Animated pulse / heartbeat health line */
export function HealthPulseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 32" fill="none" className={className} aria-hidden="true">
      <motion.path
        d="M2 16h12l4-10 8 20 6-14 4 8h26"
        fill="none"
        stroke="url(#pulseGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="pulseGrad" x1="0" y1="0" x2="64" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06B6D4" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* Layered animated waves used as a section backdrop */
export function WaveField({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg className="absolute bottom-0 h-[40%] w-[200%] animate-wave text-gold/10" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 C150,100 350,0 600,50 C850,100 1050,10 1200,60 L1200,120 L0,120 Z" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-0 h-[30%] w-[200%] animate-wave text-aqua/10" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ animationDuration: "26s" }}>
        <path d="M0,80 C200,40 400,110 600,70 C800,30 1000,100 1200,70 L1200,120 L0,120 Z" fill="currentColor" />
      </svg>
    </div>
  )
}
