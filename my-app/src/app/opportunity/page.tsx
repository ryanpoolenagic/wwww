"use client"

import { CalendlyButton } from "@/components/shared/calendly"
import {
    Award,
    BarChart3,
    CheckCircle,
    Clock,
    Globe,
    Heart,
    Layers,
    Shield,
    Sparkles,
    Target,
    TrendingUp,
    Users,
    Zap,
} from "lucide-react"
import { motion } from "motion/react"

const pillars = [
  {
    icon: Heart,
    title: "Health",
    description:
      "Every person on the team starts with a personal transformation. Kangen Water, EmGuarde, and Enagic's wellness ecosystem are products people keep using for life.",
    points: [
      "Hydrogen-rich, ionized alkaline water daily",
      "EMF protection for home & office",
      "Anti-aging and cellular wellness products",
    ],
  },
  {
    icon: TrendingUp,
    title: "Wealth",
    description:
      "Enagic's direct-compensation model pays you every time someone you refer purchases — no monthly fees, no inventory, no middleman.",
    points: [
      "Direct commission per machine sold",
      "8-tier compensation up to $340 per unit",
      "No recurring costs to maintain your rank",
    ],
  },
  {
    icon: Layers,
    title: "Legacy",
    description:
      "Ryan Pool Enagic is built for people who want impact that outlasts income. The network you build can be inherited, transferred, and grown across generations.",
    points: [
      "Business transferable to family members",
      "Build a team across 51+ countries",
      "Create passive income streams over time",
    ],
  },
]

const steps = [
  {
    number: "01",
    title: "Book Your Discovery Call",
    description:
      "Jump on a free 30-minute call with Ryan. No pitch, no pressure — just clarity on whether the products and opportunity are a fit for your life.",
  },
  {
    number: "02",
    title: "Choose Your Entry Point",
    description:
      "Select the Enagic machine that fits your home and goals. Your purchase is your business license — Enagic handles shipping, warranties, and support.",
  },
  {
    number: "03",
    title: "Plug Into The System",
    description:
      "Join Ryan's training calls, get your digital toolkit, and start sharing. The Ryan Pool Enagic team provides mentorship every step of the way.",
  },
]

const perks = [
  { icon: Users, text: "Weekly live mentorship calls with Ryan" },
  { icon: Globe, text: "Sell in 51+ countries — Enagic ships globally" },
  { icon: BarChart3, text: "Real-time back-office dashboard & analytics" },
  { icon: Zap, text: "Done-for-you marketing assets and scripts" },
  { icon: Shield, text: "No monthly fees, no autoships, no rank maintenance" },
  { icon: Award, text: "Access to Enagic's 50+ years of product credibility" },
]

const faqs = [
  {
    question: "What is the initial investment?",
    answer:
      "Your entry point is the purchase of an Enagic product — typically a Kangen Water machine. Prices range from a few hundred to a few thousand dollars depending on the model. There are no additional fees, monthly charges, or autoships.",
  },
  {
    question: "Do I need prior sales or business experience?",
    answer:
      "No prior experience required. The Ryan Pool Enagic team gives you proven scripts, weekly training calls, and a step-by-step system. If you can have an authentic conversation about health, you can do this.",
  },
  {
    question: "How much time do I need to commit?",
    answer:
      "Many team members start part-time with 10–15 hours per week and grow from there. You set your own schedule — there are no quotas or minimum activity requirements.",
  },
  {
    question: "How does Enagic's compensation work?",
    answer:
      "Enagic pays direct commissions of up to $340 per machine sold, distributed across 8 tiers. When you refer someone who then refers others, you earn on multiple levels simultaneously — this is what creates scalable, growing income.",
  },
  {
    question: "Is this a pyramid scheme or MLM?",
    answer:
      "Enagic is a direct-sales company (DSA-accredited) that has operated for 50+ years. You earn on the sale of real, physical products — not on recruiting alone. Every distributor can earn without building a team by selling directly.",
  },
]

