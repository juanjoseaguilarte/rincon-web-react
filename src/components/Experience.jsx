import './Experience.css'

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__split">
        {/* Left - El Rincón */}
        <div className="experience__panel experience__panel--dark" data-aos="fade-up" data-aos-duration="700">
          <div className="experience__panel-img">
            <img src="/DSC9948-1.jpg" alt="Experiencia El Rincón" />
          </div>
          <div className="experience__panel-content">
            <p className="experience__label">Nuestras experiencias</p>
            <h2 className="experience__title">EXPERIENCIA EL RINCÓN</h2>
            <p className="experience__desc">
              La perfección y el detalle: este es el Rincón de Juan.
              Disfruta de nuestra cocina gourmet de cocina casera con una bodega de lujo.
            </p>
            <a href="#reservas" className="btn btn-outline experience__btn">Reservar</a>
          </div>
        </div>

        {/* Right - La Línea */}
        <div className="experience__panel experience__panel--light" data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
          <div className="experience__panel-img">
            <img src="/DSC0088-2-1.jpg" alt="Experiencia La Línea" />
          </div>
          <div className="experience__panel-content">
            <p className="experience__label">Nuestra ciudad</p>
            <h2 className="experience__title">EXPERIENCIA LA LÍNEA</h2>
            <p className="experience__desc">
              Queremos invitar a todos los linenses y localidades vecinas a conocer nuestro Rincón.
              Si quieres quedar bien, ven al Rincón de Juan.
            </p>
            <a href="#contacto" className="btn btn-primary experience__btn-primary">Cómo llegar</a>
          </div>
        </div>
      </div>

      {/* Video section */}
      <div className="experience__video">
        <div className="experience__video-bg">
          <img src="/DSC9398-1.jpg" alt="El Rincón de Juan" />
          <div className="experience__video-overlay" />
        </div>
        <div className="experience__video-content container">
          <h2 className="experience__video-title">
            El Rincón de Juan es el único lugar de la zona en el que<br />
            tomarte un Rioja con una ensaladilla rusa
          </h2>
          <a
            href="https://www.youtube.com/watch?v=OZth9wIndMo"
            target="_blank"
            rel="noopener noreferrer"
            className="experience__play"
          >
            <img src="/playcirlce.svg" alt="Reproducir vídeo" width="80" />
            <span>Ver vídeo</span>
          </a>
        </div>
      </div>
    </section>
  )
}
