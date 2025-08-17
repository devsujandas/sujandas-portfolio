"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Shield, Calendar, Award, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

const certificates = [
  {
    title: "Python for Data Science and Machine Learning",
    issuer: "Udemy",
    date: "2024-12-15",
    credentialId: "UC-a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    category: "Data Science",
    skills: ["Python", "Data Science", "Machine Learning", "Pandas", "NumPy"],
    description:
      "Comprehensive course covering Python programming for data science, including machine learning algorithms, data visualization, and statistical analysis.",
    image: "/images/certificates/python-data-science.png",
    verifyUrl: "https://www.udemy.com/certificate/UC-a1b2c3d4-e5f6-7890-abcd-ef1234567890/",
    featured: true,
  },
  {
    title: "Advanced React and Next.js Development",
    issuer: "Coursera",
    date: "2024-11-20",
    credentialId: "COURSERA-REACT-2024-001",
    category: "Web Development",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Web Development"],
    description:
      "Advanced concepts in React and Next.js development, including server-side rendering, API routes, and modern deployment strategies.",
    image: "/images/certificates/react-nextjs.png",
    verifyUrl: "https://coursera.org/verify/COURSERA-REACT-2024-001",
    featured: true,
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024-10-10",
    credentialId: "AWS-CP-2024-SD001",
    category: "Cloud",
    skills: ["AWS", "Cloud Computing", "DevOps", "Infrastructure"],
    description: "Foundational understanding of AWS cloud services, security, architecture, pricing, and support.",
    image: "/images/certificates/aws-cloud.png",
    verifyUrl: "https://aws.amazon.com/verification/AWS-CP-2024-SD001",
    featured: false,
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    date: "2024-09-05",
    credentialId: "TF-DEV-2024-001",
    category: "Machine Learning",
    skills: ["TensorFlow", "Deep Learning", "Neural Networks", "AI"],
    description: "Demonstrates proficiency in using TensorFlow to solve deep learning and machine learning problems.",
    image: "/images/certificates/tensorflow-developer.png",
    verifyUrl: "https://www.credential.net/TF-DEV-2024-001",
    featured: true,
  },
  {
    title: "Google Data Analytics Professional",
    issuer: "Google",
    date: "2024-08-15",
    credentialId: "GOOGLE-DA-2024-001",
    category: "Data Science",
    skills: ["Data Analytics", "SQL", "Tableau", "R Programming"],
    description:
      "Comprehensive program covering data analytics fundamentals, data cleaning, analysis, and visualization.",
    image: "/images/certificates/google-analytics.png",
    verifyUrl: "https://www.credly.com/badges/GOOGLE-DA-2024-001",
    featured: false,
  },
  {
    title: "FastAPI Web Development",
    issuer: "Python Institute",
    date: "2024-07-20",
    credentialId: "PI-FASTAPI-2024-001",
    category: "Programming",
    skills: ["FastAPI", "Python", "API Development", "Backend"],
    description: "Advanced FastAPI development including authentication, database integration, and API documentation.",
    image: "/images/certificates/fastapi-development.png",
    verifyUrl: "https://pythoninstitute.org/verify/PI-FASTAPI-2024-001",
    featured: false,
  },
]

const categories = ["All", "Data Science", "Web Development", "Cloud", "Machine Learning", "Programming"]

