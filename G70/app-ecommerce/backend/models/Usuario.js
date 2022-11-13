import mongoose from 'mongoose';
//https://www.npmjs.com/package/bcryptjs
//https://www.npmjs.com/package/bcrypt
import bcrypt from 'bcrypt';
import generarId from '../helper/generarId.js';

const usuarioShema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        default: null,
        trim: true,
    },
    direccion: {
        type: String,
        default: null,
        trim: true,
    },
    web: {
        type: String,
        default: null,
        trim: true,
    },
    token: {
        type: String,
        default: generarId(),
    },
    confirmado: {
        type: Boolean,
        default: false,
    },
    rol: {
        type: String,
        default: null,
        trim: true,
    }
});
// Antes de guardar el usuario Hashear el password
// https://www.npmjs.com/package/bcryptjs
// https://www.npmjs.com/package/bcrypt
usuarioShema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    };
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
// Confirmar password del usuario, esta funcion devuelve verdadero o falso
usuarioShema.methods.comprobarPassword = async function (passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password);
};


const Usuario = mongoose.model('Usuario', usuarioShema);

export default Usuario;