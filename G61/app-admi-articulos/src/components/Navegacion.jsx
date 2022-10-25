import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <>
        {/* <!--configuracion de la barra de navegacion--> */}
        <div className="nav-bg">
            <nav className="navegacion-principal contenedor">
                <Link to="/">Inicio</Link>
                <Link to="contacto">Contactanos</Link>
                <Link to="lista-articulo">Lista Articulos</Link>
            </nav>
        </div>
    </>
  )
}

export default Navegacion