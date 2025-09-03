"use client"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  MessageSquareText, 
  X, 
  ArrowLeft, 
  CogIcon, 
  HammerIcon, 
  ActivityIcon, 
  WorkflowIcon,
  Github,
  Linkedin,
  Instagram
} from "lucide-react";

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, FormEvent, useRef, useEffect  } from "react"


interface FormData {
  name: string
  email: string
  message?: string
  budget?: string
  projectDetails?: string
  deadline?: string
  Inquiry?: string
  queryType: string; 
}

export default function ContactPage() {
  const [showOptions, setShowOptions] = useState(false)
  const [activeForm, setActiveForm] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    budget: "",
    projectDetails: "",
    deadline: "",
    Inquiry: "",
    queryType: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  
  const formRef = useRef<HTMLDivElement>(null)

  const quickFacts = [
    { icon: MapPin, title: "Location", text: "Kolkata, India" },
    { icon: Clock, title: "Response Time", text: "Within 24–48 hours" },
    { icon: Sparkles, title: "Availability", text: "Freelance & Remote" },
  ]

  const waysToWork = [
    "Clear scope, milestones, and success criteria",
    "Transparent communication & async-friendly updates",
    "Performance, accessibility, and quality as defaults",
    "Maintainability and handover documentation",
  ]

  const budgetOptions = [
    "$200 - $500",
    "$500 - $800",
    "$800 - $1500",
    "$5,000+",
    "Let's discuss"
  ]

  const deadlineOptions = [
    "1–2 Weeks",
    "2–4 Weeks",
    "1–2 Months",
    "3–6 Months",
    "Flexible / Not Decided Yet"
  ]

  const optionSymbols = {
    "Let’s Connect": "✦",
    "Build Together": "⚑",
    "Consultation": "⚙"
  }

  useEffect(() => {
    if (activeForm && formRef.current) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }, [activeForm])

  const handleGetInTouch = () => {
    setShowOptions(true)
    setSubmitStatus(null)
  }

  const handleOptionClick = (option: string) => {
    setActiveForm(option)
    setFormData({
      name: "",
      email: "",
      message: "",
      budget: "",
      projectDetails: "",
      deadline: "",
      Inquiry: "",
      queryType: "" 
    })
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const submitData = new globalThis.FormData()
      
      // Always append access_key first
      submitData.append("access_key", "3ef40402-a746-4f84-ba72-338dffe734ed")
      
      // Append basic form data
      submitData.append("name", formData.name)
      submitData.append("email", formData.email)
      
      // Set subject and message based on form type
      let subject = ""
      let message = ""
      
      if (activeForm === "Let’s Connect") {
        subject = "Casual Hello from Portfolio Contact"
        message = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message || ""}`
      } else if (activeForm === "Build Together") {
        subject = "Build Together Request"
        message = `Name: ${formData.name}\nEmail: ${formData.email}\nBudget: ${formData.budget || ""}\nDeadline: ${formData.deadline || ""}\n\nProject Details:\n${formData.projectDetails || ""}`
      } else if (activeForm === "Consultation") {
        subject = "Consultation Request"
        message = `Name: ${formData.name}
Email: ${formData.email}
Related Query: ${formData.queryType || ""}
  
Inquiry:
${formData.Inquiry || ""}`
      }
      
      submitData.append("subject", subject)
      submitData.append("message", message)
      
      // Add form type for tracking
      submitData.append("form_type", activeForm || "")
      
      // Submit to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setActiveForm(null)
        setShowOptions(false)
        // Reset form data
        setFormData({
          name: "",
          email: "",
          message: "",
          budget: "",
          projectDetails: "",
          deadline: "",
          Inquiry: "",
          queryType: "" 
        })
      } else {
        console.error("Web3Forms submission failed:", result)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setActiveForm(null)
    setShowOptions(false)
    setSubmitStatus(null)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header Section - No Border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="text-[#ef4444]">Me</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Seamless ways to connect. Let’s explore freelance gigs, remote roles, and collaborations together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
>
              <Button
                onClick={() => window.location.href = "/services"}
                className="bg-[#ef4444] hover:bg-[#dc2626] text-white px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
  >
              <WorkflowIcon className="w-4 h-4 mr-2" />
                What I Offer
              </Button>
        </motion.div>

            <Link href="/project">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 px-6 py-3 rounded-lg transition-all duration-200">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Quick Facts and How I Work - Dark Cards with Subtle Borders */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 md:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex"
          >
            <Card className="bg-[#111111] border-gray-800 hover:border-gray-700 transition-all duration-200 flex flex-col w-full">
              <CardContent className="p-8 flex-1">
                <h2 className="text-2xl font-bold mb-6">Quick Facts</h2>
                <div className="space-y-6">
                  {quickFacts.map((fact, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-[#ef4444] mt-1">
                        <fact.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{fact.title}</h3>
                        <p className="text-gray-400">{fact.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex"
          >
            <Card className="bg-[#111111] border-gray-800 hover:border-gray-700 transition-all duration-200 flex flex-col w-full">
              <CardContent className="p-8 flex-1">
                <h2 className="text-2xl font-bold mb-6">How I Work</h2>
                <div className="space-y-4">
                  {waysToWork.map((way, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#ef4444] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">{way}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Message and Calls - Dark Cards with Subtle Borders */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 md:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex"
          >
            <Card className="bg-[#111111] border-gray-800 hover:border-gray-700 transition-all duration-200 flex flex-col w-full">
              <CardContent className="p-8 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquareText className="w-6 h-6 text-[#ef4444]" />
                  <h2 className="text-xl font-bold">Message</h2>
                </div>
                <p className="text-gray-300">
                  Prefer async chat? Send me a brief message with context and links. I'll follow up by email.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex"
          >
            <Card className="bg-[#111111] border-gray-800 hover:border-gray-700 transition-all duration-200 flex flex-col w-full">
              <CardContent className="p-8 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-[#ef4444]" />
                  <h2 className="text-xl font-bold">Calls</h2>
                </div>
                <p className="text-gray-300">
                  I'm happy to schedule a call after an initial email to align on goals and constraints.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Options and Forms */}
        <AnimatePresence>
          {showOptions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <Card className="bg-[#111111] border-gray-800">
                <CardContent className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Choose how you'd like to connect:</h3>
                    <Button
                      onClick={resetForm}
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {["Let’s Connect", "Build Together", "Consultation"].map((option, index) => (
                      <motion.div
                        key={option}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Button
                          onClick={() => handleOptionClick(option)}
                          className="w-full bg-[#1a1a1a] hover:bg-[#ef4444] border border-gray-700 hover:border-[#ef4444] text-white transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
                        >
                          <span className="mr-2 text-[#ef4444]">{optionSymbols[option as keyof typeof optionSymbols]}</span>
                          {option}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Form */}
        <AnimatePresence>
          {activeForm && (
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <Card className="bg-[#111111] border-gray-800">
                <CardContent className="p-8">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-[#ef4444] flex items-center">
                      <span className="mr-2">{optionSymbols[activeForm as keyof typeof optionSymbols]}</span>
                      {activeForm}
                    </h3>
                    <Button
                      onClick={() => setActiveForm(null)}
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-400 mb-6">All fields are required to submit.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#ef4444] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#ef4444] transition-colors"
                        />
                      </div>
                    </div>

{activeForm === "Let’s Connect" && (
  <div>
    <label className="block text-sm font-medium mb-2">Message</label>
    <textarea
      required
      rows={4}
      value={formData.message}
      onChange={(e) => handleInputChange("message", e.target.value)}
      className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#ef4444] transition-colors"
      placeholder="Say hello..."
    />

    {/* Social Links */}
<div className="flex flex-wrap justify-center gap-6 mt-6">

{/* GitHub */}
<a
  href="https://github.com/devsujandas"
  target="_blank"
  className="flex items-center gap-2 text-gray-300 hover:text-[#24292F] 
             transition-colors transform hover:scale-105 duration-200"
>
  <Github className="w-5 h-5" />
  <span>GitHub</span>
</a>

{/* LinkedIn */}
<a
  href="https://linkedin.com/in/devsujandas"
  target="_blank"
  className="flex items-center gap-2 text-gray-300 hover:text-[#0A66C2] 
             transition-colors transform hover:scale-105 duration-200"
>
  <Linkedin className="w-5 h-5" />
  <span>LinkedIn</span>
</a>

{/* Instagram */}
<a
  href="https://instagram.com/devsujandas"
  target="_blank"
  className="flex items-center gap-2 text-gray-300 hover:text-pink-500 
             transition-colors transform hover:scale-105 duration-200"
>
  <Instagram className="w-5 h-5" />
  <span>Instagram</span>
</a>

</div>

</div>
)}

                    {activeForm === "Build Together" && (
                      <>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Budget Range</label>
<select
  required
  value={formData.budget}
  onChange={(e) => handleInputChange('budget', e.target.value)}
  className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#ef4444] transition-colors"
>
  <option value="" disabled>
    Select budget range
  </option>
  {budgetOptions.map((budget) => (
    <option key={budget} value={budget}>{budget}</option>
  ))}
</select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Preferred Deadline</label>
                            <select
  required
  value={formData.deadline}
  onChange={(e) => handleInputChange('deadline', e.target.value)}
  className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#ef4444] transition-colors"
>
  <option value="" disabled>
    Select preferred deadline
  </option>
  {deadlineOptions.map((deadline) => (
    <option key={deadline} value={deadline}>{deadline}</option>
  ))}
</select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Project Details</label>
                          <textarea
                            required
                            rows={4}
                            value={formData.projectDetails}
                            onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                            className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#ef4444] transition-colors"
                            placeholder="Tell me about your project..."
                          />
                        </div>
                      </>
                    )}

                    {activeForm === "Consultation" && (
  <>
    <div>
      <label className="block text-sm font-medium mb-2">Related Query</label>
      <select
        required
        value={formData.queryType}
        onChange={(e) => handleInputChange('queryType', e.target.value)}
        className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg 
                   focus:outline-none focus:border-[#ef4444] transition-colors"
      >
  <option value="" disabled>
    Select query type
  </option>
<option value="Modern Web Apps">Modern Web Apps</option>
<option value="Data Science & Analytics">Data Science & Analytics</option>
<option value="AI Tools & Automation">AI Tools & Automation</option>
<option value="APIs & Integrations">APIs & Integrations</option>
<option value="DevOps & Cloud">DevOps & Cloud</option>
<option value="UI/UX & Prototyping">UI/UX & Prototyping</option>
<option value="Custom Query">Custom Query</option>
    </select>
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">Inquiry</label>
      <textarea
        required
        rows={4}
        value={formData.Inquiry}
        onChange={(e) => handleInputChange('Inquiry', e.target.value)}
        className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg 
                   focus:outline-none focus:border-[#ef4444] transition-colors"
        placeholder="What would you like to discuss?"
      />
    </div>
  </>
)}


<div className="flex justify-center gap-4 mt-6">
  <Button
    type="submit"
    disabled={isSubmitting}
    className="bg-[#ef4444] hover:bg-[#dc2626] text-white px-6 py-2 rounded-lg 
               transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25 
               disabled:opacity-50"
  >
    {isSubmitting ? "Sending..." : "Send Message"}
  </Button>
  
  <Button
    type="button"
    onClick={() => setActiveForm(null)}
    variant="outline"
    className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 
               px-6 py-2 rounded-lg"
  >
    Cancel
  </Button>
</div>

                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success/Error Messages */}
        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <Card className={`border ${submitStatus === 'success' ? 'bg-green-900/20 border-green-500/50' : 'bg-red-900/20 border-red-500/50'}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    {submitStatus === 'success' ? (
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                    ) : (
                      <X className="w-6 h-6 text-red-400" />
                    )}
                    <div>
                      <h3 className={`font-bold ${submitStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {submitStatus === 'success' ? 'Thank You!' : 'Error'}
                      </h3>
                      <p className="text-gray-300">
                        {submitStatus === 'success' 
                          ? 'Your message has been sent successfully. I\'ll get back to you within 24-48 hours.'
                          : 'There was an error sending your message. Please try again or email me directly.'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA - No Border */}
        {!showOptions && !activeForm && !submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <Button
              onClick={handleGetInTouch}
              className="bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in touch
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
