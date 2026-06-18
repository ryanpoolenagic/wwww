"use client"

import { trackMetaEvent } from "@/components/shared/meta-pixel"
import type { AnchorHTMLAttributes } from "react"

type MetaCheckoutLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode
}

export function MetaCheckoutLink({ children, onClick, ...props }: MetaCheckoutLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackMetaEvent("InitiateCheckout")
        onClick?.(event)
      }}
    >
      {children}
    </a>
  )
}
