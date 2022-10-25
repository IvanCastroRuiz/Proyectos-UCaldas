import { useState } from 'react'
import Formulario from './Formulario'; 

const Main = () => {

  // Hooks
  const [ contactos, setContactos ] = useState(
    localStorage.getItem('contactos') ? JSON.parse(localStorage.getItem('contactos')) : []
  );


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