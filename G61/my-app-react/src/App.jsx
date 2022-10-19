import { useState } from 'react';
import reactLogo from './assets/react.svg';
// Estilos
//import './App.css';
import './assets/css/styles.css';
import './assets/css/normalize.css';
// Componentes
import Header from './components/Header';
import Navegacion from './components/Navegacion';
import Main from './components/Main';

function App() {

  const saludo = "Aprendiendo ReactJS";

  return (
    <div className="App">

      {/* Header */}

      {/* props - Pasar informacion de componentes padres a hijos */}
      <Header
         saludo={saludo} 
      />   

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> 

      <Navegacion/>   

      <Main/> 

    </div>
  )
}

export default App
