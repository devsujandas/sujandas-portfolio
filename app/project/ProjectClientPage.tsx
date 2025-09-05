"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar, Star, GitFork, FolderOpen } from "lucide-react"
import { useState } from "react"

const projects = [

{
  title: "Moneytany",
  slug: "moneytany",
  date: "2025-07-19",
  tags: ["Data Analysis", "Finance Tracker", "PWA", "Next.js", "Tailwind CSS", "Scripting", "CI/CD", "DevOps" ],
  description:
    "Moneytany is a PWA-ready finance tracker for managing expenses, income, and spending insights.",
  image: "/images/projects/moneytany.png",
  github: "https://github.com/devsujandas/moneytany",
  live: "https://moneytany.sujandas.info/",
  stars: "0",
  forks: "0",
  status: "Active",
  featured: true,
},

{
  "title": "Restaurant Website",
  "slug": "restaurant-site",
  "date": "2024-12-02",
  "tags": ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
  "description": "A dark-themed, mobile-first restaurant website with animations, menu filters, about section, and booking system.",
  "image": "/images/projects/restaurant-website.png",
  "github": "https://github.com/devsujandas/restaurant-website",
  "live": "https://restaurant.sujandas.info/about",
  "stars": "15",
  "forks": "4",
  "status": "Completed",
  "featured": true
},
{
  title: "AnlystoX",
  slug: "anlystox",
  date: "2025-09-04",
  tags: ["Stock Market", "API", "Recharts","Data Analysis", "Next.js", "Tailwind CSS",  "Finance Dashboard","Database","Automation", "Scripting", "CI/CD", "DevOps"],
  description:
    "AnlystoX is a modern stock market dashboard for watchlists, portfolios, and insights — built for speed, clarity, and responsiveness.",
  image: "/images/projects/anlystox.png",
  github: "https://github.com/devsujandas/stocks-dashboard",
  live: "https://anlystox.vercel.app/",
  stars: "0",
  forks: "0",
  status: "Active",
  featured: true,
},
{
  "title": "Ed-Flourish Learning Platform",
  "slug": "ed-flourish",
  "date": "2024-08-12",
  "tags": ["Auth", "Next.js", "Tailwind", "Framer Motion", "TypeScript", "Scripting", "CI/CD", "DevOps","REST", "API",],
  "description": "An interactive online learning platform with courses, study resources, mock tests, job portal, and AI chatbot.",
  "image": "/images/projects/ed-flourish.png",
  "github": "https://github.com/devsujandas/Ed-flourish",
  "live": "https://ed-flourish.vercel.app/",
  "stars": "22",
  "forks": "7",
  "status": "Completed",
  "featured": true
},
{
  "title": "JIGASHA - Quiz Platform",
  "slug": "jigasha",
  "date": "2025-01-20",
  "tags": ["REST", "API", "Next.js", "Tailwind", "TypeScript", "Quiz Engine"],
  "description": "A modern quiz platform with diverse categories, difficulty levels, achievements, and progress tracking.",
  "image": "/images/projects/jigasha.png",
  "github": "https://github.com/devsujandas/jigasha-QuizApp",
  "live": "https://jigasha.sujandas.info/",
  "stars": "12",
  "forks": "3",
  "status": "In Progress",
  "featured": true
},

{
  "title": "TuryaSahityangon",
  "slug": "bangla-literature-site",
  "date": "2024-11-02",
  "tags": ["Next.js", "PostgreSQL","Database", "Tailwind", "TypeScript", "Framer Motion", "Scripting", "CI/CD", "DevOps"],
  "description": "A digital Bangla literature platform with stories, poems, novels, category filters, and an engaging reading experience.",
  "image": "/images/projects/bangla-literature.png",
  "github": "https://github.com/devsujandas/Turyasahityangon",
  "live": "https://www.turyasahityangon.site/",
  "stars": "27",
  "forks": "10",
  "status": "Completed",
  "featured": true
},

{
  title: "GlowDock",
  slug: "glowdock",
  date: "2025-01-20",
  tags: ["Dashboard", "PostgreSQL", "Next.js", "Tailwind CSS", "File Management", "Database", "Scripting", "CI/CD", "DevOps"],
  description:
    "GlowDock is a secure file management platform for team sharing, analytics, collaboration, and real-time tracking.",
  image: "/images/projects/glowdock.png",
  github: "https://github.com/devsujandas/glowdock-file-sharing-system",
  live: "https://glowdock.vercel.app/",
  stars: "60",
  forks: "22",
  status: "In Progress",
  featured: true,
},

]

