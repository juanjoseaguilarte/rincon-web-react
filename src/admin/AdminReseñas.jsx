import { useState } from 'react'
import { useAdmin } from '../context/AdminContext'

const emptyReview = { name: '', text: '', rating: 5, platform: 'Google', visible: true }

export default function AdminReseñas() {
  const { data, update } = useAdmin()
  const { reviews } = data
  const [editId, setEditId] = useState(null)
  const [editData, setEditData] = useState({})
  const [newReview, setNewReview] = useState(emptyReview)
  const [showAdd, setShowAdd] = useState(false)

  const save = () => {
    update('reviews', reviews.map(r => r.id === editId ? { ...r, ...editData } : r))
    setEditId(null)
  }

  const del = (id) => {
    if (confirm('¿Eliminar reseña?')) update('reviews', reviews.filter(r => r.id !== id))
  }

  const toggle = (id) => {
    update('reviews', reviews.map(r => r.id === id ? { ...r, visible: !r.visible } : r))
  }

  const add = () => {
    const id = Math.max(0, ...reviews.map(r => r.id)) + 1
    update('reviews', [...reviews, { ...newReview, id, rating: Number(newReview.rating) }])
    setNewReview(emptyReview)
    setShowAdd(false)
  }

  return (
    <div>
      <h1>Reseñas</h1>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr><th>Nombre</th><th>Texto</th><th>★</th><th>Plataforma</th><th>Visible</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            {reviews.map(r => (
              <tr key={r.id}>
                {editId === r.id ? (
                  <>
                    <td className="inline-edit"><input value={editData.name} onChange={e => setEditData({...editData, name: e.target.value})} /></td>
                    <td className="inline-edit"><input value={editData.text} onChange={e => setEditData({...editData, text: e.target.value})} style={{width: 300}} /></td>
                    <td className="inline-edit">
                      <select value={editData.rating} onChange={e => setEditData({...editData, rating: Number(e.target.value)})}>
                        {[5,4,3,2,1].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </td>
                    <td className="inline-edit">
                      <select value={editData.platform} onChange={e => setEditData({...editData, platform: e.target.value})}>
                        <option>Google</option><option>TripAdvisor</option>
                      </select>
                    </td>
                    <td>{editData.visible ? '✅' : '🚫'}</td>
                    <td>
                      <button className="btn btn-success" onClick={save}>💾</button>
                      <button className="btn btn-secondary" onClick={() => setEditId(null)}>✕</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{r.name}</td>
                    <td style={{maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{r.text}</td>
                    <td>{'★'.repeat(r.rating)}</td>
                    <td>{r.platform}</td>
                    <td><span className="toggle" onClick={() => toggle(r.id)}>{r.visible ? '✅' : '🚫'}</span></td>
                    <td>
                      <button className="btn btn-primary" onClick={() => { setEditId(r.id); setEditData({...r}) }}>✏️</button>
                      <button className="btn btn-danger" onClick={() => del(r.id)}>🗑️</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={() => setShowAdd(!showAdd)} style={{marginBottom: 16}}>
        {showAdd ? '✕ Cancelar' : '+ Añadir reseña'}
      </button>

      {showAdd && (
        <div className="admin-form">
          <h2>Nueva reseña</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Nombre</label>
              <input value={newReview.name} onChange={e => setNewReview({...newReview, name: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Puntuación</label>
              <select value={newReview.rating} onChange={e => setNewReview({...newReview, rating: e.target.value})}>
                {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} ★</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Plataforma</label>
              <select value={newReview.platform} onChange={e => setNewReview({...newReview, platform: e.target.value})}>
                <option>Google</option><option>TripAdvisor</option>
              </select>
            </div>
          </div>
          <div className="form-group" style={{marginBottom: 12}}>
            <label>Texto</label>
            <textarea value={newReview.text} onChange={e => setNewReview({...newReview, text: e.target.value})} />
          </div>
          <button className="btn btn-success" onClick={add} disabled={!newReview.name || !newReview.text}>Guardar</button>
        </div>
      )}
    </div>
  )
}
