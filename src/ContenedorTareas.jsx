import React from 'react';
import Tareas from './Tareas'; 
import EliminarTarea from './Delete';
import { upCheckBox } from './Put';
function ContenedorTareas({ mostrarTareas }) {
  // Función para eliminar una tarea por su ID
  const eliminarTarea = async (id) => {
    try {
      await EliminarTarea(id);
      // Actualizar el estado o refrescar la lista de tareas después de eliminar
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  }
  const actualizaTarea = async(id,estado)=>{
    await upCheckBox(id,estado)
    console.log(estado);
  }

  return (
    <div className='container-task'>
      {mostrarTareas.map((tareaActual, index) => (
        <Tareas
          key={index}
          titulo={tareaActual.tarea}
          estado={tareaActual.estado}
          // Pasar la función eliminarTarea y el ID de la tarea
          eliminar={() => eliminarTarea(tareaActual.id)}
          completadas={()=>actualizaTarea(tareaActual.id,tareaActual.estado)}
        />
      ))}
    </div>
  );
}

export default ContenedorTareas;
