import Tarea from "./Tarea";

const ListaTareas = () => {
    let tareas = [
        {
            id: 1,
            nombre: "Hacer deporte"
        },
        {
            id: 2,
            nombre: "Ir al destista a las 10am"
        }
    ]

    return (
        <div className="container main">
            <ul>
                {tareas.map((tarea) => {
                    return (
                        <Tarea key = {tarea.id} nombre = {tarea.nombre}/>
                    )
                })}
            </ul>
        </div>
    );
}
 
export default ListaTareas;