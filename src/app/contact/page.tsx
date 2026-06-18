"use client"

import { CalendlyInline } from "@/components/shared/calendly"
import { Mail, MapPin, Send } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goals: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nGoals:\n${formData.goals}`,
    )
    window.location.href = `mailto:Ryanpool9@yahoo.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start building your legacy? Book a free call below, or send a message and Ryan will reach out personally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <div className="mb-6 text-center">
              <h2 className="font-heading text-3xl font-bold">Book A Free 30-Min Call</h2>
              <p className="mt-2 text-muted-foreground">
                Pick a time that works for you — product info or joining the True Legacy team.
              </p>
            </div>
            <CalendlyInline minHeight={720} />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-card rounded-2xl p-8 border border-gold/20">
                <h2 className="font-heading text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">Ryanpool9@yahoo.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">Global Network</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-gold/20">
                <h2 className="font-heading text-2xl font-semibold mb-4">Connect on WhatsApp</h2>
                <p className="text-muted-foreground mb-6">
                  Get instant responses and connect directly with our team.
                </p>
                <a
                  href="https://wa.me/12137336286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Message on WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-gold/20">
                <h2 className="font-heading text-2xl font-semibold mb-2">Prefer To Send A Message?</h2>
                <p className="mb-6 text-sm text-muted-foreground">Fill this out and Ryan will get back to you personally.</p>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-gold/20 focus:border-gold focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-gold/20 focus:border-gold focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-gold/20 focus:border-gold focus:outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium mb-2">
                      Your Goals
                    </label>
                    <textarea
                      id="goals"
                      required
                      rows={4}
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-gold/20 focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your goals and what you're looking to achieve..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-muted-gold transition-colors text-lg"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
