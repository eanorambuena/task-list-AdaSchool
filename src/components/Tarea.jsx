const Tarea = ({nombre, completada}) => {
    return (
        <li>
            <section className="tarea">
                <p className="nombre_tarea">{nombre}</p>
                <input className = "checkbox" type="checkbox" />
                <i></i>
            </section>
        </li>
    );
}
 
export default Tarea;