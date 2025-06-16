const dentistaModel = require ('../models/dentistaModel');

const getDentistas = async (req, res) => {
    const dentistas = await dentistaModel.getAllDentistas();
    res.json(dentistas);
};


const getDentista = async (req, res) => {
    const dentista = await dentistaModel.getDentistakById(req.params.id);
    res.json(dentista)
};



const createDentista = async (req, res) => {
    const newDentista = await dentistaModel.createDentista(req.body);
    res.status(201).json(newDentista);
};




const updateDentista = async (req, res) => {
    const updateDentista = await dentistaModel.updateDentista(req.params.id, req.body);
    res.json(updateDentista);
};


const deleteDentista = async (req, res) => {
    const deleteDentista = await dentistaModel.deleteDentista(req.params.id);
    res.json(deleteDentista);
};


module.exports = {
    getDentistas,
    getDentista,
    createDentista,
    updateDentista,
    deleteDentista
};