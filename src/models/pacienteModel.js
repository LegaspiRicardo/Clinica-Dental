const pool = require('../config/db');

const getAllPacientes = async () => {
    const [rows] = await pool.query('SELECT * FROM pacientes');
    return rows;
};


const getPacienteById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM pacientes WHERE id = ?' , [id]);
    return rows [0];
};


const createPaciente = async (paciente) => {
    const{ email, password, nombre, apellidos  } = paciente;
    const [result] = await pool.query('INSERT INTO pacientes (email, password, nombre, apellidos) VALUES (?, ?, ?, ?)', [email, password, nombre, apellidos]);
    return {id: result.insertId, email, password, nombre, apellidos};
};


const updatePaciente = async (id, paciente) => {
    const{ email, password, nombre, apellidos} = paciente;
    await pool.query('UPDATE pacientes SET email = ?, password = ? , nombre = ?, apellidos = ? WHERE id = ?', [email, password, nombre, apellidos, id]);
    return {id, email, password, nombre, apellidos};
};


const deletePaciente = async (id) => {
    await pool.query('DELETE FROM pacientes WHERE id = ?', [id]);
    return {id};
};

module.exports ={
    getAllPacientes,
    getPacienteById,
    createPaciente,
    updatePaciente,
    deletePaciente
};