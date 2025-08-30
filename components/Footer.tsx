"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Heart, Facebook, Instagram, Code } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/devsujandas", label: "GitHub", color: "hover:text-gray-300" },
  { icon: Linkedin, href: "https://in.linkedin.com/in/devsujandas", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Twitter, href: "https://x.com/devsujandas", label: "Twitter", color: "hover:text-blue-400" },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100080173613161",
    label: "Facebook",
    color: "hover:text-blue-500",
  },
  { icon: Instagram, href: "https://instagram.com/devsujandas", label: "Instagram", color: "hover:text-pink-400" },
  { icon: Code, href: "https://leetcode.com/devsujandas", label: "LeetCode", color: "hover:text-orange-400" },
  { icon: Mail, href: "mailto:contact@sujandas.info", label: "Email", color: "hover:text-red-400" },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "/project" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="py-16 px-4 border-t border-red-500/20 bg-black/50">
      <div className="container mx-auto max-w-6xl">
        

        {/* Social Links */}
        

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center space-y-4 pt-8 border-t border-white/5"
        >
          <p className="text-gray-500 text-sm">© 2025 Sujan Das. All rights reserved.</p>
          <p className="text-gray-600 text-xs flex items-center justify-center gap-2">
           Made with<Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> and way too much coffee ☕
          </p>
          
        </motion.div>
      </div>
    </footer>
  )
}
