import './App.css';
import Header from './components/Header';
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <ListaTareas></ListaTareas>
    </div>
  );
}

export default App;
/* implementa el hook useState para controlar el listado de tareas.
Así mismo cada tarea debe tener un estado de completada o pendiente, utiliza valores booleanos.
Muestra un listado estático con algunas tareas de ejemplo.
Publica tu código en Github, en tu repositorio task-list crea un branch llamado project-2 y compártelo con nosotros. 👍🏼⬇️ */