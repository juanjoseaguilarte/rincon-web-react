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
            <a href="https://www.elrincondejuan.es/eventos/" target="_blank" rel="noopener noreferrer">Eventos</a>
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
            <a
              href="https://www.tripadvisor.es/Restaurant_Review-g660738-d2199949-Reviews-El_Rincon_de_Juan_The_Wine_Bar-La_Linea_de_la_Concepcion_Province_of_Cadiz_Andalu.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripAdvisor
            </a>
            <a
              href="https://g.page/r/CZhIkb_U54C3EBM/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              Valora tu experiencia
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© El Rincón de Juan. Todos los derechos reservados. | Diseño: <a href="https://www.agenciagastro.com/" target="_blank" rel="noopener noreferrer">Agencia Gastro</a>. Powered by <a href="https://www.pomatio.com/" target="_blank" rel="noopener noreferrer">Pomatio</a>.</p>
          <a href="https://www.elrincondejuan.es/legal/" target="_blank" rel="noopener noreferrer">
            Cookies, Condiciones generales, Política de privacidad y Legal
          </a>
        </div>
      </div>
    </footer>
  )
}
