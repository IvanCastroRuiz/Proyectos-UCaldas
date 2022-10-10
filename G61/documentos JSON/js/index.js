console.log("Starting");


// Objeto literal
// const contacto = {
//     "nombre": "Ivan Castro Ruiz",
//     "dirreccion": "Via a la Playa - Puerto Colombia",
//     "telefonos": [
//          {"personal": 3003162985},
//          {"laboral": 3611545}
//      ],
//     "estadocivil": true
//  };

// Bloque Funciones
// Funciones Asyncronas
const leeArchivo = async () => {

    try {
        const contactoCadena = await fetch("./contacto.json");
        const archivojson = await contactoCadena.json();
        console.log(archivojson);
        console.log(archivojson.contacto.nombre);
        console.log(archivojson.contacto["telefonos"]);
        // /// Archivo de txt
        // const respuesta = await fetch("./text.txt");
        // const resultato = await respuesta.text();
        // console.log(resultato);
    } catch (error) {
        console.error(error.message);
    }

};


// Bloque Principal
leeArchivo();