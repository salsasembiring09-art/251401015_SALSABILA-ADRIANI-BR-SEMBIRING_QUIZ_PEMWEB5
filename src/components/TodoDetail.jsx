import { useNavigate, useParams } from 'react-router-dom'
import { toClass } from '../constants'

export default function TodoDetail({ todos, onEdit }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const todo = todos.find((t) => String(t.id) === id)

  if (!todo) {
    return (
      <section className="card">
        <p>Tugas tidak ditemukan.</p>
        <button className="btn btn-danger" onClick={() => navigate('/')}>
          Kembali
        </button>
      </section>
    )
  }

  return (
    <section className="card detail">
      <div>
        <h3>Judul</h3>
        <p className="detail-title">{todo.title}</p>
        <h3>Deskripsi</h3>
        <p className="desc">{todo.description || '-'}</p>
      </div>

      <div>
        <h3>Status</h3>
        <p>
          <span className={`badge status-${toClass(todo.status)}`}>{todo.status}</span>
        </p>
        <h3>Prioritas</h3>
        <p>
          <span className={`badge priority-${todo.priority}`}>{todo.priority}</span>
        </p>
        <h3>Deadline</h3>
        <p>{todo.deadline}</p>

        <div className="detail-actions">
          <button className="btn btn-danger" onClick={() => navigate('/')}>
            Kembali
          </button>
          <button className="btn btn-primary" onClick={() => onEdit(todo)}>
            Update
          </button>
        </div>
      </div>
    </section>
  )
}