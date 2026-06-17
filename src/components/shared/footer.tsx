import { Mail, MessageCircle, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const explore = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Articles", href: "/articles" },
  { name: "Opportunity", href: "/opportunity" },
  { name: "Book A Call", href: "/book" },
  { name: "Contact", href: "/contact" },
]

const legal = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Cookie Policy", href: "/cookie-policy" },
]

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-11 w-11 shrink-0">
                <Image src="/logo.jpg" alt="Ryan Pool Enagic logo" fill className="object-contain" sizes="44px" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-lg font-bold tracking-tight">Ryan Pool Enagic</span>
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">Creating A Healthier Future</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              Helping families and entrepreneurs create a healthier future through Kangen Water and premium Japanese wellness technology.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://wa.me/12137336286"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 text-muted-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/ryanpool"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 text-muted-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">Explore</h3>
            <ul className="mt-5 space-y-3">
              {explore.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">Legal</h3>
            <ul className="mt-5 space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">Contact</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="tel:+12137336286" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Phone className="h-4 w-4 text-gold" />
                  +1 (213) 733-6286
                </a>
              </li>
              <li>
                <a href="mailto:info@truelegacy.com" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4 text-gold" />
                  info@truelegacy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ryan Pool Enagic. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70">
            Ryan Pool — Independent Enagic Distributor. Results are not typical or guaranteed.
          </p>
        </div>
      </div>
    </footer>
  )
}
