// Middleware
// req = recibir informacion
// res = respuesta del servidor

const home = (req, res) => {
    res.send('Hola Mundo ExpressJS!');
};

const saludo = (req, res) => {
    res.json({
        mensaje: 'Saludando a los tripulantes del grupo 61!'
    });
};

// Calcular el lado del cuadrado
const ladoCuadrado = (req, res) => {
    const lado = req.params;
    const { numero } = lado

    res.json({
        mensaje: 'Calcular el area del cuadrado',
        respuesta : numero*numero
    });
};

const contacto = (req, res) =>{
    const contacto = req.body;
    console.log(contacto);
    res.json({
        msg: "Enviado con exito a la BD"
    })
};


export {
    home,
    saludo,
    ladoCuadrado,
    contacto
}