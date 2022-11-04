import express from 'express';
import { home,
         saludo    
       } from '../controllers/indexControllers.js';

const router = express.Router();

// Rutas iniciales
router.get('/', home);
router.get('/saludo', saludo);


export default router;