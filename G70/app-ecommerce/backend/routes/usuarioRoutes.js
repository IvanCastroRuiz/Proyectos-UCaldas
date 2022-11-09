import express from 'express';
import {
    prueba
} from '../controllers/usuarioController.js';

const router = express.Router();

// Rutas Publicas
router.get('/prueba', prueba);


export default router;