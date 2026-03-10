import { useState } from 'react'
import cartaData from '../data/carta_data.json'
import UnderConstruction from './UnderConstruction'
import './Carta.css'

const TABS = ['Raciones', 'Burgers', 'Orientales y Sushis', 'Rolls', 'Carnes', 'Postres', 'Baguettes Gourmet']
const CARTA_TYPES = ['comida', 'bebidas', 'bodega']

const CARTA_INFO = {
  comida: {
    label: 'Carta de Comida',
    icon: '🍽️',
    subtitle: 'Tapas · Raciones · Burgers · Sushi · Carnes',
  },
  bebidas: {
    label: 'Carta de Bebidas',
    icon: '🥂',
    subtitle: 'Cócteles · Vinos · Cervezas · Refrescos',
  },
  bodega: {
    label: 'Bodega',
    icon: '🍷',
    subtitle: 'Nuestra selección de vinos',
  },
}

export default function Carta() {
  const [activeCarta, setActiveCarta] = useState(null)
  const [activeTab, setActiveTab] = useState('Raciones')

  const platos = cartaData[activeTab] || []

  const handleCartaClick = (type) => {
    if (activeCarta === type) {
      setActiveCarta(null)
    } else {
      setActiveCarta(type)
      setTimeout(() => {
        document.getElementById('carta-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }

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

      {/* 3 selector cards */}
      <div className="carta__selector container">
        {CARTA_TYPES.map(type => {
          const info = CARTA_INFO[type]
          return (
            <div
              key={type}
              className={`carta__selector-card${activeCarta === type ? ' carta__selector-card--active' : ''}`}
              onClick={() => handleCartaClick(type)}
            >
              <span className="carta__selector-icon">{info.icon}</span>
              <h3 className="carta__selector-title">{info.label}</h3>
              <p className="carta__selector-sub">{info.subtitle}</p>
              <span className="carta__selector-btn">
                {activeCarta === type ? 'Cerrar' : 'Ver carta'}
              </span>
            </div>
          )
        })}
      </div>

      {/* Detail panel */}
      {activeCarta && (
        <div className="carta__detail" id="carta-detail">
          {activeCarta === 'bebidas' && (
            <div className="carta__bebidas container">
              <span className="carta__bebidas-icon">🥂</span>
              <h3>Carta de Bebidas</h3>
              <p>Consulta nuestra carta de bebidas directamente en el local.<br />
              Te sorprenderemos con nuestra selección de cócteles, vinos y cervezas artesanas.</p>
            </div>
          )}

          {activeCarta === 'bodega' && (
            <div className="container">
              <UnderConstruction />
            </div>
          )}

          {activeCarta === 'comida' && (
            <div className="carta__comida">
              {/* Category tabs */}
              <div className="carta__tabs-wrapper">
                <nav className="carta__tabs">
                  {TABS.map(tab => (
                    <button
                      key={tab}
                      className={`carta__tab${activeTab === tab ? ' carta__tab--active' : ''}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Grid de platos */}
              <div className="carta__platos container">
                {platos.map((plato, i) => (
                  <div key={i} className="carta__plato-card">
                    {plato.featured && (
                      <span className="carta__plato-badge">⭐ Destacado</span>
                    )}
                    <div className="carta__plato-img-wrap">
                      <img
                        src={plato.img}
                        alt={plato.name}
                        className="carta__plato-img"
                        loading="lazy"
                        onError={e => { e.target.style.opacity = '0.3' }}
                      />
                    </div>
                    <div className="carta__plato-body">
                      <h4 className="carta__plato-name">{plato.name}</h4>
                      {plato.desc && (
                        <p className="carta__plato-desc">{plato.desc}</p>
                      )}
                      <span className="carta__plato-price">Consultar</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="carta__cta container">
                <a href="#reservas" className="btn btn-primary">Reserva tu mesa</a>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
