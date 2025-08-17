"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, MapPin, Facebook, Instagram, Code, Award, Target, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import AboutSection from "@/components/AboutSection"
import LoadingScreen from "@/components/LoadingScreen"
import { useState, useEffect } from "react"

const skills = ["Data Science Engineer", "Python Expert", "AI/ML Enthusiast", "Frontend Developer", "UI/UX Designer"]

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive web applications using Next.js, React, and cutting-edge technologies.",
    features: ["Full-Stack Development", "API Integration", "Responsive Design"],
  },
  {
    icon: Target,
    title: "Data Science",
    description: "Transform your data into actionable insights with advanced analytics and machine learning.",
    features: ["Data Analysis", "Predictive Modeling", "Business Intelligence"],
  },
  {
    icon: Award,
    title: "AI/ML Solutions",
    description: "Custom machine learning models for prediction, classification, and automation.",
    features: ["Model Training", "Deployment", "Performance Optimization"],
  },
]

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
  { icon: Heart, href: "/personal", label: "Personal", color: "hover:text-red-400" },
]

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "I specialize in data science, web development, and AI/ML solutions. My services include data analysis, machine learning model development, web application creation, and process automation using modern technologies like Python, Next.js, and TensorFlow.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "I primarily work with Python for data science and backend development, Next.js and React for frontend, FastAPI for APIs, and various ML libraries like TensorFlow, Pandas, and NumPy. I also have experience with cloud platforms and modern deployment practices.",
  },
  {
    question: "Are you available for freelance projects?",
    answer:
      "Yes, I'm currently available for freelance projects and remote work opportunities. Feel free to reach out through the contact form or email to discuss your project requirements and timeline.",
  },
  {
    question: "How can I see your work?",
    answer:
      "You can check out my projects on GitHub, view my coding solutions on LeetCode, and explore my portfolio projects in the Projects section. I regularly update my repositories with new work and contributions.",
  },
]

