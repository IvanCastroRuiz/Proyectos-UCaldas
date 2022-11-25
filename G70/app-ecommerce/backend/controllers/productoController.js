import Producto from "../models/Producto.js";
import fs from "fs-extra";
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
            if (req.files.image) {
                const result = await uploadImage(req.files.image.tempFilePath);
                await fs.remove(req.files.image.tempFilePath);
    
                image = {
                    url: result.secure_url,
                    public_id: result.public_id,
                };
                
                //console.log(result);
            }
        }else{
            image = {
                url: "https://res.cloudinary.com/dgi1aoxog/image/upload/v1668981098/productos/productoblacoynegro_ty6jw2.jpg",
                public_id: "productos/productoblacoynegro_ty6jw2",
            };
        }
        

        const Newproducto = new Producto({ nombre, description, precio, image, stock });
        await Newproducto.save();

        return res.json(Newproducto);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
};

const getProducto = async (req, res) => {
    try {
        const OneProduct = await Producto.findById(req.params.id);

        if (!OneProduct) {
            return res.sendStatus(404);
        } else {
            return res.json(OneProduct);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
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
    const { id, nombre, description, precio, stock } = req.body;

    try {
        const updateProducto = await Producto.findById(id);
        //console.log(updateProducto);

        updateProducto.nombre = nombre;
        updateProducto.description = description;
        updateProducto.precio = precio;
        updateProducto.stock = stock;

        if(req.files!==null){
            if (req.files.image) {

                if (updateProducto.image.public_id && updateProducto.image.public_id !== "productos/productoblacoynegro_ty6jw2") {
                    await deleteImage(updateProducto.image.public_id);
                }
    
                const result = await uploadImage(req.files.image.tempFilePath);

                await fs.remove(req.files.image.tempFilePath);
                
                updateProducto.image = {
                    url: result.secure_url,
                    public_id: result.public_id,
                }; 
            }else{
                updateProducto.image = {
                    url: "https://res.cloudinary.com/dgi1aoxog/image/upload/v1668981098/productos/productoblacoynegro_ty6jw2.jpg",
                    public_id: "productos/productoblacoynegro_ty6jw2",
                };
            }
        }else{
            if (!updateProducto.image.public_id){
                updateProducto.image = {
                    url: "https://res.cloudinary.com/dgi1aoxog/image/upload/v1668981098/productos/productoblacoynegro_ty6jw2.jpg",
                    public_id: "productos/productoblacoynegro_ty6jw2",
                };
            }
            
        }

        await updateProducto.save();
        return res.status(204).json(updateProducto);
        
    } catch (error) {
        console.log(error.message);  
    }
};

const deleteProductos = async (req, res) => {
    try {
        const productRemoved = await Producto.findByIdAndDelete(req.params.id);

        if (!productRemoved) {
            // const error = new Error("Token no valido");
            return res.sendStatus(404);
        } else {

            if (productRemoved.image.public_id && productRemoved.image.public_id !== "productos/productoblacoynegro_ty6jw2") {
                await deleteImage(productRemoved.image.public_id);
            }

            // return res.sendStatus(204);
            return res.status(200).json({ msg: "Producto Eliminado correctamente" });    
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



export {
    prueba,
    getProductos,
    createProductos,
    updateProductos,
    deleteProductos,
    getProducto
};