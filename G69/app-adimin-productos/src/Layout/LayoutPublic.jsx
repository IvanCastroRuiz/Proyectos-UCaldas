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

        <Outlet/>

      <Footer
        reactLogo={reactLogo}
      />

    </>
  )
}

export default LayoutPublic