import { Link } from 'react-router-dom'
import { Instagram, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-charcoal text-cream-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-secondary to-amber-primary flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">L</span>
              </div>
              <span className="font-serif text-2xl font-semibold text-cream-light">
                Lumina Match
              </span>
            </Link>
            <p className="text-cream-light/70 max-w-md leading-relaxed">
              A curated dating club for health-minded singles in Bangkok.
              Morning events. Real conversations. People who have their lives together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/#how-it-works" className="text-cream-light/70 hover:text-amber-primary transition-colors">
                How It Works
              </Link>
              <Link to="/events" className="text-cream-light/70 hover:text-amber-primary transition-colors">
                Events
              </Link>
              <Link to="/about" className="text-cream-light/70 hover:text-amber-primary transition-colors">
                About
              </Link>
              <Link to="/faq" className="text-cream-light/70 hover:text-amber-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/luminamatch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream-light/70 hover:text-amber-primary transition-colors"
              >
                <Instagram size={18} />
                <span>@luminamatch</span>
              </a>
              <a
                href="mailto:hello@luminamatch.com"
                className="flex items-center gap-2 text-cream-light/70 hover:text-amber-primary transition-colors"
              >
                <Mail size={18} />
                <span>hello@luminamatch.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream-light/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream-light/50">
            <p>&copy; {new Date().getFullYear()} Lumina Match. All rights reserved.</p>
            <p>Adults only (18+) &middot; Bangkok, Thailand</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
