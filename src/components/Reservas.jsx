import './Reservas.css'

export default function Reservas() {
  return (
    <section className="reservas section" id="reservas">
      <div className="container">
        <div className="reservas__grid">
          {/* Info */}
          <div className="reservas__info">
            <p className="reservas__label">Reserva tu mesa</p>
            <h2 className="reservas__title">Ven a nuestro<br />Rincón</h2>
            <p className="reservas__desc">
              Disfruta de un menú hecho para ti para un momento especial en nuestra casa.
              Reserva tu mesa o llámanos directamente.
            </p>

            <div className="reservas__details">
              <div className="reservas__detail">
                <span className="reservas__detail-icon">📍</span>
                <div>
                  <strong>Dirección</strong>
                  <p>C. Méndez Núñez, 3, 11300<br />La Línea de la Concepción, Cádiz</p>
                </div>
              </div>
              <div className="reservas__detail">
                <span className="reservas__detail-icon">📞</span>
                <div>
                  <strong>Teléfono</strong>
                  <p><a href="tel:678401253">+34 678 40 12 53</a></p>
                </div>
              </div>
              <div className="reservas__detail">
                <span className="reservas__detail-icon">⚠️</span>
                <div>
                  <p className="reservas__terraza-note">
                    Al reservar en nuestra terraza, no te aseguramos que en caso de mal tiempo
                    te podamos reubicar en el interior.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking widget */}
          <div className="reservas__form-wrapper">
            <h3 className="reservas__form-title">Reservar mesa</h3>
            <iframe
              src="https://reservation.carbonaraapp.com/Espana/LA-LINEA-DE-LA-CONCEPCION/El-Rincon-De-Juan-The-Wine-Bar/"
              title="Reservar mesa - El Rincón de Juan"
              className="reservas__iframe"
              frameBorder="0"
              scrolling="yes"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
