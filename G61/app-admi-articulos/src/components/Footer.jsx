import React from 'react'

const Footer = ({reactLogo}) => {


  return (
    <footer className="fooster">
        
        <div>
            <div>
                <p>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src="/vite.svg" className="logo" alt="Vite logo" />
                    </a>
                    Todos los derechos reservados
         
                    <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                    </a> 
                </p>
            </div>

        </div>

    </footer>
  )
}

export default Footer