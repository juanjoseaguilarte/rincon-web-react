import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img src="/DSC9413-1.jpg" alt="El Rincón de Juan - Restaurante" className="hero__img" />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <p className="hero__subtitle">The Wine Bar</p>
        <h1 className="hero__title">
          Una vinoteca para<br />comer de lujo
        </h1>
        <div className="hero__play-wrap">
          <a
            href="https://www.youtube.com/watch?v=OZth9wIndMo"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__play"
          >
            <div className="hero__play-circle">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom sticky nav like original */}
      <div className="hero__bottom-nav">
        <a href="#carta" className="hero__bottom-link">Cartas</a>
        <a href="https://www.elrincondejuan.es/hacer-pedido/" target="_blank" rel="noopener noreferrer" className="hero__bottom-link">Hacer Pedido</a>
        <a href="https://www.elrincondejuan.es/bono-regalo/" target="_blank" rel="noopener noreferrer" className="hero__bottom-link">Regala</a>
        <a href="#reservas" className="hero__bottom-link hero__bottom-link--highlight">Reserva</a>
      </div>
    </section>
  )
}
