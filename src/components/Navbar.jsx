import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Cartas', href: '#carta' },
  { label: 'Reserva', href: '#reservas', highlight: true },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-text">El Rincón de Juan</span>
        </a>

        {/* Desktop Links */}
        <nav className="navbar__links">
          <a href="tel:678401253" className="navbar__phone">+34 678 40 12 53</a>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar__link ${link.highlight ? 'navbar__link--highlight' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          <a href="tel:678401253" className="navbar__mobile-link">+34 678 40 12 53</a>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
