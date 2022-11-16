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

const getVentas = async (req, res) => {
    try {

        //const ventas = await Venta.find({estado:"cancelado"});
        const ventas = await Venta.find();

        res.send(ventas);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }

};

const updateVenta = async (req, res) => {
    try {
        
        const estadoVenta = await Venta.findById(req.params.id);

        if (estadoVenta.estado === "vigente") {
            estadoVenta.estado = "cancelada";
            await estadoVenta.save();
            res.json({
                msg: "Venta cancelada correctamente"
            });
        } else {
            res.json({
                msg: "La venta ya esta cancelada"
            });
        }
    } catch (error) {
        console.log(error.message);
    }
};

export {
    prueba,
    createVentas,
    getVenta,
    getVentas,
    updateVenta
};