
const Tarea = ({tarea, setTarea, eliminarTarea}) => {
  const {titulo, fecha, descripcion, id} = tarea;

  const handleEliminar = () => {
    const respuesta = confirm("¿Desea eliminar esta tarea?");

    if(respuesta){
      eliminarTarea(id)
    }

  }
  
  return (
    <div className="bg-white shadow-md px-5 py-10 rounded-lg mt-5">
        <p className="font-bold mb-3 text-gray-700 uppercase">Título: <span className="font-normal normal-case">{titulo}</span></p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: <span className="font-normal normal-case">{fecha}</span></p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Descripción: <span className="font-normal normal-case">{descripcion}</span></p>

        <div className="flex justify-between">
          <button 
          className="bg-blue-700 hover:bg-blue-800 mt-4 py-2 px-10 rounded-md text-white font-bold" 
          type="buttom"
          onClick={ () => setTarea( tarea ) }>Actualizar</button>
          
          <button 
          className="bg-red-700 hover:bg-red-800 mt-4 py-2 px-10 rounded-md text-white font-bold" 
          type="buttom"
          onClick={handleEliminar}
          >Eliminar</button>
        </div>



      </div>
  )
}

export default Tarea