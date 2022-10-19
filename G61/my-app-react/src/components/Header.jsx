import React from 'react'

const Header = ({saludo}) => {

  console.log(saludo);

  return (
    <> 
      <header>
        <h1 className="titulo">UCaldas G61 <span>Desarrollo WEB</span>
        <div>
          {saludo}
        </div>
        </h1>
      </header>
    </>
  )
}

export default Header