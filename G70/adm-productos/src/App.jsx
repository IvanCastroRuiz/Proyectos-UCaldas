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

// Styles
import './assets/css/normalize.css';
import './assets/css/styles.css';

function App() {
  
  return (
    <BrowserRouter>
         {/* Rutas Publicas */}
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Vite/>}/>
              <Route path='productos' element={<Main/>}/>
              <Route path='contactos' element={<Main/>}/>
            </Route>  
        </Routes>   

        {/* Rutas Protegidas */}

    </BrowserRouter>
  )
}

export default App
