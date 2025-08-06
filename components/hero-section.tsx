'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const rotatingWords = [
  "Data Privacy",
  "Data Compliance",
  "Risk Assessment",
  "Data Protection Impact",
  "Data Governance",
  "Policy Enforcement",
  "Consent Management",
  "Accountability",
  "Legal Frameworks",
  "Access Control",
]

export function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative z-10 py-20 md:py-32 lg:py-40 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-accent to-pink-accent">
          High Value in <br />
          <span className="relative inline-block h-[1.2em] overflow-hidden align-middle">
            <motion.div
              animate={{ y: `-${index * 1.2}em` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col leading-[1.2] space-y-0"
            >
              {rotatingWords.map((word, i) => (
                <div
                  key={i}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-accent to-pink-accent"
                >
                  {word}
                </div>
              ))}
            </motion.div>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          Your trusted partner for data compliance, human rights audits, and legal protection
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#services-section" passHref>
            <Button className="bg-gradient-to-r from-purple-accent to-pink-accent text-white px-8 py-6 rounded-lg text-lg font-semibold hover:from-pink-accent hover:to-purple-accent transition-all shadow-lg">
              Explore Services <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="#team-section" passHref>
            <Button
              variant="outline"
              className="border-2 border-purple-accent text-purple-accent px-8 py-6 rounded-lg text-lg font-semibold hover:bg-purple-accent hover:text-white transition-colors shadow-lg bg-transparent"
            >
              Be Compliant
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
