import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

// componentes
import Header from './components/Header';
import Navegacion from './components/Navegacion';
import Main from './components/Main';
import Vite from './components/Vite';
import Footer from './components/Footer';

// Styles
import './assets/css/index.css';
import './assets/css/App.css';
import './assets/css/normalize.css';
import './assets/css/styles.css';

function App() {
  const [ contactos, setContactos ] = useState([]);
  const [count, setCount] = useState(0);
  const [estado, setEstado] = useState(false);
  let saludo = "Hola Mundo ReactJS";

  // Se lo asignamos a un avariable
  // useEffect( () =>{
  //   console.log("Cambio count de estado");
  // }, [count]);
  
  // Se lo asignamos a un components
  useEffect( () =>{
    setContactos((JSON.parse( localStorage.getItem('contactos') )) );
    console.log(contactos);
  }, []);

  return (
    <>
      <Header/>
      <Navegacion />
      <div >
        <Main 
          contactos={contactos}
          setContactos={setContactos}
          className="contenedor sombra"
        />
        <Vite
          className="contenedor sombra"
          count={count}
          setCount={setCount}
          estado={estado}
          setEstado={setEstado}   
          saludo={saludo}   
        />
      </div>
      <Footer
        reactLogo={reactLogo}
      />
    </>
  )
}

export default App
