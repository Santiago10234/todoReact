import { useState } from 'react'
import './App.css'
import InputTareas from './InputTareas'
import TituloToDo from './TituloToDo'
import ContenedorTareas from './ContenedorTareas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='div-container'>
      <div className='container'>
        <TituloToDo/>
        <InputTareas/>
        <ContenedorTareas/>
      </div>
    </div>
  )
}

export default App
