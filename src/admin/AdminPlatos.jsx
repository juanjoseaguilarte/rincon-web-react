import { useState } from 'react'
import { useAdmin } from '../context/AdminContext'

const BADGES = ['', '⭐ Destacado', '🔥 Nuevo', '🌶 Picante', '🥩 Chef recomienda']

const emptyDish = { name: '', categoryId: '', desc: '', price: 'Consultar', badge: '', visible: true, featured: false, likes: 0 }

export default function AdminPlatos() {
  const { data, update } = useAdmin()
  const { dishes, categories } = data
  const [editId, setEditId] = useState(null)
  const [editData, setEditData] = useState({})
  const [newDish, setNewDish] = useState(emptyDish)
  const [showAdd, setShowAdd] = useState(false)

  const save = () => {
    update('dishes', dishes.map(d => d.id === editId ? { ...d, ...editData } : d))
    setEditId(null)
  }

  const del = (id) => {
    if (confirm('¿Eliminar plato?')) update('dishes', dishes.filter(d => d.id !== id))
  }

  const toggle = (id, field) => {
    update('dishes', dishes.map(d => d.id === id ? { ...d, [field]: !d[field] } : d))
  }

  const move = (id, dir) => {
    const sorted = [...dishes].sort((a, b) => a.order - b.order)
    const idx = sorted.findIndex(d => d.id === id)
    const swapIdx = idx + dir
    if (swapIdx < 0 || swapIdx >= sorted.length) return
    const a = sorted[idx].order
    sorted[idx] = { ...sorted[idx], order: sorted[swapIdx].order }
    sorted[swapIdx] = { ...sorted[swapIdx], order: a }
    update('dishes', sorted)
  }

  const addDish = () => {
    const id = Math.max(0, ...dishes.map(d => d.id)) + 1
    const order = dishes.filter(d => d.categoryId == newDish.categoryId).length
    update('dishes', [...dishes, { ...newDish, id, order, categoryId: Number(newDish.categoryId) }])
    setNewDish(emptyDish)
    setShowAdd(false)
  }

  const getCatName = (id) => categories.find(c => c.id === id)?.name || id

  const sorted = [...dishes].sort((a, b) => a.order - b.order)

  return (
    <div>
      <h1>Platos</h1>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Badge</th>
              <th>Visible</th>
              <th>Destacado</th>
              <th>Likes</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(dish => (
              <tr key={dish.id}>
                {editId === dish.id ? (
                  <>
                    <td className="inline-edit"><input value={editData.name || ''} onChange={e => setEditData({...editData, name: e.target.value})} /></td>
                    <td className="inline-edit">
                      <select value={editData.categoryId || ''} onChange={e => setEditData({...editData, categoryId: Number(e.target.value)})}>
                        {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                      </select>
                    </td>
                    <td className="inline-edit"><input value={editData.price || ''} onChange={e => setEditData({...editData, price: e.target.value})} /></td>
                    <td className="inline-edit">
                      <select value={editData.badge || ''} onChange={e => setEditData({...editData, badge: e.target.value})}>
                        {BADGES.map(b => <option key={b} value={b}>{b || '—'}</option>)}
                      </select>
                    </td>
                    <td><span className="toggle" onClick={() => setEditData({...editData, visible: !editData.visible})}>{editData.visible ? '✅' : '🚫'}</span></td>
                    <td><span className="toggle" onClick={() => setEditData({...editData, featured: !editData.featured})}>{editData.featured ? '⭐' : '☆'}</span></td>
                    <td>{dish.likes}</td>
                    <td>
                      <button className="btn btn-success" onClick={save}>💾</button>
                      <button className="btn btn-secondary" onClick={() => setEditId(null)}>✕</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{dish.name}</td>
                    <td>{getCatName(dish.categoryId)}</td>
                    <td>{dish.price}</td>
                    <td>{dish.badge ? <span className="badge">{dish.badge}</span> : '—'}</td>
                    <td><span className="toggle" onClick={() => toggle(dish.id, 'visible')}>{dish.visible ? '✅' : '🚫'}</span></td>
                    <td><span className="toggle" onClick={() => toggle(dish.id, 'featured')}>{dish.featured ? '⭐' : '☆'}</span></td>
                    <td>{dish.likes}</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => { setEditId(dish.id); setEditData({...dish}) }}>✏️</button>
                      <button className="btn btn-danger" onClick={() => del(dish.id)}>🗑️</button>
                      <button className="btn btn-icon" onClick={() => move(dish.id, -1)}>↑</button>
                      <button className="btn btn-icon" onClick={() => move(dish.id, 1)}>↓</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={() => setShowAdd(!showAdd)} style={{marginBottom: 16}}>
        {showAdd ? '✕ Cancelar' : '+ Añadir plato'}
      </button>

      {showAdd && (
        <div className="admin-form">
          <h2>Nuevo plato</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Nombre</label>
              <input value={newDish.name} onChange={e => setNewDish({...newDish, name: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Categoría</label>
              <select value={newDish.categoryId} onChange={e => setNewDish({...newDish, categoryId: e.target.value})}>
                <option value="">-- Selecciona --</option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Precio</label>
              <input value={newDish.price} onChange={e => setNewDish({...newDish, price: e.target.value})} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Descripción</label>
              <input value={newDish.desc} onChange={e => setNewDish({...newDish, desc: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Badge</label>
              <select value={newDish.badge} onChange={e => setNewDish({...newDish, badge: e.target.value})}>
                {BADGES.map(b => <option key={b} value={b}>{b || '— Sin badge —'}</option>)}
              </select>
            </div>
          </div>
          <button className="btn btn-success" onClick={addDish} disabled={!newDish.name || !newDish.categoryId}>
            Guardar plato
          </button>
        </div>
      )}
    </div>
  )
}
