import React, { useState, useEffect } from "react";
import { tareasAll } from "../API/Rule_Tareas";
import { Link, useNavigate } from "react-router-dom";

function Tareas() {
  const navigate = useNavigate();
  const [task, setTask] = useState([]);

  useEffect(() => {
    const traerTareas = async () => {
      try {
        const resultado = await tareasAll();
        setTask(resultado);
      } catch (error) {
        console.error("Error al cargar tareas:", error);
      }
    };

    const noToken = ()=>{
      const local = localStorage.getItem("token")
      if(!local){
        navigate('/')
      }
    }

    noToken()
    traerTareas();
  }, []);



  return (
    <div>
      <div>
        <ul>
          {task.map((tarea, index) => (
            <li key={index}>{tarea.titulo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tareas;
