"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Users, FileText, Scale, Lock, GraduationCap } from "lucide-react"
import { ServiceDetailDialog } from "./service-detail-dialog"
import type { LucideIcon } from "lucide-react"

interface Service {
  title: string
  icon: LucideIcon
  description: string
  overview: string
  whatWeOffer: string
  keyBenefits: string[]
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const services: Service[] = [
    {
      title: "Data Compliance & Quality Audits",
      icon: ShieldCheck,
      description: "Learn More",
      overview:
        "Elevate your data integrity with our comprehensive audits. We ensure your information meets and exceeds legal standards.",
      whatWeOffer:
        "Our data compliance services include comprehensive data mapping, privacy impact assessments, GDPR compliance audits, data retention policy development, and ongoing monitoring systems. We help organizations establish robust data governance frameworks that protect both business interests and individual privacy rights.",
      keyBenefits: [
        "Reduced legal risks and potential fines",
        "Enhanced customer trust and brand reputation",
        "Streamlined data processes and governance",
        "Competitive advantage through compliance excellence",
        "Peace of mind with expert guidance",
      ],
    },
    {
      title: "Human Rights & Compliance Audits",
      icon: Users,
      description: "Learn More",
      overview:
        "Ensure your operations align with global human rights standards through our expert audits and advisory services.",
      whatWeOffer:
        "We provide comprehensive assessments of human rights impacts, develop ethical supply chain policies, and offer training to foster a culture of respect and compliance within your organization.",
      keyBenefits: [
        "Mitigate reputational risks",
        "Strengthen ethical governance",
        "Improve stakeholder relations",
        "Ensure legal and moral compliance",
        "Promote responsible business practices",
      ],
    },
    {
      title: "Software Contracts & Licensing",
      icon: FileText,
      description: "Learn More",
      overview: "Navigate the complexities of software agreements with our specialized legal expertise.",
      whatWeOffer:
        "Our services cover drafting, reviewing, and negotiating software licenses, SaaS agreements, development contracts, and intellectual property protection to safeguard your digital assets.",
      keyBenefits: [
        "Secure favorable terms",
        "Protect intellectual property",
        "Minimize legal disputes",
        "Ensure compliance with licensing models",
        "Streamline contract management",
      ],
    },
    {
      title: "Legal Advisory in Tech & Data",
      icon: Scale,
      description: "Learn More",
      overview: "Receive expert legal guidance tailored to the unique challenges of the technology and data sectors.",
      whatWeOffer:
        "We advise on emerging tech regulations, data governance frameworks, cybersecurity laws, and digital ethics, helping you innovate responsibly and compliantly.",
      keyBenefits: [
        "Stay ahead of regulatory changes",
        "Mitigate tech-related legal risks",
        "Foster responsible innovation",
        "Ensure data security and privacy",
        "Gain strategic legal insights",
      ],
    },
    {
      title: "Data Privacy & Privacy Policies",
      icon: Lock,
      description: "Learn More",
      overview:
        "Develop robust data privacy frameworks and policies that protect sensitive information and build customer trust.",
      whatWeOffer:
        "Our services include crafting comprehensive privacy policies, implementing data protection impact assessments (DPIAs), and ensuring adherence to global privacy regulations like GDPR and CCPA.",
      keyBenefits: [
        "Achieve regulatory compliance",
        "Enhance data security posture",
        "Build customer confidence",
        "Reduce risk of data breaches",
        "Streamline privacy operations",
      ],
    },
    {
      title: "Training & Awareness Initiatives",
      icon: GraduationCap,
      description: "Learn More",
      overview:
        "Empower your team with essential knowledge on compliance, data privacy, and ethical practices through engaging training programs.",
      whatWeOffer:
        "We design and deliver customized workshops, e-learning modules, and awareness campaigns to ensure your employees understand and adhere to legal and ethical standards.",
      keyBenefits: [
        "Boost employee compliance awareness",
        "Reduced human error risks",
        "Fostering a culture of compliance",
        "Ensure consistent policy adherence",
        "Meet regulatory training requirements",
      ],
    },
  ]

  const handleCardClick = (service: Service) => {
    console.log("Card clicked:", service.title) // Added console.log for debugging
    setSelectedService(service)
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    console.log("Closing dialog") // Added console.log for debugging
    setIsDialogOpen(false)
    setSelectedService(null)
  }

  return (
    <section className="relative z-10 py-20 md:py-32 lg:py-40 text-center px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-text-light">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-accent to-pink-accent">
            Services
          </span>
        </h2>
        <p className="text-lg md:text-xl text-text-muted mb-16">
          Comprehensive solutions for your compliance and legal needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card-bg border border-card-border rounded-xl p-6 flex flex-col justify-between items-start text-left relative overflow-hidden
                         before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-accent/10 before:to-pink-accent/10 before:opacity-0 before:transition-opacity before:duration-300
                         hover:before:opacity-100 hover:border-purple-accent"
            >
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-text-light">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex flex-col items-start w-full relative z-10">
                {" "}
                {/* Added relative z-10 */}
                <Button
                  variant="ghost"
                  className="text-purple-accent hover:text-pink-accent transition-colors group px-4 py-2 h-auto cursor-pointer block" // Added cursor-pointer and block
                  onClick={() => handleCardClick(service)}
                >
                  {service.description}{" "}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="mt-8 self-end text-card-border">
                  <service.icon className="w-10 h-10" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <ServiceDetailDialog service={selectedService} isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </section>
  )
}
