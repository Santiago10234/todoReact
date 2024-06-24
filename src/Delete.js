const eliminarTarea = async (id) => {
const apiUrl =  `http://localhost:3000/api/task/${id}`
    try {
      // Petición DELETE a la API para eliminar la tarea por su ID
      await fetch(apiUrl, {
        method: 'DELETE',
      });
      
      // Carga las tareas actualizadas desde la API
      cargarTareas();
      console.log('Tarea eliminada correctamente');
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };
  
  export default eliminarTarea;