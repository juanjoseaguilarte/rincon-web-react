import './Reviews.css'

const reviews = [
  {
    text: 'El sitio es encantador, la comida exquisita y con una presentación muy buena. El personal es muy agradable y atento. Relación calidad precio inmejorable. Sin duda un rincón para volver.',
    author: 'Google Reviews',
    stars: 5,
  },
  {
    text: 'Uno de los mejores lugares para comer en La Línea de la Concepción. La mejor calidad – precio y el personal es un encanto. Lo recomiendo mucho, es uno de mis favoritos.',
    author: 'TripAdvisor',
    stars: 5,
  },
  {
    text: '¡Perfecto! Carne espectacular, sushi de 10, comida buenísima y lo mejor su buena relación calidad-precio. En pleno centro, junto a la Plaza de la Iglesia.',
    author: 'Google Reviews',
    stars: 5,
  },
  {
    text: 'Todo lo que tienen en la carta está muy bueno. No puedes venir a la Línea y no probar El Rincón de Juan.',
    author: 'TripAdvisor',
    stars: 5,
  },
]

export default function Reviews() {
  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <div className="reviews__header">
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

        <div className="reviews__grid">
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
