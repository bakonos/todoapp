import Tareas from "./Tareas";

const ListaTareas = () => {
  return (
    <div className="md:w-1/2 lg:w2/5 mx-5 mb-10 md:h-screen overflow-scroll">
      <h2 className="font-black text-3xl text-center mb-10">Lista de tareas</h2>
      
      <Tareas />
      <Tareas />
      <Tareas />
      <Tareas />
      <Tareas />
      <Tareas />
    </div>
  )
}

export default ListaTareas;