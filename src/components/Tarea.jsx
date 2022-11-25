import { useState } from 'react';

const Tarea = ({nombre, completada, descripcion}) => {
    const [completadaActual, setCompletadaActual] = useState(completada)
    
    let checked = false;
    let style = {textDecoration: "none"};
    if (completadaActual){
        style = {textDecoration: "line-through"};
        checked = true;
    }

    const handleChange = () => {
        setCompletadaActual(!completadaActual);
        if (completadaActual){
            style = {textDecoration: "line-through"};
            checked = true;
        }
        else {
            style = {textDecoration: "none"};
            checked = false;
        }
    };

    return (
        <li>
            <section className="tarea">
                <p className="nombre_tarea" style={style}>{nombre}</p>
                <input className = "checkbox" type="checkbox" checked = {checked} onChange={handleChange}/>
                <p className="nombre_tarea" style={style}>{descripcion}</p>
                <i></i>
            </section>
        </li>
    );
}
 
export default Tarea;