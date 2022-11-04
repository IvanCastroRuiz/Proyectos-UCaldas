import express from 'express';
import routes from './routes/routes.js';

const PORT = 4000;

const app = express();

// Definimos el enrutador
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Servidor inicializado en el puerto ${PORT}`);
});