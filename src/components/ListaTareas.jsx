import { useCallback } from 'react';
import { useForm } from "react-hook-form";


import useTaskList from "../hooks/useTaskList";
import Tarea from "./Tarea";

const ListaTareas = () => {
    const [taskList, setTaskName, toggle] = useTaskList();
    const { register, handleSubmit } = useForm();

    const onSubmit = useCallback(
        (data) => {
            const taskName = data["taskName"];
            const taskDescription = data["taskDescription"];  
            setTaskName(taskName, taskDescription);
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("taskName", { required: true, minLength: 3 })} />
                <input {...register("taskDescription")} />
                <input type="submit" value="Setear tarea" />
            </form>
            <ul>
                {taskList.map(({ name, completed, description }, index) => (
                    <Tarea key = {index} nombre = {name} descripcion = {description}
                        completada = {completed} toggleHandler = {handleToggleTask}/>
                ))}
            </ul>
        </div>
    );
}
 
export default ListaTareas;