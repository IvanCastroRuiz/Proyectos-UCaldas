import { 
        BrowserRouter, 
        Routes, 
        Route 
} from 'react-router-dom';

// component Layout
import LayoutPublic from './Layout/LayoutPublic';

// Page
import Home from './page/Home';
import Formulario from './page/Formulario';
import ListaArticulos from './page/ListaArticulos';

// Styles
import './assets/css/styles.css';
import './assets/css/normalize.css';
import './assets/css/App.css';
import reactLogo from './assets/react.svg';


function App() {
  return (
    <BrowserRouter>
      {/* Rutas Publicas */}
      <Routes>
        <Route path="/" element={<LayoutPublic 
                                    reactLogo={reactLogo} 
                                />}>
          <Route index element={<Home/>}/>
          <Route path="contacto" element={<Formulario/>}/>
          <Route path="lista-articulo" element={<ListaArticulos/>}/>
          {/* <Route path="articulo:id" element={<EditarArticulo/>}/> */}
        </Route>
      </Routes>    
    </BrowserRouter>
  )
}

export default App
