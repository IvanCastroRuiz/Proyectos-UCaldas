import express from 'express';
import {
    prueba,
    createVentas,
    getVenta,
    getVentas,
    updateVenta
} from '../controllers/ventaController.js'; 

const router = express.Router(); 

// Rutas Publicas
router.get('/prueba', prueba);


// Rutas Gestion Ventas
router.post('/create', createVentas);
router.get('/get/:id', getVenta);
router.get('/get', getVentas);
router.put('/update/:id', updateVenta);


export default router;