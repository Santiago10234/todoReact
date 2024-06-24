const cargarTareas = async () => {
    try {
      // Petición GET a la API para obtener las tareas guardadas

      const response = await fetch('http://localhost:3000/api/task');
      const data = await response.json();
      setTareas(data); 
    } catch (error) {
      console.error('Error al cargar las tareas:', error);
    }
  };