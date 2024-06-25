import React from 'react';
import Tareas from './Tareas'; // Asumiendo que EliminarTarea es una función para eliminar tareas
import EliminarTarea from './Delete';
function ContenedorTareas({ mostrarTareas }) {
  // Función para eliminar una tarea por su ID
  const eliminarTarea = async (id) => {
    try {
      // Llamar a la función EliminarTarea (debe manejar la lógica de eliminación)
      await EliminarTarea(id);
      window.location.reload()
      // Actualizar el estado o refrescar la lista de tareas después de eliminar
      // Esto depende de cómo gestionas el estado de las tareas
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  return (
    <div className='container-task'>
      {mostrarTareas.map((tareaActual, index) => (
        <Tareas
          key={index}
          titulo={tareaActual.tarea}
          // Pasar la función eliminarTarea y el ID de la tarea
          eliminar={() => eliminarTarea(tareaActual.id)}
        />
      ))}
    </div>
  );
}

export default ContenedorTareas;


// import React from 'react'
// import Tareas from './Tareas'
// import EliminarTarea from './Delete'

// function ContenedorTareas({mostrarTareas}) {
//   async function btnEliminar() {
//     await EliminarTarea(id)
//   }
//   return (
//     <div className='container-task'>
//         {mostrarTareas.map((tareaActual,index)=>(
//             <Tareas
//                 key={index}
//                 titulo={tareaActual.tarea}
//                 eliminar={btnEliminar}
//             />
//         ))}
//     </div>
//   )
// }

// export default ContenedorTareas
