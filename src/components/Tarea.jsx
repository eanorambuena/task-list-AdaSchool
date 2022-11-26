import { useState } from 'react';
import { ChakraProvider, Grid, Checkbox, Heading, Button } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

import useEditTask from "../hooks/useEditTask";
import useDeleteTask from "../hooks/useDeleteTask";

const Tarea = ({taskKey, nombre, completada, descripcion}) => {
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

    const editTaskToggle = useEditTask();
    const deleteTaskToggle = useDeleteTask();

    const editTask = () => {
        let newTaskName = prompt("Ingrese el nuevo nombre de la tarea");
        let newTaskDescription = prompt("Ingrese la nueva descripción de la tarea");
        editTaskToggle(taskKey, newTaskName, newTaskDescription);
    };

    const deleteTask = () => {
        deleteTaskToggle(taskKey);
    };

    return (
        <li>
            <ChakraProvider>
                <Grid m={6} gridTemplateColumns="95fr 5fr" gap={3}
                    p={5} pr={0} shadow="md" borderWidth="1px" borderRadius="md"
                    backgroundColor="#282c34" color="whitesmoke">
                    <Heading as="h2" size="md" style={style}>{nombre}</Heading>
                    <Checkbox w={6} h={6} checked = {checked} onChange={handleChange}/>
                    <p className="nombre_tarea" style={style}>{descripcion}</p>
                    
                    <Button variant="ghost" maxW={5} h={5}
                        _hover="none" _active="none" onClick={editTask}>
                        <EditIcon w={5} h={5} mr={5} color="whitesmoke"/>
                    </Button>
                    <p></p>
                    <Button variant="ghost" maxW={5} h={5}
                        _hover="none" _active="none" onClick={deleteTask}>
                        <DeleteIcon w={5} h={5} mr={5} color="whitesmoke"/>
                    </Button>
                </Grid>
            </ChakraProvider>
        </li>
    );
}
 
export default Tarea;