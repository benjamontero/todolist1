import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';


function App() {
  const [tareas, setTareas] = useState([]);

  const actualizarTareas = (tarea) => {
    setTareas([...tareas, tarea])
   };
  return (
    <div className="App">
      <p>
        Todo List
        </p>
      <Form actualizarTareas={actualizarTareas}/>
      <List tareas={tareas} /> 
    </div>
  );
}

export default App;
