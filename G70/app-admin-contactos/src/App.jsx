// Styles
import '../src/assets/css/styles.css';
import '../src/assets/css/normalize.css';
import '../src/assets/css/App.css'


// components
import Header from './components/Header';
import Navegacion from './components/Navegacion';
import Vite from './components/Vite';

function App() {
  

  return (
    // <> Fragment lo utilizamos para agrupar varias etiquetas HTML no ve en el navegador  
    <>
      <Header/>

      <Navegacion/>

      <Vite/>
      
    </>
  )
}

export default App