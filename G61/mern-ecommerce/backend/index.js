// https://expressjs.com/es/
import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js';

const PORT = process.env.PORT || 4000;

dotenv.config();

// Se le agrega toda la funcionalidad del servidor de express
const app = express();

app.use(express.json());

conectarDB();

// middlewares
// Se utiliza para realizar la comunicacion entre el servidor del frontend y el backendconst dominiosPermitidos = [process.env.FRONTEND_URL];
/*const corsOptions = {
    origin: function (origin, callback) {
        if (dominiosPermitidos.indexOf(origin) !== -1) {
            // El origen del Request esta permitido
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    }
};
app.use(cors(corsOptions));*/

app.use('/api/usuarios', usuarioRoutes);

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT} `);
});