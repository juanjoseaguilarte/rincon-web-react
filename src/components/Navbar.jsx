import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        {/* Language flags + icons left side */}
        <div className="navbar__left">
          <a href="tel:678401253" className="navbar__phone">+34 678 40 12 53</a>
        </div>

        {/* Centered Logo */}
        <a href="#" className="navbar__logo">
          <div className="navbar__logo-text">El Rincón de Juan</div>
          <div className="navbar__logo-sub">The Wine Bar</div>
        </a>

        {/* Right links */}
        <nav className="navbar__links">
          <a href="#carta" className="navbar__link">Cartas</a>
          <a href="#reservas" className="navbar__link navbar__link--highlight">Reserva</a>
          <a href="#contacto" className="navbar__link">Contacto</a>
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
          <a href="#carta" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Cartas</a>
          <a href="#reservas" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Reserva</a>
          <a href="#contacto" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Contacto</a>
        </div>
      )}
    </header>
  )
}
