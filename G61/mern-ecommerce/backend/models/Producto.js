import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
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

export default mongoose.model('Producto', productoSchema);