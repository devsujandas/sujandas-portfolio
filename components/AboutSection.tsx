"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Mail, Globe, Briefcase, GraduationCap, Sparkles } from "lucide-react"

export default function AboutSection() {
  const infoItems = [
    { icon: Sparkles, label: "Name", value: "Sujan Das" },
    { icon: Mail, label: "Email", value: "contact@sujandas.info", href: "mailto:contact@sujandas.info" },
    { icon: Globe, label: "Based in", value: "India" },
    { icon: Briefcase, label: "Experience", value: "2+ Years" },
    { icon: GraduationCap, label: "Education", value: "BCA Graduate" },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-responsive-4xl font-bold mb-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="w-12 sm:w-16 h-0.5 bg-red-500"></div>
            <span>
              About <span className="red-accent">Me</span>
            </span>
            <div className="w-12 sm:w-16 h-0.5 bg-red-500"></div>
          </h2>
        </motion.div>

        <div className="section-border p-6 sm:p-8 responsive-grid responsive-grid-md-2 gap-8 sm:gap-12 items-start">
          {/* Left Column: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="contact-card p-4 sm:p-6">
              <div className="bg-red-500 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full inline-block mb-4 sm:mb-6 font-medium">
                Quality Drives Code
              </div>
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-4 sm:p-6 flex items-center justify-center">
                <Image
                  src="/images/sujan-profile.jpg"
                  alt="Sujan Das"
                  width={300}
                  height={300}
                  className="rounded-xl max-w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Info & Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <p className="text-gray-300 leading-relaxed text-responsive-lg mb-6 sm:mb-8">
                I'm a <span className="red-accent font-semibold">Frontend Developer</span> and{" "}
                <span className="red-accent font-semibold">Data Science Engineer</span> with Python at my core —
                passionate about <span className="red-accent font-semibold">AI/ML</span> and building smart,{" "}
                <span className="red-accent font-semibold">seamless user experiences</span>.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {infoItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-between p-2 sm:p-3 rounded-lg border-b border-gray-800 last:border-b-0"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
