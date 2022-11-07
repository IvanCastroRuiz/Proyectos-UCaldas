import express from 'express';
import {
    prueba,
    registrar,
    confirmar
} from '../controllers/usuarioController.js';

const router = express.Router();

// Rutas Publicas
router.get('/prueba', prueba);
router.post('/', registrar );
router.get('/confirmar/:token', confirmar);

export default router;