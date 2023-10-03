import logo from "./logo.svg";
import "./App.css";
import Usuario from "./components/usuario/Usuario";

import ListaDeTareas from "./components/tareas/ListaDeTareas";

import Contador from "./components/Contador/contador";
import { useState } from "react";
import Saludo from './components/Saludo/Saludo';

function App() {
  const [mensaje, setMensaje] = useState ('');

  const handleChange = (e) => 
  {
    setMensaje(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Usuario  nombre ="Ezequiel"/> */}
        {/*<ListaDeTareas/> */}
        {/*<Contador/> */}
        <input
          type='text'
          placeholder="Ingrese un mensaje"
          value={mensaje}
          onChange= {handleChange}/>
        <saludo mensaje={mensaje}/>
      </header>
    </div>
  ); 
}

export default App;
