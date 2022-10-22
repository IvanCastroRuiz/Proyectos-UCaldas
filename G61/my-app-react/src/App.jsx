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
import Footer from './components/Footer';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">

      {/* Header */}

      {/* props - Pasar informacion de componentes padres a hijos */}
      <Header
         count={count} 
         setCount={setCount}
      />   

      <Navegacion/>   

      <Main/> 

      <Footer
        reactLogo={reactLogo}      
      />

    </div>
  )
}

export default App
