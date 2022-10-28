import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

// Layout
import Layout from './Layout/Layout';

// Pages
import Main from './pages/Main';
import Vite from './pages/Vite';
import ListaProductos from './pages/ListaProductos';
import DetalleProducto from './pages/DetalleProducto';

// Styles
import '../src/assets/css/normalize.css';
import '../src/assets/css/styles.css';
import '../src/assets/css/Articulo.module.css';
import '../src/assets/css/App.css'

function App() {
  
  return (
    <BrowserRouter>
         {/* Rutas Publicas */}
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Vite/>}/>
              <Route path='productos' element={<ListaProductos/>}/>
              <Route path='contactos' element={<Main/>}/>
              <Route path='detalle-producto/:id' element={<DetalleProducto/>}/>
            </Route>  
        </Routes>   

        {/* Rutas Protegidas */}

    </BrowserRouter>
  )
}

export default App
