import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminPanel.css'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  if (sessionStorage.getItem('admin-token')) {
    navigate('/admin', { replace: true })
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === 'rincon2024') {
      sessionStorage.setItem('admin-token', 'ok')
      navigate('/admin', { replace: true })
    } else {
      setError('Contraseña incorrecta')
    }
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-box">
        <h1>🍷 Admin Panel</h1>
        <p>El Rincón de Juan</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError('') }}
              placeholder="••••••••"
              autoFocus
            />
          </div>
          <button type="submit">Entrar</button>
          {error && <div className="admin-login-error">{error}</div>}
        </form>
      </div>
    </div>
  )
}
