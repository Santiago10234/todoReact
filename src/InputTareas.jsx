import React, { useState } from 'react';
import { cargarTareas } from './Post.js'; 

function InputTareas() {
  const [tarea, setTarea] = useState('');
//   const [contador, setContador] = useState(0);

  const handleInputChange = (e) => {
    setTarea(e.target.value);
  };

  const handleAgregarClick = async () => {
    if (tarea.trim() === '') {
      alert('La tarea no puede estar vacía o contener solo espacios');
      return;
    }

    try {
      // Llamamos a la función guardarTarea que importamos
      await cargarTareas(tarea);

      // Si la tarea se guarda correctamente, incrementamos el contador
    //   setContador(contador + 1);

      // Limpia el input
      setTarea('');

      console.log('Tarea guardada correctamente');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='container-inputs'>
      <form className='inp-btnAgregar' onSubmit={(e) => e.preventDefault()}>
        <input className='crear-task' placeholder='Nueva Tarea' type='text' value={tarea} onChange={handleInputChange}/>
        <button className='btn-tarea' type='button' onClick={handleAgregarClick}>Agregar</button>
      </form>
      <div>
        <input className='contador' placeholder='0' type='text' />
      </div>
    </div>
  );
}

export default InputTareas;