import './Carta.css'
import UnderConstruction from './UnderConstruction'

const cartaSections = [
  {
    category: 'Entrantes',
    items: [
      { name: 'Plato de Jamón de Bellota y Queso Viejo Curado', price: 'Consultar' },
      { name: 'Paté de Perdíz con tostitas', price: 'Consultar' },
      { name: 'Gambones a la Plancha', price: 'Consultar' },
      { name: 'Pimientos de Padrón', price: 'Consultar' },
      { name: 'Ensalada Tomate, Aguacate y Cebolla', price: 'Consultar' },
    ]
  },
  {
    category: 'Nuestro Sushi',
    items: [
      { name: 'Tartar de Atún Rojo', price: 'Consultar' },
      { name: 'UMAI Maki', price: 'Consultar' },
      { name: '4 Mini Hamburguesas', price: 'Consultar' },
    ]
  },
  {
    category: 'Carnes a la Parrilla',
    items: [
      { name: 'Secreto Ibérico a la Parrilla', price: 'Consultar' },
      { name: 'Churrasco de Pollo a la Parrilla', price: 'Consultar' },
      { name: 'Entrecot Madurado 300g a la Parrilla', price: 'Consultar' },
      { name: 'Chuletón Madurado +75 días aprox. 1,1 kg', price: 'Consultar' },
      { name: 'Pata al Horno de Cerdo a Baja Temperatura', price: 'Consultar' },
    ]
  },
  {
    category: 'Del Mar',
    items: [
      { name: 'Calamar a la Plancha', price: 'Consultar' },
      { name: '4 Carabineros a la Plancha', price: 'Consultar' },
    ]
  },
]

export default function Carta() {
  return (
    <section className="carta section" id="carta">
      <div className="container">
        <div className="carta__header">
          <p className="carta__label">Lo que cocinamos</p>
          <h2 className="carta__title">Nuestra Carta</h2>
          <p className="carta__desc">
            Cocina casera andaluza de calidad. Sushi hecho aquí. Carnes maduradas.<br />
            Y una bodega que lo acompaña todo.
          </p>
        </div>

        <div className="carta__grid">
          {cartaSections.map((section) => (
            <div key={section.category} className="carta__section">
              <h3 className="carta__section-title">{section.category}</h3>
              <ul className="carta__items">
                {section.items.map((item) => (
                  <li key={item.name} className="carta__item">
                    <span className="carta__item-name">{item.name}</span>
                    <span className="carta__item-dots" />
                    <span className="carta__item-price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Vinos - Under Construction */}
        <div className="carta__under">
          <h3 className="carta__under-title">Nuestra Vinoteca</h3>
          <UnderConstruction message="El carrusel de vinos estará disponible próximamente" />
        </div>

        <div className="carta__cta">
          <a href="#reservas" className="btn btn-primary">Reserva tu mesa</a>
        </div>
      </div>
    </section>
  )
}
