import { NavLink } from 'react-router-dom';

const Navegacion = () => {

  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <div className="nav-bg">
        <nav className="navegacion-principal contenedor">
          <NavLink 
            to="/"
            style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            end  
          >
            Inicio
          </NavLink>
          <NavLink 
            to="vite"
            style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
          >
            Vite
          </NavLink>
          <NavLink 
            to="contacto"
            style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
          >
            Contactenos
          </NavLink>
          <NavLink 
            to="lista-articulo"
            style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
          >
            Lista Articulos
          </NavLink>
        </nav>
    </div>
  )
}

export default Navegacion