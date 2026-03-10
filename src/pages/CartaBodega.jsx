import { Link } from 'react-router-dom'
import './CartaBodega.css'

export default function CartaBodega() {
  return (
    <div className="carta-bodega">
      <div className="carta-bodega__topbar">
        <Link to="/cartas" className="carta-bodega__back">← Todas las cartas</Link>
        <h1 className="carta-bodega__title">Bodega de Vinos</h1>
      </div>
      <div className="carta-bodega__iframe-wrap">
        <iframe
          src="https://bodega-select-v2.vercel.app/f540e15d-812d-4644-8aa7-45c67d3134df"
          title="Bodega de Vinos"
          width="100%"
          height="900px"
          style={{ border: 'none', display: 'block' }}
          allow="fullscreen"
        />
      </div>
    </div>
  )
}