const categories = ["All", "Web Development", "Data Science", "Machine Learning", "API", "Automation"]

export default function ProjectClientPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showAllProjects, setShowAllProjects] = useState(false)
  const INITIAL_PROJECTS_COUNT = 4

  // Add filtering logic
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => {
          // Check if project matches the selected category
          if (selectedCategory === "Web Development") {
            return project.tags.some((tag) =>
              ["Next.js", "React", "Tailwind", "TypeScript", "JavaScript", "HTML", "CSS", "Frontend"].includes(tag),
            )
          }
          if (selectedCategory === "Data Science") {
            return project.tags.some((tag) =>
              ["Python", "Pandas", "Plotly", "Streamlit", "Data Analysis", "Jupyter", "NumPy", "Matplotlib"].includes(
                tag,
              ),
            )
          }
          if (selectedCategory === "Machine Learning") {
            return project.tags.some((tag) =>
              [
                "TensorFlow",
                "PyTorch",
                "LSTM",
                "Neural Networks",
                "AI",
                "ML",
                "Deep Learning",
                "NLP",
                "OpenAI",
              ].includes(tag),
            )
          }
          if (selectedCategory === "API") {
            return project.tags.some((tag) =>
              ["FastAPI", "Flask", "Django", "REST", "API", "GraphQL", "PostgreSQL", "Redis", "Database"].includes(tag),
            )
          }
          if (selectedCategory === "Automation") {
            return (
              project.tags.some((tag) =>
                ["Python", "Docker", "Automation", "Scripting", "CI/CD", "DevOps"].includes(tag),
              ) ||
              project.title.toLowerCase().includes("automation") ||
              project.description.toLowerCase().includes("automat")
            )
          }
          return false
        })

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, INITIAL_PROJECTS_COUNT)
  const hasMoreProjects = filteredProjects.length > INITIAL_PROJECTS_COUNT

  const handleLoadMore = () => {
    setShowAllProjects(true)
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    setShowAllProjects(false) // Reset to show initial projects when changing category
  }

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
          className="mb-12"
        >
          <div className="section-border p-4 sm:p-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <FolderOpen className="w-5 h-5 text-red-400" />
              <h3 className="text-responsive-lg font-semibold text-gray-300">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryFilter(category)}
                  className={`skill-badge ${
                    selectedCategory === category ? "bg-red-500/20 border-red-500/50 text-red-300" : ""
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="section-border p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="project-card h-full">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-t-lg mb-4 relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
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

            {/* Load More Button */}
            {!showAllProjects && hasMoreProjects && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="col-span-full text-center mt-12"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button onClick={handleLoadMore} className="cta-button px-8 py-3 text-lg">
                    <FolderOpen className="w-5 h-5 mr-2" />
                    Load More Projects
                  </Button>
                </motion.div>
                <p className="text-gray-400 text-sm mt-3">
                  Showing {displayedProjects.length} of {filteredProjects.length} projects
                </p>
              </motion.div>
            )}

            {/* No Results State */}
            {filteredProjects.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-16">
                <div className="max-w-md mx-auto">
                  <FolderOpen className="w-20 h-20 text-gray-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-400 mb-3">No projects found</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Try selecting a different category or check back later for new projects.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 bg-transparent border-red-500/30 hover:bg-red-500/10"
                    onClick={() => setSelectedCategory("All")}
                  >
                    Show All Projects
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
