"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"
import { ArrowLeft, Heart, Tv, Film, Coffee, Music, Code, Gamepad2, Bike, Shield, Star, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Add mobile viewport fix
const PersonalPage = () => {
  useEffect(() => {
    // Prevent auto-zoom on mobile
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",
      )
    }

    // Prevent zoom on double tap
    let lastTouchEnd = 0
    const preventZoom = (e: TouchEvent) => {
      const now = new Date().getTime()
      if (now - lastTouchEnd <= 300) {
        e.preventDefault()
      }
      lastTouchEnd = now
    }

    document.addEventListener("touchend", preventZoom, { passive: false })

    return () => {
      document.removeEventListener("touchend", preventZoom)
    }
  }, [])

  const personalFacts = [
    {
      icon: Coffee,
      title: "Tea Addict",
      description: "I can't function without at least 3 cups of tea a day. My favorite is a nice, strong chai! 🍵",
      color: "text-amber-400",
    },
    {
      icon: Music,
      title: "Music Lover",
      description:
        "I code better with lo-fi beats playing in the background. Sometimes I catch myself coding to the rhythm! 🎵",
      color: "text-purple-400",
    },
    {
      icon: Gamepad2,
      title: "Gaming Enthusiast",
      description:
        "When I'm not coding, you'll find me exploring virtual worlds or solving puzzles in strategy games. 🎮",
      color: "text-green-400",
    },
    {
      icon: Bike,
      title: "Two-Wheel Adventures",
      description:
        "Love cruising around on scooty with friends, exploring streets, laughing, and making memories along the way. 🛵",
      color: "text-blue-400",
    },
  ]

  const hobbies = [
    {
      title: "Coding Side Projects",
      description: "Building random apps and tools that solve tiny problems in my daily life",
      emoji: "💻",
    },
    {
      title: "Reading Tech Blogs",
      description: "Always staying updated with the latest in AI, web development, and data science",
      emoji: "📚",
    },
    {
      title: "Cooking Experiments",
      description: "Trying to recreate restaurant dishes at home (with mixed results!)",
      emoji: "🍳",
    },
    {
      title: "Binge Watching",
      description: "Watches movies like it's a full-time job... just without the salary.",
      emoji: "📺",
    },
    {
      title: "Travel Planning",
      description: "I enjoy planning exciting trips, though they often remain just plans!",
      emoji: "✈️",
    },
    {
      title: "Debugging",
      description: "Turning ideas into code that actually works (most of the time).",
      emoji: "🪲",
    },
  ]

  const favoriteSeries = [
    {
      title: "Breaking Bad",
      seasons: 5,
      reason: "Masterclass in tension and character arcs",
      genre: "Crime / Drama",
    },
    {
      title: "Stranger Things",
      seasons: 5,
      reason: "Nostalgia, sci-fi, and a fantastic ensemble cast",
      genre: "Sci-Fi / Horror",
    },
    {
      title: "Dark",
      seasons: 3,
      reason: "Mind-bending time travel done right",
      genre: "Sci-Fi / Mystery",
    },
    {
      title: "Sherlock",
      seasons: 4,
      reason: "Clever, stylish, and endlessly rewatchable",
      genre: "Crime / Mystery",
    },
  ]

  const favoriteMovies = [
    {
      title: "Avengers: Endgame",
      year: "2019",
      reason: "Heroes unite for ultimate battle.",
      genre: "Superhero / Action",
    },
    {
      title: "Transformers: The Last Knight",
      year: "2017",
      reason: "Robots clash across Earth's history.",
      genre: "Science Fiction / Action",
    },
    {
      title: "3 Idiots",
      year: "2009",
      reason: "Challenging norms with humor, heart.",
      genre: "Comedy / Drama",
    },
    {
      title: "Kalki 2898 AD",
      year: "2024",
      reason: "Futuristic mythological epic unfolds.",
      genre: "Science Fiction / Mythology",
    },
  ]

  const funStats = [
    { label: "Lines of Code Written", value: "50,000+", icon: Code },
    { label: "Tea Cups This Year", value: "1,095", icon: Coffee },
    { label: "Bugs Defeated", value: "9,000+", icon: Shield },
    { label: "Movies Marathoned", value: "650+", icon: Film },
  ]

  const randomThoughts = [
    "Why do we call it 'debugging' when bugs are actually features in disguise? 🤔",
    "Tea is just bean soup that makes you productive ☕",
    "I have a love-hate relationship with CSS. Mostly hate. But sometimes love. 💔",
    "My code works on my machine... and that's all that matters, right? 😅",
    "I speak fluent Python, broken JavaScript, and sarcasm 🐍",
    "Stack Overflow is basically my second university 🎓",
  ]

  const askMeAbout = [
    { topic: "React Hooks", description: "I can talk about useEffect for hours" },
    { topic: "Tea Brewing", description: "Masala Chai, Black Tea, or Ginger Cardamom Tea" },
    { topic: "Movie Recommendations", description: "From 3 Idiots to Baahubali" },
    { topic: "Productivity Hacks", description: "How to code faster and procrastinate better" },
    { topic: "Travel Stories", description: "Adventures from scooty rides" },
    { topic: "Debugging Horror Stories", description: "That one semicolon that took 3 hours to find" },
  ]

  const personalAchievements = [
    {
      title: "Survived My First All-Nighter",
      description: "Deployed a project at 4 AM with 0 bugs (surprisingly)",
      date: "2023",
      emoji: "🌙",
    },
    {
      title: "Learned to Cook Pasta",
      description: "Without burning down the kitchen (mostly)",
      date: "2018",
      emoji: "🍝",
    },
    {
      title: "Woke Up Before My Alarm",
      description: "Still late for class somehow, don’t ask",
      date: "2021",
      emoji: "⏰",
    },
    {
      title: "Watched 157 Movies in a Year",
      description: "Procrastination level: Expert",
      date: "2020",
      emoji: "🎬",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden personal-page-container">
      {/* Header */}
      <section className="pt-20 pb-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <Button variant="ghost" size="sm" asChild className="hover:text-white text-red-400">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-red-500"></div>
              <Heart className="w-8 h-8 text-red-500" />
              <div className="w-12 h-0.5 bg-red-500"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              The <span className="red-accent">Real</span> Me
            </h1>
            <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">
              Beyond the code and algorithms - here's what makes me, well... me!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fun Stats */}
      <section className="py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {funStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, rotate: 2 }}
                className="text-center"
              >
                <Card className="bg-black/40 border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <stat.icon className="w-6 h-6 text-red-400 mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Extraordinary Interactive Welcome Section (Tablet Frame) */}
      <section className="py-20 px-4 sm:px-6 relative">
        <div className="mx-auto flex justify-center">
          <div className="relative w-full max-w-5xl">
            {/* Subtle reflection below the device */}
            <div className="pointer-events-none absolute inset-x-16 -bottom-10 h-24 rounded-b-[2rem] bg-gradient-to-b from-red-500/10 via-white/5 to-transparent blur-2xl" />

            {/* Tablet bezel */}
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-neutral-900/90 to-black/90 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              {/* Camera notch / status bar */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-black/60 border border-white/10 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-400/90" />
                <div className="w-12 h-1 rounded-full bg-gray-500/60" />
              </div>

              {/* Screen */}
              <div className="relative rounded-[1.5rem] bg-black overflow-hidden min-h-[70vh] sm:min-h-[75vh]">
                {/* Matrix Digital Rain Background */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  {[...Array(50)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-green-400 font-mono text-xs"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `-10%`,
                      }}
                      animate={{
                        y: ["0vh", "110vh"],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 5,
                        ease: "linear",
                      }}
                    >
                      {Array.from({ length: 20 }, () => String.fromCharCode(0x30a0 + Math.random() * 96)).join("")}
                    </motion.div>
                  ))}
                </div>

                {/* Floating Code Blocks */}
                <div className="absolute inset-0 pointer-events-none">
                  {[
                    "const life = () => { return 'amazing'; }",
                    "while(coding) { happiness++; }",
                    "if(tea.isEmpty()) { refill(); }",
                    "function debug() { console.log('🐛'); }",
                    "let dreams = ['code', 'create', 'inspire'];",
                  ].map((code, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-black/60 border border-red-500/30 rounded-lg px-3 py-2 text-xs font-mono text-green-400 backdrop-blur-sm"
                      style={{
                        left: `${10 + i * 18}%`,
                        top: `${20 + (i % 3) * 30}%`,
                      }}
                      animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        rotate: [-2, 2, -2],
                        scale: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.8,
                      }}
                      whileHover={{ scale: 1.2, zIndex: 50 }}
                    >
                      {code}
                    </motion.div>
                  ))}
                </div>

                {/* Particle Network System */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <motion.div key={i}>
                      <motion.div
                        className="absolute w-2 h-2 bg-red-500 rounded-full"
                        style={{
                          left: `${15 + i * 7}%`,
                          top: `${25 + (i % 4) * 20}%`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                      {/* Connection Lines */}
                      {i < 11 && (
                        <motion.div
                          className="absolute h-px bg-gradient-to-r from-red-500/50 to-transparent origin-left"
                          style={{
                            left: `${15 + i * 7}%`,
                            top: `${25 + (i % 4) * 20}%`,
                            width: "7%",
                            transform: `rotate(${Math.random() * 60 - 30}deg)`,
                          }}
                          animate={{
                            scaleX: [0, 1, 0],
                            opacity: [0, 0.8, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.3,
                          }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Foreground Content */}
                <div className="relative z-10 px-4 sm:px-6 py-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="relative z-20"
                  >
                    {/* Holographic Title */}
                    <div className="text-center mb-16">
                      <motion.div
                        initial={{ opacity: 0, y: 100, rotateX: -90 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 1.2, type: "spring" }}
                        viewport={{ once: true }}
                        className="relative inline-block perspective-1000"
                      >
                        <motion.h2
                          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 relative"
                          style={{
                            background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)",
                            backgroundSize: "400% 400%",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                          animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            textShadow: [
                              "0 0 20px rgba(255,107,107,0.5)",
                              "0 0 40px rgba(78,205,196,0.5)",
                              "0 0 20px rgba(255,107,107,0.5)",
                            ],
                          }}
                          transition={{
                            backgroundPosition: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                            textShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                          }}
                        >
                          ENTER THE
                          <br />
                          <motion.span
                            animate={{
                              rotateY: [0, 360],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              rotateY: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                              scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                            }}
                            className="inline-block"
                          >
                            MATRIX
                          </motion.span>
                        </motion.h2>

                        {/* Holographic Scan Lines */}
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          animate={{
                            background: [
                              "linear-gradient(90deg, transparent 0%, rgba(78,205,196,0.1) 50%, transparent 100%)",
                              "linear-gradient(90deg, transparent 100%, rgba(78,205,196,0.1) 50%, transparent 0%)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />

                        {/* Data Corruption Glitch */}
                        <motion.div
                          className="absolute inset-0 mix-blend-multiply"
                          animate={{
                            clipPath: [
                              "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
                              "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
                              "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                            ],
                            backgroundColor: ["rgba(255,0,0,0)", "rgba(255,0,0,0.1)", "rgba(255,0,0,0)"],
                          }}
                          transition={{
                            duration: 0.1,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 3,
                          }}
                        />
                      </motion.div>

                      {/* Interactive Terminal */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-black/80 border border-green-500/50 rounded-lg p-6 font-mono text-left max-w-2xl mx-auto mb-12 backdrop-blur-sm"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-gray-400 text-sm ml-2">sujan@portfolio:~$</span>
                        </div>

                        <div className="space-y-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 2, delay: 1 }}
                            viewport={{ once: true }}
                            className="overflow-hidden"
                          >
                            <span className="text-green-400">$ whoami</span>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 3 }}
                            viewport={{ once: true }}
                            className="text-white"
                          >
                            Developer, Dreamer, Tea Enthusiast
                          </motion.div>

                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 2, delay: 4 }}
                            viewport={{ once: true }}
                            className="overflow-hidden"
                          >
                            <span className="text-green-400">$ cat personality.json</span>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 6 }}
                            viewport={{ once: true }}
                            className="text-cyan-400"
                          >
                            {`{
  "status": "caffeinated",
  "mood": "debugging",
  "superpower": "turning_bugs_into_features"
}`}
                          </motion.div>

                          <motion.div
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                            className="text-green-400"
                          >
                            <span>$ █</span>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Facts */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Random <span className="red-accent">Facts</span> About Me
            </h2>
            <p className="text-gray-400 text-sm sm:text-lg">The quirky stuff that makes me human (I think)🤖</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {personalFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotate: 0.5 }}
              >
                <Card className="bg-black/40 border-red-500/20 hover:border-red-500/40 transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <fact.icon className={`w-6 h-6 ${fact.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">{fact.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{fact.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Random Thoughts */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Lightbulb className="w-8 h-8 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Random <span className="red-accent">Thoughts</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-lg">Things that pop into my head at 3 AM 🧠</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {randomThoughts.map((thought, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, rotate: Math.random() * 4 - 2 }}
              >
                <Card className="bg-black/40 border-red-500/20 hover:border-red-500/40 transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-gray-300 italic text-center leading-relaxed">"{thought}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask Me About */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ask Me <span className="red-accent">About</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-lg">Topics I can ramble about for hours 🗣️</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {askMeAbout.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-black/40 border-red-500/20 hover:border-red-500/40 transition-all duration-300 h-full cursor-pointer">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl mb-3">{topic.emoji}</div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-white">{topic.topic}</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300">{topic.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Achievements */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Star className="w-8 h-8 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Personal <span className="red-accent">Achievements</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-lg">Small wins that made me proud 🏆</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {personalAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-black/40 border-red-500/20 hover:border-red-500/40 transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl sm:text-4xl">{achievement.emoji}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                            {achievement.title}
                          </h3>
                          <span className="text-xs sm:text-sm bg-red-500/20 text-red-300 px-2 py-1 rounded">
                            {achievement.date}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base lg:text-lg">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              My <span className="red-accent">Hobbies</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-lg">
              What I do when I'm not staring at code (spoiler: still coding) 👨‍💻
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotate: Math.random() * 6 - 3 }}
              >
                <Card className="bg-black/40 border-red-500/20 hover:border-red-500/40 transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="text-4xl sm:text-5xl mb-4">{hobby.emoji}</div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3">{hobby.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">{hobby.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Books & Movies */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Favorite Series */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <Tv className="w-8 h-8 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                  Favorite <span className="red-accent">Series</span>
                </h3>
                <p className="text-gray-400 text-sm sm:text-lg">Series that kept me binge-watching 🍿</p>
              </div>

              <div className="space-y-4">
                {favoriteSeries.map((series, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <Card className="bg-black/40 border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-white">{series.title}</h4>
                          <span className="text-xs sm:text-sm bg-red-500/20 text-red-300 px-2 py-1 rounded">
                            {series.genre}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-2">Seasons: {series.seasons}</p>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-300 italic">"{series.reason}"</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Favorite Movies */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <Film className="w-8 h-8 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                  Favorite <span className="red-accent">Movies</span>
                </h3>
                <p className="text-gray-400 text-sm sm:text-lg">Films that made me forget to code 🎬</p>
              </div>

              <div className="space-y-4">
                {favoriteMovies.map((movie, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: -5, scale: 1.02 }}
                  >
                    <Card className="bg-black/40 border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-white">{movie.title}</h4>
                          <span className="text-xs sm:text-sm bg-red-500/20 text-red-300 px-2 py-1 rounded">
                            {movie.genre}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-2">{movie.year}</p>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-300 italic">"{movie.reason}"</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fun Quote */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-black/40 border-red-500/20 hover:border-red-500/40 transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="text-4xl sm:text-5xl mb-4">💭</div>
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-200 mb-4 italic">
                  "Code is like humor. When you have to explain it, it's bad."
                </blockquote>
                <p className="text-gray-400 text-sm sm:text-base">- Cory House</p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-500 mt-2">
                  My coding philosophy in a nutshell! (Also applies to my jokes) 😅
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Had enough of my randomness? 😄 <br />
              Let's get back to the <span className="red-accent">professional</span> stuff!
            </h3>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="cta-button text-lg sm:text-xl px-8 py-3" asChild>
                <Link href="/">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Portfolio
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PersonalPage
