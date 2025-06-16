const pacienteModel = require ('../models/pacienteModel');

const getPacientes = async (req, res) => {
    const pacientes = await pacienteModel.getAllPacientes();
    res.json(pacientes);
};


const getPaciente = async (req, res) => {
    const paciente = await pacienteModel.getPacienteById(req.params.id);
    res.json(paciente)
};



const createPaciente = async (req, res) => {
    const newPaciente = await pacienteModel.createPaciente(req.body);
    res.status(201).json(newPaciente);
};




const updatePaciente = async (req, res) => {
    const updatePaciente = await pacienteModel.updatePaciente(req.params.id, req.body);
    res.json(updatePaciente);
};


const deletePaciente = async (req, res) => {
    const deletePaciente = await pacienteModel.deletePaciente(req.params.id);
    res.json(deletePaciente);
};


module.exports = {
    getPacientes,
    getPaciente,
    createPaciente,
    updatePaciente,
    deletePaciente
};