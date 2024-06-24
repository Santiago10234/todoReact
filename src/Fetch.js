import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:3000/api/task';

function Apps() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  useEffect(() => {
    obtenerTareas();
  }, []);

  const obtenerTareas = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTareas(data);
    } catch (error) {
      console.error('Error al obtener tareas:', error);
    }
  };

 const agregarTarea = async () => {
    if (nuevaTarea.trim() === '') return;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ titulo: nuevaTarea })
      });

      if (response.ok) {
        const nuevaTareaAgregada = await response.json();
        setTareas([...tareas, nuevaTareaAgregada]);
        setNuevaTarea('');
      }
    } catch (error) {
      console.error('Error al agregar tarea:', error);
    }
  };
}

export default Apps