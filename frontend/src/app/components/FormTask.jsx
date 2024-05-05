
const FormTask = () => {
  return (
    <div className='bg-slate-200 p-7'>
      <h1 className='text-black font-bold'>Añadir Tarea</h1>
      <form action=''>
        <label htmlFor="title" className="text-xs text-black">Título:</label>
        <input
          type='text'
          name='title'
          className='bg-slate-400 rounded-md p-2 mb-2 block w-full text-slate-900'
        />
        <label htmlFor="description" className="text-xs text-black">Descripción:</label>
        <textarea
          name='description'
          className='bg-slate-400 rounded-md p-2 mb-2 block w-full text-slate-900'
        ></textarea>
        <button className="bg-indigo-500 text-white rounded-md p-2 block w-full">Guardar</button>
      </form>
    </div>
  )
}

export default FormTask