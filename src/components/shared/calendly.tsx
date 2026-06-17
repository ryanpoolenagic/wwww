"use client"

import { ArrowRight, CalendarDays } from "lucide-react"
import { useEffect, useState } from "react"

export const CALENDLY_URL =
  "https://calendly.com/ryanpoolenagic-informational-meeting/30min"

const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js"
const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css"

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void
    }
  }
}

let scriptPromise: Promise<void> | null = null

/** Loads the Calendly widget script + stylesheet exactly once. */
function loadCalendly(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve()
  if (window.Calendly) return Promise.resolve()
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise<void>((resolve) => {
    if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = WIDGET_CSS
      document.head.appendChild(link)
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_JS}"]`)
    if (existing) {
      if (window.Calendly) resolve()
      else existing.addEventListener("load", () => resolve(), { once: true })
      return
    }

    const script = document.createElement("script")
    script.src = WIDGET_JS
    script.async = true
    script.addEventListener("load", () => resolve(), { once: true })
    document.body.appendChild(script)
  })

  return scriptPromise
}

type CalendlyButtonProps = {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "outline" | "ghost"
  showArrow?: boolean
  showIcon?: boolean
  ariaLabel?: string
  url?: string
}

const variants: Record<NonNullable<CalendlyButtonProps["variant"]>, string> = {
  primary:
    "bg-gold text-white shadow-[0_12px_34px_-10px_rgba(2,132,199,0.7)] hover:bg-muted-gold hover:-translate-y-0.5",
  outline:
    "border border-gold/40 bg-white text-gold hover:bg-secondary hover:-translate-y-0.5",
  ghost: "bg-white/10 text-white backdrop-blur hover:bg-white/20",
}

/** A button that opens the Calendly scheduling popup. */
export function CalendlyButton({
  children,
  className = "",
  variant = "primary",
  showArrow = true,
  showIcon = false,
  ariaLabel,
  url = CALENDLY_URL,
}: CalendlyButtonProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    loadCalendly().then(() => setReady(true))
  }, [])

  const handleClick = async () => {
    await loadCalendly()
    window.Calendly?.initPopupWidget({ url })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      aria-busy={!ready}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {showIcon && <CalendarDays className="h-4 w-4" />}
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </button>
  )
}

/** Renders the Calendly inline scheduling calendar. */
export function CalendlyInline({
  className = "",
  minHeight = 700,
  url = CALENDLY_URL,
}: {
  className?: string
  minHeight?: number
  url?: string
}) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    loadCalendly().then(() => {
      const parent = document.getElementById("calendly-inline-target")
      if (parent && window.Calendly && parent.childElementCount === 0) {
        window.Calendly.initInlineWidget({ url, parentElement: parent })
      }
      setLoaded(true)
    })
  }, [url])

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-gold/20 bg-white shadow-[0_24px_70px_-30px_rgba(2,132,199,0.5)] ${className}`}
    >
      <div
        id="calendly-inline-target"
        style={{ minWidth: 320, height: minHeight }}
      />
      {!loaded && (
        <div
          className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground"
          style={{ height: minHeight }}
        >
          Loading calendar…
        </div>
      )}
    </div>
  )
}
