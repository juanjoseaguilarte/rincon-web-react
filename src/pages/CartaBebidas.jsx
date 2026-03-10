import { Link } from 'react-router-dom'
import './CartaBebidas.css'

const BEBIDAS = [
  { name: 'Agua Mineral Sostenible - 1 L', precio: '2,5', desc: 'Agua filtrada con ósmosis, sin botellas ni transportes' },
  { name: 'Agua con Gas - 0.5 L', precio: '2,9', desc: '' },
  { name: 'Cerveza de Barril', precio: '', desc: 'Copa · Caña' },
  { name: 'Botellín de Victoria', precio: '2,9', desc: '' },
  { name: 'Cerveza con Limón', precio: '3,5', desc: 'Copa' },
  { name: 'Tinto de Verano', precio: '3,5', desc: '' },
  { name: 'Coca-Cola', precio: '2,5', desc: 'Normal · Zero · Zero Zero' },
  { name: 'Fanta', precio: '2,5', desc: 'Limón · Naranja' },
  { name: 'Casera Blanca', precio: '1,95', desc: 'Maceta' },
  { name: 'Aquarius', precio: '2,5', desc: 'Limón · Naranja' },
  { name: 'Fuze Tea (Antiguo Nestea)', precio: '2,5', desc: 'Limón' },
  { name: 'Sprite', precio: '2,5', desc: '' },
  { name: 'Tónica Royal Bliss', precio: '2,5', desc: '' },
  { name: 'Zumo', precio: '1,8', desc: 'Piña · Melocotón' },
  { name: 'Bebida Energética', precio: '2', desc: '' },
]

export default function CartaBebidas() {
  return (
    <div className="carta-bebidas">
      <div className="carta-bebidas__topbar">
        <Link to="/cartas" className="carta-bebidas__back">← Todas las cartas</Link>
        <h1 className="carta-bebidas__title">Carta de Bebidas</h1>
      </div>

      <div className="carta-bebidas__content">
        <div className="bebidas-lista">
          {BEBIDAS.map((item, i) => (
            <div key={i} className="bebida-card">
              <div className="bebida-card__body">
                <span className="bebida-card__name">{item.name.toUpperCase()}</span>
                {item.desc && <p className="bebida-card__desc">{item.desc}</p>}
              </div>
              <span className="bebida-card__precio">
                {item.precio ? `${item.precio}€` : 'Consultar'}
              </span>
            </div>
          ))}
        </div>
        <p className="bebidas-nota">* Precios expresados en euros. Todos los precios incluyen el IVA.</p>
      </div>
    </div>
  )
}
