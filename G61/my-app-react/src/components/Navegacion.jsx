import React from 'react'

const Navegacion = () => {
  return (
    <>
        {/* <!--configuracion de la barra de navegacion--> */}
        <div className="nav-bg">
            <nav className="navegacion-principal contenedor">
                <a href="index.html">Inicio</a>
                <a id="lista-contacto" href="#">Lista Contactos</a>
            </nav>
        </div>
    </>
  )
}

export default Navegacion