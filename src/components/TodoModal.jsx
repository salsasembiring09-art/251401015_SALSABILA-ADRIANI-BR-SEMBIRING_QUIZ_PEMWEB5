import { useState } from 'react'
import { PRIORITY_OPTIONS, STATUS_OPTIONS } from '../constants'

const emptyForm = { title: '', description: '', priority: 'low', deadline: '', status: 'to-do' }

// Dipakai untuk form "Tambah" (tanpa initial) dan "Update" (dengan initial)
export default function TodoModal({ title, initial, onSubmit, onCancel }) {
  const [form, setForm] = useState(() =>
    initial
      ? {
          title: initial.title,
          description: initial.description,
          priority: initial.priority,
          deadline: initial.deadline,
          status: initial.status,
        }
      : emptyForm
  )
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title.trim()) return setError('Judul wajib diisi.')
    if (!form.deadline) return setError('Deadline wajib diisi.')
    onSubmit({ ...form, title: form.title.trim(), description: form.description.trim() })
  }

  return (
    <div className="overlay" onClick={onCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Judul
            <input name="title" value={form.title} onChange={handleChange} autoFocus />
          </label>

          <label>
            Deskripsi
            <textarea name="description" rows={3} value={form.description} onChange={handleChange} />
          </label>

          <div className="row">
            <label>
              Status
              <select name="status" value={form.status} onChange={handleChange}>
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>
            <label>
              Prioritas
              <select name="priority" value={form.priority} onChange={handleChange}>
                {PRIORITY_OPTIONS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </label>
          </div>

          <label>
            Deadline
            <input type="date" name="deadline" value={form.deadline} onChange={handleChange} />
          </label>

          {error && <p className="error">{error}</p>}

          <div className="modal-actions">
            <button type="button" className="btn btn-danger" onClick={onCancel}>
              Batal
            </button>
            <button type="submit" className="btn btn-primary">
              {initial ? 'Update' : 'Tambah'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}