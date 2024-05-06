import { FormTask, ListTask } from "./components"

export const dynamic = "force-dynamic"

const HomePage = () => {
  return (
    <main className="container mx-auto">
      <h1 className="text-3xl m-4 text-center ">Aplicación de tareas 📝</h1>
      <div className="flex gap-x-10">
        <FormTask />
        <ListTask />
      </div>
    </main>
  )
}


export default HomePage