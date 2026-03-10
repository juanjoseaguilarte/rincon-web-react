import { useState } from 'react'
import { useAdmin } from '../context/AdminContext'

export default function AdminPuntuaciones() {
  const { data, update } = useAdmin()
  const [form, setForm] = useState({ ...data.ratings })
  const [saved, setSaved] = useState(false)

  const save = () => {
    update('ratings', {
      google: parseFloat(form.google),
      googleCount: parseInt(form.googleCount),
      tripadvisor: parseFloat(form.tripadvisor),
      tripadvisorCount: parseInt(form.tripadvisorCount),
    })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div>
      <h1>Puntuaciones</h1>
      <div className="puntuaciones-grid">
        <div className="puntuaciones-card">
          <h3>🔵 Google</h3>
          <div className="form-group" style={{marginBottom: 12}}>
            <label>Puntuación (ej: 4.4)</label>
            <input type="number" step="0.1" min="0" max="5" value={form.google} onChange={e => setForm({...form, google: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Nº de reseñas</label>
            <input type="number" value={form.googleCount} onChange={e => setForm({...form, googleCount: e.target.value})} />
          </div>
        </div>
        <div className="puntuaciones-card">
          <h3>🟢 TripAdvisor</h3>
          <div className="form-group" style={{marginBottom: 12}}>
            <label>Puntuación (ej: 4.5)</label>
            <input type="number" step="0.1" min="0" max="5" value={form.tripadvisor} onChange={e => setForm({...form, tripadvisor: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Nº de reseñas</label>
            <input type="number" value={form.tripadvisorCount} onChange={e => setForm({...form, tripadvisorCount: e.target.value})} />
          </div>
        </div>
      </div>
      <button className="btn btn-success" style={{padding: '10px 24px', fontSize: '0.95rem'}} onClick={save}>
        {saved ? '✅ Guardado' : '💾 Guardar'}
      </button>
    </div>
  )
}
