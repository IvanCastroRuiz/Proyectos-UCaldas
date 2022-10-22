import React from 'react'
import Formulario from './Formulario'; 

const Main = ({contactos,setContactos}) => {
  return (
    <main>   
        <section id="section-form">   
          <Formulario
            contactos={contactos}
            setContactos={setContactos}
          />
        </section>
    </main>
  )
}

export default Main