import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Layout (LayoutAuth)
import LayoutAuth from './Layout/LayoutAuth'

// pages (usuarios)
import Login from './pages/Login'
import Registro from './pages/usuario/Registro'
import OlvidePassword from './pages/usuario/OlvidePassword'
import Confirmar from './pages/usuario/Confirmar'


function App() {

  return (
    <Router>
      <Routes>
        {/* RUTAS PUBLICAS */}
        <Route path='/' element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path='registro' element={<Registro />} />
          <Route path='olvide-password' element={<OlvidePassword />} />
          <Route path='confirmar/:id' element={<Confirmar />} />
        </Route>



      </Routes>
    </Router>    
  )
}

export default App
