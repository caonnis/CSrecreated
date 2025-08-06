import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-text-light relative overflow-hidden">
      {/* Global radial gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-accent opacity-10 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-pink-accent opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] rounded-full bg-purple-accent opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection id="hero-section" />
          <ServicesSection id="services-section" />
          <TeamSection id="team-section" />
          <ContactSection id="contact-section" />
        </main>
        <Footer id="footer-section" />
      </div>
    </div>
  )
}
