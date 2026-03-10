import { createContext, useContext, useState, useEffect } from 'react'

const defaultData = {
  ratings: { google: 4.4, googleCount: 850, tripadvisor: 4.5, tripadvisorCount: 320 },
  categories: [
    { id: 1, name: 'TAPAS', visible: true, order: 0 },
    { id: 2, name: 'RACIONES', visible: true, order: 1 },
    { id: 3, name: 'MINI BURGERS', visible: true, order: 2 },
    { id: 4, name: 'BURGERS', visible: true, order: 3 },
    { id: 5, name: 'ORIENTALES & SUSHIS', visible: true, order: 4 },
    { id: 6, name: 'ROLLS', visible: true, order: 5 },
    { id: 7, name: 'CARNES', visible: true, order: 6 },
    { id: 8, name: 'POSTRES', visible: true, order: 7 },
  ],
  dishes: [
    { id: 1, categoryId: 1, name: 'Jamón de Bellota', desc: 'Jamón ibérico de bellota cortado a mano', price: 'Consultar', visible: true, featured: false, badge: '', likes: 5, order: 0 },
    { id: 2, categoryId: 1, name: 'Pimientos de Padrón', desc: '', price: 'Consultar', visible: true, featured: false, badge: '', likes: 3, order: 1 },
    { id: 3, categoryId: 1, name: 'Gambones a la Plancha', desc: '', price: 'Consultar', visible: true, featured: true, badge: '⭐ Destacado', likes: 8, order: 2 },
    { id: 4, categoryId: 7, name: 'Entrecot Madurado 300g', desc: 'Madurado más de 30 días', price: 'Consultar', visible: true, featured: true, badge: '🥩 Chef recomienda', likes: 12, order: 0 },
    { id: 5, categoryId: 7, name: 'Chuletón Madurado +75 días', desc: 'Aprox. 1,1 kg', price: 'Consultar', visible: true, featured: false, badge: '', likes: 15, order: 1 },
    { id: 6, categoryId: 7, name: 'Secreto Ibérico a la Parrilla', desc: '', price: 'Consultar', visible: true, featured: false, badge: '🔥 Nuevo', likes: 6, order: 2 },
  ],
  reviews: [
    { id: 1, name: 'Susanna Corral', text: 'Sitio increíble, la mejor vinoteca de Madrid. El sushi es espectacular.', rating: 5, platform: 'Google', visible: true },
    { id: 2, name: 'Marta Barranco Romero', text: 'Excelente relación calidad-precio. La carne estaba perfecta.', rating: 5, platform: 'TripAdvisor', visible: true },
    { id: 3, name: 'Unapausaparacomer', text: 'Gran descubrimiento. Ambiente acogedor y carta variada.', rating: 5, platform: 'Google', visible: true },
    { id: 4, name: 'Paula SJ', text: 'Volvería mil veces. El chuletón madurado es brutal.', rating: 5, platform: 'Google', visible: true },
    { id: 5, name: 'Jotaminuscula', text: 'Uno de mis sitios favoritos de Madrid.', rating: 4, platform: 'TripAdvisor', visible: true },
  ],
  contact: {
    phone: '+34 678 40 12 53',
    address: 'Calle de los Mártires, 1, Madrid',
    email: 'info@elrincondejuan.es',
    hours: {
      'Lunes': 'Cerrado',
      'Martes': '13:00 - 16:00 / 20:00 - 23:00',
      'Miércoles': '13:00 - 16:00 / 20:00 - 23:00',
      'Jueves': '13:00 - 16:00 / 20:00 - 23:00',
      'Viernes': '13:00 - 16:00 / 20:00 - 23:30',
      'Sábado': '13:00 - 16:30 / 20:00 - 23:30',
      'Domingo': '13:00 - 16:30',
    }
  },
  texts: {
    heroTitle: 'UNA VINOTECA PARA COMER DE LUJO',
    heroSubtitle: '',
    aboutTitle: 'Quiénes somos',
    aboutText: 'Un barecito de toda la vida, con una cocina que no lo es.',
  }
}

export const AdminContext = createContext()

export function AdminProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem('rincon-admin-data')
      return saved ? JSON.parse(saved) : defaultData
    } catch { return defaultData }
  })

  useEffect(() => {
    localStorage.setItem('rincon-admin-data', JSON.stringify(data))
  }, [data])

  const update = (key, value) => setData(prev => ({ ...prev, [key]: value }))

  return <AdminContext.Provider value={{ data, update, setData }}>{children}</AdminContext.Provider>
}

export const useAdmin = () => useContext(AdminContext)
