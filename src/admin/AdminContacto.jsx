import { useState } from 'react'
import { useAdmin } from '../context/AdminContext'

const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

export default function AdminContacto() {
  const { data, update } = useAdmin()
  const [form, setForm] = useState({ ...data.contact })
  const [saved, setSaved] = useState(false)

  const setHour = (day, val) => {
    setForm(f => ({ ...f, hours: { ...f.hours, [day]: val } }))
  }

  const save = () => {
    update('contact', form)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div>
      <h1>Contacto</h1>
      <div className="admin-form">
        <h2>Información</h2>
        <div className="form-row">
          <div className="form-group">
            <label>Teléfono</label>
            <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          </div>
        </div>
        <div className="form-group" style={{marginBottom: 16}}>
          <label>Dirección</label>
          <input value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
        </div>

        <h2>Horarios</h2>
        <table className="hours-table">
          <tbody>
            {DAYS.map(day => (
              <tr key={day}>
                <td>{day}</td>
                <td>
                  <div className="form-group" style={{margin: 0}}>
                    <input value={form.hours?.[day] || ''} onChange={e => setHour(day, e.target.value)} placeholder="Cerrado" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <button className="btn btn-success" style={{padding: '10px 24px'}} onClick={save}>
          {saved ? '✅ Guardado' : '💾 Guardar'}
        </button>
      </div>
    </div>
  )
}
