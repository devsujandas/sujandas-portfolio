"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, MapPin, Clock, Sparkles, ArrowRight, CheckCircle2, Phone, MessageSquareText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  // Updated mailto constant
  const mailto =
    "mailto:contact@sujandas.info?subject=Project%20Collaboration%20Request&body=Hi%20Sujan,%0D%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20really%20impressed%20with%20your%20work.%20I%27d%20love%20to%20discuss%20a%20potential%20project%20collaboration.%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0ABest%20regards,%0D%0A%5BYour%20Name%5D"

  const quickFacts = [
    { icon: MapPin, title: "Location", text: "Kolkata, India" },
    { icon: Clock, title: "Response Time", text: "Within 24–48 hours" },
    { icon: Sparkles, title: "Availability", text: "Freelance & Remote" },
  ]

  const waysToWork = [
    "Clear scope, milestones, and success criteria",
    "Transparent communication & async-friendly updates",
    "Performance, accessibility, and quality as defaults",
    "Maintainability and handover documentation",
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <section className="pt-24 sm:pt-28 pb-10 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-responsive-5xl font-bold"
          >
            Contact <span className="red-accent">Me</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 mt-4 max-w-2xl mx-auto text-responsive-base"
          >
            No forms — just fast ways to reach me. I’m open to freelance gigs, remote roles, and collaborations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 flex items-center justify-center gap-3 flex-wrap"
          >
            <Button asChild className="cta-button">
              <Link href={mailto} aria-label="Send email to Sujan with a prefilled collaboration message">
                <Mail className="w-4 h-4 mr-2" />
                Get in touch
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-red-500/30 text-red-300 hover:text-red-200 hover:bg-red-500/10 bg-transparent"
              asChild
            >
              <Link href="/project" aria-label="See projects">
                <ArrowRight className="w-4 h-4 mr-2" />
                View Projects
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 sm:pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="section-border p-6 sm:p-8">
            <div className="responsive-grid responsive-grid-md-2 gap-6">
              {/* Quick facts */}
              <Card className="contact-card">
                <CardContent className="p-6">
                  <h2 className="text-responsive-xl font-semibold mb-4">Quick Facts</h2>
                  <div className="grid gap-4">
                    {quickFacts.map((f) => (
                      <div key={f.title} className="flex items-start gap-3">
                        <f.icon className="w-5 h-5 text-red-400 mt-0.5" />
                        <div>
                          <div className="font-medium">{f.title}</div>
                          <div className="text-gray-300 text-sm">{f.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* How I work */}
              <Card className="contact-card">
                <CardContent className="p-6">
                  <h2 className="text-responsive-xl font-semibold mb-4">How I Work</h2>
                  <ul className="space-y-2">
                    {waysToWork.map((w) => (
                      <li key={w} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5" />
                        <span className="text-gray-300">{w}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Direct channels */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="contact-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquareText className="w-5 h-5 text-red-400" />
                    <h3 className="font-semibold">Message</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Prefer async chat? Send me a brief message with context and links. I’ll follow up by email.
                  </p>
                </CardContent>
              </Card>

              <Card className="contact-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-5 h-5 text-red-400" />
                    <h3 className="font-semibold">Calls</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    I’m happy to schedule a call after an initial email to align on goals and constraints.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 text-center">
              <Button asChild className="cta-button">
                <Link href={mailto} aria-label="Email Sujan now">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
