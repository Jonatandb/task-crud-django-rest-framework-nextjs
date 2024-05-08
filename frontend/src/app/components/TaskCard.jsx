'use client'

import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const TaskCard = ({ task }) => {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(task.title)
  const [newDescription, setNewDescription] = useState(task.description)
  const inputTitleRef = useRef(null)

  useEffect(() => {
    if(isEditing) {
      setNewTitle(task.title)
      setNewDescription(task.description)
      inputTitleRef.current.focus()
    }
  }, [isEditing])

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

  const handleUpdate = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: newTitle,
        description: newDescription
      })
    })
    if (res.status == 200) {
      setIsEditing(false)
      router.refresh()
    }
  }

  return (
    <div className="bg-slate-500 px-4 py-3 mb-2 rounded-md text-slate-200 flex justify-between items-center gap-x-10">
      <div className='flex flex-col w-full'>
        {isEditing ? (
          <input
            type="text"
            placeholder={task.title}
            value={newTitle}
            className="bg-slate-500 border-none outline-none  text-green-400"
            onChange={(e) => setNewTitle(e.target.value)}
            ref={inputTitleRef}
          />
        ) : (
          <h2 className="font-bold">
            {task.done && <span>✅&nbsp;</span>}{task.title}
          </h2>
        )}

        {isEditing ? (
          <textarea
            placeholder={task.description || 'Alguna descripción...'}
            value={newDescription}
            className="bg-slate-500 border-none outline-none  text-green-400 w-full"
            onChange={(e) => setNewDescription(e.target.value)}
            rows="1"
          />
        ) : (
          <p>{task.description}</p>
        )}
      </div>
      <div className="flex justify-between gap-x-2">
        {isEditing && (
          <button
            className="text-white rounded-md p-2 bg-indigo-500"
            onClick={() => handleUpdate(task.id)}
          >
            Guardar
          </button>
        )}
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
        className="bg-blue-500 text-white rounded-md p-2"
        onClick={() => {
          setIsEditing(!isEditing);
        }}
        >
        {isEditing ? 'Cancelar' : 'Editar'}
        </button>
        <button
          className="bg-red-500 text-white rounded-md p-2"
          onClick={() => handleDelete(task.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default TaskCard