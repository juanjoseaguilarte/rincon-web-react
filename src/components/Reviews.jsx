import './Reviews.css'

const reviews = [
  {
    text: 'El sitio es encantador, la comida exquisita y con una presentación muy buena. El personal es muy agradable y atento. Relación calidad precio inmejorable. Sin duda un rincón para volver.',
    author: 'Susanna Corral',
    stars: 5,
  },
  {
    text: 'Uno de los mejores lugares para comer en La Línea de la Concepción. La mejor calidad – precio y el personal es un encanto. Lo recomiendo mucho, es uno de mis favoritos y siempre que puedo voy. Todo lo que tienen en la carta está muy bueno. No puedes venir a la Línea y no probar El Rincón de Juan.',
    author: 'Marta Barranco Romero',
    stars: 5,
  },
  {
    text: 'Disfrute máximo de vuestro Rincón. Qué agradable sorpresa al descubrir este restaurante en pleno centro, donde íbamos con intención de probar carne madurada, y acabamos pidiendo además gran variedad de platos y tapas.',
    author: 'Unapausaparacomer',
    stars: 5,
  },
  {
    text: '¡Perfecto! Carne espectacular, sushi de 10, comida buenísima y lo mejor su buena relación calidad-precio. En pleno centro, junto a la Plaza de la Iglesia, es un sitio pequeño y acogedor. Empleados muy agradables y profesionales. Para repetir, sin duda.',
    author: 'Paula SJ',
    stars: 5,
  },
  {
    text: 'Excelente servicio para una bodega con buena selección de vinos de calidad. Déjate aconsejar por el personal y disfruta.',
    author: 'Jotaminuscula',
    stars: 5,
  },
]

export default function Reviews() {
  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <div className="reviews__header" data-aos="fade-up" data-aos-duration="700">
          <p className="reviews__label">Lo que dicen de nosotros</p>
          <h2 className="reviews__title">Nuestros clientes</h2>
          <div className="reviews__scores">
            <div className="reviews__score">
              <img src="/reviews-stars.svg" alt="Estrellas" width="100" />
              <span>4.4 en Google</span>
            </div>
            <div className="reviews__score">
              <img src="/reviews-starsverde.svg" alt="Estrellas" width="100" />
              <span>4.2 en TripAdvisor</span>
            </div>
          </div>
        </div>

        <div className="reviews__grid" data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
          {reviews.map((review, i) => (
            <div key={i} className="reviews__card">
              <div className="reviews__stars">
                {'★'.repeat(review.stars)}
              </div>
              <p className="reviews__text">"{review.text}"</p>
              <p className="reviews__author">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
