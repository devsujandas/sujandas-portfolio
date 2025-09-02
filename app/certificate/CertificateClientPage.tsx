"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Shield, Calendar, Award, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

const certificates = [
{
  "title": "Data Science Tools",
  "issuer": "IBM",
  "date": "2025-08-08",
  "credentialId": "DS0105EN",
  "category": "Data Science",
  "skills": ["Data Science Tools", "Jupyter Notebooks", "RStudio", "GitHub", "IBM Data Analytics"],
  "description":
    "Successfully completed and received a passing grade in the IBM course on Data Science Tools. The course covered essential data science environments, tools, and platforms including Jupyter, RStudio, and Watson Studio.",
  "image": "/images/certificates/IBM-Data-Science.jpg",
  "verifyUrl": "https://courses.yl-ptech.skillsnetwork.site/certificates/84a478cad2e3453c97b09f3084918cf4",
  "featured": true
},

{
  "title": "Data Analytics Job Simulation",
  "issuer": "Deloitte",
  "date": "2025-07-24",
  "credentialId": "wCZhd6UK9mYDcTAGm",
  "category": "Data Science",
  "skills": [
    "Data Analysis",
    "Forensic Technology",
    "Problem Solving",
    "Analytical Thinking"
  ],
  "description": "Completed the Deloitte Data Analytics Job Simulation via Forage. Worked on practical tasks including data analysis and forensic technology, simulating real-world job responsibilities in the field of analytics.",
  "image": "/images/certificates/deloitte-data-analytics.jpg",
  "verifyUrl":"/images/certificates/deloitte-data-analytics.jpg",
  "featured": true,
  "verifyType": "external"
},

{
  "title": "Python 101 for Data Science",
  "issuer": "IBM Cognitive Class",
  "date": "2025-08-08",
  "credentialId": "PY0101EN",
  "category": "Data Science",
  "skills": ["Python", "Data Science", "Programming Basics", "Data Analysis"],
  "description": "Successfully completed Python 101 for Data Science, covering Python programming fundamentals and its applications in data science.",
  "image": "/images/certificates/IBM-PY0101EN.jpg",
  "verifyUrl": "https://courses.cognitiveclass.ai/certificates/d0a1d001c01a4c548b593c1cb1b56444",
  "featured": false,
},

{
  "title": "Data Science Methodology",
  "issuer": "IBM",
  "date": "2025-08-08",
  "credentialId": "DS0103EN",
  "category": "Data Science",
  "skills": ["Data Science", "Methodology", "Problem-Solving", "Data Analysis"],
  "description": "Successfully completed the Data Science Methodology course, learning about the major steps in the data science methodology including problem definition, data understanding, preparation, modeling, evaluation, and deployment.",
  "image": "/images/certificates/IBM-DS0101EN.jpg",
  "verifyUrl": "https://courses.yl-ptech.skillsnetwork.site/certificates/30ce3669a6694b489cbbfc2c76357753",
  "featured": false
},

{
  "title": "Skill Development & Internship ",
  "issuer": "Euphoria GenX",
  "date": "2024-05-24",
  "credentialId": "EG_24_1984",
  "category": "Machine Learning",
  "skills": ["Python", "Data Preprocessing", "Machine Learning", "Crop Yield Prediction", "Data Analysis"],
  "description": "Successfully completed the Skill Development and Internship programme at Euphoria GenX (31st March 2024 – 18th May 2024), contributing to the Crop Yield Prediction project.",
  "image": "/images/certificates/Euphoria-genx.jpg",
  "verifyUrl": "/images/certificates/Euphoria-genx.jpg",
  "featured": false
},
{
  "title": "GenAI Powered Data Analytics Job Simulation",
  "issuer": "TATA (via Forage)",
  "date": "2025-07-24",
  "credentialId": "x5KEmHiCbtgBidNwr",
  "category": "Data Analytics",
  "skills": [
    "Exploratory Data Analysis",
    "Risk Profiling",
    "AI for Predictive Analytics",
    "Business Reporting",
    "Data Storytelling",
    "AI-driven Collections Strategy"
  ],
  "description": "Completed a virtual job simulation with TATA via Forage, gaining practical experience in exploratory data analysis, risk profiling, predicting delinquency with AI, business reporting, data storytelling, and implementing AI-driven collections strategies.",
  "image": "/images/certificates/tata-genai-analytics.jpg",
  "verifyUrl": "/images/certificates/tata-genai-analytics.jpg",
  "featured": false
},

{
  "title": "Project Development Using JAVA for Beginners - 2024",
  "issuer": "Udemy",
  "date": "2024-05-10",
  "credentialId": "UC-2afb53d8-ddb1-40e6-8f23-c03a3eee69cc6",
  "category": "Programming",
  "skills": ["Java", "Object-Oriented Programming", "Project Development", "Software Engineering Basics"],
  "description": "Completed a 45.5-hour Udemy course on Java project development for beginners, covering core Java concepts, object-oriented programming, and building real-world Java projects.",
  "image": "/images/certificates/udemy-java.jpg",
  "verifyUrl": "/images/certificates/udemy-java.jpg",
  "featured": false
},

{
  "title": "Effective Business Websites",
  "issuer": "HP LIFE | HP Foundation",
  "date": "2024-10-27",
  "credentialId": "9c5b2b9c-d922-4f56-9a4b-996ae179c15a",
  "category": "Web Development",
  "skills": ["Web Development", "Business Website Design", "Customer Behavior Analysis", "Website Metrics"],
  "description": "Successfully completed the HP LIFE online course on building effective business websites, covering best-practice development techniques, customer behavior analysis, and website metrics evaluation.",
  "image": "/images/certificates/hp-effective-business-websites.jpg",
  "verifyUrl": "/images/certificates/hp-effective-business-websites.jpg",
  "featured": false
},

]

const categories = ["All", "Data Science", "Web Development", "Data Analytics", "Machine Learning", "Programming"]

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
