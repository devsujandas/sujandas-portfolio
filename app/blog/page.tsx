import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my latest thoughts on data science, Python development, and web technologies.",
}

export default function BlogPage() {
  return <BlogClientPage />
}
