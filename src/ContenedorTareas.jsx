import React from 'react'
import cargarTareas from './Get'
import InputTareas from './InputTareas'
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
