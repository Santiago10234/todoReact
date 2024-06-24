import { useEffect, useState } from 'react'
import './App.css'
import InputTareas from './InputTareas'
import TituloToDo from './TituloToDo'
import ContenedorTareas from './ContenedorTareas'
import cargarTareas from './Get'
import Tareas from './Tareas'

function App() {
  const [listaTareas,setListaTareas] = useState([])

  useEffect(()=>{
    console.log("Entra");
    const traerTareas = async()=>{
      const tareasGuardadas = await cargarTareas()
      setListaTareas(tareasGuardadas)
    }
    traerTareas()
  },[])

  return (
    <div className='div-container'>
      <div className='container'>
        <TituloToDo/>
        <InputTareas/>
        <ContenedorTareas mostrarTareas={listaTareas}/>
      </div>
    </div>
  )
}
  
export default App
