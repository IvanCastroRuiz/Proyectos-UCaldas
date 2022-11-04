

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

export {
    home,
    saludo
}