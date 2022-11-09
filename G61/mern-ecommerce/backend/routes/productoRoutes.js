import express from 'express';
import {
    prueba,
    // deleteProductos,
    // getProducto,
    getProductos,
    createProductos,
    updateProductos
} from '../controllers/productoController.js';

const router = express.Router();

// Rutas Publicas
router.get('/prueba', prueba);

// Rutas Gestión Producto
router.post('/producto', createProductos);
router.get('/productos', getProductos);
// router.get('/productos/:id', getProducto);
router.put('/productos/:id', updateProductos);
// router.delete('/productos/:id', deleteProductos);


export default router;