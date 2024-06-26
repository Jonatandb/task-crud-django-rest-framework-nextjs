import TaskCard from "./TaskCard"

// NextJS server code
async function loadTasks() {
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#individual-fetch-requests
  const res = await fetch(`${process.env.BACKEND_URL}/api/tasks/`, { cache: 'no-store'})
  const tasks = await res.json()
  return tasks
}

async function ListTask() {

  const tasks = await loadTasks()

  return (
    <div
      className="bg-slate-700 p-4 w-full"
    >

      <h1 className="mb-2">
        {
          tasks?.length > 0 ? 'Tareas 📝' : 'Aún no hay tareas 🔎'
        }
      </h1>

      {
        tasks?.length > 0 &&
        tasks.map(task => (
          <TaskCard task={task} key={task.id} />
        ))
      }

    </div>
  )
}

export default ListTask