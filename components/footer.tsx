import Link from "next/link"
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 bg-card-bg border-t border-card-border py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-text-muted">
        <div>
          <Link href="#" className="text-2xl font-bold text-text-light mb-4 block" prefetch={false}>
            Certainty.
          </Link>
          <p className="text-sm leading-relaxed">
            Your legal and data compliance advisor, ensuring your business stays protected and aligned with regulations.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-light mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#team-section" className="hover:text-purple-accent transition-colors" prefetch={false}>
                Team
              </Link>
            </li>
            <li>
              <Link href="#services-section" className="hover:text-purple-accent transition-colors" prefetch={false}>
                Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-light mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-purple-accent transition-colors" prefetch={false}>
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-purple-accent transition-colors" prefetch={false}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text-light mb-4">Contact Us</h3>
          <div className="flex space-x-4 mb-4">
            <Link href="https://instagram.com" className="text-text-muted hover:text-purple-accent transition-colors" prefetch={false}>
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com" className="text-text-muted hover:text-purple-accent transition-colors" prefetch={false}>
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="mailto:info@certainty.solutions" className="text-text-muted hover:text-purple-accent transition-colors" prefetch={false}>
              <Mail className="w-6 h-6" />
            </Link>
          </div>
          <div className="space-y-2">
            <p className="flex items-center text-sm">
              <MapPin className="w-4 h-4 mr-2" /> Argentina, Buenos Aires
            </p>
            <p className="flex items-center text-sm">
              <MapPin className="w-4 h-4 mr-2" /> Mexico, CDMX
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-text-muted mt-12 pt-8 border-t border-card-border">
        © {new Date().getFullYear()} <span className="text-purple-accent">Certainty.</span> All rights reserved.
      </div>
    </footer>
  )
}
