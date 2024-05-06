import TaskCard from "./TaskCard"

// NextJS server code
async function loadTasks() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/tasks/`)
  const tasks = await res.json()
  return tasks
}

async function ListTask() {

  const tasks = await loadTasks()

  return (
    <div
      className="bg-slate-700 p-4 w-full"
    >

      <h1>Lista de tareas</h1>

      {
        tasks.map(task => (
          <TaskCard task={task} key={task.id} />
        ))
      }

    </div>
  )
}

export default ListTask