import React from 'react'
import Tareas from './Tareas'

function ContenedorTareas({mostrarTareas}) {
  return (
    <div className='container-task'>
        {mostrarTareas.map((tareaActual,index)=>(
            <Tareas
                key={index}
                titulo={tareaActual.tarea}
            />
        ))}
    </div>
  )
}

export default ContenedorTareas
