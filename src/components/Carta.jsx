import { Link } from 'react-router-dom'
import './Carta.css'

const CARTAS = [
  {
    key: 'comida',
    label: 'Carta de Comida',
    subtitle: 'Tapas · Raciones · Burgers · Sushi · Carnes',
    img: '/carta/portada-comida.jpg',
    path: '/cartas/comida',
  },
  {
    key: 'bebidas',
    label: 'Carta de Bebidas',
    subtitle: 'Aguas · Cervezas · Refrescos · Vino',
    img: '/carta/portada-bebidas.jpg',
    path: '/cartas/bebidas',
  },
  {
    key: 'bodega',
    label: 'Bodega de Vinos',
    subtitle: 'Nuestra selección de vinos y cavas',
    img: '/carta/portada-bodega.jpg',
    path: '/cartas/bodega',
  },
]

export default function Carta() {
  return (
    <section className="carta section" id="carta">
      <div className="carta__header">
        <p className="carta__label">Lo que cocinamos</p>
        <h2 className="carta__title">Nuestras Cartas</h2>
        <p className="carta__desc">
          Cocina casera de calidad. Sushi hecho aquí. Carnes maduradas.<br />
          Y una bodega que lo acompaña todo.
        </p>
      </div>

      <div className="carta__grid container">
        {CARTAS.map(carta => (
          <div key={carta.key} className="carta__tarjeta">
            <div className="carta__tarjeta-img-wrap">
              <img src={carta.img} alt={carta.label} className="carta__tarjeta-img" />
              <div className="carta__tarjeta-overlay" />
            </div>
            <div className="carta__tarjeta-body">
              <h3 className="carta__tarjeta-title">{carta.label}</h3>
              <p className="carta__tarjeta-sub">{carta.subtitle}</p>
              <Link to={carta.path} className="carta__tarjeta-btn">Ver carta</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
