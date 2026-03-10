import { useState } from 'react'
import { Link } from 'react-router-dom'
import cartaData from '../data/carta_completa.json'
import './CartaComida.css'

const TABS = ['TAPAS', 'RACIONES', 'MINI BURGERS', 'BURGERS', 'ORIENTALES Y SUSHIS', 'ROLLS', 'CARNES', 'SALSAS EXTRA', 'POSTRES']

function PrecioDisplay({ precio_media, precio_full }) {
  if (precio_media && precio_full) {
    return <span className="plato__precio">◐ {precio_media}€ | ● {precio_full}€</span>
  }
  if (precio_full) {
    return <span className="plato__precio">● {precio_full}€</span>
  }
  return <span className="plato__precio plato__precio--consultar">Consultar</span>
}

function TapasGaleria({ imgs }) {
  const [current, setCurrent] = useState(0)
  return (
    <div className="tapas-galeria">
      <div className="tapas-galeria__main">
        <button className="tapas-galeria__arrow tapas-galeria__arrow--left" onClick={() => setCurrent(i => (i - 1 + imgs.length) % imgs.length)}>‹</button>
        <img src={imgs[current]} alt={`Tapas página ${current + 1}`} className="tapas-galeria__img" />
        <button className="tapas-galeria__arrow tapas-galeria__arrow--right" onClick={() => setCurrent(i => (i + 1) % imgs.length)}>›</button>
      </div>
      <div className="tapas-galeria__thumbs">
        {imgs.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Página ${i + 1}`}
            className={`tapas-galeria__thumb ${i === current ? 'tapas-galeria__thumb--active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
      <p className="tapas-galeria__counter">{current + 1} / {imgs.length}</p>
    </div>
  )
}

function PlatoCard({ plato }) {
  return (
    <div className={`plato-card ${plato.top ? 'plato-card--top' : ''}`}>
      <div className="plato-card__body">
        <div className="plato-card__header">
          <span className="plato-card__name">{plato.name?.toUpperCase()}</span>
          {plato.top && <span className="plato-card__badge">TOP</span>}
        </div>
        {plato.desc && <p className="plato-card__desc">{plato.desc}</p>}
        <div className="plato-card__footer">
          <PrecioDisplay precio_media={plato.precio_media} precio_full={plato.precio_full} />
          {plato.likes > 0 && <span className="plato-card__likes">❤️ {plato.likes}</span>}
        </div>
      </div>
      {plato.img && <img src={plato.img} alt={plato.name} className="plato-card__img" />}
    </div>
  )
}

export default function CartaComida() {
  const [activeTab, setActiveTab] = useState('TAPAS')

  const renderContent = () => {
    const cat = cartaData[activeTab]
    if (!cat) return null

    if (activeTab === 'TAPAS') {
      return <TapasGaleria imgs={cat.imgs} />
    }

    const items = cat.items || []
    return (
      <div className="platos-lista">
        {items.map((plato, i) => (
          <PlatoCard key={i} plato={plato} />
        ))}
      </div>
    )
  }

  return (
    <div className="carta-comida">
      <div className="carta-comida__topbar">
        <Link to="/cartas" className="carta-comida__back">← Todas las cartas</Link>
        <h1 className="carta-comida__title">Carta de Comida</h1>
      </div>

      <div className="carta-comida__tabs-wrap">
        <div className="carta-comida__tabs">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`carta-comida__tab ${activeTab === tab ? 'carta-comida__tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="carta-comida__content">
        {renderContent()}
      </div>
    </div>
  )
}
