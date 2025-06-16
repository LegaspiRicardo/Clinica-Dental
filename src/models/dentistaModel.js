const pool = require('../config/db');

const getAllDentistas = async () => {
    const [rows] = await pool.query('SELECT * FROM dentistas');
    return rows;
};


const getDentistaById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM dentistas WHERE id = ?' , [id]);
    return rows [0];
};


const createDentista = async (dentista) => {
    const{ nombre, especialidad, status, email, password } = dentista;
    const [result] = await pool.query('INSERT INTO dentistas (nombre, especialidad, status, email, password) VALUES (?, ?, ?, ?, ?)', [nombre, especialidad, status, email, password]);
    return {id: result.insertId, nombre, especialidad, status, email, password};
};


const updateDentista = async (id, dentista) => {
    const{ nombre, especialidad, status, email, password} = dentista;
    await pool.query('UPDATE dentistas SET nombre = ?, especialidad = ?, status = ?, email = ?, password = ? WHERE id = ?', [nombre, especialidad, status, email, password]);
    return {id, nombre, especialidad, status, email, password};
};


const deleteDentista = async (id) => {
    await pool.query('DELETE FROM dentistas WHERE id = ?', [id]);
    return {id};
};

module.exports ={
    getAllDentistas,
    getDentistaById,
    createDentista,
    updateDentista,
    deleteDentista
};