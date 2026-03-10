import { useState } from 'react'
import './Carta.css'

const menuCategories = [
  {
    id: 'tapas',
    label: 'Tapas',
    headerImg: 'https://www.elrincondejuan.es/wp-content/uploads/sites/829/2026/01/1.jpg',
    items: [
      { name: 'Plato De Lentejas Thai', desc: 'Lentejas suaves cocinadas en leche de coco con especias y churrasco de pollo. Coronadas con cilantro fresco.', price: '6,50€' },
      { name: 'Rock Roll Ibérico', desc: 'Rollito de morcilla con cebolla caramelizada y queso crema, crujiente por fuera, suave por dentro.', price: '4,00€' },
      { name: 'Albóndigas De Solomillo De Vaca', desc: 'Albóndigas de solomillo de vaca en salsa cremosa de pimienta verde o al roquefort o en tomate.', price: '4,50€' },
      { name: 'Pincho De Kefta', desc: 'Pincho de carne especiada al estilo árabe, jugoso, aromático y servido con salsa africana.', price: '3,95€' },
      { name: 'Mini Kebab De Solomillo De Vaca', desc: 'De solomillo de vaca, aliñado con especias y salsa de yogur.', price: '4,20€' },
      { name: 'Albóndigas De Atún Rojo JC Mackintosh', desc: 'Albóndigas intensas de atún rojo JC Mackintosh con salsa de tomate casera. Sabor potente, marino y auténtico.', price: '5,50€' },
    ]
  },
  {
    id: 'raciones',
    label: 'Raciones',
    headerImg: 'https://www.elrincondejuan.es/wp-content/uploads/sites/829/2026/01/2.jpg',
    items: [
      { name: 'Plato De Jamón De Bellota Y Queso Viejo Curado', desc: 'Selección de jamón ibérico de bellota maridado con queso curado.', price: 'Consultar' },
      { name: 'Paté De Perdiz Con Tostitas', desc: 'Elaboración artesanal de paté de perdiz servido con tostitas crujientes.', price: 'Consultar' },
      { name: 'Gambones A La Plancha', desc: 'Gambones frescos a la plancha con aceite de ajo y perejil.', price: 'Consultar' },
      { name: 'Pimientos De Padrón', desc: 'Pimientos de padrón fritos en aceite de oliva virgen extra con sal Maldon.', price: 'Consultar' },
      { name: 'Ensalada Tomate, Aguacate Y Cebolla', desc: 'Ensalada fresca de temporada con tomate, aguacate maduro y cebolla roja.', price: 'Consultar' },
      { name: 'Calamar A La Plancha', desc: 'Calamar fresco a la plancha con un toque de limón y alioli.', price: 'Consultar' },
    ]
  },
  {
    id: 'mini-burgers',
    label: 'Mini Burgers',
    headerImg: 'https://www.elrincondejuan.es/wp-content/uploads/sites/829/2025/11/3.jpg',
    items: [
      { name: '4 Mini Hamburguesas', desc: 'Cuatro minihamburguesas de carne madurada con queso, cebolla caramelizada y salsa especial de la casa.', price: 'Consultar' },
      { name: 'Mini Burger De Pollo', desc: 'Minihamburguesa de pollo crujiente con lechuga, tomate y salsa aioli de albahaca.', price: 'Consultar' },
      { name: 'Mini Burger Vegana', desc: 'Minihamburguesa vegana con hamburguesa de legumbres, aguacate y rúcula.', price: 'Consultar' },
    ]
  },
  {
    id: 'burgers',
    label: 'Burgers',
    headerImg: 'https://www.elrincondejuan.es/wp-content/uploads/sites/829/2025/11/4.jpg',
    items: [
      { name: 'Burger De Solomillo De Vaca', desc: 'Hamburguesa de solomillo de vaca madurado, queso curado, cebolla caramelizada y nuestra salsa secreta.', price: 'Consultar' },
      { name: 'Burger Prémium Ibérica', desc: 'Hamburguesa con carne ibérica, jamón de bellota, queso manchego y rúcula.', price: 'Consultar' },
      { name: 'Burger Del Mar', desc: 'Hamburguesa de atún rojo con aguacate, kimchi y mayonesa de soja.', price: 'Consultar' },
    ]
  },
  {
    id: 'orientales-sushis',
    label: 'Orientales & Sushis',
    headerImg: 'https://www.elrincondejuan.es/wp-content/uploads/sites/829/2025/11/5.jpg',
    items: [
      { name: 'Tartar De Atún Rojo', desc: 'Tartar de atún rojo JC Mackintosh con aguacate, soja y aceite de sésamo. Servido con tostadas.', price: 'Consultar' },
      { name: 'UMAI Maki', desc: 'Maki roll de elaboración propia con ingredientes seleccionados del mar y la tierra.', price: 'Consultar' },
      { name: 'Salmón Tartar', desc: 'Tartar de salmón noruego con pepino, eneldo y salsa de mostaza suave.', price: 'Consultar' },
      { name: 'Niguiri De Atún', desc: 'Niguiri de arroz de sushi con lámina de atún rojo fresco marinado.', price: 'Consultar' },
    ]
  },
  {
    id: 'rolls',
    label: 'Rolls',
    headerImg: 'https://www.elrincondejuan.es/wp-content/uploads/sites/829/2026/01/4-1117x2000.jpg',
    items: [
      { name: 'Roll Especial Juan', desc: 'Roll de la casa con langostino tempura, queso crema, aguacate y salsa ponzu.', price: 'Consultar' },
      { name: 'Roll Picante De Atún', desc: 'Roll de atún rojo con chile, sriracha y cebollino. Nivel de picante a elegir.', price: 'Consultar' },
      { name: 'Roll Vegetal', desc: 'Roll de pepino, aguacate, zanahoria y queso crema. Opción sin gluten disponible.', price: 'Consultar' },
    ]
  },
  {
    id: 'carnes',
    label: 'Carnes',
    headerImg: 'https://www.elrincondejuan.es/wp-content/uploads/sites/829/2026/01/5-924x2000.jpg',
    items: [
      { name: 'Secreto Ibérico A La Parrilla', desc: 'Secreto ibérico a la brasa con patatas al horno y pimientos asados de la temporada.', price: 'Consultar' },
      { name: 'Churrasco De Pollo A La Parrilla', desc: 'Churrasco de pollo asado lentamente sobre las brasas. Tierno, jugoso y con sabor a leña.', price: 'Consultar' },
      { name: 'Entrecot Madurado 300g', desc: 'Entrecot de vaca madurado 300g a la parrilla con sal Maldon y aceite de oliva virgen.', price: 'Consultar' },
      { name: 'Chuletón Madurado +75 Días Aprox. 1,1kg', desc: 'Chuletón de vaca rubia gallega madurado más de 75 días. El rey de nuestra parrilla.', price: 'Consultar' },
      { name: 'Pata Al Horno De Cerdo A Baja Temperatura', desc: 'Pata de cerdo cocinada durante horas a baja temperatura. Textura melosa y sabor intenso.', price: 'Consultar' },
      { name: 'Lomo Bajo Madurado A La Parrilla', desc: 'Lomo bajo de vaca madurado a la parrilla. Según maduración y raza, precio a consultar.', price: 'Consultar' },
    ]
  },
  {
    id: 'postres',
    label: 'Postres',
    headerImg: 'https://www.elrincondejuan.es/wp-content/uploads/sites/829/2023/08/DSC0329-1.jpg',
    items: [
      { name: 'Tarta De Queso Al Horno', desc: 'Tarta de queso cremosa al estilo San Sebastián, horneada cada día en nuestra cocina.', price: 'Consultar' },
      { name: 'Coulant De Chocolate', desc: 'Coulant de chocolate negro con corazón líquido, servido con helado de vainilla.', price: 'Consultar' },
      { name: 'Helados Artesanales', desc: 'Selección de helados artesanales de temporada. Pregunta por sabores disponibles.', price: 'Consultar' },
    ]
  },
]

