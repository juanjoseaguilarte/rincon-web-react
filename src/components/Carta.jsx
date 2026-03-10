import { useState } from 'react'
import './Carta.css'

const CARTAS = [
  {
    id: 'comida',
    label: 'Comida',
    title: 'Carta de Comida',
    subtitle: 'Tapas · Raciones · Burgers · Sushi · Carnes',
    portada: '/carta/portada-comida.jpg',
    type: 'images',
    images: [
      { src: '/carta/menu-comida-1.jpg', alt: 'Carta de comida - página 1' },
      { src: '/carta/menu-comida-2.jpg', alt: 'Carta de comida - página 2' },
      { src: '/carta/menu-comida-3.jpg', alt: 'Carta de comida - página 3' },
      { src: '/carta/menu-comida-4.jpg', alt: 'Carta de comida - página 4' },
      { src: '/carta/menu-comida-5.jpg', alt: 'Carta de comida - página 5' },
      { src: '/carta/menu-comida-6.jpg', alt: 'Carta de comida - página 6' },
      { src: '/carta/menu-comida-7.jpg', alt: 'Carta de comida - página 7' },
    ],
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    title: 'Carta de Bebidas',
    subtitle: 'Cócteles · Vinos · Cervezas · Refrescos',
    portada: '/carta/portada-bebidas.jpg',
    type: 'images',
    images: [
      { src: '/carta/portada-bebidas.jpg', alt: 'Carta de bebidas' },
    ],
  },
  {
    id: 'bodega',
    label: 'Bodega',
    title: 'Bodega',
    subtitle: 'Nuestra selección de vinos',
    portada: '/carta/portada-bodega.jpg',
    type: 'construccion',
    images: [],
  },
]

export default function Carta() {
  const [activeCarta, setActiveCarta] = useState(null)
  const [lightbox, setLightbox] = useState(null) // { images, index }

  const openCarta = (id) => {
    setActiveCarta(id)
    setTimeout(() => {
      document.getElementById('carta-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const openLightbox = (images, index) => setLightbox({ images, index })
  const closeLightbox = () => setLightbox(null)
  const prevImg = () => setLightbox(lb => ({ ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length }))
  const nextImg = () => setLightbox(lb => ({ ...lb, index: (lb.index + 1) % lb.images.length }))

  const active = CARTAS.find(c => c.id === activeCarta)

  return (
    <section className="carta section" id="carta">
      {/* Section header */}
      <div className="carta__header">
        <p className="carta__label">Lo que cocinamos</p>
        <h2 className="carta__title">Nuestras Cartas</h2>
        <p className="carta__desc">
          Cocina casera de calidad. Sushi hecho aquí. Carnes maduradas.<br />
          Y una bodega que lo acompaña todo.
        </p>
      </div>

      {/* 3 Cover cards — like the original "todas las cartas" */}
      <div className="carta__cards-wrapper">
        <div className="carta__cards container">
          {CARTAS.map(c => (
            <div
              key={c.id}
              className={`carta__card${activeCarta === c.id ? ' carta__card--active' : ''}`}
              style={{ backgroundImage: `url(${c.portada})` }}
            >
              <div className="carta__card-overlay">
                <h3 className="carta__card-title">{c.title.toUpperCase()}</h3>
                <p className="carta__card-sub">{c.subtitle}</p>
                <button
                  className="carta__card-btn"
                  onClick={() => openCarta(activeCarta === c.id ? null : c.id)}
                >
                  {activeCarta === c.id ? 'Cerrar' : 'Ver carta'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      {activeCarta && active && (
        <div className="carta__detail" id="carta-detail">
          {/* Category tabs */}
          <div className="carta__tabs-wrapper">
            <nav className="carta__tabs">
              {CARTAS.map(c => (
                <button
                  key={c.id}
                  className={`carta__tab${activeCarta === c.id ? ' carta__tab--active' : ''}`}
                  onClick={() => openCarta(c.id)}
                >
                  {c.label.toUpperCase()}
                </button>
              ))}
            </nav>
          </div>

          <div className="carta__detail-inner container">
            <h3 className="carta__detail-title">{active.title}</h3>

            {active.type === 'construccion' && (
              <div className="carta__construccion">
                <div className="carta__construccion-img">
                  <img src={active.portada} alt="Bodega" />
                </div>
                <div className="carta__construccion-text">
                  <span className="carta__construccion-icon">🍷</span>
                  <h4>En construcción</h4>
                  <p>Estamos preparando nuestra selección de vinos.<br />Pronto disponible.</p>
                </div>
              </div>
            )}

            {active.type === 'images' && (
              <div className="carta__menu-pages">
                {active.images.map((img, i) => (
                  <div key={i} className="carta__menu-page">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="carta__menu-page-img"
                      onClick={() => openLightbox(active.images, i)}
                    />
                    <button
                      className="carta__zoom-btn"
                      onClick={() => openLightbox(active.images, i)}
                      title="Ver en grande"
                    >
                      🔍 Ver en grande
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="carta__cta">
              <a href="#reservas" className="btn btn-primary">Reserva tu mesa</a>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div className="carta__lightbox" onClick={closeLightbox}>
          <button className="carta__lightbox-close" onClick={closeLightbox}>✕</button>
          <button
            className="carta__lightbox-prev"
            onClick={e => { e.stopPropagation(); prevImg() }}
          >‹</button>
          <div className="carta__lightbox-img-wrap" onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.images[lightbox.index].src}
              alt={lightbox.images[lightbox.index].alt}
              className="carta__lightbox-img"
            />
            <p className="carta__lightbox-counter">
              {lightbox.index + 1} / {lightbox.images.length}
            </p>
          </div>
          <button
            className="carta__lightbox-next"
            onClick={e => { e.stopPropagation(); nextImg() }}
          >›</button>
        </div>
      )}
    </section>
  )
}
