import { useState } from "react"

const Form = ({ tareas, setTareas }) => {
  
const [titulo, setTitulo] = useState("");  
const [fecha, setFecha] = useState("");  
const [descripcion, setDescripcion] = useState("");

const [error, setError] = useState(false);

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
    descripcion
  }

  setTareas([...tareas, objetoTareas]);

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

        {error && (
        <div className="bg-red-600 font-bold uppercase text-center text-white p-3 mb-5 rounded-md">
          <p>Faltan campos por diligenciar</p>
          </div>)}
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
        <input 
        type="submit" 
        className="bg-green-700 w-full p-3 text-white font-bold uppercase rounded-md cursor-pointer hover:bg-green-800 transition-colors"
        value="Crear Tarea"
        />
      </form>
    </div>
  )
}

export default Form