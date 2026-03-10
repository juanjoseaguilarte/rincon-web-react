import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminPlatos from './AdminPlatos'
import AdminCategorias from './AdminCategorias'
import AdminPuntuaciones from './AdminPuntuaciones'
import AdminReseñas from './AdminReseñas'
import AdminContacto from './AdminContacto'
import AdminTextos from './AdminTextos'
import './AdminPanel.css'

const SECTIONS = [
  { key: 'platos', label: '🍽️ Platos' },
  { key: 'categorias', label: '📂 Categorías' },
  { key: 'puntuaciones', label: '⭐ Puntuaciones' },
  { key: 'resenas', label: '💬 Reseñas' },
  { key: 'contacto', label: '📞 Contacto' },
  { key: 'textos', label: '✍️ Textos' },
]

export default function AdminPanel() {
  const [section, setSection] = useState('platos')
  const navigate = useNavigate()

  if (!sessionStorage.getItem('admin-token')) {
    navigate('/admin/login', { replace: true })
    return null
  }

  const logout = () => {
    sessionStorage.removeItem('admin-token')
    navigate('/admin/login', { replace: true })
  }

  const renderSection = () => {
    switch (section) {
      case 'platos': return <AdminPlatos />
      case 'categorias': return <AdminCategorias />
      case 'puntuaciones': return <AdminPuntuaciones />
      case 'resenas': return <AdminReseñas />
      case 'contacto': return <AdminContacto />
      case 'textos': return <AdminTextos />
      default: return <AdminPlatos />
    }
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>🍷 Admin</h2>
        {SECTIONS.map(s => (
          <button
            key={s.key}
            className={section === s.key ? 'active' : ''}
            onClick={() => setSection(s.key)}
          >
            {s.label}
          </button>
        ))}
        <button className="sidebar-logout" onClick={logout}>🚪 Cerrar sesión</button>
      </aside>
      <main className="admin-content">
        {renderSection()}
      </main>
    </div>
  )
}
