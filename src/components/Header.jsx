import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/events', label: 'Events' },
    { to: '/about', label: 'About' },
    { to: '/faq', label: 'FAQ' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-cream-light/95 backdrop-blur-sm sticky top-0 z-50 border-b border-amber-primary/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-secondary to-amber-primary flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">L</span>
            </div>
            <span className="font-serif text-xl md:text-2xl font-semibold text-charcoal">
              Lumina Match
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-amber-primary ${
                  isActive(link.to) ? 'text-amber-primary' : 'text-charcoal-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/apply"
              className="bg-amber-primary text-white px-6 py-2.5 rounded-lg font-semibold
                       hover:bg-amber-secondary transition-all duration-300 text-sm"
            >
              Start Your Passport
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-charcoal hover:text-amber-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-amber-primary/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium py-2 transition-colors hover:text-amber-primary ${
                    isActive(link.to) ? 'text-amber-primary' : 'text-charcoal-light'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/apply"
                onClick={() => setIsMenuOpen(false)}
                className="bg-amber-primary text-white px-6 py-3 rounded-lg font-semibold
                         hover:bg-amber-secondary transition-all duration-300 text-center mt-2"
              >
                Start Your Passport
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
