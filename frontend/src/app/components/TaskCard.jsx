'use client'

import { useRouter } from 'next/navigation'

const TaskCard = ({ task }) => {

  const router = useRouter()

  const handleDelete = async (id) => {
    if (window.confirm('Seguro que quieres eliminar esta tarea?')) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}/`, {
        method: 'DELETE'
      })
      if (res.status == 204) {
        router.refresh()
      }
    }
  }

  const handleTaskDone = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}/done/`, {
      method: 'POST'
    })
    if (res.status == 200) {
      router.refresh()
    }
  }

  return (
    <div className="bg-slate-500 px-4 py-3 mb-2 rounded-md text-slate-200 flex justify-between items-center">
      <div>
        <h2 className="font-bold">
          {task.done && <span>✅</span>}&nbsp;{task.title}
        </h2>
        <p>{task.description}</p>
      </div>
      <div className="flex justify-between gap-x-2">
        <button
          className={
            "text-white rounded-md p-2" +
            (task.done ? ' bg-gray-800' : ' bg-green-500')
          }
          onClick={() => handleTaskDone(task.id)}
        >
          {task.done ? 'Desmarcar' : 'Marcar'}
        </button>
        <button
          className="bg-red-500 text-white rounded-md p-2"
          onClick={() => handleDelete(task.id)}
        >
          Eliminar
        </button>
        <button
          className="bg-indigo-500 text-white rounded-md p-2"
        >
          Actualizar
        </button>
      </div>
    </div>
  )
}

export default TaskCard