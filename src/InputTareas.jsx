import React, { useState } from 'react';
import { cargarTareas } from './Post.js'; 

function InputTareas({contador}) {

  const submit = (e) =>{
    if (e.key === "Enter") {
      agregarClick()
    }
  }
  const [tarea, setTarea] = useState('');

  const inputChange = (e) => {
    setTarea(e.target.value);
  };

  const agregarClick = async () => {
    if (tarea.trim() === '') {
      alert('La tarea no puede estar vacía o contener solo espacios');
      return;
    }

    try {
      // Llamamos a la función guardarTarea que importamos
      await cargarTareas(tarea);

      // Limpia el input
      setTarea('');
     
      console.log('Tarea guardada correctamente');
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <div className='container-inputs'>
      <form className='inp-btnAgregar' onSubmit={(e) => e.preventDefault()}>
        <input onKeyDown={submit} className='crear-task' placeholder='Nueva Tarea' type='text' value={tarea} onChange={inputChange}/>
        <button className='btn-tarea' type='button' onClick={agregarClick}>Agregar</button>
      </form>
      <div className='contenedor-contador'>
        <p className='parrafo'>Tareas completadas</p>
        <input className='contador' value={contador} type='text' />
      </div>
    </div>
  );
}

export default InputTareas;