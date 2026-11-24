// import { useNavigate } from 'react-router-dom'
// import { toClass } from '../constants'

// export default function TodoList({ todos, onAdd, onDelete }) {
//   const navigate = useNavigate()

//   return (
//     <section>
//       <div className="page-header">
//         <h2>Daftar Tugas</h2>
//         <button className="btn btn-primary" onClick={onAdd}>
//           Tambah Todo
//         </button>
//       </div>

//       {todos.length === 0 ? (
//         <p className="empty">Belum ada tugas. Klik "Tambah Todo" untuk membuat tugas baru.</p>
//       ) : (
//         <div className="table-wrapper">
//           <table>
//             <thead>
//               <tr>
//                 <th>Judul</th>
//                 <th>Status</th>
//                 <th>Prioritas</th>
//                 <th>Deadline</th>
//                 <th>Aksi</th>
//               </tr>
//             </thead>
//             <tbody>
//               {todos.map((todo) => (
//                 <tr key={todo.id}>
//                   <td className="title-cell" title={todo.title}>{todo.title}</td>
//                   <td>
//                     <span className={`badge status-${toClass(todo.status)}`}>{todo.status}</span>
//                   </td>
//                   <td>
//                     <span className={`badge priority-${todo.priority}`}>{todo.priority}</span>
//                   </td>
//                   <td>{todo.deadline}</td>
//                   <td className="actions">
//                     <button
//                       className="btn btn-primary btn-sm"
//                       onClick={() => navigate(`/todo/${todo.id}`)}
//                     >
//                       Detail
//                     </button>
//                     <button className="btn btn-danger btn-sm" onClick={() => onDelete(todo)}>
//                       Hapus
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </section>
//   )
// }

import { useNavigate } from 'react-router-dom'
import { toClass } from '../constants'

// Ikon mata (lihat detail)
const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

// Ikon tong sampah (hapus)
const TrashIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
)

export default function TodoList({ todos, onAdd, onDelete }) {
  const navigate = useNavigate()

  return (
    <section>
      <div className="page-header">
        <h2>Daftar Tugas</h2>
        <button className="btn btn-primary" onClick={onAdd}>
          Tambah Todo
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="empty">Belum ada tugas. Klik "Tambah Todo" untuk membuat tugas baru.</p>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Judul</th>
                <th>Status</th>
                <th>Prioritas</th>
                <th>Deadline</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td className="title-cell" title={todo.title}>{todo.title}</td>
                  <td>
                    <span className={`badge status-${toClass(todo.status)}`}>{todo.status}</span>
                  </td>
                  <td>
                    <span className={`badge priority-${todo.priority}`}>{todo.priority}</span>
                  </td>
                  <td>{todo.deadline}</td>
                  <td className="actions">
                    <button
                      className="icon-btn icon-btn-view"
                      title="Lihat detail"
                      aria-label="Lihat detail"
                      onClick={() => navigate(`/todo/${todo.id}`)}
                    >
                      <EyeIcon />
                    </button>
                    <button
                      className="icon-btn icon-btn-delete"
                      title="Hapus tugas"
                      aria-label="Hapus tugas"
                      onClick={() => onDelete(todo)}
                    >
                      <TrashIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}