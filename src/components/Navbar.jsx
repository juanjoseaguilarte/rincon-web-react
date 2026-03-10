import { useState, useEffect } from 'react'
import './Navbar.css'

const LANGUAGES = [
  { code: 'es', label: 'ES', flag: '🇪🇸', href: 'https://www.elrincondejuan.es/' },
  { code: 'en', label: 'EN', flag: '🇬🇧', href: 'https://www.elrincondejuan.es/en/' },
  { code: 'fr', label: 'FR', flag: '🇫🇷', href: '#' },
  { code: 'de', label: 'DE', flag: '🇩🇪', href: '#' },
  { code: 'ru', label: 'RU', flag: '🇷🇺', href: '#' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLang, setActiveLang] = useState('es')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        {/* Language flags - left side */}
        <div className="navbar__left">
          <div className="navbar__langs">
            {LANGUAGES.map(lang => (
              <a
                key={lang.code}
                href={lang.href}
                className={`navbar__lang ${activeLang === lang.code ? 'navbar__lang--active' : ''}`}
                onClick={(e) => { if (lang.href === '#') e.preventDefault(); setActiveLang(lang.code) }}
                title={lang.label}
              >
                <span className="navbar__lang-flag">{lang.flag}</span>
                <span className="navbar__lang-code">{lang.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Centered Logo */}
        <a href="#" className="navbar__logo">
          <div className="navbar__logo-text">El Rincón de Juan</div>
          <div className="navbar__logo-sub">The Wine Bar</div>
        </a>

        {/* Right links */}
        <nav className="navbar__links">
          <a href="tel:678401253" className="navbar__phone">+34 678 40 12 53</a>
          <a href="#carta" className="navbar__link">Cartas</a>
          <a href="https://www.elrincondejuan.es/hacer-pedido/" target="_blank" rel="noopener noreferrer" className="navbar__link">Hacer pedido</a>
          <a href="https://www.elrincondejuan.es/regala/" target="_blank" rel="noopener noreferrer" className="navbar__link">Regala</a>
          <a href="#reservas" className="navbar__link navbar__link--highlight">Reserva</a>
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
          <div className="navbar__mobile-langs">
            {LANGUAGES.map(lang => (
              <a key={lang.code} href={lang.href} className="navbar__mobile-lang"
                onClick={() => { setActiveLang(lang.code); setMenuOpen(false) }}>
                {lang.flag} {lang.label}
              </a>
            ))}
          </div>
          <a href="tel:678401253" className="navbar__mobile-link">+34 678 40 12 53</a>
          <a href="#carta" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Cartas</a>
          <a href="https://www.elrincondejuan.es/hacer-pedido/" target="_blank" rel="noopener noreferrer" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Hacer pedido</a>
          <a href="https://www.elrincondejuan.es/regala/" target="_blank" rel="noopener noreferrer" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Regala</a>
          <a href="#reservas" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Reserva</a>
          <a href="#contacto" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>Contacto</a>
        </div>
      )}
    </header>
  )
}
