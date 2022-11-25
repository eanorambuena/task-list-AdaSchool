import React from 'react'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button className = "nav-item" onClick = {() => navigate("/")}>Home</button>
      <button className = "nav-item" onClick = {() => navigate("/sobre-nosotros")}>Sobre nosotros</button>
      <button className = "nav-item" onClick = {() => navigate("/tareas")}>Lista de tareas</button>
    </nav>
  )
}

export default Menu