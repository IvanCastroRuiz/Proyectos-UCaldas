import express from 'express';
import { 
       home,
       saludo,
       ladoCuadrado,
       contacto 
} from '../controllers/indexController.js';

const router = express.Router();

router.get('/', home);
router.get('/saludo', saludo);
router.get('/lado-cuadrado/:numero', ladoCuadrado);
router.get('/contacto', contacto);


export default router; 