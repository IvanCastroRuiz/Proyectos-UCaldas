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

        if (req.files.image) {

            const result = await uploadImage(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath);

            image = {
                url: result.secure_url,
                public_id: result.public_id,
            };

            console.log(result);
        }

        const Newproducto = new Producto({ nombre, description, precio, image, stock });
        await Newproducto.save();

        return res.json(Newproducto);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
};

const getProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.send(productos);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
};

const updateProductos = async (req, res) => {
    try {

        const updatedProduct = await Producto.findByIdAndUpdate(req.params.id,
            req.body,
            {
                new: true,
            }
        );

        return res.send(updatedProduct);
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export {
    prueba,
    createProductos,
    getProductos,
    updateProductos
};