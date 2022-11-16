import express from 'express';
import {
    prueba,
    createVentas,
    getVenta
} from '../controllers/ventaController.js'; 

const router = express.Router(); 

// Rutas Publicas
router.get('/prueba', prueba);


// Rutas Gestion Ventas
router.post('/create', createVentas);
router.get('/get/:id', getVenta);


export default router;