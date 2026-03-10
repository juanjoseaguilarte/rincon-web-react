import { Link } from 'react-router-dom'
import './TodasCartas.css'

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

export default function TodasCartas() {
  return (
    <div className="todas-cartas">
      <div className="todas-cartas__header">
        <p className="todas-cartas__label">Lo que cocinamos</p>
        <h1 className="todas-cartas__title">Nuestras Cartas</h1>
      </div>
      <div className="todas-cartas__grid">
        {CARTAS.map(carta => (
          <div key={carta.key} className="carta-tarjeta">
            <div className="carta-tarjeta__img-wrap">
              <img src={carta.img} alt={carta.label} className="carta-tarjeta__img" />
              <div className="carta-tarjeta__overlay" />
            </div>
            <div className="carta-tarjeta__body">
              <h2 className="carta-tarjeta__title">{carta.label}</h2>
              <p className="carta-tarjeta__subtitle">{carta.subtitle}</p>
              <Link to={carta.path} className="carta-tarjeta__btn">Ver carta</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
