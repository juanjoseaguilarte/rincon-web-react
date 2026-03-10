import { useState } from 'react'
import './Reservas.css'

export default function Reservas() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    fecha: '',
    hora: '',
    personas: '2',
    nota: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Compose WhatsApp message
    const msg = `Hola! Quiero hacer una reserva:\n- Nombre: ${form.nombre}\n- Teléfono: ${form.telefono}\n- Fecha: ${form.fecha}\n- Hora: ${form.hora}\n- Personas: ${form.personas}\n- Nota: ${form.nota || 'Ninguna'}`
    const url = `https://wa.me/34678401253?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  return (
    <section className="reservas section" id="reservas">
      <div className="container">
        <div className="reservas__grid">
          {/* Info */}
          <div className="reservas__info">
            <p className="reservas__label">Reserva tu mesa</p>
            <h2 className="reservas__title">Ven a nuestro<br />Rincón</h2>
            <p className="reservas__desc">
              Disfruta de un menú hecho para ti para un momento especial en nuestra casa.
              Reserva tu mesa o llámanos directamente.
            </p>

            <div className="reservas__details">
              <div className="reservas__detail">
                <span className="reservas__detail-icon">📍</span>
                <div>
                  <strong>Dirección</strong>
                  <p>C. Méndez Núñez, 3, 11300<br />La Línea de la Concepción, Cádiz</p>
                </div>
              </div>
              <div className="reservas__detail">
                <span className="reservas__detail-icon">📞</span>
                <div>
                  <strong>Teléfono</strong>
                  <p><a href="tel:678401253">+34 678 40 12 53</a></p>
                </div>
              </div>
              <div className="reservas__detail">
                <span className="reservas__detail-icon">⏰</span>
                <div>
                  <strong>Horario</strong>
                  <p>Ver horario actualizado en Google Maps</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reservas__form-wrapper">
            <form className="reservas__form" onSubmit={handleSubmit}>
              <h3 className="reservas__form-title">Solicitar reserva</h3>

              <div className="reservas__row">
                <div className="reservas__field">
                  <label>Nombre *</label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="reservas__field">
                  <label>Teléfono *</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    required
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              <div className="reservas__row">
                <div className="reservas__field">
                  <label>Fecha *</label>
                  <input
                    type="date"
                    name="fecha"
                    value={form.fecha}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="reservas__field">
                  <label>Hora</label>
                  <select name="hora" value={form.hora} onChange={handleChange}>
                    <option value="">Seleccionar</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="14:30">14:30</option>
                    <option value="15:00">15:00</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
              </div>

              <div className="reservas__field">
                <label>Número de personas</label>
                <select name="personas" value={form.personas} onChange={handleChange}>
                  {[1,2,3,4,5,6,7,8].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>
                  ))}
                  <option value="más de 8">Más de 8</option>
                </select>
              </div>

              <div className="reservas__field">
                <label>Nota (opcional)</label>
                <textarea
                  name="nota"
                  value={form.nota}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Alergias, ocasión especial, etc."
                />
              </div>

              <button type="submit" className="btn btn-primary reservas__submit">
                Enviar solicitud por WhatsApp
              </button>
              <p className="reservas__disclaimer">
                Al enviar, se abrirá WhatsApp con tu solicitud de reserva.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
