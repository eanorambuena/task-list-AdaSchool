import './App.css';
import Header from './components/Header';
import ListaTareas from './components/ListaTareas';
import TaskListProvider from './components/TaskListProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <TaskListProvider>
        <ListaTareas></ListaTareas>
      </TaskListProvider>
    </div>
  );
}

export default App;