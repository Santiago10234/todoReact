const apiUrl = 'http://localhost:3000/api/task';

const cargarTareas = async (tarea) => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tarea: tarea.trim() })
    });

    if (!response.ok) {
      throw new Error('Error al guardar la tarea');
    }

    return response.json(); 
  } catch (error) {
  }
};

export { cargarTareas };