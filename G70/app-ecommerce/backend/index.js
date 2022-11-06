import express from 'express';

const PORT  = process.env.PORT || 4000;
const app = express();

// Middleware
// req: Informacion que nos llega
// res: Respuesta nuestra
app.get('/', (req, res) => {
    res.send('Hola Mundo ExpresJS te saluda G70 UCaldas MisionTic')
    console.log("Llego una peticion -- nodemon");
});

app.listen(PORT, () => {
    console.log(`Servidor inicializado en el puerto # ${PORT}`)
});

