import { useState } from 'react'
import { useAdmin } from '../context/AdminContext'

export default function AdminCategorias() {
  const { data, update } = useAdmin()
  const { categories } = data
  const [editId, setEditId] = useState(null)
  const [editName, setEditName] = useState('')
  const [newName, setNewName] = useState('')

  const sorted = [...categories].sort((a, b) => a.order - b.order)

  const toggle = (id) => {
    update('categories', categories.map(c => c.id === id ? { ...c, visible: !c.visible } : c))
  }

  const rename = (id) => {
    update('categories', categories.map(c => c.id === id ? { ...c, name: editName } : c))
    setEditId(null)
  }

  const move = (id, dir) => {
    const s = [...sorted]
    const idx = s.findIndex(c => c.id === id)
    const swap = idx + dir
    if (swap < 0 || swap >= s.length) return
    const a = s[idx].order
    s[idx] = { ...s[idx], order: s[swap].order }
    s[swap] = { ...s[swap], order: a }
    update('categories', s)
  }

  const add = () => {
    if (!newName.trim()) return
    const id = Math.max(0, ...categories.map(c => c.id)) + 1
    const order = categories.length
    update('categories', [...categories, { id, name: newName.trim().toUpperCase(), visible: true, order }])
    setNewName('')
  }

  const del = (id) => {
    if (confirm('¿Eliminar categoría?')) update('categories', categories.filter(c => c.id !== id))
  }

  return (
    <div>
      <h1>Categorías</h1>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr><th>Nombre</th><th>Visible</th><th>Orden</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            {sorted.map(cat => (
              <tr key={cat.id}>
                <td>
                  {editId === cat.id
                    ? <div className="inline-edit"><input value={editName} onChange={e => setEditName(e.target.value)} onKeyDown={e => e.key === 'Enter' && rename(cat.id)} autoFocus /></div>
                    : cat.name
                  }
                </td>
                <td><span className="toggle" onClick={() => toggle(cat.id)}>{cat.visible ? '✅' : '🚫'}</span></td>
                <td>{cat.order + 1}</td>
                <td>
                  {editId === cat.id
                    ? <>
                        <button className="btn btn-success" onClick={() => rename(cat.id)}>💾</button>
                        <button className="btn btn-secondary" onClick={() => setEditId(null)}>✕</button>
                      </>
                    : <>
                        <button className="btn btn-primary" onClick={() => { setEditId(cat.id); setEditName(cat.name) }}>✏️</button>
                        <button className="btn btn-icon" onClick={() => move(cat.id, -1)}>↑</button>
                        <button className="btn btn-icon" onClick={() => move(cat.id, 1)}>↓</button>
                        <button className="btn btn-danger" onClick={() => del(cat.id)}>🗑️</button>
                      </>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="admin-form">
        <h2>Nueva categoría</h2>
        <div className="form-row">
          <div className="form-group">
            <label>Nombre</label>
            <input value={newName} onChange={e => setNewName(e.target.value)} placeholder="NUEVA CATEGORÍA" onKeyDown={e => e.key === 'Enter' && add()} />
          </div>
          <div style={{display:'flex', alignItems:'flex-end'}}>
            <button className="btn btn-success" onClick={add}>Añadir</button>
          </div>
        </div>
      </div>
    </div>
  )
}
