import { Link, Route, Routes, useParams } from 'react-router'
import { TASKS } from './tasks'

// Read at build time: Vite bakes VITE_* values into the files.
const apiUrl = import.meta.env.VITE_API_URL ?? 'not set'

function TaskList() {
  return (
    <ul className="space-y-3">
      {TASKS.map((t) => (
        <li key={t.id}>
          <Link to={`/tasks/${t.id}`}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm hover:border-indigo-400">
            <span className={t.done ? 'text-slate-400 line-through' : 'font-medium'}>{t.title}</span>
            <span className="text-sm text-slate-500">{t.owner}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function TaskPage() {
  const { id } = useParams()
  const task = TASKS.find((t) => t.id === Number(id))
  if (!task) return <p>No task with id {id}.</p>
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold">{task.title}</h2>
      <p className="mt-2 text-slate-600">Owner: {task.owner}</p>
      <p className="mt-1 text-slate-600">Status: {task.done ? 'Done' : 'Open'}</p>
      <Link to="/" className="mt-4 inline-block text-indigo-600 hover:underline">Back to the board</Link>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="mb-8 text-4xl font-bold">Tasks board</h1>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/tasks/:id" element={<TaskPage />} />
        </Routes>
        <footer className="mt-12 text-sm text-slate-500">API: {apiUrl}</footer>
      </main>
    </div>
  )
}
