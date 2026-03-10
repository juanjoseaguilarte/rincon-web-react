import './About.css'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Text column */}
          <div className="about__text">
            <p className="about__label">Nuestra historia</p>
            <h2 className="about__title">Un matrimonio con<br />gusto por la restauración</h2>
            <div className="about__body">
              <p>
                Qué un día allá por 2003 decidió hacerse cargo de una pequeña cafetería en su pueblo,
                este pueblo, La Línea de la Concepción. Como ocurre siempre en los comienzos,
                empezaron con mucho esfuerzo.
              </p>
              <p>
                Las llamas no pudieron con las ganas, las fuerzas y la ilusión de Juan y Luz Mari,
                que de las cenizas de su negocio vieron la oportunidad de dar el salto que siempre habían querido.
              </p>
              <p>
                Con sus ahorrillos decidieron montar la gran cocina que siempre habían querido: un horno Rational,
                un Josper, tres dispensadores de vino, un interiorismo cuidado…
              </p>
              <p>
                El único lugar de la zona en el que tomarte un Rioja con una ensaladilla rusa.
                <strong> Lo mejor del Recetario Andaluz.</strong>
              </p>
            </div>
            <a href="#carta" className="btn btn-primary">Ver la carta</a>
          </div>

          {/* Image column */}
          <div className="about__images">
            <div className="about__img-main">
              <img src="/DSC9627-1.jpg" alt="El Rincón de Juan - Restaurante" />
            </div>
            <div className="about__img-secondary">
              <img src="/EXPERIENCIA2-1920x1920.png" alt="Experiencia gastronómica" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about__stats">
          <div className="about__stat">
            <span className="about__stat-num">4.4</span>
            <span className="about__stat-label">Google Reviews</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-num">4.5</span>
            <span className="about__stat-label">TripAdvisor</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-num">2003</span>
            <span className="about__stat-label">Año de apertura</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-num">100%</span>
            <span className="about__stat-label">Cocina casera</span>
          </div>
        </div>
      </div>
    </section>
  )
}
