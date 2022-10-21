import React from 'react'

const Main = () => {
  return (
    <main main-edicion className="contenedor sombra">
        <section id="form-contacto">   
          <form action className="formulario">
            <fieldset>
              <legend>Contactenos llenado todos los campos</legend>
              <div className="contenedor-campos">
                <div className="campos">
                  <label>Nombre</label>
                  <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" className="input-text" />
                </div>
                <div className="campos">
                  <label>Telefono</label>
                  <input id="telefono" type="tel" placeholder="Tu telefono" className="input-text" />
                </div>
                <div className="campos">
                  <label>Correo</label>
                  <input id="correo" type="email" placeholder="Tu Email" className="input-text" />
                </div>
                <div className="campos">
                  <label>Mensaje</label>
                  <textarea id="mensaje" name="mensaje" className="input-text" placeholder="Tu mensaje" defaultValue={""} />
                </div>
              </div> 
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