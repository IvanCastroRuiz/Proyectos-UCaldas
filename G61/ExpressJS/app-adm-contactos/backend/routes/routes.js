import express from 'express';
import { home,
         saludo,
         tablaMulti,
         contacto    
       } from '../controllers/indexControllers.js';

const router = express.Router();

// Rutas iniciales
router.get('/', home);
router.get('/saludo', saludo);
router.get('/tabla-mult/:num', tablaMulti);
router.get('/contacto', contacto);


export default router;