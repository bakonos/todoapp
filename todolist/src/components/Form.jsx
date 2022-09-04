import { useState, useEffect } from "react"
import AlertError from "./AlertError";

const Form = ({ tareas, setTareas, tarea, setTarea }) => {
  
const [titulo, setTitulo] = useState("");  
const [fecha, setFecha] = useState("");  
const [descripcion, setDescripcion] = useState("");

const [error, setError] = useState(false);

useEffect( () => {
  if(Object.keys(tarea).length > 0){
    setTitulo(tarea.titulo);
    setFecha(tarea.fecha);
    setDescripcion(tarea.descripcion);
  }

}, [tarea])



const generarId = () => {
  const id = Math.random().toString(20).substring(2);
  return id
}
const handleSubmit = (e) => {
  e.preventDefault();

  if([titulo, fecha, descripcion].includes(""))
  {
    setError(true);
  } 
  else 
  {
    setError(false)
  }

  const objetoTareas = {
    titulo,
    fecha,
    descripcion,
  };

  if(tarea.id){

    objetoTareas.id = tarea.id;
    const tareasActualizadas = tareas.map(tareaState => tareaState.id === tarea.id ? objetoTareas : tareaState);

    setTareas(tareasActualizadas);
    setTarea({});

  } else {
    objetoTareas.id = generarId();
    setTareas([...tareas, objetoTareas]);
  }

  setTitulo("");
  setFecha("");
  setDescripcion("");


};
  
  return (
    <div className="md:w-1/2 lg:w2/5 mx-5">
      <h2 className="font-black text-3xl text-center mb-10">Creación de Tareas</h2>
      <form
      onSubmit={handleSubmit} 
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

        {error && <AlertError mensaje="Faltan campos por diligenciar"/>}
        <div className="mb-5">
          <label htmlFor="titulo" className="block text-gray-700 uppercase font-bold">Título
          </label>
          
          <input 
          id="titulo" 
          type="text" 
          placeholder="Título de la tarea" 
          className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          value={ titulo }
          onChange={ (e) => setTitulo(e.target.value) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">Fecha
          </label>
          
          <input 
          id="fecha" 
          type="date" 
          className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          value={ fecha }
          onChange={ (e) => setFecha(e.target.value) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="descripcion" className="block text-gray-700 uppercase font-bold">Descripción de la tarea
          </label>
          
          <textarea 
          id="descripcion" 
          type="text" 
          placeholder="Título de la tarea" 
          className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          value={ descripcion }
          onChange={ (e) => setDescripcion(e.target.value) }
          />
        </div>
        {!tarea.id ? (
          <input 
          type="submit" 
          className="bg-green-700 w-full p-3 text-white font-bold uppercase rounded-md cursor-pointer hover:bg-green-800 transition-colors"
          value="Crear Tarea"
          />
        ) : (
          <input 
        type="submit" 
        className="bg-purple-700 w-full p-3 text-white font-bold uppercase rounded-md cursor-pointer hover:bg-purple-800 transition-colors"
        value="Actualizar Tarea"
        />

        )}
      </form>
    </div>
  )
}

export default Form