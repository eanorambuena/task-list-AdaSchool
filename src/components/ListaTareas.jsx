import { useState } from 'react';

import Tarea from "./Tarea";

const ListaTareas = () => {

    const [tareas, setTareas] = useState([
        {
            id: 1,
            nombre: "Hacer deporte",
            completada: false
        },
        {
            id: 2,
            nombre: "Ir al destista a las 10am",
            completada: true
        },
        {
            id: 3,
            nombre: "Comprar tomates",
            completada: false
        }
    ]);

    return (
        <div className="container main">
            <ul>
                {tareas.map((tarea) => {
                    return (
                        <Tarea key = {tarea.id} nombre = {tarea.nombre} completada = {tarea.completada}/>
                    )
                })}
            </ul>
        </div>
    );
}
 
export default ListaTareas;