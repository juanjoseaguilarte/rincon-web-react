import './Contacto.css'

export default function Contacto() {
  return (
    <section className="contacto section" id="contacto">
      <div className="container">
        <div className="contacto__grid">
          {/* Info */}
          <div className="contacto__info">
            <p className="contacto__label">Encuéntranos</p>
            <h2 className="contacto__title">Cómo llegar</h2>

            <div className="contacto__details">
              <div className="contacto__detail">
                <h4>Dirección</h4>
                <p>
                  <a
                    href="https://goo.gl/maps/BRgKun4WBus4WxjYA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    C. Méndez Núñez, 3, 11300<br />
                    La Línea de la Concepción, Cádiz
                  </a>
                </p>
              </div>

              <div className="contacto__detail">
                <h4>Teléfono</h4>
                <p><a href="tel:678401253">+34 678 40 12 53</a></p>
              </div>

              <div className="contacto__detail">
                <h4>Horario</h4>
                <p>
                  <a
                    href="https://www.google.com/search?q=horario+El+Rinc%C3%B3n+De+Juan+THE+WINE+BAR+la+linea+de+la+concepcion"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver horario actualizado →
                  </a>
                </p>
              </div>

              <div className="contacto__detail">
                <h4>Redes sociales</h4>
                <div className="contacto__socials">
                  <a
                    href="https://www.instagram.com/elrincondejuanthewinebar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacto__social"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/ELRINCONDEJUANTHEWINEBAR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacto__social"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.tripadvisor.es/Restaurant_Review-g660738-d2199949-Reviews-El_Rincon_de_Juan_The_Wine_Bar-La_Linea_de_la_Concepcion_Province_of_Cadiz_Andalu.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacto__social"
                  >
                    TripAdvisor
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="contacto__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.6!2d-5.3477!3d36.1669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0cbd9e0b5c0001%3A0xb780e7d4bf914898!2sEl%20Rinc%C3%B3n%20de%20Juan%20-%20The%20Wine%20Bar!5e0!3m2!1ses!2ses!4v1690058956422!5m2!1ses!2ses"
              className="contacto__map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="El Rincón de Juan - Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
