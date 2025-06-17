const pagoModel = require ('../models/pagoModel');

const getPagos = async (req, res) => {
    const pagos = await pagoModel.getAllPagos();
    res.json(pagos);
};


const getPago = async (req, res) => {
    const pago = await pagoModel.getPagoById(req.params.id);
    res.json(pago)
};



const createPago = async (req, res) => {
    const newPago = await pagoModel.createPago(req.body);
    res.status(201).json(newPago);
};




const updatePago = async (req, res) => {
    const updatePago = await pagoModel.updatePago(req.params.id, req.body);
    res.json(updatePago);
};


const deletePago = async (req, res) => {
    const deletePago = await pagoModel.deletePago(req.params.id);
    res.json(deletePago);
};


module.exports = {
    getPagos,
    getPago,
    createPago,
    updatePago,
    deletePago
};