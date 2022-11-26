import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, ChakraProvider } from '@chakra-ui/react';

const Menu = () => {
  const navigate = useNavigate();
  return (
    <ChakraProvider>
      <nav>
        <Button className = "nav-item" onClick = {() => navigate("/")}
          variant="ghost" color="#282c34">
          Home
        </Button>
        <Button className = "nav-item" onClick = {() => navigate("/sobre-nosotros")}
          variant="ghost" color="#282c34">
          Sobre nosotros
        </Button>
        <Button className = "nav-item" onClick = {() => navigate("/tareas")}
          variant="ghost" color="#282c34">
          Lista de tareas
        </Button>
      </nav>
    </ChakraProvider>
  )
}

export default Menu