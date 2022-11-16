import Producto from '../models/Producto.js';
import fs from 'fs-extra';
import {
    uploadImage,
    deleteImage
} from '../helper/cloudinary.js';


const prueba = (req, res) => {
    res.send({
        msg: "En esta ruta gestionaremos todas las peticiones correspondiente al modelo de Producto"
    })
};

const createProductos = async (req, res) => {
    try {
        const { nombre, description, precio, stock } = req.body; 
        let image;
        if(req.files!==null){
            if(req.files.image){

                const result = await uploadImage(req.files.image.tempFilePath); 
    
                await fs.remove(req.files.image.tempFilePath); 
                
                image = {
                    url: result.secure_url,
                    public_id: result.public_id,
                };
    
                console.log(result);
            }
        }
        
        const Newproducto = new Producto({ nombre, description, precio, image, stock });

        await Newproducto.save();

        return res.json(Newproducto);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
};

const getProductos = async (req, res) => { };
const getProducto = async (req, res) => { };
const deleteProductos = async (req, res) => { };
const updateProductos = async (req, res) => { };


export {
    prueba,
    deleteProductos,
    getProducto,
    getProductos,
    createProductos,
    updateProductos
};