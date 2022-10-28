import React from 'react'

const Header = ({count, setCount}) => {

  const handleClick = () => {
    setCount(count => count+1);
  };

  return (
    <> 
      <header>
        <h1 className="titulo">
          Administracion Productos <span>Desarrollo WEB</span>
          <div>
            <span>Universidad de Caldas</span>
          </div>
        <div>
          <div>
            <button
              className="boton w-100" 
              onClick={handleClick}
            >
                Haz Click
            </button>
          </div>

          Visitante # {count}
        </div>
        </h1>
      </header>
    </>
  )
}

export default Header