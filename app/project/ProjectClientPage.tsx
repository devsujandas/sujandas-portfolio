"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar, Star, GitFork } from "lucide-react"

const projects = [
  {
    title: "Personal Portfolio Website",
    slug: "portfolio-site",
    date: "2025-01-29",
    tags: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    description:
      "A modern, animated portfolio website with dark theme, smooth animations, and responsive design. Built with Next.js 14 and Tailwind CSS.",
    github: "https://github.com/devsujandas/portfolio",
    live: "https://sujandas.info",
    stars: "24",
    forks: "8",
    status: "Completed",
    featured: true,
  },
  {
    title: "E-commerce Analytics Dashboard",
    slug: "ecommerce-dashboard",
    date: "2025-01-20",
    tags: ["Python", "Streamlit", "Pandas", "Plotly"],
    description:
      "Interactive dashboard for analyzing e-commerce sales data with real-time insights, charts, and predictive analytics for business intelligence.",
    github: "https://github.com/devsujandas/ecommerce-dashboard",
    live: "https://ecommerce-dashboard.streamlit.app",
    stars: "18",
    forks: "5",
    status: "Completed",
    featured: true,
  },
  {
    title: "Data Cleaning Automation Tool",
    slug: "data-cleaning-app",
    date: "2025-01-15",
    tags: ["Python", "Pandas", "FastAPI", "Docker"],
    description:
      "Automated tool for cleaning and preprocessing datasets with custom rules, validation, and API endpoints for seamless integration.",
    github: "https://github.com/devsujandas/data-cleaning-tool",
    live: "https://data-cleaner.herokuapp.com",
    stars: "32",
    forks: "12",
    status: "Completed",
    featured: false,
  },
  {
    title: "Stock Price Forecasting Model",
    slug: "stock-forecast",
    date: "2025-01-10",
    tags: ["Python", "TensorFlow", "LSTM", "Streamlit"],
    description:
      "Machine learning model for predicting stock prices using LSTM neural networks with interactive visualization and backtesting features.",
    github: "https://github.com/devsujandas/stock-forecast",
    live: "https://stock-predictor.streamlit.app",
    stars: "45",
    forks: "15",
    status: "Completed",
    featured: true,
  },
  {
    title: "Weather API Service",
    slug: "weather-api",
    date: "2025-01-05",
    tags: ["FastAPI", "Python", "PostgreSQL", "Redis"],
    description:
      "RESTful API service for weather data with caching, rate limiting, authentication, and comprehensive documentation.",
    github: "https://github.com/devsujandas/weather-api",
    live: "https://weather-api.sujandas.info",
    stars: "28",
    forks: "9",
    status: "Completed",
    featured: false,
  },
  {
    title: "AI Resume Screening Bot",
    slug: "resume-ai-bot",
    date: "2024-12-30",
    tags: ["Python", "NLP", "OpenAI", "Flask"],
    description:
      "Intelligent bot for screening resumes using natural language processing and AI to match candidates with job requirements automatically.",
    github: "https://github.com/devsujandas/resume-bot",
    live: "https://resume-screener.herokuapp.com",
    stars: "19",
    forks: "6",
    status: "In Progress",
    featured: false,
  },
]

const categories = ["All", "Web Development", "Data Science", "Machine Learning", "API", "Automation"]

export default function ProjectClientPage() {
  return (
    <div className="min-h-screen pt-8 pb-24 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-responsive-4xl font-bold mb-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="w-12 sm:w-16 h-0.5 bg-red-500"></div>
            <span>
              My <span className="red-accent">Projects</span>
            </span>
            <div className="w-12 sm:w-16 h-0.5 bg-red-500"></div>
          </h1>
          <p className="text-responsive-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A collection of my work in data science, web development, and automation. Each project showcases different
            skills and technologies.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`skill-badge ${index === 0 ? "bg-red-500/20 border-red-500/50 text-red-300" : ""}`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="section-border p-6 sm:p-8">
          <div className="responsive-grid responsive-grid-md-2 responsive-grid-lg-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="project-card h-full group">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-t-lg mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4 flex gap-2">
                        {project.featured && (
                          <Badge variant="secondary" className="bg-red-500/20 text-red-300 text-xs">
                            Featured
                          </Badge>
                        )}
                        <Badge
                          variant="secondary"
                          className={`text-xs ${
                            project.status === "Completed"
                              ? "bg-green-500/20 text-green-300"
                              : "bg-yellow-500/20 text-yellow-300"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4 flex gap-3 text-xs text-gray-300">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-3 h-3" />
                          {project.forks}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        {new Date(project.date).toLocaleDateString()}
                      </div>

                      <h3 className="text-responsive-xl font-semibold mb-3 group-hover:text-red-400 transition-colors line-clamp-2">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 text-responsive-sm mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-red-500/10 text-red-300 text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="secondary" className="bg-gray-500/10 text-gray-400 text-xs">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 bg-transparent border-red-500/30 hover:bg-red-500/10 text-xs sm:text-sm"
                          asChild
                        >
                          <Link href={project.github} target="_blank">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                        <Button size="sm" className="flex-1 cta-button text-xs sm:text-sm py-2" asChild>
                          <Link href={project.live} target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
