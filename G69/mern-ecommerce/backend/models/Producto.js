import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
    nombre: {
        type: 'string',
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    },
    image: {
        url: String,
        public_id: String,
    },
    stock: {
        type: Number,
        required: true,
        trim: true
    }
})

const Producto = mongoose.model('Producto', productoSchema);
export default Producto;