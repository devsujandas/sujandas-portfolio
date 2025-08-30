import type { Metadata } from "next"
import CertificateClientPage from "./CertificateClientPage"

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Professional certifications and achievements in data science, Python development, and web technologies.",
}

export default function CertificatePage() {
  return <CertificateClientPage />
}
