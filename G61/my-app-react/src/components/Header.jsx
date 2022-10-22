import React from 'react'

const Header = ({count, setCount}) => {

  const handleClick = () => {
    setCount(count => count+1);
  };

  return (
    <> 
      <header>
        <h1 className="titulo">UCaldas G61 <span>Desarrollo WEB</span>
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