import { useState } from 'react';
import { ChakraProvider, Grid, Checkbox, Heading } from '@chakra-ui/react';

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
            <ChakraProvider>
                <Grid m={6} gridTemplateColumns="95fr 5fr" gap={3}
                    p={5} pr={0} shadow="md" borderWidth="1px" borderRadius="md"
                    backgroundColor="#282c34" color="whitesmoke">
                    <Heading as="h2" size="md" style={style}>{nombre}</Heading>
                    <Checkbox checked = {checked} onChange={handleChange}/>
                    <p className="nombre_tarea" style={style}>{descripcion}</p>
                    <i></i>
                </Grid>
            </ChakraProvider>
        </li>
    );
}
 
export default Tarea;