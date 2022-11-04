

//Middleware 
// req: peticion - informacion que recibimos
// res: respuesta 
const home = (req, res) =>{
    res.json({
        mensaje:"Hola Mundo ExpressJS"
    });
};

const saludo = (req, res) =>{
    res.json({
        mensaje:"Saludando a los tipulantes del Grupo 61"
    });
};

// req: peticion - informacion que recibimos (params, body)
const tablaMulti = (req, res) =>{
    let numero = req.params;
    // console.log(numero);
    const { num } = numero;
    res.send(`La tabla del numero ${num}`);
    for (let i = 1; i < num; i++) {
        console.log(` ${i} * ${num} =  ${ i*num }`);
    };
};

const contacto = (req, res) =>{
    const contacto = req.body;
    console.log(contacto);
    return
};

export {
    home,
    saludo,
    tablaMulti,
    contacto
}