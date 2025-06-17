const servicioModel = require ('../models/servicioModel');

const getServicios = async (req, res) => {
    const servicios = await servicioModel.getAllServicios();
    res.json(servicios);
};


const getServicio = async (req, res) => {
    const servicio = await servicioModel.getServicioById(req.params.id);
    res.json(servicio)
};



const createServicio = async (req, res) => {
    const newServicio = await servicioModel.createServicio(req.body);
    res.status(201).json(newServicio);
};




const updateServicio = async (req, res) => {
    const updateServicio = await servicioModel.updateServicio(req.params.id, req.body);
    res.json(updateServicio);
};


const deleteServicio = async (req, res) => {
    const deleteServicio = await servicioModel.deleteServicio(req.params.id);
    res.json(deleteServicio);
};


module.exports = {
    getServicios,
    getServicio,
    createServicio,
    updateServicio,
    deleteServicio
};