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