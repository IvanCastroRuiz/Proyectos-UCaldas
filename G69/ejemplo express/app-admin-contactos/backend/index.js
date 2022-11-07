import express from 'express';
import routes from './routes/routes.js';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`El Servidor esta inicializado en el puerto ${PORT}`);
});