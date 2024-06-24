const eliminarTarea = async (id) => {

    try {
      // Petición DELETE a la API para eliminar la tarea por su ID
      await fetch(apiUrl, {
        method: 'DELETE',
      });
      
      // Después de eliminar la tarea, volvemos a cargar las tareas actualizadas desde la API
      cargarTareas();
      console.log('Tarea eliminada correctamente');
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };
  
  export default eliminarTarea;