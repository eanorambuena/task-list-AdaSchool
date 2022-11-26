import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Menu from './components/Menu';
import Protected from './components/Protected';
const Home = React.lazy(() => import('./pages/Home'));
const SobreNosotros = React.lazy(() => import('./pages/SobreNosotros'));
const Tareas = React.lazy(() => import('./pages/Tareas'));

function App() {
  const loadingElement = <div>Cargando...</div>

  return (
    <Router>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={loadingElement}><Home /></Suspense>} />
        <Route path = "/sobre-nosotros" element={
          <Suspense fallback={loadingElement}><SobreNosotros /></Suspense>} />
        <Route path = "/tareas" element={
          <Protected element={
            <Suspense fallback={loadingElement}>
              <Tareas/>
            </Suspense>
          }/>
        }/>
      </Routes>
    </Router>
  );
}

export default App;