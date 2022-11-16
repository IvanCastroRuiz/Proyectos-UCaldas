import Venta from '../models/Venta.js'

const prueba = (req, res) => {
    res.send({
        msg: "En esta ruta gestionaremos todas las peticiones correspondiente al modelo de Venta"
    })
};

const createVentas = async (req, res) => {
    try {

        const venta = new Venta(req.body);

        const ventaGuardado = await venta.save();

        res.json(ventaGuardado);

    } catch (error) {
        console.error(error.message);
    }
};

const getVenta = async (req, res) => {
    try {
        const OneVenta = await Venta.findById(req.params.id);
        
        if (!OneVenta) {
            return res.sendStatus(404);
        } else {
            return res.json(OneVenta);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



export {
    prueba,
    createVentas,
    getVenta
};