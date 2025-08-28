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
      seasons: "5 seasons",
      reason: "Masterclass in character arcs and tension",
      genre: "Crime / Drama",
    },
    {
      title: "Stranger Things",
      seasons: "4+ seasons",
      reason: "80s nostalgia meets supernatural mystery",
      genre: "Sci‑Fi / Horror",
    },
    {
      title: "Sherlock",
      seasons: "4 seasons",
      reason: "Clever writing and brilliant deductions",
      genre: "Mystery / Crime",
    },
    {
      title: "Dark",
      seasons: "3 seasons",
      reason: "Mind-bending time travel puzzle",
      genre: "Sci‑Fi / Thriller",
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
                <p className="text-gray-400 text-sm sm:text-lg">Series that kept me bingeing 📺</p>
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
