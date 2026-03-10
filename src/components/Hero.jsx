import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img src="/DSC9413-1.jpg" alt="El Rincón de Juan - Restaurante" className="hero__img" />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <p className="hero__subtitle">Restaurante en La Línea de la Concepción</p>
        <h1 className="hero__title">
          Una vinoteca para<br />comer de lujo
        </h1>
        <p className="hero__desc">
          Un restaurante gourmet de cocina casera con una bodega de lujo.<br />
          En el que calidad y precio maridan de maravilla.<br />
          ¡Ah! También hay Sushi y lo hacemos aquí.
        </p>
        <div className="hero__actions">
          <a href="#carta" className="btn btn-primary">Ver carta</a>
          <a href="#reservas" className="btn btn-outline hero__btn-outline">Reservar mesa</a>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Descubre más</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
