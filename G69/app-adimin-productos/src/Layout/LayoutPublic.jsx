import { Outlet  } from 'react-router-dom';

// Componentes
import Header from '../components/Header';
import Navegacion from '../components/Navegacion';
import Footer from '../components/Footer';

const LayoutPublic = ({reactLogo}) => {
  return (
    <>
      <Header/>
      <Navegacion/>
      <main className="contenedor sombra">
        <Outlet/>
      </main>  
      <Footer
        reactLogo={reactLogo}
      />
    </>
  )
}

export default LayoutPublic