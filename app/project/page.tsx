import type { Metadata } from "next"
import ProjectClientPage from "./ProjectClientPage"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of data science, web development, and automation projects.",
}

export default function ProjectsPage() {
  return <ProjectClientPage />
}
