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
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="contacto__map">
            <a
              href="https://goo.gl/maps/BRgKun4WBus4WxjYA"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto__map-link"
            >
              <img src="/mapa.png" alt="Mapa - El Rincón de Juan" />
              <div className="contacto__map-overlay">
                <span>Ver en Google Maps →</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
