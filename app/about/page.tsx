"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Mail,
  Globe,
  Briefcase,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Target,
  Code,
  Cpu,
  BarChart3,
  Database,
  GaugeCircle,
  Rocket,
  BrainCircuit,
  ArrowLeft,
  MessageCircleIcon,
  WorkflowIcon,
  Plug2Icon,
  MergeIcon,
  PuzzleIcon,
  Layers3Icon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const infoItems = [
    { icon: Sparkles, label: "Name", value: "Sujan Das" },
    { icon: Mail, label: "Email", value: "contact@sujandas.info", href: "mailto:contact@sujandas.info" },
    { icon: Globe, label: "Based in", value: "Kolkata, India" },
    { icon: Briefcase, label: "Experience", value: "2+ Years of Freelance Excellence" },
    { icon: GraduationCap, label: "Education", value: "BCA Graduate" },
  ]

  const timeline = [
    {
      period: "2024 — Present",
      title: "Data Science Engineer • Freelance",
      description: "Designing data pipelines, building & evaluating models, and shipping AI features into usable apps.",
    },
    {
      period: "2022 — 2025",
      title: "BCA Graduation",
      description: "Completed BCA focused on Python, DSA, and modern full-stack practices with Next.js.",
    },
    {
      period: "2021 — 2023",
      title: "Frontend Developer",
      description: "Built responsive and accessible interfaces with smooth animations and excellent performance.",
    },
  ]

  // Reworked "What I Do": detailed and attractive, includes Data Science & Analytics
  const services = [
    {
      icon: Code,
      title: "Web Development",
      bullets: [
        "Next.js + React apps with strong UX and animation",
        "Accessibility-first components and semantics",
        "Performance budgets & Lighthouse-focused delivery",
      ],
      tag: "Frontend",
    },
    {
      icon: Cpu,
      title: "AI/ML Engineering",
      bullets: [
        "Feature engineering, model training and evaluation",
        "Classification/regression for real business problems",
        "Practical deployment and monitoring strategies",
      ],
      tag: "ML",
    },
    {
      icon: BarChart3,
      title: "Data Science & Analytics",
      bullets: [
        "Data cleaning, EDA, and visualization for insights",
        "Metric design, dashboards, and reporting",
        "Experimentation and data-informed decisions",
      ],
      tag: "Analytics",
    },
    {
      icon: Database,
      title: "Automation & APIs",
      bullets: [
        "FastAPI backends and integrations",
        "Automation that reduces toil and errors",
        "Secure, documented endpoints with versioning",
      ],
      tag: "Backend",
    },
  ]

  // Improved Tech Stack groups (removed the 'Workflow' group per request)
  const techGroups: { group: string; tools: string[] }[] = [
    {
      group: "Core",
      tools: ["Python", "TypeScript", "JavaScript", "Git", "Linux"],
    },
    {
      group: "Frontend",
      tools: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    },
    {
      group: "Backend & APIs",
      tools: ["FastAPI", "REST", "WebSockets", "JWT", "PostgreSQL"],
    },
    {
      group: "Data & ML",
      tools: ["Pandas", "NumPy", "scikit-learn", "TensorFlow", "Matplotlib"],
    },
  ]

  // Replace numeric stats with attractive/interesting highlights
  const highlights = [
    {
      icon: GaugeCircle,
      title: "Lighthouse 95+",
      subtitle: "Performance • Accessibility • Best Practices",
    },
    {
      icon: BrainCircuit,
      title: "Data-First",
      subtitle: "Decisions guided by metrics and experiments",
    },
    {
      icon: Rocket,
      title: "Fast Iteration",
      subtitle: "Ship small, learn fast, improve continuously",
    },
  ]

  // Bottom CTA: exact prewritten Subject and Body you requested
  const collabMailto =
    "mailto:contact@sujandas.info?subject=Project%20Collaboration%20Request&body=Hi%20Sujan%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20really%20impressed%20with%20your%20work.%20I%27d%20love%20to%20discuss%20a%20potential%20project%20collaboration.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D"

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Back to Home link */}
      <nav className="container mx-auto px-4 pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-medium"
          aria-label="Back to Home"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </nav>

      {/* Top intro */}
      <section className="pt-24 sm:pt-28 pb-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-responsive-5xl font-bold">
              About <span className="red-accent">Me</span>
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-responsive-base">
              Data Science Engineer & Python Expert blending AI/ML with delightful, high-performance frontends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-16 sm:pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="section-border p-6 sm:p-8">
            {/* Top grid: profile + quick info */}
            <div className="responsive-grid responsive-grid-md-2 gap-8 sm:gap-12 items-start">
              {/* Profile card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="contact-card p-4 sm:p-6">
                  <div className="bg-red-500 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full inline-block mb-4 sm:mb-6 font-medium">
                    Quality Drives Code
                  </div>
 <div className="flex justify-center items-center">
  <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
    <Image
      src="/images/sujan-profile.jpg"
      alt="Portrait photo of Sujan Das"
      width={360}
      height={360}
      className="object-cover"
      priority
    />
  </div>
</div>


                  {/* Highlights (replacing numeric stats) */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {highlights.map((h) => (
                      <div
                        key={h.title}
                        className="rounded-xl border border-red-500/20 bg-white/5 p-3 text-center hover:bg-red-500/10 transition-colors"
                      >
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <h.icon className="w-4 h-4 text-red-400" />
                          <div className="text-[0.95rem] font-semibold">{h.title}</div>
                        </div>
                        <div className="text-xs text-gray-400">{h.subtitle}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6 sm:space-y-8"
              >
                <div>
                  <p className="text-gray-300 leading-relaxed text-responsive-lg mb-4">
                    I turn ideas into intelligent, production-grade experiences — from cleaning messy datasets and
                    crafting features to deploying ML models and building polished UIs that feel effortless.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-responsive-lg">
                    My toolkit centers on <span className="red-accent font-semibold">Python</span> for data/ML and{" "}
                    <span className="red-accent font-semibold">Next.js/React</span> for web — with a{" "}
                    <span className="red-accent font-semibold">quality-first</span> mindset across everything.
                  </p>
                </div>

                {/* Quick info list */}
                <div className="space-y-3">
                  {infoItems.map((item, idx) => (
                    <motion.div
                      key={`${item.label}-${idx}`}
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-between p-3 rounded-lg border-b border-gray-800 last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-400 font-medium text-responsive-sm">{item.label}:</span>
                      </div>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text-white hover:text-red-400 transition-colors font-medium text-responsive-sm text-right"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <span className="text-white font-medium text-responsive-sm text-right">{item.value}</span>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* CTAs (Change: remove "Contact Page" button; make "Get in touch" go to /contact) */}
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="cta-button">
                    <Link href="/contact" aria-label="Open contact page">
                      <MessageCircleIcon className="w-4 h-4 mr-2" />
                      Say Hello
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-red-500/30 text-red-300 hover:text-red-200 hover:bg-red-500/10 bg-transparent"
                    asChild
                  >
                    <Link href="/project" aria-label="View projects">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      View Projects
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* What I Do */}
            <div className="mt-12 sm:mt-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-responsive-3xl font-bold mb-6 flex items-center gap-2"
              >
                <Target className="text-red-400" />
                What I Do
              </motion.h2>

              <div className="responsive-grid responsive-grid-md-2 responsive-grid-lg-4 gap-6">
                {services.map((svc, i) => (
                  <motion.div
                    key={svc.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  >
                    <Card className="contact-card h-full group">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <svc.icon className="w-10 h-10 text-red-400" />
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-red-500/15 text-red-300 border border-red-500/20">
                            {svc.tag}
                          </span>
                        </div>
                        <h3 className="text-responsive-xl font-semibold mb-3">{svc.title}</h3>
                        <ul className="space-y-2.5">
                          {svc.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-responsive-sm leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack - grouped chips */}
            <div className="mt-12 sm:mt-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-responsive-3xl font-bold mb-6"
              >
                Tech <span className="red-accent">Stack</span>
              </motion.h2>

              <div className="grid gap-6 md:grid-cols-2">
                {techGroups.map((group, gi) => (
                  <motion.div
                    key={group.group}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: gi * 0.05 }}
                    className="contact-card p-5"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-responsive-lg font-semibold">{group.group}</h3>
                      <div className="h-1 w-20 rounded bg-red-500/30" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.tools.map((tool) => (
                        <span
                          key={tool}
                          className="skill-badge hover:border-red-500/40 hover:bg-red-500/10 transition-colors"
                          aria-label={tool}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-12 sm:mt-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-responsive-3xl font-bold mb-6"
              >
                Journey & <span className="red-accent">Timeline</span>
              </motion.h2>

              <div className="relative pl-6 border-l border-red-500/30 space-y-8">
                {timeline.map((t) => (
                  <motion.div
                    key={t.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                  >
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.6)]" />
                    <div className="ml-2">
                      <div className="text-xs text-gray-400 mb-1">{t.period}</div>
                      <h3 className="text-responsive-lg font-semibold mb-1">{t.title}</h3>
                      <p className="text-gray-300 text-responsive-sm leading-relaxed">{t.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 sm:mt-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-responsive-2xl font-bold mb-3">Want to collaborate?</h3>
                <p className="text-gray-400 max-w-2xl mx-auto mb-6">
                  I’m open to freelance work and remote roles. Let’s build something meaningful together.
                </p>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <Button asChild className="cta-button">
                    <Link href="/contact" aria-label="Open contact page">
                      <WorkflowIcon className="w-4 h-4 mr-2" />
                      Let’s Collaborate
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
