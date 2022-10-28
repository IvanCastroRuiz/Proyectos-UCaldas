import React from 'react'

const Header = ({count}) => {

  return (
    <header>
        <h1 className="titulo">Sistema Administracion de Productos <span>Desarrollo WEB</span></h1>

        <h3>Visitante # {count}</h3>
    </header>
  )
}

export default Header