export default function Home() {
  const [showLoading, setShowLoading] = useState(true)
  const [showMeme, setShowMeme] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const emailSubject = "Project%20Collaboration%20Request"
  const emailBody = `Hi%20Sujan%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I'm%20really%20impressed%20with%20your%20work.%20I'd%20love%20to%20discuss%20a%20potential%20project%20collaboration.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D`
  const mailtoLink = `mailto:contact@sujandas.info?subject=${emailSubject}&body=${emailBody}`

  if (showLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 pb-20 sm:pt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 text-center lg:text-left"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm text-gray-400 flex items-center justify-center lg:justify-start gap-2"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Hi there, Scroll & Enjoy
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-responsive-5xl font-bold leading-tight"
                >
                  Sujan <span className="red-accent">Das</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-responsive-lg text-gray-400 max-w-md mx-auto lg:mx-0 leading-relaxed"
                >
                  Transforming ideas into intelligent digital solutions
                </motion.p>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3"
              >
                {socialLinks.map((social, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={social.href}
                      target={social.label === "Personal" ? "_self" : "_blank"}
                      rel={social.label === "Personal" ? "" : "noopener noreferrer"}
                      className={`social-icon ${social.color} ${
                        social.label === "Personal"
                          ? "relative overflow-hidden group/personal before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-500/30 before:via-pink-500/40 before:via-purple-500/30 before:to-red-500/30 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000 before:ease-out after:absolute after:inset-0 after:bg-gradient-to-45 after:from-transparent after:via-red-400/20 after:to-transparent after:rotate-45 after:scale-150 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-500"
                          : ""
                      }`}
                      title={social.label}
                      onMouseEnter={() => social.label === "Personal" && setShowMeme(true)}
                      onMouseLeave={() => social.label === "Personal" && setShowMeme(false)}
                    >
                      <social.icon
                        className={`w-4 h-4 sm:w-5 sm:h-5 relative z-10 ${
                          social.label === "Personal"
                            ? "text-red-400 group-hover/personal:text-red-300 transition-all duration-300 group-hover/personal:drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                            : ""
                        }`}
                        style={
                          social.label === "Personal"
                            ? {
                                animation: "heartbeat 2s ease-in-out infinite",
                              }
                            : {}
                        }
                      />
                      {social.label === "Personal" && (
                        <>
                          {/* Animated rings */}
                          <motion.div
                            className="absolute inset-0 rounded-full border border-red-400/40"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.6, 0.2, 0.6],
                              rotate: [0, 180, 360],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.div
                            className="absolute inset-0 rounded-full border border-pink-400/30"
                            animate={{
                              scale: [1.1, 1.3, 1.1],
                              opacity: [0.4, 0.1, 0.4],
                              rotate: [360, 180, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: 0.5,
                            }}
                          />
                          {/* Floating particles */}
                          <motion.div
                            className="absolute -top-1 -right-1 w-1 h-1 bg-red-400 rounded-full"
                            animate={{
                              y: [-2, -8, -2],
                              x: [0, 3, 0],
                              opacity: [0, 1, 0],
                              scale: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.div
                            className="absolute -bottom-1 -left-1 w-1 h-1 bg-pink-400 rounded-full"
                            animate={{
                              y: [2, 8, 2],
                              x: [0, -3, 0],
                              opacity: [0, 1, 0],
                              scale: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: 1,
                            }}
                          />
                          {/* Rotating gradient overlay */}
                          <motion.div
                            className="absolute inset-0 rounded-full opacity-0 group-hover/personal:opacity-30 transition-opacity duration-500"
                            style={{
                              background:
                                "conic-gradient(from 0deg, transparent, rgba(239,68,68,0.3), transparent, rgba(236,72,153,0.3), transparent)",
                            }}
                            animate={{
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                          />
                        </>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Funny Meme Popup */}
              {showMeme && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  className="absolute top-16 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 backdrop-blur-sm border border-red-500/30 rounded-lg p-4 shadow-2xl"
                >
                  <div className="text-center">
                    <img
                      src="https://i.imgflip.com/4/1bij.jpg"
                      alt="Funny meme"
                      className="w-48 h-36 object-cover rounded-lg mb-2"
                    />
                    <p className="text-xs text-gray-300">Ready to see my personal side? 😄</p>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black/90 border-r border-b border-red-500/30 rotate-45"></div>
                </motion.div>
              )}

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-2"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for freelance projects & remote work
              </motion.p>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative floating-animation">
                {/* Tablet Frame */}
                <div className="relative max-w-sm sm:max-w-md lg:max-w-lg">
                  {/* Device Frame */}
                  <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2rem] sm:rounded-[2.5rem] p-3 sm:p-4 shadow-2xl border border-gray-700/50">
                    {/* Screen Bezel */}
                    <div className="relative bg-black rounded-[1.5rem] sm:rounded-[2rem] p-1 sm:p-2">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-4 py-2 text-white text-xs bg-black/50 rounded-t-[1.3rem] sm:rounded-t-[1.8rem]">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-300">Live Workspace</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="flex gap-1">
                            <div className="w-1 h-3 bg-white rounded-full opacity-60"></div>
                            <div className="w-1 h-3 bg-white rounded-full opacity-80"></div>
                            <div className="w-1 h-3 bg-white rounded-full"></div>
                          </div>
                          <div className="ml-2 w-6 h-3 border border-white rounded-sm">
                            <div className="w-4 h-2 bg-green-400 rounded-sm m-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* Screen Content */}
                      <div className="relative overflow-hidden rounded-b-[1.3rem] sm:rounded-b-[1.8rem]">
                        <Image
                          src="https://www.minjunkim.ca/images/lofiboy.gif"
                          alt="Sujan Das - Developer Illustration"
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                          priority
                          unoptimized
                        />

                        {/* Screen Overlay Effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 pointer-events-none"></div>

                        {/* Floating UI Elements */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                          <div
                            className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                            style={{ animationDelay: "1s" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Home Button */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-800 rounded-full border-2 border-gray-600 flex items-center justify-center">
                      <div className="w-3 h-3 border border-gray-400 rounded-sm"></div>
                    </div>

                    {/* Device Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-[2rem] sm:rounded-[2.5rem] pointer-events-none"></div>
                  </div>

                  {/* Device Shadow */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-black/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="section-border p-6 sm:p-8">
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
                  <span className="red-accent">Skills</span> & Expertise
                </span>
                <div className="w-12 sm:w-16 h-0.5 bg-red-500"></div>
              </h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-responsive-base">
                Technologies and tools I use to bring ideas to life
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="skill-badge"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="section-border p-6 sm:p-8">
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
                  My <span className="red-accent">Services</span>
                </span>
                <div className="w-12 sm:w-16 h-0.5 bg-red-500"></div>
              </h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-responsive-base">
                Comprehensive solutions for your digital needs
              </p>
            </motion.div>

            <div className="responsive-grid responsive-grid-md-2 responsive-grid-lg-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="contact-card h-full">
                    <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="mb-4 sm:mb-6">
                        <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-red-400 mx-auto group-hover:text-red-300 transition-colors duration-300" />
                      </motion.div>
                      <h3 className="text-responsive-xl font-semibold mb-3 sm:mb-4 group-hover:text-red-300 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-responsive-sm mb-4 sm:mb-6 flex-grow leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="text-xs text-gray-400 flex items-center justify-center sm:justify-start"
                          >
                            <div className="w-1 h-1 bg-red-400 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="section-border p-6 sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-responsive-4xl font-bold mb-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="w-12 sm:w-16 h-0.5 bg-red-500"></div>
                <span className="text-5xl">
                  Frequently Asked <span className="red-accent">Questions</span>
                </span>
                <div className="w-12 sm:w-16 h-0.5 bg-red-500"></div>
              </h2>
              <p className="text-gray-400 mt-4 text-responsive-base">Common questions about my work and services</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="glass-card px-4 sm:px-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left hover:no-underline hover:text-red-300 transition-colors duration-300 text-responsive-base">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 leading-relaxed text-responsive-sm">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="section-border p-6 sm:p-8">
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
                  Let's <span className="red-accent">Connect</span>
                </span>
                <div className="w-12 sm:w-16 h-0.5 bg-red-500"></div>
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-responsive-lg">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply have a
                conversation about technology and innovation.
              </p>
            </motion.div>

            <div className="responsive-grid responsive-grid-md-2 gap-6 sm:gap-8">
              {/* Left Card - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="contact-card h-full space-y-6 sm:space-y-8">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-responsive-xl font-semibold mb-1">Email Me</h3>
                      <p className="text-gray-400 text-responsive-sm mb-2">Drop me a line anytime</p>
                      <p className="text-gray-200 text-responsive-lg">contact@sujandas.info</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-responsive-xl font-semibold mb-1">Location</h3>
                      <p className="text-gray-400 text-responsive-sm mb-2">Based in</p>
                      <p className="text-gray-200 text-responsive-lg">Kolkata, India</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Card - CTA */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="contact-card h-full flex flex-col items-center justify-center text-center p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
                  </div>
                  <h3 className="text-responsive-2xl font-bold mb-4">Ready to Start a Project?</h3>
                  <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-md text-responsive-base">
                    Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear
                    from you.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="cta-button text-responsive-lg px-6 sm:px-8 py-3" asChild>
                      <Link href={mailtoLink}>
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Get In Touch
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
