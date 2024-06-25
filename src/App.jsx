import { useEffect, useState } from 'react'
import './App.css'
import InputTareas from './InputTareas'
import TituloToDo from './TituloToDo'
import ContenedorTareas from './ContenedorTareas'
import cargarTareas from './Get'
import Tareas from './Tareas'

function App() {
  const [listaTareas,setListaTareas] = useState([])
  const [contador,setContador] = useState(0)
  useEffect(()=>{
    console.log("Entra");
    const traerTareas = async()=>{
      const tareasGuardadas = await cargarTareas()
      const tareasRealizadas = tareasGuardadas.filter(tarea=>tarea.estado===true).length
      setContador(tareasRealizadas)
      setListaTareas(tareasGuardadas)
    }
    traerTareas()
  },[listaTareas])

  return (
    <div className='div-container'>
      <div className='container'>
        <TituloToDo/>
        <InputTareas contador={contador}/>
        {listaTareas.length === 0 ? <p className='text'>No hay tareas</p>:<ContenedorTareas mostrarTareas={listaTareas}/>}
      </div>
    </div>
  )
}
  
export default App
