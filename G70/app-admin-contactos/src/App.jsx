import { useState } from 'react'
// Styles
import '../src/assets/css/styles.css';
import '../src/assets/css/normalize.css';
import '../src/assets/css/App.css'

// components
import Header from './components/Header';
import Navegacion from './components/Navegacion';
import Vite from './components/Vite';

function App() {

  const [count, setCount] = useState(0);  

  return (
    // <> Fragment lo utilizamos para agrupar varias etiquetas HTML no ve en el navegador  
    <>
      <Header
        count={count}
      />

      <Navegacion/>

      <Vite
        count={count}
        setCount={setCount}
      />
      
    </>
  )
}

export default App