export default function OpportunityPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative px-6 pb-20 pt-32">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="water-blob animate-float-slow left-[4%] top-[12%] h-72 w-72" />
          <div className="water-blob animate-float-slower right-[6%] top-[24%] h-96 w-96" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Join The True Legacy Team
            </span>
            <h1 className="mt-6 font-heading text-5xl font-bold md:text-6xl lg:text-7xl">
              Build Health, <span className="text-shimmer-gold">Wealth &amp; Legacy</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
              Join entrepreneurs across 51+ countries sharing Kangen Water and EmGuarde — with mentorship, proven systems, and a compensation model designed to grow with you.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CalendlyButton className="px-8 py-4 text-lg">
                Book A Free Strategy Call
              </CalendlyButton>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white px-7 py-3.5 text-base font-semibold text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
              >
                See How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-card px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <h2 className="font-heading text-4xl font-bold md:text-5xl">Three Pillars. One Mission.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything Ryan Pool Enagic stands for is built on a foundation of health, wealth, and legacy — in that order.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl border border-gold/20 bg-card p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10">
                  <pillar.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold">{pillar.title}</h3>
                <p className="mt-3 text-muted-foreground">{pillar.description}</p>
                <ul className="mt-5 space-y-2">
                  {pillar.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <h2 className="font-heading text-4xl font-bold md:text-5xl">How To Join The Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three simple steps from first conversation to active business owner.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-2xl border border-gold/20 bg-card p-8"
              >
                <span className="font-heading text-5xl font-bold text-gold/20">{step.number}</span>
                <h3 className="mt-3 font-heading text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-card px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl font-bold md:text-5xl">What You Get When You Join</h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Ryan Pool Enagic isn&apos;t just access to products — it&apos;s a full support system built to help you succeed from day one.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {perks.map((perk, i) => (
                  <motion.div
                    key={perk.text}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-start gap-3 rounded-xl border border-gold/15 bg-secondary/50 p-4"
                  >
                    <perk.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-sm font-medium text-foreground/85">{perk.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-gold/20 bg-linear-to-br from-gold/10 via-card to-card p-8 md:p-10"
            >
              <Target className="h-10 w-10 text-gold" />
              <h3 className="mt-4 font-heading text-2xl font-bold">Enagic&apos;s Compensation Model</h3>
              <p className="mt-3 text-muted-foreground">
                Unlike traditional MLMs, Enagic pays direct commissions simultaneously to multiple levels on each sale — up to 8 distributors paid on a single transaction.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { label: "Commission per K8 machine", value: "Up to $340" },
                  { label: "Pay levels per sale", value: "Up to 8" },
                  { label: "Countries with active sales", value: "51+" },
                  { label: "Monthly fees / autoships", value: "None" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between border-b border-gold/10 pb-3">
                    <span className="text-sm text-muted-foreground">{row.label}</span>
                    <span className="font-heading font-bold text-gold">{row.value}</span>
                  </div>
                ))}
              </div>
              <CalendlyButton className="mt-8 w-full" showArrow={false}>
                Get The Full Breakdown
              </CalendlyButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-heading text-2xl md:text-3xl font-semibold text-foreground/90">
              Used and trusted by professional athletes like Tom Brady and Steph Curry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <h2 className="font-heading text-4xl font-bold md:text-5xl">Common Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">Honest answers to the questions we hear most often.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-gold/20 bg-background p-6"
              >
                <h3 className="flex items-start gap-3 font-heading text-lg font-semibold">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {faq.question}
                </h3>
                <p className="ml-8 mt-3 text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-6 py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="water-blob animate-float-slow left-[10%] top-[20%] h-72 w-72" />
          <div className="water-blob animate-float-slower right-[10%] bottom-[10%] h-80 w-80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            Ready To Build Your <span className="text-shimmer-gold">True Legacy</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl text-muted-foreground">
            One call is all it takes to find out if this is the right fit for you. No obligation — just real answers from Ryan directly.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CalendlyButton className="px-8 py-4 text-lg" showIcon>
              Book A Free Call Now
            </CalendlyButton>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              30 minutes · Free · No pressure
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
