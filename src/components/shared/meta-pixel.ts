"use client"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export function trackMetaEvent(event: "ViewContent" | "InitiateCheckout") {
  if (typeof window === "undefined") return
  window.fbq?.("track", event)
}
