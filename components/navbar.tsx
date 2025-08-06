"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("us") // Default to US English

  const languages = [
    { code: "us", name: "English" },
    { code: "es", name: "Español" },
    { code: "br", name: "Português" },
    { code: "cn", name: "中文" },
  ]

  return (
    <header className="relative z-20 px-4 lg:px-8 py-6 flex items-center justify-between">
      <a href="#hero-section" className="text-2xl font-bold text-text-light">
        Certainty.
      </a>
      <nav className="hidden md:flex items-center space-x-8">
        <a
          href="#hero-section"
          className="text-text-light hover:text-purple-accent transition-colors"
        >
          Home
        </a>
        <a
          href="#services-section"
          className="text-text-light hover:text-purple-accent transition-colors"
        >
          Services
        </a>
        <a
          href="#team-section"
          className="text-text-light hover:text-purple-accent transition-colors"
        >
          About
        </a>
        <a
          href="#contact-section"
          className="text-text-light hover:text-purple-accent transition-colors"
        >
          Contact
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center space-x-2 text-text-light hover:text-purple-accent transition-colors">
              <Globe className="w-5 h-5" />
              <span className="uppercase">{selectedLanguage}</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 bg-card-bg border-card-border text-text-light">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={`cursor-pointer px-4 py-2 rounded-md ${
                  selectedLanguage === lang.code
                    ? "bg-pink-accent text-white"
                    : "hover:bg-card-border"
                }`}
              >
                <span className="uppercase mr-2">{lang.code}</span> {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
