'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'

const FormTask = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description
      })
    })
    const tasks = await res.json()
    router.refresh()
  }

  return (
    <div className='bg-slate-200 p-7 h-fit'>
      <h1 className='text-black font-bold'>Añadir Tarea</h1>
      <form action='' onSubmit={handleSubmit}>
        <label htmlFor="title" className="text-xs text-black">Título:</label>
        <input
          type='text'
          name='title'
          className='bg-slate-400 rounded-md p-2 mb-2 block w-full text-slate-900'
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description" className="text-xs text-black">Descripción:</label>
        <textarea
          name='description'
          className='bg-slate-400 rounded-md p-2 mb-2 block w-full text-slate-900'
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="bg-indigo-500 text-white rounded-md p-2 block w-full">Guardar</button>
      </form>
    </div>
  )
}

export default FormTask