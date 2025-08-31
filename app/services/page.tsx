"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  Code2,
  BarChart3,
  Bot,
  PlugZap,
  Cloud,
  PenTool,
  CheckCircle2,
  Workflow,
  ShieldCheck,
  Rocket,
  Wand2,
  Github,
  ExternalLink,
  ArrowLeft,
  CompassIcon,
  Layers2Icon,
  FolderOpenIcon,
} from "lucide-react"

function TabletFrame({
  src = "/images/projects/portfolio-website.png",
  alt = "Service preview on tablet",
}: {
  src?: string
  alt?: string
}) {
  return (
    <div className="relative w-full max-w-3xl mx-auto floating-animation">
      {/* soft glow */}
      <div className="absolute -inset-6 rounded-[48px] bg-gradient-to-tr from-red-500/20 via-red-400/10 to-transparent blur-2xl" />
      {/* tablet */}
      <div className="relative rounded-[36px] bg-black/80 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur p-3">
        {/* top status bar */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 flex items-center gap-2">
          <span className="h-1.5 w-20 rounded-full bg-white/20" />
        </div>
        {/* screen/bezel */}
        <div className="rounded-[28px] bg-black overflow-hidden border border-white/10">
          <div className="relative aspect-[4/3] bg-black">
            {/* content */}
            <img src={src || "/placeholder.svg"} alt={alt} className="h-full w-full object-cover" loading="lazy" />
            {/* subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
      {/* reflection */}
      <div className="mt-6 pointer-events-none select-none">
        <div
          className="h-24 w-full rounded-[28px] overflow-hidden opacity-30"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0))",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0))",
          }}
        >
          <img
            src={src || "/placeholder.svg"}
            alt={"Tablet reflection " + alt}
            className="h-full w-full object-cover scale-y-[-1]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