export default function CertificateClientPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showAllCertificates, setShowAllCertificates] = useState(false)
  const INITIAL_CERTIFICATES_COUNT = 4

  // Add filtering logic
  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((certificate) => certificate.category === selectedCategory)

  const displayedCertificates = showAllCertificates
    ? filteredCertificates
    : filteredCertificates.slice(0, INITIAL_CERTIFICATES_COUNT)
  const hasMoreCertificates = filteredCertificates.length > INITIAL_CERTIFICATES_COUNT

  const handlePreview = (certificate: any) => {
    setSelectedCertificate(certificate)
  }

  const handleClosePreview = () => {
    setSelectedCertificate(null)
  }

  const handleVerify = (verifyUrl: string) => {
    window.open(verifyUrl, "_blank", "noopener,noreferrer")
  }

  const handleLoadMore = () => {
    setShowAllCertificates(true)
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    setShowAllCertificates(false) // Reset to show initial certificates when changing category
  }

  // Scroll to top when modal opens
  useEffect(() => {
    if (selectedCertificate) {
      window.scrollTo(0, 0)
    }
  }, [selectedCertificate])

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
              My <span className="red-accent">Certificates</span>
            </span>
            <div className="w-12 sm:w-16 h-0.5 bg-red-500"></div>
          </h1>
          <p className="text-responsive-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Professional certifications and achievements that validate my expertise in various technologies and domains.
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
            <h3 className="text-responsive-lg font-semibold mb-4 text-center text-gray-300">Filter by Category</h3>
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

        {/* Certificates Grid */}
        <div className="section-border p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {displayedCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.credentialId}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="project-card h-full overflow-hidden">
                  <CardContent className="p-0">
                    {/* Certificate Image */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-red-500/20 to-purple-500/20 relative overflow-hidden">
                      <img
                        src={certificate.image || "/placeholder.svg"}
                        alt={certificate.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {certificate.featured && (
                          <Badge variant="secondary" className="bg-red-500/20 text-red-300 text-xs backdrop-blur-sm">
                            Featured
                          </Badge>
                        )}
                        <Badge variant="secondary" className="bg-green-500/20 text-green-300 text-xs backdrop-blur-sm">
                          Verified
                        </Badge>
                      </div>

                      {/* Award Icon */}
                      <div className="absolute top-4 right-4">
                        <Award className="w-6 h-6 text-yellow-400 drop-shadow-lg" />
                      </div>

                      {/* Date Badge */}
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-2 text-white text-sm bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          {new Date(certificate.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    {/* Certificate Content */}
                    <div className="p-6">
                      {/* Title and Issuer */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors leading-tight line-clamp-2">
                          {certificate.title}
                        </h3>
                        <p className="text-red-400 font-semibold text-lg">{certificate.issuer}</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 bg-transparent border-red-500/30 hover:bg-red-500/10 hover:border-red-500/50 transition-all duration-300"
                          onClick={() => handlePreview(certificate)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 cta-button hover:scale-105 transition-transform duration-200"
                          onClick={() => handleVerify(certificate.verifyUrl)}
                        >
                          <Shield className="w-4 h-4 mr-2" />
                          Verify
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Load More Button */}
            {!showAllCertificates && hasMoreCertificates && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="col-span-full text-center mt-12"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button onClick={handleLoadMore} className="cta-button px-8 py-3 text-lg">
                    <Award className="w-5 h-5 mr-2" />
                    Load More Certificates
                  </Button>
                </motion.div>
                <p className="text-gray-400 text-sm mt-3">
                  Showing {displayedCertificates.length} of {filteredCertificates.length} certificates
                </p>
              </motion.div>
            )}

            {/* No Results State */}
            {filteredCertificates.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-16">
                <div className="max-w-md mx-auto">
                  <Award className="w-20 h-20 text-gray-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-400 mb-3">No certificates found</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Try selecting a different category or check back later for new certificates.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 bg-transparent border-red-500/30 hover:bg-red-500/10"
                    onClick={() => setSelectedCategory("All")}
                  >
                    Show All Certificates
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Certificate Preview Modal */}
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleClosePreview}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#0a0a0a] border border-red-500/20 rounded-xl max-w-5xl w-full max-h-[95vh] overflow-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
                  <h2 className="text-2xl sm:text-3xl font-bold">Certificate Preview</h2>
                  <button
                    onClick={handleClosePreview}
                    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-8">
                  {/* Certificate Image */}
                  <div className="flex justify-center bg-gradient-to-br from-red-500/10 to-purple-500/10 rounded-xl p-6">
                    <img
                      src={selectedCertificate.image || "/placeholder.svg"}
                      alt={selectedCertificate.title}
                      className="max-w-full max-h-[50vh] sm:max-h-[60vh] object-contain rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Certificate Details */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{selectedCertificate.title}</h3>
                        <p className="text-red-400 text-xl font-semibold mb-4">{selectedCertificate.issuer}</p>
                        <p className="text-gray-300 leading-relaxed text-lg">{selectedCertificate.description}</p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
                        <h4 className="text-lg font-semibold mb-4 text-gray-200">Certificate Details</h4>
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm text-gray-400 block mb-1">Issue Date</label>
                            <p className="text-white text-lg">
                              {new Date(selectedCertificate.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                          <div>
                            <label className="text-sm text-gray-400 block mb-1">Verification Status</label>
                            <div className="flex items-center gap-3 mt-2">
                              <Shield className="w-5 h-5 text-green-400" />
                              <span className="text-green-400 font-medium">Verified Certificate</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-800">
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent border-red-500/30 hover:bg-red-500/10 py-3 text-lg"
                      onClick={handleClosePreview}
                    >
                      Close Preview
                    </Button>
                    <Button
                      className="flex-1 cta-button py-3 text-lg hover:scale-105 transition-transform duration-200"
                      onClick={() => handleVerify(selectedCertificate.verifyUrl)}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Verify Online
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
