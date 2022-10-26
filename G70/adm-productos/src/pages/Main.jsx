import { useState } from 'react';

import Alerta from '../components/Alerta';

const Main = () => {

  const [ nombre, setNombre ] = useState("");
  const [ telefono, setTelefono ] = useState("");
  const [ correo, setCorreo ] = useState("");
  const [ mensaje, setMensaje ] = useState("");

  const [ alerta, setAlerta] = useState({});

  const [ contactos, setContactos] = useState(
      localStorage.getItem("contactos") 
      ? 
        JSON.parse(localStorage.getItem("contactos")) 
      : 
        []
  );

  const sincronizarLocalStorage = (contactos) =>{
    console.log(contactos);
    setContactos(contactos.push({
        nombre,
        telefono,
        correo,
        mensaje
      }));

    localStorage.setItem('contactos', JSON.stringify(contactos));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if([nombre,telefono,correo,mensaje].includes("")){
      setAlerta({
        msg : "Todos los campos son obligatorios",
        error : true
      })  
      return;
    };

    // Paso la validacion
    setAlerta({
      msg : "Informacion enviada de manera exitosa"
    });

    sincronizarLocalStorage(contactos);

  };
  
  const { msg } = alerta;

  return (
    <main className="contenedor sombra">
        <section id="form-contacto">   
          <form 
            id='form-contacto'
            className="formulario"
            onSubmit={handleSubmit}
          >
            <fieldset>
              <legend>Contactenos llenado todos los campos</legend>
              <div className="contenedor-campos">
                <div className="campos">
                  <label>Nombre</label>
                  <input 
                    id="nombre" 
                    name="nombre" 
                    type="text" 
                    placeholder="Tu nombre" 
                    className="input-text" 
                    value={nombre}
                    onChange={e => setNombre(e.target.value) }
                  />
                </div>
                <div className="campos">
                  <label>Telefono</label>
                  <input 
                    id="telefono" 
                    type="tel" 
                    placeholder="Tu telefono" 
                    className="input-text" 
                    value={telefono}
                    onChange={e => setTelefono(e.target.value) }
                  />
                </div>
                <div className="campos">
                  <label>Correo</label>
                  <input 
                    id="correo" 
                    type="email" 
                    placeholder="Tu Email" 
                    className="input-text" 
                    value={correo}
                    onChange={e => setCorreo(e.target.value) }
                  />
                </div>
                <div className="campos">
                  <label>Mensaje</label>
                  <textarea 
                    id="mensaje" 
                    name="mensaje" 
                    className="input-text" 
                    placeholder="Tu mensaje" 
                    value={mensaje}
                    onChange={e => setMensaje(e.target.value) }
                  />
                </div>
              </div> 

              {/* Operadores ternarios */}

              {/* si(exp) entonces */}
              {/* la intruccion */}
              {/* fin si */}
              {
                msg && <Alerta
                          alerta={alerta}
                          setAlerta={setAlerta}  
                        />
              }

              {/* Spinner */}
              <div id="contenedor-spinner">
              </div>
              {/* Fin Spinner */}
              <div className="alinear-derecha flex">
                <input className="boton w-100" type="submit" defaultValue="Enviar" />
              </div>
            </fieldset>
            {/*  */}
          </form>
        </section>
    </main>
  )
}

export default Main