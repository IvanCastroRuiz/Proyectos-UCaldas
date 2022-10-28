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
import DetalleArticulo from './page/DetalleArticulo';

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
          <Route path="detalle-articulo/:id" element={<DetalleArticulo/>}/>
        </Route>
      </Routes>    
      {/* Rutas Protegidas */}
    </BrowserRouter>
  )
}

export default App