/**
 * Lightweight on-scroll reveal animation without extra deps.
 * Fades in and lifts elements with a nice easing and optional delay.
 */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: visible ? "none" : "translateY(12px)",
        opacity: visible ? 1 : 0,
        transition: `transform 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, opacity 700ms ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
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

      {/* hero */}
      <section className="container mx-auto px-4 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <div className="h-full flex flex-col justify-center">
            <Reveal delay={0}>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Building reliable web products, data systems, and automation
              </h1>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-3 text-slate-300/90 text-base md:text-lg max-w-prose">
                I design and ship modern web apps with a strong data backbone and thoughtful automation. Clean
                architecture, measurable impact, and maintainability.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-5 glass-card border border-white/10 rounded-xl p-4 sm:p-5">
                <p className="text-sm md:text-base">
                  <span className="font-medium text-white">Web Development</span> and{" "}
                  <span className="font-medium text-white">AI/ML Engineering</span>
                </p>
                <p className="text-sm md:text-base mt-1">
                  <span className="font-medium text-white">Data Science &amp; Analytics</span> and{" "}
                  <span className="font-medium text-white">Automation &amp; APIs</span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-6 -mx-4 px-4 md:mx-0 md:px-0">
                <div
                  className="flex flex-nowrap items-center gap-3 overflow-x-auto whitespace-nowrap touch-pan-x snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                  role="region"
                  aria-label="Hero quick actions"
                >
                  <a
                    href="https://github.com/devsujandas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 snap-start inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-4 py-2.5 text-white hover:bg-black/50 transition"
                    aria-label="Visit my GitHub profile"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="/contact"
                    className="shrink-0 snap-start inline-flex items-center gap-2 rounded-lg border border-red-500/50 bg-red-600 px-4 py-2.5 text-white hover:bg-red-700 transition"
                  >
                    <ShieldCheck className="h-4 w-4 text-slate-300" />
                    <span>Contact Page</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative h-full flex items-center">
            {/* subtle particles */}
            <div className="absolute -inset-8 opacity-60 blur-3xl pointer-events-none">
              <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_rgba(239,68,68,0.15),_transparent_60%)]" />
            </div>
            <Reveal delay={150}>
              <TabletFrame />
            </Reveal>
          </div>
        </div>
      </section>

      {/* services grid */}
      <section className="container mx-auto px-4 mt-14 md:mt-20">
        <div className="text-center mb-8">
          <div className="section-divider" />
          <h2 className="text-responsive-3xl font-semibold">What I Offer</h2>
          <p className="mt-2 text-slate-300/90">
            Clear deliverables, robust architecture, and measurable outcomes—tailored to your needs.
          </p>
        </div>

        <div className="grid responsive-grid responsive-grid-md-2 responsive-grid-lg-3 items-stretch">
          <Reveal delay={0}>
            {/* Web App Development */}
            <article className="glass-card p-5 sm:p-6 h-full flex flex-col min-h-[340px] hover:-translate-y-1 transition">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-red-500/15 border border-red-500/20">
                  <Code2 className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Modern Web Apps</h3>
                  <p className="text-slate-300/90 mt-1">
                    Scalable, accessible, and SEO‑friendly apps using Next.js, with clean design systems and robust data
                    flow.
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> App Router, RSC, streaming, server actions
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> UI systems with Tailwind + shadcn
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> Auth, role‑based access, i18n
                </li>
              </ul>
            </article>
          </Reveal>

          <Reveal delay={100}>
            {/* Data Science & Analytics */}
            <article className="glass-card p-5 sm:p-6 h-full flex flex-col min-h-[340px] hover:-translate-y-1 transition">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-red-500/15 border border-red-500/20">
                  <BarChart3 className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Data Science & Analytics</h3>
                  <p className="text-slate-300/90 mt-1">
                    From ETL to insight: clean data pipelines, forecasting, metrics, and dashboards that your team can
                    trust.
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> Data pipelines, warehousing, dbt, SQL
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> Forecasting, anomaly detection,
                  experimentation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> BI dashboards and self‑serve analytics
                </li>
              </ul>
            </article>
          </Reveal>

          <Reveal delay={200}>
            {/* AI Tools & Automation */}
            <article className="glass-card p-5 sm:p-6 h-full flex flex-col min-h-[340px] hover:-translate-y-1 transition">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-red-500/15 border border-red-500/20">
                  <Bot className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">AI Tools & Automation</h3>
                  <p className="text-slate-300/90 mt-1">
                    Practical automation and assistants that speed up workflows using reliable, testable patterns.
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> AI SDK chat/tools, RAG, structured outputs
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> Background jobs, queues, webhooks
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> Observability and guardrails
                </li>
              </ul>
            </article>
          </Reveal>

          <Reveal delay={300}>
            {/* APIs & Integrations */}
            <article className="glass-card p-5 sm:p-6 h-full flex flex-col min-h-[340px] hover:-translate-y-1 transition">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-red-500/15 border border-red-500/20">
                  <PlugZap className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">APIs & Integrations</h3>
                  <p className="text-slate-300/90 mt-1">
                    Clean, versioned APIs with clear contracts and monitoring. Integrate third‑party services with care.
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> REST/GraphQL design, docs, and testing
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> Rate limits, retries, backoff, idempotency
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> OAuth, JWT, API keys, secrets management
                </li>
              </ul>
            </article>
          </Reveal>

          <Reveal delay={400}>
            {/* DevOps & Cloud */}
            <article className="glass-card p-5 sm:p-6 h-full flex flex-col min-h-[340px] hover:-translate-y-1 transition">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-red-500/15 border border-red-500/20">
                  <Cloud className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">DevOps & Cloud</h3>
                  <p className="text-slate-300/90 mt-1">
                    Fast pipelines and resilient infra with sensible defaults, least privilege, and strong
                    observability.
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> CI/CD, preview envs, canary releases
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> Logging, tracing, metrics, alerts
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> Backups, DR, cost awareness
                </li>
              </ul>
            </article>
          </Reveal>

          <Reveal delay={500}>
            {/* UI/UX & Prototyping */}
            <article className="glass-card p-5 sm:p-6 h-full flex flex-col min-h-[340px] hover:-translate-y-1 transition">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-red-500/15 border border-red-500/20">
                  <PenTool className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">UI/UX & Prototyping</h3>
                  <p className="text-slate-300/90 mt-1">
                    Systems that scale: tokens, components, a11y, and meticulous micro‑interactions that feel right.
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> Design tokens, theming, responsiveness
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> Accessibility, keyboard nav, semantics
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-400" /> Clickable prototypes and rapid iteration
                </li>
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

{/* project showcase (no heading) */}
<section className="container mx-auto px-4 mt-10 md:mt-14">
  <div className="grid gap-6 md:grid-cols-2">
    {/* Project 1 */}
    <div className="relative bg-black rounded-3xl shadow-xl overflow-hidden border border-white/10">
      {/* Tablet notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-1.5 bg-gray-700 rounded-b-lg"></div>

      <div className="p-3 bg-gradient-to-b from-slate-900 to-slate-800 h-[420px] flex">
        <article className="glass-card overflow-hidden group rounded-2xl w-full">
          <div className="relative h-full">
            <img
              src="/images/projects/portfolio-website.png" // image
              alt="Portfolio Website preview"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* top badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              <span className="px-2 py-0.5 rounded-md text-xs bg-white/10 border border-white/20 text-slate-200/90">
                Next.js
              </span>
            </div>
            {/* overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex items-end justify-between gap-3">
              <div>
                <h3 className="font-semibold">Portfolio Website</h3>
              </div>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open live preview of Portfolio Website in a new tab"
                className="inline-flex items-center gap-2 rounded-md border border-red-500/30 bg-white/5 px-3 py-2 text-white hover:bg-white/10 transition"
              >
                <ExternalLink className="h-4 w-4 text-red-300" />
                <span className="text-sm">Preview</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>

    {/* Project 2 */}
    <div className="relative bg-black rounded-3xl shadow-xl overflow-hidden border border-white/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-1.5 bg-gray-700 rounded-b-lg"></div>

      <div className="p-3 bg-gradient-to-b from-slate-900 to-slate-800 h-[420px] flex">
        <article className="glass-card overflow-hidden group rounded-2xl w-full">
          <div className="relative h-full">
            <img
              src="/images/projects/resume-ai-bot.png" // image
              alt="Resume AI Bot preview"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* top badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              <span className="px-2 py-0.5 rounded-md text-xs bg-white/10 border border-white/20 text-slate-200/90">
                Automation
              </span>
            </div>
            {/* overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex items-end justify-between gap-3">
              <div>
                <h3 className="font-semibold">Resume AI Bot</h3>
              </div>
              <a
                href="/project"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open live preview related to Resume AI Bot in a new tab"
                className="inline-flex items-center gap-2 rounded-md border border-red-500/30 bg-white/5 px-3 py-2 text-white hover:bg-white/10 transition"
              >
                <ExternalLink className="h-4 w-4 text-red-300" />
                <span className="text-sm">Preview</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>

  <Reveal delay={200}>
    <div className="mt-6 flex justify-center">
      <a
        href="/project"
        className="inline-flex items-center gap-3 rounded-lg border border-red-500/30 bg-white/5 px-8 py-2.5 text-white hover:bg-white/10 transition"
      >
        <FolderOpenIcon className="h-4 w-4 text-red-400" />
        <span>View more</span>
      </a>
    </div>
  </Reveal>
</section>

      {/* process */}
      <section className="container mx-auto px-4 mt-14 md:mt-20">
        <div className="text-center mb-8">
          <div className="section-divider" />
          <h2 className="text-responsive-3xl font-semibold">How We’ll Work</h2>
          <p className="mt-2 text-slate-300/90">
            A crisp, low‑friction process from discovery to launch—built for momentum.
          </p>
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Discovery", desc: "Goals, constraints, and success metrics. We align on scope with clarity." },
            { title: "Architecture", desc: "Shape the system: data models, APIs, integration points, and risks." },
            { title: "Design & Prototype", desc: "Rapid prototypes to test flows, states, and interactions early." },
            {
              title: "Build & Integrate",
              desc: "Feature slices, clean contracts, and frequent, shippable increments.",
            },
            { title: "QA & Hardening", desc: "Tests, perf passes, a11y checks, and reliability improvements." },
            { title: "Launch & Iterate", desc: "Monitor, learn, and iterate with a steady cadence." },
          ].map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <li className="section-border p-5 sm:p-6 hover:-translate-y-1 transition">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20 text-red-300 font-semibold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-slate-300/90 mt-1">{step.desc}</p>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* tech and tools */}
      <section className="container mx-auto px-4 mt-14 md:mt-20">
        <div className="text-center mb-8">
          <div className="section-divider" />
          <h2 className="text-responsive-3xl font-semibold">Tech & Tools</h2>
          <p className="mt-2 text-slate-300/90">
            A pragmatic stack that balances speed today with flexibility tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {[
            { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui"] },
            { group: "Backend", items: ["Node.js", "FastAPI", "REST", "GraphQL", "Webhooks"] },
            { group: "Data", items: ["Python", "Pandas", "SQL", "dbt", "Notebooks"] },
            { group: "Cloud & DevOps", items: ["Vercel", "Docker", "CI/CD", "Observability", "Auth"] },
            { group: "Storage", items: ["Postgres", "Supabase", "Neon", "Blob", "Redis"] },
            { group: "Quality", items: ["Testing", "Linting", "A11y", "Perf Budgets", "Code Review"] },
          ].map(({ group, items }, idx) => (
            <Reveal key={group} delay={idx * 100}>
              <div className="glass-card p-5 sm:p-6 h-full flex flex-col min-h-[220px] hover:-translate-y-1 transition">
                <h3 className="font-semibold">{group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((t) => (
                    <span key={t} className="skill-badge" style={{ lineHeight: 1.4 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 mt-14 md:mt-20 pb-36">
        <Reveal delay={0}>
          <div className="section-border p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />
            <div className="absolute -left-16 -bottom-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative">
              <div>
                <h3 className="text-responsive-2xl font-semibold">Let’s build something valuable</h3>
                <p className="text-slate-300/90 mt-1">
                  Share your context—goals, constraints, timelines—and we’ll make a plan that works.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/project"
                  className="cta-button"
                >
                <Layers2Icon className="h-4 w-4" />
                {"Explore Work"}
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-4 py-2.5 text-white hover:bg-black/50 transition"
                >
                  <Workflow className="h-4 w-4 text-slate-300" />
                  <span>Contact Page</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