export default function Carta() {
  const [activeTab, setActiveTab] = useState('tapas')

  const active = menuCategories.find(c => c.id === activeTab)

  return (
    <section className="carta section" id="carta">
      {/* Section header */}
      <div className="carta__header">
        <p className="carta__label">Lo que cocinamos</p>
        <h2 className="carta__title">Nuestra Carta</h2>
        <p className="carta__desc">
          Cocina casera andaluza de calidad. Sushi hecho aquí. Carnes maduradas.<br />
          Y una bodega que lo acompaña todo.
        </p>
      </div>

      {/* Tab navigation */}
      <div className="carta__tabs-wrapper">
        <nav className="carta__tabs">
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              className={`carta__tab${activeTab === cat.id ? ' carta__tab--active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Active category content */}
      {active && (
        <div className="carta__content" key={active.id}>
          {/* Cover image */}
          <div className="carta__cover">
            <img src={active.headerImg} alt={active.label} className="carta__cover-img" />
            <div className="carta__cover-overlay">
              <h3 className="carta__cover-title">{active.label}</h3>
            </div>
          </div>

          {/* Items grid */}
          <div className="container">
            <ul className="carta__items-grid">
              {active.items.map((item, i) => (
                <li key={i} className="carta__item-card">
                  <div className="carta__item-card-body">
                    <h4 className="carta__item-name">{item.name}</h4>
                    <p className="carta__item-desc">{item.desc}</p>
                  </div>
                  <div className="carta__item-card-footer">
                    <span className="carta__item-price">{item.price}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="carta__note">
              <p>Precios expresados en euros. Todos los precios incluyen el IVA. · Servicio comensal: 1,95€</p>
            </div>

            <div className="carta__cta">
              <a href="#reservas" className="btn btn-primary">Reserva tu mesa</a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
