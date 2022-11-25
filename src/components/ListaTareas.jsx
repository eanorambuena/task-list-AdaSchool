import { useCallback } from 'react';


import useTaskList from "../hooks/useTaskList";
import Tarea from "./Tarea";

const ListaTareas = () => {
    const [taskList, setTaskName, toggle] = useTaskList();

    const handleSubmit = useCallback(
        (event) => {
          const { target } = event;
          event.preventDefault();
          const value = new FormData(target).get("taskName");
          setTaskName(value);
          target.reset();
        },
        [setTaskName]
      );
    
    const handleToggleTask = useCallback(
    (event) => {
        const {
        target: { name }
        } = event;
        toggle(Number(name));
    },
    [toggle]
    );
    
    return (
        <div className="container main">
            <form onSubmit={handleSubmit}>
                <input type="text" name="taskName" required />
                <input type="submit" value="Setear tarea" />
            </form>
            <ul>
                {taskList.map(({ name, completed }, index) => (
                    <Tarea key = {index} nombre = {name} completada = {completed} toggleHandler = {handleToggleTask}/>
                ))}
            </ul>
        </div>
    );
}
 
export default ListaTareas;