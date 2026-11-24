// import { useState, useCallback } from 'react'
// import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
// import { dummyTodos } from './data/dummyTodos'
// import TodoList from './components/TodoList'
// import TodoDetail from './components/TodoDetail'
// import TodoModal from './components/TodoModal'
// import ConfirmDialog from './components/ConfirmDialog'
// import Toast from './components/Toast'

// export default function App() {
//   const [todos, setTodos] = useState(dummyTodos)
//   const [modal, setModal] = useState(null)
//   const [toasts, setToasts] = useState([])
//   const navigate = useNavigate()
//   const location = useLocation()

//   const notify = useCallback((message, type = 'success') => {
//     const id = Date.now() + Math.random()
//     setToasts((prev) => [...prev, { id, message, type }])
//     setTimeout(() => {
//       setToasts((prev) => prev.filter((t) => t.id !== id))
//     }, 3000)
//   }, [])

//   const addTodo = (data) => {
//     setTodos((prev) => [
//       ...prev,
//       { ...data, id: Math.max(0, ...prev.map((t) => t.id)) + 1 },
//     ])
//     notify('Tugas berhasil ditambahkan')
//   }

//   const updateTodo = (id, data) => {
//     setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, ...data, id } : t)))
//     notify('Tugas berhasil diperbarui')
//   }

//   const deleteTodo = (id) => {
//     setTodos((prev) => prev.filter((t) => t.id !== id))
//     notify('Tugas berhasil dihapus', 'danger')
//   }

//   const handleSubmit = (data) => {
//     if (modal.type === 'add') addTodo(data)
//     else updateTodo(modal.todo.id, data)
//     setModal(null)
//   }

//   const handleConfirmDelete = () => {
//     const id = modal.todo.id
//     deleteTodo(id)
//     setModal(null)
//     if (location.pathname.startsWith('/todo/')) navigate('/')
//   }

//   return (
//     <div className="app">
//       <header>
//         <h1>Todo List</h1>
//       </header>

//       <main>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <TodoList
//                 todos={todos}
//                 onAdd={() => setModal({ type: 'add' })}
//                 onDelete={(todo) => setModal({ type: 'delete', todo })}
//               />
//             }
//           />
//           <Route
//             path="/todo/:id"
//             element={
//               <TodoDetail
//                 todos={todos}
//                 onEdit={(todo) => setModal({ type: 'edit', todo })}
//               />
//             }
//           />
//           <Route path="*" element={<p className="empty">Halaman tidak ditemukan.</p>} />
//         </Routes>
//       </main>

//       {modal?.type === 'add' && (
//         <TodoModal
//           title="Tambah Todo"
//           onSubmit={handleSubmit}
//           onCancel={() => setModal(null)}
//         />
//       )}

//       {modal?.type === 'edit' && (
//         <TodoModal
//           title="Update Todo"
//           initial={modal.todo}
//           onSubmit={handleSubmit}
//           onCancel={() => setModal(null)}
//         />
//       )}

//       {modal?.type === 'delete' && (
//         <ConfirmDialog
//           title="Hapus Tugas?"
//           message={`Tugas "${modal.todo.title}" akan dihapus secara permanen.`}
//           onConfirm={handleConfirmDelete}
//           onCancel={() => setModal(null)}
//         />
//       )}

//       <Toast toasts={toasts} />
//     </div>
//   )
// }


import { useState, useCallback } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { dummyTodos } from './data/dummyTodos'
import TodoList from './components/TodoList'
import TodoDetail from './components/TodoDetail'
import TodoModal from './components/TodoModal'
import ConfirmDialog from './components/ConfirmDialog'
import Toast from './components/Toast'

export default function App() {
  const [todos, setTodos] = useState(dummyTodos)
  const [modal, setModal] = useState(null)
  const [toasts, setToasts] = useState([])
  const navigate = useNavigate()
  const location = useLocation()

  const notify = useCallback((message, type = 'success') => {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }, [])

  const addTodo = (data) => {
    setTodos((prev) => [
      ...prev,
      { ...data, id: Math.max(0, ...prev.map((t) => t.id)) + 1 },
    ])
    notify('Tugas berhasil ditambahkan')
  }

  const updateTodo = (id, data) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, ...data, id } : t)))
    notify('Tugas berhasil diperbarui')
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
    notify('Tugas berhasil dihapus', 'danger')
  }

  const handleSubmit = (data) => {
    if (modal.type === 'add') addTodo(data)
    else updateTodo(modal.todo.id, data)
    setModal(null)
  }

  const handleConfirmDelete = () => {
    const id = modal.todo.id
    deleteTodo(id)
    setModal(null)
    if (location.pathname.startsWith('/todo/')) navigate('/')
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo List</h1>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <TodoList
                todos={todos}
                onAdd={() => setModal({ type: 'add' })}
                onDelete={(todo) => setModal({ type: 'delete', todo })}
              />
            }
          />
          <Route
            path="/todo/:id"
            element={
              <TodoDetail
                todos={todos}
                onEdit={(todo) => setModal({ type: 'edit', todo })}
              />
            }
          />
          <Route path="*" element={<p className="empty">Halaman tidak ditemukan.</p>} />
        </Routes>
      </main>

      {modal?.type === 'add' && (
        <TodoModal
          title="Tambah Todo"
          onSubmit={handleSubmit}
          onCancel={() => setModal(null)}
        />
      )}

      {modal?.type === 'edit' && (
        <TodoModal
          title="Update Todo"
          initial={modal.todo}
          onSubmit={handleSubmit}
          onCancel={() => setModal(null)}
        />
      )}

      {modal?.type === 'delete' && (
        <ConfirmDialog
          title="Hapus Tugas?"
          message={`Tugas "${modal.todo.title}" akan dihapus secara permanen.`}
          onConfirm={handleConfirmDelete}
          onCancel={() => setModal(null)}
        />
      )}

      <Toast toasts={toasts} />
    </div>
  )
}