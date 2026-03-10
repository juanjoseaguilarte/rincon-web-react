import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__logo-text">El Rincón de Juan</p>
            <p className="footer__tagline">The Wine Bar · La Línea de la Concepción</p>
          </div>

          <nav className="footer__nav">
            <a href="#about">Nosotros</a>
            <a href="#carta">Carta</a>
            <a href="#reservas">Reservas</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/elrincondejuanthewinebar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/ELRINCONDEJUANTHEWINEBAR"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© El Rincón de Juan. Todos los derechos reservados.</p>
          <a href="https://www.elrincondejuan.es/legal/" target="_blank" rel="noopener noreferrer">
            Política de privacidad y Legal
          </a>
        </div>
      </div>
    </footer>
  )
}
