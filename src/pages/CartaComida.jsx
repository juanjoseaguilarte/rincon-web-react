import { useState } from 'react'
import { Link } from 'react-router-dom'
import cartaData from '../data/carta_completa.json'
import './CartaComida.css'

const TABS = ['TAPAS', 'RACIONES', 'MINI BURGERS', 'BURGERS', 'ORIENTALES Y SUSHIS', 'ROLLS', 'CARNES', 'SALSAS EXTRA', 'POSTRES']

function PrecioDisplay({ precio_media, precio_full }) {
  if (precio_media && precio_full) {
    return <span className="plato__precio">◐ {precio_media}€ &nbsp;|&nbsp; ● {precio_full}€</span>
  }
  if (precio_full) {
    return <span className="plato__precio">{precio_full}€</span>
  }
  return <span className="plato__precio plato__precio--consultar">Consultar</span>
}

function PlatoCard({ plato }) {
  const [imgIdx, setImgIdx] = useState(0)
  const imgs = plato.imgs && plato.imgs.length > 0 ? plato.imgs : (plato.img ? [plato.img] : [])

  return (
    <div className={`plato-card ${plato.top ? 'plato-card--top' : ''}`}>
      {imgs.length > 0 && (
        <div className="plato-card__img-wrap">
          <img src={imgs[imgIdx]} alt={plato.name} className="plato-card__img" loading="lazy" />
          {imgs.length > 1 && (
            <div className="plato-card__img-nav">
              <button onClick={() => setImgIdx(i => (i - 1 + imgs.length) % imgs.length)}>‹</button>
              <span>{imgIdx + 1}/{imgs.length}</span>
              <button onClick={() => setImgIdx(i => (i + 1) % imgs.length)}>›</button>
            </div>
          )}
        </div>
      )}
      <div className="plato-card__body">
        <div className="plato-card__header">
          {plato.top && <img src="https://www.elrincondejuan.es/wp-content/uploads/sites/829/2023/09/top.svg" alt="TOP" className="plato-card__top-badge" />}
          <span className="plato-card__name">{plato.name?.toUpperCase()}</span>
        </div>
        {plato.desc && <p className="plato-card__desc">{plato.desc}</p>}
        <div className="plato-card__footer">
          <PrecioDisplay precio_media={plato.precio_media} precio_full={plato.precio_full} />
          {plato.likes > 0 && <span className="plato-card__likes">❤️ {plato.likes}</span>}
        </div>
      </div>
    </div>
  )
}

export default function CartaComida() {
  const [activeTab, setActiveTab] = useState('TAPAS')

  const renderContent = () => {
    const cat = cartaData[activeTab]
    if (!cat) return null
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
