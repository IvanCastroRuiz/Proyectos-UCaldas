import express from 'express';
import {
    prueba,
    deleteProductos,
    getProducto,
    getProductos,
    createProductos,
    updateProductos
} from '../controllers/productoController.js';

const router = express.Router();

// Rutas Publicas
router.get('/prueba', prueba);

// Rutas Gestión Producto
router.post('/create', createProductos);
router.get('/get', getProductos);
router.get('/get/:id', getProducto);
router.put('/update/:id', updateProductos);
router.delete('/productos/:id', deleteProductos);


export default router;