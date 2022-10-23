import { Outlet } from "react-router-dom";

// components
import Header from '../components/Header';
import Navegacion from '../components/Navegacion';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
      <Header/>
      <Navegacion/>
      {/* Cambia segun la navegacion */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout