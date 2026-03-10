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
            href="https://www.youtube.com/watch?v=1xYkwNqngpU"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__play"
          >
            {/* Circular text around button */}
            <svg className="hero__play-ring" viewBox="0 0 120 120" width="120" height="120">
              <defs>
                <path id="circleText" d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" />
              </defs>
              <text className="hero__play-ring-text" fill="rgba(255,255,255,0.75)" fontSize="9" letterSpacing="3.2">
                <textPath href="#circleText">EL RINCÓN DE JUAN • THE WINE BAR •</textPath>
              </text>
            </svg>
            <div className="hero__play-inner">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom nav with ratings */}
      <div className="hero__bottom-bar">
        <div className="hero__bottom-ratings">
          <a
            href="https://goo.gl/maps/BRgKun4WBus4WxjYA"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__rating"
          >
            {/* Google icon */}
            <svg className="hero__rating-icon" width="22" height="22" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12.281h11.328c0.109 0.609 0.187 1.203 0.187 2 0 6.844-4.594 11.719-11.516 11.719-6.641 0-12-5.359-12-12s5.359-12 12-12c3.234 0 5.953 1.188 8.047 3.141l-3.266 3.141c-0.891-0.859-2.453-1.859-4.781-1.859-4.094 0-7.438 3.391-7.438 7.578s3.344 7.578 7.438 7.578c4.75 0 6.531-3.406 6.813-5.172h-6.813v-4.125z" fill="currentColor"/>
            </svg>
            <span className="hero__rating-stars">★★★★</span>
            <span className="hero__rating-score">4.4<span className="hero__rating-max">/5</span></span>
            <span className="hero__rating-label">Google</span>
          </a>
          <div className="hero__rating-divider" />
          <a
            href="https://www.tripadvisor.es/Restaurant_Review-g660738-d2199949-Reviews-El_Rincon_de_Juan_The_Wine_Bar-La_Linea_de_la_Concepcion_Province_of_Cadiz_Andalu.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__rating"
          >
            {/* TripAdvisor owl-eye icon */}
            <svg className="hero__rating-icon" width="22" height="22" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.172 15.578c0 0.812-0.656 1.469-1.453 1.469-0.812 0-1.469-0.656-1.469-1.469 0-0.797 0.656-1.453 1.469-1.453 0.797 0 1.453 0.656 1.453 1.453zM28.203 15.563c0 0.812-0.656 1.469-1.469 1.469s-1.469-0.656-1.469-1.469 0.656-1.453 1.469-1.453 1.469 0.641 1.469 1.453zM11.953 15.578c0-1.656-1.359-3.016-3.016-3.016-1.672 0-3.016 1.359-3.016 3.016 0 1.672 1.344 3.016 3.016 3.016 1.656 0 3.016-1.344 3.016-3.016zM29.969 15.563c0-1.656-1.344-3.016-3.016-3.016-1.656 0-3.016 1.359-3.016 3.016 0 1.672 1.359 3.016 3.016 3.016 1.672 0 3.016-1.344 3.016-3.016zM13.281 15.578c0 2.406-1.937 4.359-4.344 4.359s-4.359-1.953-4.359-4.359c0-2.391 1.953-4.344 4.359-4.344s4.344 1.953 4.344 4.344zM31.313 15.563c0 2.406-1.953 4.344-4.359 4.344-2.391 0-4.344-1.937-4.344-4.344s1.953-4.344 4.344-4.344c2.406 0 4.359 1.937 4.359 4.344zM16.25 15.609c0-3.984-3.234-7.219-7.219-7.219-3.969 0-7.203 3.234-7.203 7.219s3.234 7.219 7.203 7.219c3.984 0 7.219-3.234 7.219-7.219zM26.688 6.656c-2.578-1.125-5.484-1.734-8.687-1.734s-6.391 0.609-8.953 1.719c4.953 0.016 8.953 4.016 8.953 8.969 0-4.859 3.859-8.813 8.687-8.953zM34.172 15.609c0-3.984-3.219-7.219-7.203-7.219s-7.219 3.234-7.219 7.219 3.234 7.219 7.219 7.219 7.203-3.234 7.203-7.219z" fill="currentColor"/>
            </svg>
            <span className="hero__rating-stars">★★★★</span>
            <span className="hero__rating-score">4.5<span className="hero__rating-max">/5</span></span>
            <span className="hero__rating-label">TripAdvisor</span>
          </a>
        </div>
        <div className="hero__bottom-nav">
          <a href="#carta" className="hero__bottom-link">Cartas</a>
          <a href="https://www.elrincondejuan.es/hacer-pedido/" target="_blank" rel="noopener noreferrer" className="hero__bottom-link">Hacer Pedido</a>
          <a href="https://www.elrincondejuan.es/bono-regalo/" target="_blank" rel="noopener noreferrer" className="hero__bottom-link">Regala</a>
          <a href="#reservas" className="hero__bottom-link hero__bottom-link--highlight">Reserva</a>
        </div>
      </div>
    </section>
  )
}
