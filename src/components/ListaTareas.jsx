import { useCallback } from 'react';
import { useForm } from "react-hook-form";
import { ChakraProvider, Input, Divider, Textarea } from '@chakra-ui/react';


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
        <ChakraProvider>
            <div className="container main">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Input {...register("taskName", { required: true, minLength: 3 })} borderColor="#282c34"
                        placeholder="Nombre de la tarea" mb={3}/>
                    <Textarea {...register("taskDescription")} borderColor="#282c34"
                        placeholder="Descripción de la tarea" mb={3}/>
                    <Input type="submit" value="Setear tarea" variant="solid"
                        backgroundColor="#282c34" color="whitesmoke" mb={3}/>
                </form>
                <Divider borderColor="#282c34" mt={3} mb={3}/>
                <ul>
                    {taskList.map(({ name, completed, description }, index) => (
                        <Tarea key = {index} taskKey = {index} nombre = {name} descripcion = {description}
                            completada = {completed} toggleHandler = {handleToggleTask}/>
                    ))}
                </ul>
            </div>
        </ChakraProvider>
    );
}

export default ListaTareas;