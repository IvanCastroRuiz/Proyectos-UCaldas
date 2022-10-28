import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';

import { useState } from 'react';

// components Layout
import LayoutPublic from './Layout/LayoutPublic';

// pages
import Home from './pages/Home';
import Vite from './pages/Vite';
import Main from './pages/Main';
import ListaProductos from './pages/ListaProductos';
import DetalleArticulo from './pages/DetalleArticulo';

// Styles
import './assets/css/App.css';
// import './assets/css/index.css';
import './assets/css/normalize.css';
import './assets/css/styles.css';
import reactLogo from './assets/react.svg';

function App() {

  // Hooks - vite
  //,estado,setEstado
  const [count, setCount] = useState(0);
  const [estado,setEstado] = useState(false);

  return (
    <BrowserRouter>
      {/* Rutas Publicas */}
      <Routes>
        <Route exact path="/" element={<LayoutPublic
                                        reactLogo={reactLogo}  
                                      />}>
          <Route path="/" element={<Home/>}/>
          <Route path="vite" element={<Vite
                                        count={count}
                                        setCount={setCount}
                                        estado={estado}
                                        setEstado={setEstado}
                                    />}/>
          <Route path="contacto" element={<Main/>}/>
          <Route path="lista-articulo" element={<ListaProductos/>}/>
          <Route path="detalle-articulo/:id" element={<DetalleArticulo/>}/>
        </Route>
      </Routes>  
      {/* Rutas Protegidas */}

    </BrowserRouter>    
  )
}

export default App
