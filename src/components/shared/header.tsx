"use client"

import { CalendlyButton } from "@/components/shared/calendly"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Articles", href: "/articles" },
  { name: "Opportunity", href: "/opportunity" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gold/15 bg-background/85 backdrop-blur-xl shadow-[0_4px_30px_-12px_rgba(2,132,199,0.25)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative h-11 w-11 shrink-0">
            <Image src="/logo.jpg" alt="Ryan Pool Enagic logo" fill className="object-contain" sizes="44px" priority />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-bold tracking-tight text-foreground">
              Ryan Pool Enagic
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
              Creating A Healthier Future
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  active ? "text-gold" : "text-foreground/80 hover:text-gold"
                }`}
              >
                {item.name}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold" />
                )}
              </Link>
            )
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <CalendlyButton variant="outline" showArrow={false} className="px-4 py-2 text-sm">
            Join The Team
          </CalendlyButton>
          <CalendlyButton className="px-5 py-2.5 text-sm shadow-[0_8px_24px_-8px_rgba(2,132,199,0.6)]">
            Book A Call
          </CalendlyButton>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:text-gold"
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-gold/15 bg-background sm:max-w-sm">
              <SheetTitle className="px-4 pt-4">
                <span className="flex items-center gap-3">
                  <span className="relative h-9 w-9 shrink-0">
                    <Image src="/logo.jpg" alt="Ryan Pool Enagic logo" fill className="object-contain" sizes="36px" />
                  </span>
                  <span className="font-heading text-lg font-semibold">Ryan Pool Enagic</span>
                </span>
              </SheetTitle>
              <div className="mt-4 flex flex-col gap-1 px-4">
                {navItems.map((item) => {
                  const active = pathname === item.href
                  return (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                          active
                            ? "bg-gold/10 text-gold"
                            : "text-foreground/90 hover:bg-gold/5 hover:text-gold"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  )
                })}
                <SheetClose asChild>
                  <CalendlyButton className="mt-4 w-full">Book A Call</CalendlyButton>
                </SheetClose>
                <SheetClose asChild>
                  <CalendlyButton variant="outline" showArrow={false} className="mt-2 w-full">
                    Join The Team
                  </CalendlyButton>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
