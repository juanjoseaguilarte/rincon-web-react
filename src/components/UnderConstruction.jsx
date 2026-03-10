import './UnderConstruction.css'

export default function UnderConstruction({ message = 'Próximamente disponible' }) {
  return (
    <div className="under-construction">
      <div className="under-construction__icon">🚧</div>
      <p className="under-construction__text">{message}</p>
      <p className="under-construction__sub">Estamos trabajando para traerte esta sección pronto</p>
    </div>
  )
}
