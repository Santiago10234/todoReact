import { useEffect, useState } from 'react'
import './App.css'
import InputTareas from './InputTareas'
import TituloToDo from './TituloToDo'
import ContenedorTareas from './ContenedorTareas'
import cargarTareas from './Get'
import Tareas from './Tareas'

function App() {
  const [count, setCount] = useState(0)
  const [listaTareas,setListaTareas] = useState([])

  useEffect(()=>{
    console.log("Entra");
    const traerTareas = async()=>{
      console.log("Entra2");
      const tareasGuardadas = await cargarTareas()
      console.log(tareasGuardadas);
      setListaTareas(tareasGuardadas)
      console.log(tareasGuardadas);
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
