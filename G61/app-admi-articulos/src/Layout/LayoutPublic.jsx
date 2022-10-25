import { Outlet }  from 'react-router-dom';
import { useState }  from 'react';

// components
import Header from '../components/Header';
import Navegacion from '../components/Navegacion';
import Footer from '../components/Footer';

const LayoutPublic = ({reactLogo}) => {

  const [ count, setCount ] = useState(0);

  return (
    <>
        <Header
          count={count}
          setCount={setCount}
        />
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