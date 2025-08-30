"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Home, User, Briefcase, FolderOpen, BookOpen, Mail, Award } from "lucide-react"

const navItems = [
  { icon: Home, href: "/", label: "Home" },
  { icon: User, href: "/about", label: "About" },
  { icon: Briefcase, href: "/services", label: "Services" },
  { icon: FolderOpen, href: "/project", label: "Projects" },
  { icon: BookOpen, href: "/blog", label: "Blog" },
  { icon: Award, href: "/certificate", label: "Certificate" },
  { icon: Mail, href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("/")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["#about", "#services", "#contact"]
      const scrollPosition = window.scrollY + 100

      if (pathname === "/") {
        for (const section of sections) {
          const element = document.querySelector(section)
          if (element) {
            const offsetTop = element instanceof HTMLElement ? element.offsetTop : 0
            const offsetHeight = element instanceof HTMLElement ? element.offsetHeight : 0

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              return
            }
          }
        }

        if (scrollPosition < 200) {
          setActiveSection("/")
        }
      }
    }

    const handleNavbarScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("scroll", handleNavbarScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", handleNavbarScroll)
    }
  }, [pathname, lastScrollY])

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname !== "/") {
        router.push(`/${href}`)
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return activeSection === "/"
    if (href.startsWith("#") && pathname === "/") return activeSection === href
    return pathname === href
  }

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-t border-red-500/20 safe-area-pb"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Primary"
    >
      <div className="w-full px-2 sm:px-4">
        <div className="flex items-center justify-center py-2 sm:py-3">
          <div className="flex items-center justify-between max-w-md bg-black/40 backdrop-blur-md rounded-full border-red-500/20 py-0.5 px-0 mx-2 w-full border">
            {navItems.map((item, index) => (
              <motion.div
                key={`${item.label}-${index}`}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex-1"
              >
                {item.href.startsWith("#") ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`nav-item-mobile ${isActive(item.href) ? "active" : ""}`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    aria-label={item.label}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                    <span className="text-xs mt-1 hidden sm:block">{item.label}</span>
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-red-500/20 rounded-lg -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`nav-item-mobile ${isActive(item.href) ? "active" : ""}`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    aria-label={item.label}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                    <span className="text-xs mt-1 hidden sm:block">{item.label}</span>
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-red-500/20 rounded-lg -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
