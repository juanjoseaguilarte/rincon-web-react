import { useState } from 'react'
import { useAdmin } from '../context/AdminContext'

export default function AdminTextos() {
  const { data, update } = useAdmin()
  const [form, setForm] = useState({ ...data.texts })
  const [saved, setSaved] = useState(false)

  const save = () => {
    update('texts', form)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div>
      <h1>Textos</h1>
      <div className="admin-form">
        <div className="form-row">
          <div className="form-group">
            <label>Hero Title</label>
            <input value={form.heroTitle} onChange={e => setForm({...form, heroTitle: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Hero Subtitle</label>
            <input value={form.heroSubtitle} onChange={e => setForm({...form, heroSubtitle: e.target.value})} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>About Title</label>
            <input value={form.aboutTitle} onChange={e => setForm({...form, aboutTitle: e.target.value})} />
          </div>
        </div>
        <div className="form-group" style={{marginBottom: 16}}>
          <label>About Text</label>
          <textarea value={form.aboutText} onChange={e => setForm({...form, aboutText: e.target.value})} rows={5} />
        </div>
        <button className="btn btn-success" style={{padding: '10px 24px'}} onClick={save}>
          {saved ? '✅ Guardado' : '💾 Guardar'}
        </button>
      </div>
    </div>
  )
}
